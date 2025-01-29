"use client";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useHeartsModal } from "@/store/use-hearts-modal";

type HeartsModalProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function HeartsModal({ className, style }: HeartsModalProps) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useHeartsModal();

  useEffect(() => setIsClient(true), []);

  const onClick = () => {
    close();
    router.push("/store");
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className={cn("", className)} style={style}>
      <Dialog open={isOpen} onOpenChange={close}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="mb-5 flex w-full items-center justify-center">
              <Image
                src="/mascot_bad.svg"
                alt="mascot"
                height={80}
                width={80}
              />
            </div>
            <DialogTitle className="text-center text-2xl font-bold">
              You ran out of hearts!
            </DialogTitle>
            <DialogDescription className="text-center text-base">
              Get Pro for unlimited hearts, or purchase them in the store.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mb-4">
            <div className="flex w-full flex-col gap-y-4">
              <Button
                variant="primary"
                className="w-full"
                size="lg"
                onClick={onClick}
              >
                Get unlimited hearts
              </Button>

              <Button
                variant="primaryOutline"
                className="w-full"
                size="lg"
                onClick={close}
              >
                No thanks
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
