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
import { useExitModal } from "@/store/use-exit-modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

type ExitModalProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function ExitModal({ className, style }: ExitModalProps) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useExitModal();

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
              <Image
                src="/mascot_sad.svg"
                alt="mascot"
                height={80}
                width={80}
              />
            </div>
            <DialogTitle className="text-center text-2xl font-bold">
              Wait, don&apos;t go!
            </DialogTitle>
            <DialogDescription className="text-center text-base">
              You&apos;re about to leave the lesson, Are you sure?
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
                Keep Learning
              </Button>

              <Button
                variant="dangerOutline"
                className="w-full"
                size="lg"
                onClick={() => {
                  close();
                  router.push("/learn");
                }}
              >
                End Session
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
