import { cn } from "@/lib/utils";

type FeedWrapperProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export default function FeedWrapper({
  className,
  style,
  children,
}: FeedWrapperProps) {
  return (
    <div className={cn("flex-1 relative top-0 pb-10", className)} style={style}>
      {children}
    </div>
  );
}
