import FeedWrapper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import { cn } from "@/lib/utils";
import Header from "./header";
import UserProgress from "@/components/user-progress";
import { getUnits, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import Unit from "./unit";

type LearnPageProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default async function LearnPage({ className, style }: LearnPageProps) {
  const userProgressData = getUserProgress();
  const unitsData = getUnits();

  const [userProgress, units] = await Promise.all([
    userProgressData,
    unitsData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div
      className={cn("flex flex-row-reverse gap-[48px] px-6", className)}
      style={style}
    >
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />

        {units.map((unit) => (
          <div className="mb-10" key={unit.id}>
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLesson={undefined}
              activeLessonPercentage={0}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
}
