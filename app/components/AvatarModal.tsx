import Image from "next/image";

interface AvatarModalProps {
  imageUrl: string;
  title: string;
  onClose: () => void;
}

export const AvatarModal = ({ imageUrl, title, onClose }: AvatarModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-[modal-backdrop-show_0.3s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative h-64 w-64 animate-[modal-content-show_0.3s_ease-out] sm:h-80 sm:w-80"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={imageUrl}
          alt={`Profile picture of ${title}`}
          layout="fill"          
          className="rounded-full object-cover shadow-lg shadow-accent/20"
        />
      </div>
    </div>
  );
};