import { cn } from "@/lib/utils";

type SideBarProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function Sidebar({ className, style }: SideBarProps) {
  return (
    <div
      className={cn(
        "flex bg-blue-500 h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
      style={style}
    >
      Sidebar
    </div>
  );
}
