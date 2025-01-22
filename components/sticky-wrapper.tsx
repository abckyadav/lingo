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
        "hidden lg:block w-[368px] sticky self-end bottom-6",
        className
      )}
      style={style}
    >
      <div className="min-h-[calc(100vh-48px)] sticky top-6 flex flex-col gap-y-4">
        {children}
      </div>
    </div>
  );
}
