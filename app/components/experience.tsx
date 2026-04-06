import type { ResumeData } from "@/data/resumeData";

interface WorkExperienceProps {
  data: ResumeData["work"];
}

export const WorkExperience = ({ data }: WorkExperienceProps) => {
  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight text-foreground mb-5 flex items-center gap-x-3">
        <span className="inline-block h-6 w-1.5 rounded-full bg-gradient-to-b from-primary to-secondary shrink-0" />
        Work Experience
      </h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent" />
        <div className="space-y-5">
          {data.map((job) => (
            <div key={job.company} className="flex gap-x-6">
              <div className="flex-shrink-0 relative w-8 flex items-start justify-center pt-[18px]">
                <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_rgba(99,102,241,0.15)] z-10" />
              </div>
              <div className="flex-1 pb-2">
                <div className="rounded-xl bg-surface border border-border p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/8 hover:-translate-y-0.5 hover:border-primary/25">
                  <div className="flex items-start justify-between gap-x-4 flex-wrap gap-y-2">
                    <div>
                      <h3 className="font-semibold text-foreground text-[15px]">{job.company}</h3>
                      <p className="text-sm font-medium text-primary/80 mt-0.5">{job.title}</p>
                    </div>
                    <div className="flex flex-col items-end gap-y-1.5">
                      <span className="text-xs text-muted whitespace-nowrap">
                        {job.start} — {job.end}
                      </span>
                      {job.badges.length > 0 && (
                        <div className="flex flex-wrap gap-1 justify-end">
                          {job.badges.map((badge) => (
                            <span
                              key={badge}
                              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{job.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
