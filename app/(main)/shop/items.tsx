"use client";

import { refillHearts } from "@/actions/user-progress";
import { createStripeUrl } from "@/actions/user-subscription";
import { Button } from "@/components/ui/button";
import { DEFAULT_HEARTS, POINTS_TO_REFILL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";

type ItemsProps = {
  className?: string;
  style?: React.CSSProperties;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export default function Items({
  className,
  style,
  hearts,
  points,
  hasActiveSubscription,
}: ItemsProps) {
  const [pending, startTransition] = useTransition();

  const onRefillHearts = () => {
    if (pending || hearts === DEFAULT_HEARTS || points < POINTS_TO_REFILL) {
      return;
    }

    startTransition(() => {
      refillHearts().catch((error) =>
        toast.error(
          "Something went wrong, while refill hearts " + error.message,
        ),
      );
    });
  };

  const onUpgrade = () => {
    toast.loading("Please wait...");
    startTransition(() => {
      createStripeUrl()
        .then((response) => {
          if (response.data) {
            window.location.href = response.data;
          }
        })
        .catch((error) =>
          toast.error("Something went wrong, while upgrade " + error.message),
        );
    });
  };

  return (
    <ul className={cn("w-full", className)} style={style}>
      <div className="flex w-full items-center gap-x-4 border-t-2 p-4">
        <Image src="/heart.svg" alt="heart" height={60} width={60} />
        <div className="flex-1">
          <p className="text-base font-bold text-neutral-700 lg:text-xl">
            Refill hearts
          </p>
        </div>
        <Button
          disabled={
            pending || hearts === DEFAULT_HEARTS || points < POINTS_TO_REFILL
          }
          onClick={onRefillHearts}
        >
          {hearts === DEFAULT_HEARTS ? (
            "full"
          ) : (
            <div className="flex items-center">
              <Image src="/points.svg" alt="points" height={20} width={20} />
              <p>{POINTS_TO_REFILL}</p>
            </div>
          )}
        </Button>
      </div>

      <div className="flex w-full items-center gap-x-4 border-t-2 p-4 pt-8">
        <Image src="/unlimited.svg" alt="unlimited" height={60} width={60} />
        <div className="flex-1">
          <p className="text-base font-bold text-neutral-700 lg:text-xl">
            Unlimited hearts
          </p>
        </div>

        <Button onClick={onUpgrade} disabled={pending}>
          {hasActiveSubscription ? "settings" : "upgrade"}
        </Button>
      </div>
    </ul>
  );
}
