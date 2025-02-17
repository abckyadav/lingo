"use client";

import { courses, userProgress } from "@/db/schema";
import { cn } from "@/lib/utils";
import Card from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";

type ListProps = {
  className?: string;
  style?: React.CSSProperties;
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export default function List({
  className,
  style,
  courses,
  activeCourseId,
}: ListProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;

    if (id === activeCourseId) {
      return router.push("/learn");
    }

    startTransition(() => {
      upsertUserProgress(id).catch((error) => {
        toast.error(
          "Something went wrong while updating your progress. " + error.message,
        );
      });
    });
  };

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]",
        className,
      )}
      style={style}
    >
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          disabled={pending}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
}
