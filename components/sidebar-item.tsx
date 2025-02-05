"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SideBarItemProps = {
  className?: string;
  style?: React.CSSProperties;
  label: string;
  iconSrc: string;
  href: string;
};

export default function SidebarItem({
  className,
  style,
  label,
  iconSrc,
  href,
}: SideBarItemProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <div className={cn("", className)} style={style}>
      <Button
        variant={active ? "sidebarOutline" : "sidebar"}
        className="h-[52px] w-full justify-start"
        asChild
      >
        <Link href={href}>
          <Image
            src={iconSrc}
            width={32}
            height={32}
            alt={label}
            className="mr-5"
          />
          {label}
        </Link>
      </Button>
    </div>
  );
}
