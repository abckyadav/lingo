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
        className={cn("h-full pt-[50px] lg:pl-[256px] lg:pt-0", className)}
        style={style}
      >
        <div className="mx-auto h-full max-w-[1056px] pt-6">{children}</div>
      </main>
    </>
  );
}
