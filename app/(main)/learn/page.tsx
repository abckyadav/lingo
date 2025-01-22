import FeedWrapper from "@/components/feed-wrapper";
import StickyWrapper from "@/components/sticky-wrapper";
import { cn } from "@/lib/utils";
import Header from "./header";
import UserProgress from "@/components/user-progress";

type LearnPageProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function LearnPage({ className, style }: LearnPageProps) {
  return (
    <div
      className={cn("flex flex-row-reverse gap-[48px] px-6", className)}
      style={style}
    >
      <StickyWrapper>
        <UserProgress
          activeCourse={{
            title: "Spanish",
            imageSrc: "/es.svg",
          }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Spanish" />
      </FeedWrapper>
    </div>
  );
}
