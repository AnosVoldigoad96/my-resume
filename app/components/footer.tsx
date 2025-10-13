import type { ResumeData } from "@/data/resumeData";

interface FooterProps {
  data: Pick<ResumeData, "contact" | "name">;
}

export const Footer = ({ data }: FooterProps) => {
  const { name } = data;
  return (
    <footer className="mt-2.5 border-t bg-background/50 pt-8 pb-4">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <p className="text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};