import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("🌱 Starting database seed");

    // Delete all existing data
    await Promise.all([
      db.delete(schema.userProgress),
      db.delete(schema.challenges),
      db.delete(schema.units),
      db.delete(schema.lessons),
      db.delete(schema.courses),
      db.delete(schema.challengeOptions),
      db.delete(schema.userSubscription),
    ]);
    console.log("🗑️ Cleared existing data");

    // Insert courses with Hindi first
    const courses = await db
      .insert(schema.courses)
      .values([
        { title: "Hindi", imageSrc: "/hi.svg" },
        { title: "Spanish", imageSrc: "/es.svg" },
      ])
      .returning();
    console.log("🌱 Inserted courses:", courses.map((c) => c.title).join(", "));

    // For each course, insert units
    for (const course of courses) {
      const units = await db
        .insert(schema.units)
        .values([
          {
            courseId: course.id,
            title: "Unit 1",
            description: `Learn the basics of ${course.title}`,
            order: 1,
          },
          {
            courseId: course.id,
            title: "Unit 2",
            description: `Learn intermediate ${course.title}`,
            order: 2,
          },
        ])
        .returning();
      console.log(`🌱 Inserted units for ${course.title}`);

      // For each unit, insert lessons
      for (const unit of units) {
        const lessons = await db
          .insert(schema.lessons)
          .values([
            { unitId: unit.id, title: "Nouns", order: 1 },
            { unitId: unit.id, title: "Verbs", order: 2 },
            { unitId: unit.id, title: "Adjectives", order: 3 },
            { unitId: unit.id, title: "Phrases", order: 4 },
            { unitId: unit.id, title: "Sentences", order: 5 },
          ])
          .returning();
        console.log(`🌱 Inserted lessons for ${unit.title}`);

        // For each lesson, insert challenges
        for (const lesson of lessons) {
          const challenges = await db
            .insert(schema.challenges)
            .values([
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the man"?',
                order: 1,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the woman"?',
                order: 2,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the boy"?',
                order: 3,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: '"the man"',
                order: 4,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the zombie"?',
                order: 5,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the robot"?',
                order: 6,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the girl"?',
                order: 7,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: '"the zombie"',
                order: 8,
              },
            ])
            .returning();

          for (const challenge of challenges) {
            console.log(`🌱 Inserted challenge: ${challenge.question} 🚀`);

            // For each challenge, insert challenge options
            if (course.title === "Hindi") {
              if (challenge.order === 1) {
                await db.insert(schema.challengeOptions).values([
                  {
                    challengeId: challenge.id,
                    correct: true,
                    text: "आदमी",
                    imageSrc: "/man.svg",
                    audioSrc: "/hi_man.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "औरत",
                    imageSrc: "/woman.svg",
                    audioSrc: "/hi_woman.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "लड़का",
                    imageSrc: "/boy.svg",
                    audioSrc: "/hi_boy.mp3",
                  },
                ]);
                console.log(
                  `🌱 Inserted options for challenge: ${challenge.question}`,
                );
              }

              if (challenge.order === 2) {
                await db.insert(schema.challengeOptions).values([
                  {
                    challengeId: challenge.id,
                    correct: true,
                    text: "औरत",
                    imageSrc: "/woman.svg",
                    audioSrc: "/hi_woman.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "लड़का",
                    imageSrc: "/boy.svg",
                    audioSrc: "/hi_boy.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "आदमी",
                    imageSrc: "/man.svg",
                    audioSrc: "/hi_man.mp3",
                  },
                ]);
                console.log(
                  `🌱 Inserted options for challenge: ${challenge.question}`,
                );
              }

              if (challenge.order === 3) {
                await db.insert(schema.challengeOptions).values([
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "औरत",
                    imageSrc: "/woman.svg",
                    audioSrc: "/hi_woman.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "आदमी",
                    imageSrc: "/man.svg",
                    audioSrc: "/hi_man.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: true,
                    text: "लड़का",
                    imageSrc: "/boy.svg",
                    audioSrc: "/hi_boy.mp3",
                  },
                ]);
                console.log(
                  `🌱 Inserted options for challenge: ${challenge.question}`,
                );
              }

              if (challenge.order === 4) {
                await db.insert(schema.challengeOptions).values([
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "औरत",
                    audioSrc: "/hi_woman.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: true,
                    text: "आदमी",
                    audioSrc: "/hi_man.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "लड़का",
                    audioSrc: "/hi_boy.mp3",
                  },
                ]);
                console.log(
                  `🌱 Inserted options for challenge: ${challenge.question}`,
                );
              }

              if (challenge.order === 5) {
                await db.insert(schema.challengeOptions).values([
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "आदमी",
                    imageSrc: "/man.svg",
                    audioSrc: "/hi_man.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "औरत",
                    imageSrc: "/woman.svg",
                    audioSrc: "/hi_woman.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: true,
                    text: "ज़ोंबी",
                    imageSrc: "/zombie.svg",
                    audioSrc: "/hi_zombie.mp3",
                  },
                ]);
                console.log(
                  `🌱 Inserted options for challenge: ${challenge.question}`,
                );
              }

              if (challenge.order === 6) {
                await db.insert(schema.challengeOptions).values([
                  {
                    challengeId: challenge.id,
                    correct: true,
                    text: "रोबोट",
                    imageSrc: "/robot.svg",
                    audioSrc: "/hi_robot.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "ज़ोंबी",
                    imageSrc: "/zombie.svg",
                    audioSrc: "/hi_zombie.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "लड़का",
                    imageSrc: "/boy.svg",
                    audioSrc: "/hi_boy.mp3",
                  },
                ]);
                console.log(
                  `🌱 Inserted options for challenge: ${challenge.question}`,
                );
              }

              if (challenge.order === 7) {
                await db.insert(schema.challengeOptions).values([
                  {
                    challengeId: challenge.id,
                    correct: true,
                    text: "लड़की",
                    imageSrc: "/girl.svg",
                    audioSrc: "/hi_girl.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "ज़ोंबी",
                    imageSrc: "/zombie.svg",
                    audioSrc: "/hi_zombie.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "आदमी",
                    imageSrc: "/man.svg",
                    audioSrc: "/hi_man.mp3",
                  },
                ]);
                console.log(
                  `🌱 Inserted options for challenge: ${challenge.question}`,
                );
              }

              if (challenge.order === 8) {
                await db.insert(schema.challengeOptions).values([
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "औरत",
                    audioSrc: "/hi_woman.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: true,
                    text: "ज़ोंबी",
                    audioSrc: "/hi_zombie.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "लड़का",
                    audioSrc: "/hi_boy.mp3",
                  },
                ]);
                console.log(
                  `🌱 Inserted options for challenge: ${challenge.question}`,
                );
              }
            } else if (course.title === "Spanish") {
              if (challenge.order === 1) {
                await db.insert(schema.challengeOptions).values([
                  {
                    challengeId: challenge.id,
                    correct: true,
                    text: "el hombre",
                    imageSrc: "/man.svg",
                    audioSrc: "/es_man.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "la mujer",
                    imageSrc: "/woman.svg",
                    audioSrc: "/es_woman.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "el chico",
                    imageSrc: "/boy.svg",
                    audioSrc: "/es_boy.mp3",
                  },
                ]);
                console.log(
                  `🌱 Inserted options for challenge: ${challenge.question}`,
                );
              }

              if (challenge.order === 2) {
                await db.insert(schema.challengeOptions).values([
                  {
                    challengeId: challenge.id,
                    correct: true,
                    text: "la mujer",
                    imageSrc: "/woman.svg",
                    audioSrc: "/es_woman.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "el chico",
                    imageSrc: "/boy.svg",
                    audioSrc: "/es_boy.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "el hombre",
                    imageSrc: "/man.svg",
                    audioSrc: "/es_man.mp3",
                  },
                ]);
                console.log(
                  `🌱 Inserted options for challenge: ${challenge.question}`,
                );
              }

              if (challenge.order === 3) {
                await db.insert(schema.challengeOptions).values([
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "la mujer",
                    imageSrc: "/woman.svg",
                    audioSrc: "/es_woman.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "el hombre",
                    imageSrc: "/man.svg",
                    audioSrc: "/es_man.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: true,
                    text: "el chico",
                    imageSrc: "/boy.svg",
                    audioSrc: "/es_boy.mp3",
                  },
                ]);
                console.log(
                  `🌱 Inserted options for challenge: ${challenge.question}`,
                );
              }

              if (challenge.order === 4) {
                await db.insert(schema.challengeOptions).values([
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "la mujer",
                    audioSrc: "/es_woman.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: true,
                    text: "el hombre",
                    audioSrc: "/es_man.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "el chico",
                    audioSrc: "/es_boy.mp3",
                  },
                ]);
                console.log(
                  `🌱 Inserted options for challenge: ${challenge.question}`,
                );
              }

              if (challenge.order === 5) {
                await db.insert(schema.challengeOptions).values([
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "el hombre",
                    imageSrc: "/man.svg",
                    audioSrc: "/es_man.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "la mujer",
                    imageSrc: "/woman.svg",
                    audioSrc: "/es_woman.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: true,
                    text: "el zombie",
                    imageSrc: "/zombie.svg",
                    audioSrc: "/es_zombie.mp3",
                  },
                ]);
                console.log(
                  `🌱 Inserted options for challenge: ${challenge.question}`,
                );
              }

              if (challenge.order === 6) {
                await db.insert(schema.challengeOptions).values([
                  {
                    challengeId: challenge.id,
                    correct: true,
                    text: "el robot",
                    imageSrc: "/robot.svg",
                    audioSrc: "/es_robot.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "el zombie",
                    imageSrc: "/zombie.svg",
                    audioSrc: "/es_zombie.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "el chico",
                    imageSrc: "/boy.svg",
                    audioSrc: "/es_boy.mp3",
                  },
                ]);
                console.log(
                  `🌱 Inserted options for challenge: ${challenge.question}`,
                );
              }

              if (challenge.order === 7) {
                await db.insert(schema.challengeOptions).values([
                  {
                    challengeId: challenge.id,
                    correct: true,
                    text: "la nina",
                    imageSrc: "/girl.svg",
                    audioSrc: "/es_girl.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "el zombie",
                    imageSrc: "/zombie.svg",
                    audioSrc: "/es_zombie.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "el hombre",
                    imageSrc: "/man.svg",
                    audioSrc: "/es_man.mp3",
                  },
                ]);
                console.log(
                  `🌱 Inserted options for challenge: ${challenge.question}`,
                );
              }

              if (challenge.order === 8) {
                await db.insert(schema.challengeOptions).values([
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "la mujer",
                    audioSrc: "/es_woman.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: true,
                    text: "el zombie",
                    audioSrc: "/es_zombie.mp3",
                  },
                  {
                    challengeId: challenge.id,
                    correct: false,
                    text: "el chico",
                    audioSrc: "/es_boy.mp3",
                  },
                ]);
                console.log(
                  `🌱 Inserted options for challenge: ${challenge.question}`,
                );
              }
            }
          }
        }
      }
    }
    console.log("✅ Database seeded successfully");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw new Error("Failed to seed database");
  }
};

main();
