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
        "sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between border-b-2 mb-5 text-neutral-400",
        className
      )}
      style={style}
    >
      <Link href="/courses">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
        </Button>
      </Link>
      <h1 className="font-bold text-lg">{title}</h1>
      {/* created this empty div to align title center */}
      <div />
    </div>
  );
}
