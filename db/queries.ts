import { cache } from "react";
import db from "./drizzle";
import { asc } from "drizzle-orm";
import { courses } from "./schema";

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany({
    orderBy: [asc(courses.id)],
  });

  return data;
});
