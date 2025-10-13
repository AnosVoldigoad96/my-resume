import type { ResumeData } from "@/data/resumeData";

interface SkillsProps {
  data: ResumeData["skills"];
}

export const Skills = ({ data }: SkillsProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold tracking-tight text-secondary mb-6">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        {data.map((skill, idx) => {
          const level = Math.round(skill.level / 10);
          const bars = Array(10).fill(0);

          return (
            <div key={skill.name} className="flex items-center justify-between rounded-lg p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20">
              <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
              <div className="flex items-center gap-1" title={`${skill.level}% Expertise`}>
                {bars.map((_, i) => (
                  <div
                    key={i}
                    className={`h-4 w-1 rounded-full transition-colors duration-300 ${
                      i < level ? "bg-secondary" : "bg-secondary/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};