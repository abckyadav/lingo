import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type HeaderProps = {
  className?: string;
  style?: React.CSSProperties;
  title: string;
};

export default function Header({ className, style, title }: HeaderProps) {
  return (
    <div
      className={cn(
        "sticky top-0 mb-5 flex items-center justify-between border-b-2 bg-white pb-3 text-neutral-400 lg:mt-[-28px] lg:pt-[28px]",
        className,
      )}
      style={style}
    >
      <Link href="/courses">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
        </Button>
      </Link>
      <h1 className="text-lg font-bold">{title}</h1>
      {/* created this empty div to align title center */}
      <div />
    </div>
  );
}
