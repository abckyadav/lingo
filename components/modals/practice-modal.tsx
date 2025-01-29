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
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePracticeModal } from "@/store/use-practice-modal";

type PracticeModalProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function PracticeModal({
  className,
  style,
}: PracticeModalProps) {
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = usePracticeModal();

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  return (
    <div className={cn("", className)} style={style}>
      <Dialog open={isOpen} onOpenChange={close}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="mb-5 flex w-full items-center justify-center">
              <Image src="/heart.svg" alt="heart" height={100} width={100} />
            </div>
            <DialogTitle className="text-center text-2xl font-bold">
              Practice lesson!
            </DialogTitle>
            <DialogDescription className="text-center text-base">
              Use practice lessons to regain hearts and points. You cannot loose
              hearts or points in practice lessons.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mb-4">
            <div className="flex w-full flex-col gap-y-4">
              <Button
                variant="primary"
                className="w-full"
                size="lg"
                onClick={close}
              >
                I understand
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
