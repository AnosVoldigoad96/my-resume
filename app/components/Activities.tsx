import type { ResumeData } from "@/data/resumeData";

interface ActivitiesProps {
  data: ResumeData["activities"];
}

const tagColors = [
  "bg-primary/10 text-primary border-primary/20 hover:bg-primary/15",
  "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/15",
  "bg-accent/10 text-accent border-accent/20 hover:bg-accent/15",
  "bg-warning/10 text-warning border-warning/20 hover:bg-warning/15",
];

export const Activities = ({ data }: ActivitiesProps) => {
  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight text-foreground mb-5 flex items-center gap-x-3">
        <span className="inline-block h-6 w-1.5 rounded-full bg-gradient-to-b from-warning to-accent shrink-0" />
        Activities & Interests
      </h2>
      <div className="rounded-xl bg-surface border border-border p-5">
        <div className="flex flex-wrap gap-2.5">
          {data.map((activity, index) => (
            <span
              key={activity}
              className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-default hover:scale-105 ${tagColors[index % tagColors.length]}`}
            >
              {activity}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
