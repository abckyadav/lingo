import { cache } from "react";
import db from "./drizzle";
import { asc, eq } from "drizzle-orm";
import { challengeProgress, courses, units, userProgress } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany({
    orderBy: [asc(courses.id)],
  });

  return data;
});

export const getUserProgress = cache(async () => {
  const { userId } = await auth();
  console.log("userId:", userId);

  if (!userId) {
    return null;
  }

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  });

  return data;
});

export const getCourseById = cache(async (courseId: number) => {
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
    //TODO: populate units and lessons
  });

  return data;
});

export const getUnits = cache(async () => {
  const { userId } = await auth();
  const userProgress = await getUserProgress();

  if (!userId || !userProgress?.activeCourseId) {
    return [];
  }

  //TODO: confirm whether order is needed
  const data = await db.query.units.findMany({
    where: eq(units.courseId, userProgress.activeCourseId),
    with: {
      lessons: {
        with: {
          challenges: {
            with: {
              challengeProgress: {
                where: eq(challengeProgress.userId, userId),
              },
            },
          },
        },
      },
    },
  });

  const normalisedData = data.map((unit) => {
    const lessionsWithCompletedStatus = unit.lessons.map((lesson) => {
      const allCompletedChallenges = lesson.challenges.every((challenge) => {
        return (
          challenge.challengeProgress &&
          challenge.challengeProgress.length > 0 &&
          challenge.challengeProgress.every((progress) => progress.completed)
        );
      });

      return { ...lesson, completed: allCompletedChallenges };
    });

    return { ...unit, lessons: lessionsWithCompletedStatus };
  });

  return normalisedData;
});
