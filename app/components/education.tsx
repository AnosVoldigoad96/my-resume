import type { ResumeData } from "@/data/resumeData";

interface EducationProps {
  data: ResumeData["education"];
}

export const Education = ({ data }: EducationProps) => {
  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight text-foreground mb-5 flex items-center gap-x-3">
        <span className="inline-block h-6 w-1.5 rounded-full bg-gradient-to-b from-secondary to-accent shrink-0" />
        Education
      </h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-secondary/50 via-accent/30 to-transparent" />
        <div className="space-y-4">
          {data.map((edu) => (
            <div key={edu.school + edu.degree} className="flex gap-x-6">
              <div className="flex-shrink-0 relative w-8 flex items-start justify-center pt-[18px]">
                <div className="h-3 w-3 rounded-full bg-secondary shadow-[0_0_0_4px_rgba(14,165,233,0.15)] z-10" />
              </div>
              <div className="flex-1 pb-2">
                <div className="rounded-xl bg-surface border border-border px-5 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/8 hover:-translate-y-0.5 hover:border-secondary/25">
                  <div className="flex items-start justify-between gap-x-4 flex-wrap gap-y-1">
                    <div>
                      <h3 className="font-semibold text-foreground text-[15px]">{edu.school}</h3>
                      <p className="text-sm text-foreground/70 mt-0.5">{edu.degree}</p>
                    </div>
                    <span className="text-xs text-muted whitespace-nowrap shrink-0">
                      {edu.start} — {edu.end}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
