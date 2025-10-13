import type { ResumeData } from "@/data/resumeData";

interface EducationProps {
  data: ResumeData["education"];
}

export const Education = ({ data }: EducationProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold tracking-tight text-secondary mb-6">
        Education
      </h2>
      <div className="relative border-l-2 border-secondary/20 ml-2">
        {data.map((edu) => (
          <div key={edu.school + edu.degree} className="mb-12 pl-6 sm:pl-8">
            <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-secondary"></div>
            <div className="text-sm font-medium text-foreground/60">
              {edu.start} - {edu.end}
            </div>
            <div className="mt-1">
              <h3 className="font-semibold text-foreground">{edu.school}</h3>
              <p className="text-foreground/80">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};