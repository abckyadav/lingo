"use client";

import { courses } from "@/db/schema";
import { cn } from "@/lib/utils";
import Card from "./card";

type ListProps = {
  className?: string;
  style?: React.CSSProperties;
  courses: (typeof courses.$inferSelect)[];
  activeCourseId: number;
};

export default function List({
  className,
  style,
  courses,
  activeCourseId,
}: ListProps) {
  return (
    <div
      className={cn(
        "pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4",
        className
      )}
      style={style}
    >
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={() => {}}
          disabled={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
}
