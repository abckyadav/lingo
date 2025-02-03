import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";
import Quiz from "../quiz";

type LessonIdPageProps = {
  className?: string;
  style?: React.CSSProperties;
  params: {
    lessonId: number;
  };
};

export default async function LessonPage({
  className,
  style,
  params,
}: LessonIdPageProps) {
  const lessonData = getLesson(params.lessonId);
  const userProgressData = getUserProgress();
  const userSubscriptionData = await getUserSubscription();

  const [lesson, userProgress, userSubscription] = await Promise.all([
    lessonData,
    userProgressData,
    userSubscriptionData,
  ]);

  if (!lesson || !userProgress) {
    redirect("/learn");
  }

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      className={cn("", className)}
      style={style}
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={userSubscription}
    />
  );
}
