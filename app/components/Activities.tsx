import type { ResumeData } from "@/data/resumeData";

interface ActivitiesProps {
  data: ResumeData["activities"];
}

export const Activities = ({ data }: ActivitiesProps) => {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-secondary mb-6">
        Activities & Interests
      </h2>
      <div className="flex flex-wrap gap-2">
        {data.map((activity) => (
          <span key={activity} className="bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full border border-accent/20 transition-transform hover:scale-105">
            {activity}
          </span>
        ))}
      </div>
    </section>
  );
};