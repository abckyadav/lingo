import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type PromoProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function Promo({ className, style }: PromoProps) {
  return (
    <div
      className={cn("space-y-4 rounded-xl border-2 p-4", className)}
      style={style}
    >
      <div className="space-y-2">
        <div className="flex items-center">
          <Image alt="Pro" src="/unlimited.svg" width={26} height={26} />
          <h3 className="ml-4 text-lg font-bold">Upgrade to Pro</h3>
        </div>

        <p className="text-muted-foreground">Get unlimited hearts and more!</p>
      </div>
      <Button variant="super" className="w-full" size="lg" asChild>
        <Link href="/shop">Upgrade today</Link>
      </Button>
    </div>
  );
}
