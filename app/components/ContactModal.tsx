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
    // Wait for the animation to finish before calling the parent's onClose
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm ${isClosing ? 'animate-[modal-backdrop-hide_0.3s_ease-in_forwards]' : 'animate-[modal-backdrop-show_0.3s_ease-out]'}`}
      onClick={handleClose}
    >
      <div
        className={`relative m-4 w-full max-w-sm rounded-xl bg-background p-8 shadow-lg shadow-accent/20 sm:max-w-lg ${isClosing ? 'animate-[modal-content-hide_0.3s_ease-in_forwards]' : 'animate-[modal-content-show_0.3s_ease-out]'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-background/50 transition-colors hover:bg-secondary/20"
          aria-label="Close contact form"
        >
          <X className="h-5 w-5 text-foreground/70" />
        </button>
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-primary">Contact Me</h3>
          <p className="text-sm text-foreground/60">I&apos;ll get back to you as soon as possible.</p>
        </div>
        <ContactForm onSuccess={handleClose} />
      </div>
    </div>
  );
};