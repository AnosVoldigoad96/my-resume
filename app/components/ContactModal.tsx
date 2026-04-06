"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { ContactForm } from "./ContactForm";

interface ContactModalProps {
  onClose: () => void;
}

export const ContactModal = ({ onClose }: ContactModalProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-foreground/25 backdrop-blur-md ${
        isClosing
          ? "animate-[modal-backdrop-hide_0.3s_ease-in_forwards]"
          : "animate-[modal-backdrop-show_0.3s_ease-out]"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative m-4 w-full max-w-sm rounded-2xl bg-surface border border-border p-8 shadow-2xl shadow-primary/10 sm:max-w-md ${
          isClosing
            ? "animate-[modal-content-hide_0.3s_ease-in_forwards]"
            : "animate-[modal-content-show_0.3s_ease-out]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/5 transition-colors hover:bg-foreground/10"
          aria-label="Close contact form"
        >
          <X className="h-4 w-4 text-muted" />
        </button>
        <div className="mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get in Touch
          </h3>
          <p className="mt-1 text-sm text-muted">I&apos;ll get back to you as soon as possible.</p>
        </div>
        <ContactForm onSuccess={handleClose} />
      </div>
    </div>
  );
};
