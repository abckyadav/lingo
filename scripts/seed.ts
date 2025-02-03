import "dotenv/config";

import * as schema from "@/db/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { COURSES } from "./courses";
import { UNITS } from "./units";
import { LESSONS } from "./lessons";
import { CHALLENGES } from "./challenges";
import { CHALLENGE_OPTIONS } from "./challenge-options";
import { CHALLENGE_TYPE_ENUM } from "@/lib/constants";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

export async function main() {
  try {
    // Delete existing data
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    // Insert all courses
    for (const course of COURSES) {
      await db.insert(schema.courses).values(course);
      console.log(`🌱 Upserted course: ${course.title} 🚀`);
    }

    // Get all courses to check courseId when inserting units
    const courses = await db.select().from(schema.courses);

    // Insert all units, making sure each unit references a valid course
    for (const unit of UNITS) {
      const course = courses.find((c) => c.id === unit.courseId);
      if (!course) {
        throw new Error(`Course not found for unit: ${unit.title}`);
      }
      await db.insert(schema.units).values(unit);
      console.log(`🌱 Upserted unit: ${unit.title} 🚀`);
    }

    // Get all units to check unitId when inserting lessons
    const units = await db.select().from(schema.units);

    // Insert all lessons, making sure each lesson references a valid unit
    for (const lesson of LESSONS) {
      const unit = units.find((u) => u.id === lesson.unitId);
      if (!unit) {
        throw new Error(`Unit not found for lesson: ${lesson.title}`);
      }
      await db.insert(schema.lessons).values(lesson);
      console.log(`🌱 Upserted lesson: ${lesson.title} 🚀`);
    }

    // Get all lessons to check lessonId when inserting challenges
    const lessons = await db.select().from(schema.lessons);

    // Insert all challenges, making sure each challenge references a valid lesson
    for (const challenge of CHALLENGES) {
      const lesson = lessons.find((l) => l.id === challenge.lessonId);
      if (!lesson) {
        throw new Error(
          `Lesson not found for challenge: ${challenge.question}`,
        );
      }
      await db.insert(schema.challenges).values({
        ...challenge,
        type: challenge.type as CHALLENGE_TYPE_ENUM,
      });
      console.log(`🌱 Upserted challenge: ${challenge.question} 🚀`);
    }

    // Get all challenges to check challengeId when inserting challenge options
    const challenges = await db.select().from(schema.challenges);

    // Insert all challenge options, making sure each option references a valid challenge
    for (const challengeOption of CHALLENGE_OPTIONS) {
      const challenge = challenges.find(
        (ch) => ch.id === challengeOption.challengeId,
      );
      if (!challenge) {
        throw new Error(
          `Challenge not found for option: ${challengeOption.text}`,
        );
      }
      await db.insert(schema.challengeOptions).values(challengeOption);
      console.log(`🌱 Upserted challenge option: ${challengeOption.text} 🚀`);
    }
  } catch (error) {
    console.log("❌ Error seeding data:", error);
    throw error;
  }
}

main();
