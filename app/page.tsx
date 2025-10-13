import { resumeData } from "@/data/resumeData";
import { Header } from "@/app/components/header";
import { About } from "@/app/components/about";
import { WorkExperience } from "@/app/components/experience";
import { Education } from "@/app/components/education";
import { Skills } from "@/app/components/skills";
import { Projects } from "@/app/components/projects";
import { Certifications } from "@/app/components/certifications";
import { Activities } from "@/app/components/Activities";
import { Footer } from "@/app/components/footer";

export default function Page() {
  return (
    <>
      <main className="container mx-auto max-w-3xl p-4 sm:p-6 md:p-8">
        <Header data={resumeData} />
        <About data={resumeData} />
        <WorkExperience data={resumeData.work} />
        <Education data={resumeData.education} />
        <Skills data={resumeData.skills} />
        <Projects data={resumeData.projects} />
        <Certifications data={resumeData.certifications} />
        <Activities data={resumeData.activities} />
      </main>
      <Footer data={resumeData} />
    </>
  );
}
