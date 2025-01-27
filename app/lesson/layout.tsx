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
    <div className={cn("flex flex-col h-full", className)} style={style}>
      <div className="flex flex-col h-full w-full">{children}</div>
    </div>
  );
}
