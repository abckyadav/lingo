import { cn } from "@/lib/utils";
import { getCourses } from "@/db/queries";
import List from "./list";

type CoursesPageProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default async function CoursesPage({
  className,
  style,
}: CoursesPageProps) {
  const courses = await getCourses();
  console.log("courses:", courses);

  return (
    <div
      className={cn("h-full max-w-[912px] px-3 mx-auto", className)}
      style={style}
    >
      <h1 className="text-2xl font-bold text-neutral-700">
        Language Courses
        <List courses={courses} activeCourseId={1} />
      </h1>
    </div>
  );
}
