/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { challengeOptions, challenges, userSubscription } from "@/db/schema";
import { cn } from "@/lib/utils";
import { DEFAULT_HEARTS, POINTS_PER_CHALLENGE } from "@/lib/constants";
import { useState, useTransition } from "react";
import Header from "./header";
import QuestionBubble from "./question-bubble";
import Challenge from "./challenge";
import Footer from "./footer";
import { upsertChallengeProgress } from "@/actions/challenge-progress";
import { toast } from "sonner";
import { reduceHearts } from "@/actions/user-progress";
import { useAudio, useMount, useWindowSize } from "react-use";
import Image from "next/image";
import Confetti from "react-confetti";
import ResultCard from "./result-card";
import { useRouter } from "next/navigation";
import { useHeartsModal } from "@/store/use-hearts-modal";
import { usePracticeModal } from "@/store/use-practice-modal";

type QuizProps = {
  className?: string;
  style?: React.CSSProperties;
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  userSubscription:
    | (typeof userSubscription.$inferSelect & {
        isActive: boolean;
      })
    | null;
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
  const { width, height } = useWindowSize();
  const router = useRouter();

  const { open: openHeartsModal } = useHeartsModal();
  const { open: openPracticeModal } = usePracticeModal();

  useMount(() => {
    if (initialPercentage === 100) openPracticeModal();
  });

  const [correctAudio, _c, correctControls] = useAudio({ src: "/correct.wav" });
  const [incorrectAudio, _i, incorrectControls] = useAudio({
    src: "/incorrect.wav",
  });
  const [finishAudio] = useAudio({
    src: "/finish.mp3",
    autoPlay: true,
  });

  const [pending, startTransition] = useTransition();
  const [lessonId] = useState(initialLessonId);
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(() => {
    return initialPercentage === 100 ? 0 : initialPercentage;
  });
  const [challenges] = useState(initialLessonChallenges);
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex(
      (challenge) => !challenge.completed,
    );

    return uncompletedIndex === -1 ? 0 : uncompletedIndex;
  });
  const [selectedOption, setSelectedOption] = useState<number>();
  const [status, setStatus] = useState<"correct" | "wrong" | "none">("none");

  const currentChallenge = challenges[activeIndex];
  const options = currentChallenge?.challengeOptions ?? [];

  const onNext = () => {
    setActiveIndex((current) => current + 1);
  };

  const onSelect = (id: number) => {
    if (status !== "none") return;

    setSelectedOption(id);
  };

  const onContinue = () => {
    if (!selectedOption) return;

    if (status === "wrong") {
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    if (status === "correct") {
      onNext();
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    const correctOption = options.find((option) => option.correct);

    if (!correctOption) return;

    if (correctOption && correctOption.id === selectedOption) {
      startTransition(() => {
        upsertChallengeProgress(currentChallenge.id)
          .then((response) => {
            if (response?.error === "hearts") {
              openHeartsModal();
              return;
            }

            correctControls.play();
            setStatus("correct");
            setPercentage((prev) => prev + 100 / challenges.length);

            //This is a practice
            if (initialPercentage === 100) {
              setHearts((prev) => Math.min(prev + 1, DEFAULT_HEARTS));
            }
          })
          .catch((error) =>
            toast.error(
              "Something went wrong. Please try again. " + error.message,
            ),
          );
      });
    } else {
      startTransition(() => {
        reduceHearts(currentChallenge.id)
          .then((response) => {
            if (response?.error === "hearts") {
              openHeartsModal();
              return;
            }

            incorrectControls.play();
            setStatus("wrong");

            if (!response?.error) {
              setHearts((prev) => Math.max(prev - 1, 0));
            }
          })
          .catch((error) =>
            toast.error(
              "Something went wrong. Please try again. " + error.message,
            ),
          );
      });
    }
  };

  if (!currentChallenge) {
    return (
      <>
        {finishAudio}
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          tweenDuration={10000}
        />
        <div className="mx-auto flex h-full max-w-lg flex-col items-center justify-center gap-y-4 text-center lg:gap-y-8">
          <Image
            src="/finish.svg"
            alt="finish"
            className="hidden lg:block"
            height={100}
            width={100}
          />
          <Image
            src="/finish.svg"
            alt="finish"
            className="block lg:hidden"
            height={50}
            width={50}
          />
          <h1 className="text-xl font-bold text-neutral-700 lg:text-3xl">
            Great job! <br /> You&apos;ve completed the lesson.
          </h1>
          <div className="flex w-full items-center gap-x-4">
            <ResultCard
              variant="points"
              value={challenges.length * POINTS_PER_CHALLENGE}
            />
            <ResultCard variant="hearts" value={hearts} />
          </div>
        </div>
        <Footer
          lessonId={lessonId}
          status="completed"
          onCheck={() => router.push("/learn")}
        />
      </>
    );
  }

  const title =
    currentChallenge.type === "ASSIST"
      ? "Select the correct meaning"
      : currentChallenge.question;

  return (
    <>
      {incorrectAudio}
      {correctAudio}
      <Header
        className={cn("", className)}
        style={style}
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
      <div className="flex-1">
        <div className="flex h-full items-center justify-center">
          <div className="flex w-full flex-col gap-y-12 px-6 lg:min-h-[350px] lg:w-[600px] lg:px-0">
            <h1 className="text-center text-lg font-bold text-neutral-700 lg:text-start lg:text-3xl">
              {title}
            </h1>
            <div className="">
              {currentChallenge.type === "ASSIST" ? (
                <QuestionBubble question={currentChallenge.question} />
              ) : null}

              <Challenge
                options={options}
                onSelect={onSelect}
                status={status}
                selectedOption={selectedOption}
                disabled={pending}
                type={currentChallenge.type}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer
        disabled={pending || !selectedOption}
        status={status}
        onCheck={onContinue}
      />
    </>
  );
}
