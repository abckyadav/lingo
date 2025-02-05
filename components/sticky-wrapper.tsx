import { cn } from "@/lib/utils";

type StickyWrapperProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export default function StickyWrapper({
  className,
  style,
  children,
}: StickyWrapperProps) {
  return (
    <div
      className={cn(
        "sticky bottom-6 hidden w-[368px] self-end lg:block",
        className,
      )}
      style={style}
    >
      <div className="sticky top-6 flex min-h-[calc(100vh-48px)] flex-col gap-y-4">
        {children}
      </div>
    </div>
  );
}
