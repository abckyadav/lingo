import { Button } from "@/components/ui/button";
import { QUESTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Progress } from "./ui/progress";

type PromoProps = {
  className?: string;
  style?: React.CSSProperties;
  points: number;
};

export default function Quests({ className, style, points }: PromoProps) {
  return (
    <div
      className={cn("space-y-4 rounded-xl border-2 p-4", className)}
      style={style}
    >
      <div className="flex w-full items-center justify-between space-y-2">
        <h3 className="text-lg font-bold">Quests</h3>

        <Link href="/quests">
          <Button size="sm" variant="primaryOutline">
            View all
          </Button>
        </Link>
      </div>

      <ul className="w-full space-y-4">
        {QUESTS.map((quest) => {
          const progress = (points / quest.value) * 100;

          return (
            <div
              key={quest.title}
              className="flex w-full items-center gap-x-3 pb-4"
            >
              <Image src="/points.svg" alt="points" width={40} height={40} />

              <div className="flex w-full flex-col gap-y-2">
                <p className="text-sm font-bold text-neutral-700">
                  {quest.title}
                </p>
                <Progress className="h-2" value={progress} />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
