import "dotenv/config";

import * as schema from "@/db/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const courses = [
  {
    id: 1,
    title: "Indian",
    imageSrc: "/IN.svg",
  },
  {
    id: 2,
    title: "Croatian",
    imageSrc: "/hr.svg",
  },
  {
    id: 3,
    title: "Spanish",
    imageSrc: "/es.svg",
  },
  {
    id: 4,
    title: "French",
    imageSrc: "/fr.svg",
  },
  {
    id: 5,
    title: "Italian",
    imageSrc: "/it.svg",
  },
  {
    id: 6,
    title: "Japanese",
    imageSrc: "/jp.svg",
  },
];

export async function main() {
  await db.delete(schema.courses);
  await db.delete(schema.userProgress);

  for (const course of courses) {
    try {
      await db.insert(schema.courses).values(course);
      console.log(`🌱 Upserted course: ${course.title} 🚀`);
    } catch (error) {
      console.log(`❌ Courses could not create  ${course.title} ❌`, error);

      throw new Error("Failed to seed the database");
    }
  }

  // await db.insert(schema.courses).values([
  //   {
  //     id: 1,
  //     title: "Indian",
  //     imageSrc: "/IN.svg",
  //   },
  //   {
  //     id: 2,
  //     title: "Croatian",
  //     imageSrc: "/hr.svg",
  //   },
  //   {
  //     id: 3,
  //     title: "Spanish",
  //     imageSrc: "/es.svg",
  //   },
  //   {
  //     id: 4,
  //     title: "French",
  //     imageSrc: "/fr.svg",
  //   },
  //   {
  //     id: 5,
  //     title: "Italian",
  //     imageSrc: "/it.svg",
  //   },
  //   {
  //     id: 6,
  //     title: "Japanese",
  //     imageSrc: "/jp.svg",
  //   },
  // ]);
}

main();
