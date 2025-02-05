import { cn } from "@/lib/utils";
import Image from "next/image";

type QuestionBubbleProps = {
  className?: string;
  style?: React.CSSProperties;
  question: string;
};

export default function QuestionBubble({
  className,
  style,
  question,
}: QuestionBubbleProps) {
  return (
    <div
      className={cn("mb-6 flex items-center gap-x-4", className)}
      style={style}
    >
      <Image
        src="/mascot.svg"
        alt="mascot"
        width={60}
        height={60}
        className="hidden lg:block"
      />
      <Image
        src="/mascot.svg"
        alt="mascot"
        width={40}
        height={40}
        className="block lg:hidden"
      />
      <div className="relative rounded-xl border-2 px-4 py-2 text-sm lg:text-base">
        {question}
        <div className="absolute -left-3 top-1/2 h-0 w-0 -translate-y-1/2 rotate-90 transform border-x-8 border-t-8 border-x-transparent"></div>
      </div>
    </div>
  );
}
