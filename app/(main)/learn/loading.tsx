import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

type LoadingProps = {
  className: string;
  style: React.CSSProperties;
};
export default function Loading({ className, style }: LoadingProps) {
  return (
    <div
      className={cn(
        "h-full w-full flex items-center justify-center",
        className
      )}
      style={style}
    >
      <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
    </div>
  );
}
