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
        "lg:hidden px-6 h-[50px] flex items-center bg-green-500 border-b fixed top-0 w-full z-50",
        className
      )}
      style={style}
    >
      <MobileSidebar />
    </nav>
  );
}
