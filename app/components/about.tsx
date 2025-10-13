import type { ResumeData } from "@/data/resumeData";

interface AboutProps {
  data: Pick<ResumeData, "summary">;
}

export const About = ({ data }: AboutProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold tracking-tight text-secondary mb-4">
        About
      </h2>
      <p className="text-foreground/80 leading-relaxed border-l-4 border-accent pl-4 text-justify">{data.summary}</p>
    </section>
  );
};