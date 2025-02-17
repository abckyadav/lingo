import { getCourses, getUserProgress } from "@/db/queries";
import List from "./list";

export default async function CoursesPage() {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);

  return (
    <div className={"mx-auto h-full max-w-[912px] px-3"}>
      <h1 className="text-2xl font-bold text-neutral-700">
        {courses && courses.length > 0 ? (
          <div>
            Language Courses
            <List
              courses={courses}
              activeCourseId={userProgress?.activeCourseId}
            />
          </div>
        ) : (
          <div className="">No Courses Found!</div>
        )}
      </h1>
    </div>
  );
}
