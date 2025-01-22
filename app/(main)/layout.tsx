import MobileHeader from "@/components/mobile-header";
import Sidebar from "@/components/sidebar";
import { cn } from "@/lib/utils";

type MainLayoutProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export default function MainLayout({
  className,
  style,
  children,
}: MainLayoutProps) {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main
        className={cn("lg:pl-[256px] h-full pt-[50px] lg:pt-0", className)}
        style={style}
      >
        <div className="bg-red-500 h-full">{children}</div>
      </main>
    </>
  );
}
