import { cn } from "@/lib/utils";

type LessonLayoutProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export default function LessonLayout({
  className,
  style,
  children,
}: LessonLayoutProps) {
  return (
    <div className={cn("flex h-full flex-col", className)} style={style}>
      <div className="flex h-full w-full flex-col">{children}</div>
    </div>
  );
}
