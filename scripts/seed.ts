import "dotenv/config";

import * as schema from "@/db/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { COURSES } from "./courses";
import { UNITS } from "./units";
import { LESSONS } from "./lessons";
import { CHALLENGES } from "./challenges";
import { CHALLENGE_OPTIONS } from "./challenge-options";
import { CHALLENGE_TYPE_ENUM } from "@/lib/utils";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

export async function main() {
  await db.delete(schema.courses);
  await db.delete(schema.userProgress);
  await db.delete(schema.units);
  await db.delete(schema.lessons);
  await db.delete(schema.challenges);
  await db.delete(schema.challengeOptions);
  await db.delete(schema.challengeProgress);

  for (const course of COURSES) {
    try {
      await db.insert(schema.courses).values(course);

      console.log(`🌱 Upserted course: ${course.title} 🚀`);
    } catch (error) {
      console.log(`❌ Courses could not create  ${course.title} ❌`, error);

      throw new Error("Failed to seed the Courses");
    }
  }

  for (const unit of UNITS) {
    const course = await db
      .select()
      .from(schema.courses)
      .where(eq(schema.courses.id, unit.courseId));

    if (!course) {
      throw new Error(`Course not found for ${course} - unit - ${unit.title}`);
    }

    try {
      await db.insert(schema.units).values(unit);

      console.log(`🌱 Upserted unit: ${unit.title} 🚀`);
    } catch (error) {
      console.log(`❌ Units could not create  ${unit.title} ❌`, error);

      throw new Error("Failed to seed the Units");
    }
  }

  for (const lesson of LESSONS) {
    const unit = await db
      .select()
      .from(schema.units)
      .where(eq(schema.units.id, lesson.unitId));

    if (!unit) {
      throw new Error(`Unit not found for ${unit} - lesson - ${lesson.title}`);
    }

    try {
      await db.insert(schema.lessons).values(lesson);

      console.log(`🌱 Upserted lesson: ${lesson.title} 🚀`);
    } catch (error) {
      console.log(`❌ Lessons could not create  ${lesson.title} ❌`, error);

      throw new Error("Failed to seed the Lessons");
    }
  }

  for (const challenge of CHALLENGES) {
    const lesson = await db
      .select()
      .from(schema.lessons)
      .where(eq(schema.lessons.id, challenge.lessonId));

    if (!lesson) {
      throw new Error(
        `Lesson not found for ${lesson} - challenge - ${challenge.question}`
      );
    }

    try {
      await db.insert(schema.challenges).values({
        ...challenge,
        type: challenge.type as CHALLENGE_TYPE_ENUM,
      });

      console.log(`🌱 Upserted challenge: ${challenge.question} 🚀`);
    } catch (error) {
      console.log(
        `❌ challenges could not create  ${challenge.question} ❌`,
        error
      );

      throw new Error("Failed to seed the challenges");
    }
  }

  for (const challengeOption of CHALLENGE_OPTIONS) {
    const challenge = await db
      .select()
      .from(schema.challenges)
      .where(eq(schema.challenges.id, challengeOption.challengeId));

    if (!challenge) {
      throw new Error(
        `challenge not found for ${challenge} - challenge option - ${challengeOption.text}`
      );
    }

    try {
      await db.insert(schema.challengeOptions).values(challengeOption);

      console.log(`🌱 Upserted challengeOption: ${challengeOption.text} 🚀`);
    } catch (error) {
      console.log(
        `❌ challengeOptions could not create  ${challengeOption.text} ❌`,
        error
      );

      throw new Error("Failed to seed the challengeOptions");
    }
  }
}

main();
