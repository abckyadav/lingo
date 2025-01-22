import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
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
          <Menu className="text-white" />
        </SheetTrigger>
        <SheetContent className="p-0 z-[100]" side="left">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
}
