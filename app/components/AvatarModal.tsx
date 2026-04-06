import Image from "next/image";

interface AvatarModalProps {
  imageUrl: string;
  title: string;
  onClose: () => void;
}

export const AvatarModal = ({ imageUrl, title, onClose }: AvatarModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/25 backdrop-blur-md animate-[modal-backdrop-show_0.3s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative animate-[modal-content-show_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary to-secondary opacity-40 blur-lg" />
        <div className="relative h-72 w-72 sm:h-96 sm:w-96">
          <Image
            src={imageUrl}
            alt={`Profile picture of ${title}`}
            layout="fill"
            className="rounded-full object-cover ring-4 ring-surface shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};
