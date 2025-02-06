import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type CardProps = {
  className?: string;
  style?: React.CSSProperties;
  id: number;
  title: string;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
};

export default function Card({
  className,
  style,
  id,
  title,
  imageSrc,
  onClick,
  disabled,
  active,
}: CardProps) {
  console.log("imageSrc:", imageSrc);
  return (
    <div
      className={cn(
        "flex h-full min-h-[217px] min-w-[200px] cursor-pointer flex-col items-center justify-between rounded-xl border-2 border-b-4 p-3 pb-6 hover:bg-black/5 active:border-b-2",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
      style={style}
      onClick={() => onClick(id)}
    >
      <div className="min-[24px] flex w-full items-center justify-end">
        {active && (
          <div className="flex items-center justify-center rounded-md bg-green-600 p-1.5">
            <Check className="h-4 w-4 stroke-[4] text-white" />
          </div>
        )}
      </div>
      <Image
        alt={title}
        src={imageSrc}
        height={70}
        width={93.33}
        className="rounded-lg border object-cover drop-shadow-md"
      />
      <p className="mt-3 text-center font-bold text-neutral-700">{title}</p>
    </div>
  );
}
