import Image from "next/image";
import { X } from "lucide-react";

interface CertificateModalProps {
  imageUrl: string;
  title: string;
  onClose: () => void;
}

export const CertificateModal = ({ imageUrl, title, onClose }: CertificateModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-[modal-backdrop-show_0.3s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative m-4 w-full max-w-sm max-h-[85vh] rounded-xl bg-background p-4 shadow-lg shadow-accent/20 animate-[modal-content-show_0.3s_ease-out] md:max-w-lg lg:max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/50 transition-colors hover:bg-secondary/20"
          aria-label="Close certificate view"
        >
          <X className="h-5 w-5 text-foreground/70" />
        </button>
        <div className="relative w-full h-[calc(85vh-2rem)]">
          <Image
            src={imageUrl}
            alt={`Certificate for ${title}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};