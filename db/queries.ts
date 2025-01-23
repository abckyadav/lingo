import { cache } from "react";
import db from "./drizzle";
import { asc, eq } from "drizzle-orm";
import { courses, userProgress } from "./schema";
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
