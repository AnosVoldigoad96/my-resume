import type { ResumeData } from "@/data/resumeData";

interface AboutProps {
  data: Pick<ResumeData, "summary">;
}

export const About = ({ data }: AboutProps) => {
  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight text-foreground mb-5 flex items-center gap-x-3">
        <span className="inline-block h-6 w-1.5 rounded-full bg-gradient-to-b from-primary to-secondary shrink-0" />
        About
      </h2>
      <div className="rounded-xl bg-surface border border-border p-5">
        <p className="text-foreground/75 leading-relaxed text-[15px]">{data.summary}</p>
      </div>
    </section>
  );
};
