"use client";

import { useState } from "react";
import type { ResumeData } from "@/data/resumeData";
import { Link as LinkIcon, ChevronRight } from "lucide-react";
import { ProjectModal } from "./ProjectModal";

type Project = ResumeData["projects"][0];

interface ProjectsProps {
  data: ResumeData["projects"];
}

export const Projects = ({ data }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold tracking-tight text-secondary mb-6">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.map((project) => (
          <div
            key={project.title}
            className="group relative flex cursor-pointer flex-col rounded-lg p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20"
            onClick={() => setSelectedProject(project)}
          >
            <div className="flex-grow">
              <h3 className="font-semibold text-foreground">{project.title}</h3>
              <p className="mt-2 text-sm text-foreground/70 text-justify">{project.description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="bg-accent/10 text-accent text-xs font-medium px-2.5 py-0.5 rounded-full border border-accent">
                  {tech}
                </span>
              ))}
            </div>
            {project.link.href !== "#" && (
              <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="absolute right-4 top-4">
                <LinkIcon className="h-5 w-5 text-foreground/40 transition-colors group-hover:text-primary" />
              </a>
            )}
            <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/50 transition-colors group-hover:bg-accent/20">
              <ChevronRight className="h-5 w-5 text-foreground/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};