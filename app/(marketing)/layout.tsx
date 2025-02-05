import { cn } from "@/lib/utils";
import Header from "./header";
import Footer from "./footer";

type MarketingLayoutProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export default function MarketingLayout({
  children,
  className,
  style,
}: MarketingLayoutProps) {
  return (
    <div className={cn("flex min-h-screen flex-col", className)} style={style}>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
