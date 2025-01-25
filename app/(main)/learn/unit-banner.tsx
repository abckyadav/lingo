import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NotebookText } from "lucide-react";
import Link from "next/link";

type UnitBannerProps = {
  className?: string;
  style?: React.CSSProperties;
  title: string;
  description: string;
};

export default function UnitBanner({
  className,
  style,
  title,
  description,
}: UnitBannerProps) {
  return (
    <div
      className={cn(
        "w-full rounded-xl bg-green-500 p-5 text-white flex items-center justify-between",
        className
      )}
      style={style}
    >
      <div className="space-y-2.5">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>

      <Link href="/lesson">
        <Button
          size="lg"
          variant="secondary"
          className="hidden  2xl:flex border-2 border-b-4 active:border-b-2"
        >
          <NotebookText className="mr-2" />
          Continue
        </Button>
      </Link>
    </div>
  );
}
