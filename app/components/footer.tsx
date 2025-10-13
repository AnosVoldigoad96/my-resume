import type { ResumeData } from "@/data/resumeData";
import { Download } from "lucide-react";

interface FooterProps {
  data: Pick<ResumeData, "contact" | "name">;
}

export const Footer = ({ data }: FooterProps) => {
  const { contact, name } = data;
  return (
    <footer className="mt-12 border-t bg-background/50 pt-8 pb-4">
      <div className="container mx-auto flex max-w-3xl items-center justify-between gap-4 px-4">
        <p className="text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <a
          href="/Hassaan Qazi Resume.pdf"
          download
          className="inline-flex items-center justify-center gap-x-2 whitespace-nowrap rounded-md bg-accent/90 px-4 py-2 text-sm font-semibold text-background shadow-sm transition-all hover:bg-accent hover:scale-105"
        >
          <Download className="h-4 w-4" />
          Resume
        </a>
      </div>
    </footer>
  );
};