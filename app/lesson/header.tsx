import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useExitModal } from "@/store/use-exit-modal";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";

type HeaderProps = {
  className?: string;
  style?: React.CSSProperties;
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
};

export default function Header({
  className,
  style,
  hearts,
  percentage,
  hasActiveSubscription,
}: HeaderProps) {
  const { open } = useExitModal();

  return (
    <header
      className={cn(
        "mx-auto flex w-full max-w-[1140px] items-center justify-between gap-x-7 px-10 pt-[20px] lg:pt-[50px]",
        className,
      )}
      style={style}
    >
      <X
        onClick={open}
        className="cursor-pointer text-slate-500 transition hover:opacity-75"
      />

      <Progress value={percentage} />
      <div className="flex items-center font-bold text-rose-500">
        <Image
          src="/heart.svg"
          width={28}
          height={28}
          alt="heart"
          className="mr-2"
        />
        {hasActiveSubscription ? (
          <InfinityIcon className="h-6 w-6 shrink-0 stroke-[3]" />
        ) : (
          hearts
        )}
      </div>
    </header>
  );
}
 