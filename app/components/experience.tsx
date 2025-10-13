import type { ResumeData } from "@/data/resumeData";

interface WorkExperienceProps {
  data: ResumeData["work"];
}

export const WorkExperience = ({ data }: WorkExperienceProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold tracking-tight text-secondary mb-6">
        Work Experience
      </h2>
      <div className="relative border-l-2 border-secondary/20 ml-2">
        {data.map((job) => (
          <div key={job.company} className="mb-12 pl-8">
            <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-secondary"></div>
            <div className="text-sm font-medium text-foreground/60">
              {job.start} - {job.end}
            </div>
            <div className="mt-1">
              <h3 className="font-semibold text-foreground">
                {job.company}
                {job.badges.length > 0 && (
                  <div className="inline-flex ml-2">
                    {job.badges.map((badge) => (
                      <span key={badge} className="bg-accent/10 text-accent text-xs font-medium me-2 px-2.5 py-0.5 rounded-full border border-accent">
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </h3>
              <p className="font-medium text-foreground/80">{job.title}</p>
              <p className="mt-2 text-foreground/70 text-sm">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};