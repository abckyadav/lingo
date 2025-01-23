import FeedWrapper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import { cn } from "@/lib/utils";
import Header from "./header";
import UserProgress from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

type LearnPageProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default async function LearnPage({ className, style }: LearnPageProps) {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);
  console.log("userProgress:", userProgress);

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
          activeCourse={{
            title: userProgress.activeCourse.title,
            imageSrc: userProgress.activeCourse.imageSrc,
          }}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title } />
      </FeedWrapper>
    </div>
  );
}
