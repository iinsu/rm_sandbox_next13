"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/modal";
import { Button } from "@/components/ui/button";

interface DefaultModal {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const DefaultModal: React.FC<DefaultModal> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Default"
      description="Common Modal"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex items-center justify-end w-full pt-6 space-x-2">
        <Button disabled={loading} onClick={onConfirm}>
          Check
        </Button>
      </div>
    </Modal>
  );
};
