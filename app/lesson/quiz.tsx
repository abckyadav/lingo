"use client";

import { challengeOptions, challenges } from "@/db/schema";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Header from "./header";

type QuizProps = {
  className?: string;
  style?: React.CSSProperties;
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userSubscription: any; //TODO: replace with subscription DB type
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
};

export default function Quiz({
  className,
  style,
  initialPercentage,
  initialHearts,
  initialLessonId,
  userSubscription,
  initialLessonChallenges,
}: QuizProps) {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage);
  return (
    <>
      <Header
        className={cn("", className)}
        style={style}
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
    </>
  );
}
