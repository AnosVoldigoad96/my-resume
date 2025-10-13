import type { ResumeData } from "@/data/resumeData";
import { X } from "lucide-react";

type Project = ResumeData["projects"][0];

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const DetailRenderer = ({ detail }: { detail: NonNullable<Project["details"]>[0] }) => {
  switch (detail.type) {
    case "heading":
      return <h4 className="text-lg font-semibold text-secondary mt-6 mb-2 pb-1 border-b border-secondary/20">{detail.content}</h4>;
    case "paragraph":
      return <p className="text-foreground/80 leading-relaxed mb-4 text-justify">{detail.content}</p>;
    case "list":
      return (
        <ul className="space-y-2 text-foreground/80">
          {detail.items?.map((item, index) => (
            <li key={index} className="flex items-start gap-x-3">
              <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"></span>
              <span className="text-justify">{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-[modal-backdrop-show_0.3s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative m-4 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-background p-8 shadow-lg shadow-accent/20 animate-[modal-content-show_0.3s_ease-out] no-scrollbar"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-background/50 transition-colors hover:bg-secondary/20"
          aria-label="Close project details"
        >
          <X className="h-5 w-5 text-foreground/70" />
        </button>

        <h3 className="text-2xl font-bold text-primary mb-4">{project.title}</h3>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-accent/10 text-accent text-xs font-medium px-2.5 py-0.5 rounded-full border border-accent"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.details ? (
          project.details.map((detail, index) => (
            <DetailRenderer key={index} detail={detail} />
          ))
        ) : (
          <p className="text-foreground/80 leading-relaxed">
            {project.description}
          </p>
        )}
      </div>
    </div>
  );
};