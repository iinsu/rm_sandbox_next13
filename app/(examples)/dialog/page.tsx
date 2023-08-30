"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DefaultModal } from "@/components/modal/default-modal";
import { useState } from "react";
import { ConfirmModal } from "@/components/modal/alert-modal";

const DialogPage = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleCheck = () => {
    setOpen(false);
  };

  const [alertOpen, setAlertOpen] = useState(false);
  const handleConfirm = () => {
    setAlertOpen(false);
  };
  return (
    <>
      <div className="flex items-center justify-center h-full gap-3 bg-stone-200">
        <Button onClick={() => setOpen(true)}>Default</Button>
        <Button onClick={() => setAlertOpen(true)}>Alert</Button>
      </div>

      <DefaultModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={handleCheck}
        loading={loading}
      />
      <ConfirmModal
        isOpen={alertOpen}
        onClose={() => setAlertOpen(false)}
        onConfirm={handleConfirm}
        loading={loading}
      />
    </>
  );
};

export default DialogPage;
