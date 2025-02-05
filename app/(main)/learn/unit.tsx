import { lessons, units } from "@/db/schema";
import { cn } from "@/lib/utils";
import UnitBanner from "./unit-banner";
import LessonButton from "./lesson-button";

type UnitProps = {
  className?: string;
  style?: React.CSSProperties;
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
      })
    | undefined;
  activeLessonPercentage: number;
};

export default function Unit({
  className,
  style,
  description,
  title,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: UnitProps) {
  return (
    <div className={cn("", className)} style={style}>
      <UnitBanner title={title} description={description} />

      <div className="relative flex flex-col items-center">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </div>
  );
}
