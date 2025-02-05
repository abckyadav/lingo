import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu as MenuIcon } from "lucide-react";
import Sidebar from "./sidebar";

type MobileSidebarProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function MobileSidebar({
  className,
  style,
}: MobileSidebarProps) {
  return (
    <div className={cn("", className)} style={style}>
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="text-white" />
        </SheetTrigger>
        <SheetContent className="z-[100] p-0" side="left">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
}
