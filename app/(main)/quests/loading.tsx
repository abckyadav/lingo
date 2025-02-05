import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

type LoadingProps = {
  className?: string;
  style?: React.CSSProperties;
};
export default function Loading({ className, style }: LoadingProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center",
        className,
      )}
      style={style}
    >
      <Loader className="h-6 w-6 animate-spin text-muted-foreground" />
    </div>
  );
}
