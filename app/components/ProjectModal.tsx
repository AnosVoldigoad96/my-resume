import type { ResumeData } from "@/data/resumeData";
import { X } from "lucide-react";

type Project = ResumeData["projects"][0];

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const DetailRenderer = ({
  detail,
}: {
  detail: NonNullable<Project["details"]>[0];
}) => {
  switch (detail.type) {
    case "heading":
      return (
        <h4 className="text-base font-semibold text-foreground mt-6 mb-2 pb-1.5 border-b border-border flex items-center gap-x-2">
          <span className="h-4 w-1 rounded-full bg-gradient-to-b from-primary to-secondary shrink-0" />
          {detail.content}
        </h4>
      );
    case "paragraph":
      return (
        <p className="text-sm text-foreground/75 leading-relaxed mb-4">
          {detail.content}
        </p>
      );
    case "list":
      return (
        <ul className="space-y-2 mb-4">
          {detail.items?.map((item, index) => (
            <li key={index} className="flex items-start gap-x-3 text-sm text-foreground/75">
              <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/25 backdrop-blur-md animate-[modal-backdrop-show_0.3s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative m-4 w-full max-w-sm max-h-[85vh] overflow-y-auto rounded-2xl bg-surface border border-border p-6 shadow-2xl shadow-primary/10 animate-[modal-content-show_0.3s_ease-out] no-scrollbar md:max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/5 transition-colors hover:bg-foreground/10"
          aria-label="Close project details"
        >
          <X className="h-4 w-4 text-muted" />
        </button>

        <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 pr-8">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/15"
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
          <p className="text-sm text-foreground/75 leading-relaxed">
            {project.description}
          </p>
        )}
      </div>
    </div>
  );
};
