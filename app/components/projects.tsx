"use client";

import { useState } from "react";
import type { ResumeData } from "@/data/resumeData";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { ProjectModal } from "./ProjectModal";

type Project = ResumeData["projects"][0];

interface ProjectsProps {
  data: ResumeData["projects"];
}

export const Projects = ({ data }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight text-foreground mb-5 flex items-center gap-x-3">
        <span className="inline-block h-6 w-1.5 rounded-full bg-gradient-to-b from-primary to-secondary shrink-0" />
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.map((project) => (
          <div
            key={project.title}
            className="group relative flex flex-col rounded-xl bg-surface border border-border p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 hover:border-primary/30"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-foreground text-[15px] leading-snug pr-2">{project.title}</h3>
              {project.link.href !== "#" && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 rounded-lg p-1.5 text-muted transition-all hover:bg-primary/10 hover:text-primary"
                  aria-label={`Visit ${project.title}`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
            <p className="text-sm text-foreground/65 leading-relaxed flex-grow mb-4">
              {project.description}
            </p>
            <div className="flex items-center justify-between gap-x-2">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/15"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedProject(project)}
                className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/5 transition-all hover:bg-primary/10 group-hover:text-primary"
                aria-label={`View details for ${project.title}`}
              >
                <ChevronRight className="h-4 w-4 text-muted group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};
