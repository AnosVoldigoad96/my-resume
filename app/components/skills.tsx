import type { ResumeData } from "@/data/resumeData";

interface SkillsProps {
  data: ResumeData["skills"];
}

export const Skills = ({ data }: SkillsProps) => {
  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight text-foreground mb-5 flex items-center gap-x-3">
        <span className="inline-block h-6 w-1.5 rounded-full bg-gradient-to-b from-primary to-secondary shrink-0" />
        Skills
      </h2>
      <div className="rounded-xl bg-surface border border-border p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
          {data.map((skill) => (
            <div key={skill.name} className="group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs font-semibold text-muted tabular-nums">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
