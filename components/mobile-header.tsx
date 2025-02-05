import { cn } from "@/lib/utils";
import MobileSidebar from "./mobile-sidebar";

type MobileHeaderProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function MobileHeader({ className, style }: MobileHeaderProps) {
  return (
    <nav
      className={cn(
        "fixed top-0 z-50 flex h-[50px] w-full items-center border-b bg-green-500 px-6 lg:hidden",
        className,
      )}
      style={style}
    >
      <MobileSidebar />
    </nav>
  );
}
