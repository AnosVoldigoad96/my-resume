import type { ResumeData } from "@/data/resumeData";

interface FooterProps {
  data: Pick<ResumeData, "contact" | "name">;
}

export const Footer = ({ data }: FooterProps) => {
  const { name } = data;
  return (
    <footer className="mt-12 border-t border-border/50">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-6 text-center">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
