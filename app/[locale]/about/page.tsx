import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  ProjectAccordion,
  ProjectAccordionProps,
} from "@/components/project-accordion";
import { ArrowLeft } from "lucide-react";
import { SkillsCarousel } from "@/components/skills-carousel";
import {
  ExperienceTimeline,
  ExperienceTimelineProps,
} from "@/components/experience-timeline";
export default function About() {
  const t = useTranslations("about");
  const projects: ProjectAccordionProps[] = [
    {
      title: t("projects.tinyterms.title"),
      description: t("projects.tinyterms.description"),
      liveDemoLink: "https://tinyterms.app/",
      githubLink: "https://github.com/ozimmortal/tiny-terms",
    },
    {
      title: t("projects.solpluse.title"),
      description: t("projects.solpluse.description"),
      liveDemoLink: "https://www.solpluse.com/",
      githubLink: "https://github.com/ozimmortal/dead-wallet",
    },
    {
      title: t("projects.detoxify.title"),
      description: t("projects.detoxify.description"),
      liveDemoLink: "https://safe-text-api-service.onrender.com/",
    },
    {
      title: t("projects.reactminisearch.title"),
      description: t("projects.reactminisearch.description"),
      liveDemoLink: "https://www.npmjs.com/package/@ozbart/react-mini-search",
      githubLink: "https://github.com/ozimmortal/react-mini-search",
    },
    {
      title: t("projects.0docs.title"),
      description: t("projects.0docs.description"),
      githubLink: "https://github.com/ozimmortal/0docs",
    },
  ];
  const experience: ExperienceTimelineProps = {
    experiences: [
      {
        jobTitle: t("experience.places.freelancer.role"),
        jobPlace: t("experience.places.freelancer.company"),
        timeSpent: t("experience.places.freelancer.duration"),
        description: t("experience.places.freelancer.description"),
      },
      {
        jobTitle: t("experience.places.internship.role"),
        jobPlace: t("experience.places.internship.company"),
        timeSpent: t("experience.places.internship.duration"),
        description: t("experience.places.internship.description"),
      },
      {
        jobTitle: t("experience.places.internship2.role"),
        jobPlace: t("experience.places.internship2.company"),
        timeSpent: t("experience.places.internship2.duration"),
        description: t("experience.places.internship2.description")
      },
      
      
    ],
  };

  return (
    <main
      className="min-h-screen flex justify-center px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 bg-gradient-to-br from-background to-muted/20 selection:bg-white selection:text-zinc-950 "
      id="#"
    >
      <div className="w-full max-w-3xl flex flex-col items-center gap-4 p-4  border-zinc-800 text-[0.8rem] ">
        <div className="w-full px-2 sm:px-4 mt-4 sm:mt-7 flex flex-col items-center gap-2 sm:gap-4 ">
          <div className=" flex items-center justify-between w-full px-4 py-2  border-zinc-700 ">
            <h1 className="text-[1.0rem] font-medium">About Me</h1>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-1 text-sm font-medium hover:underline text-zinc-300 "
            >
              <ArrowLeft className="w-4 h-4" />
              Back Home
            </Link>
          </div>
          <div className="mt-4">
            <p className="text-white text-sm leading-relaxed p-4 font-[500] tracking-wide ">
              {t("description")}
            </p>
          </div>
          <div className="w-full">
            <SkillsCarousel />
          </div>
          <div className="w-full p-2">
            <h1 className=" text-sm font-semibold pl-2 text-white">
              {t("projects.title")}
            </h1>
            <div className="w-full p-4">
              <ProjectAccordion projects={projects} />
            </div>
          </div>
          <div className="w-full">
            <h1 className=" text-sm font-semibold pl-2 text-white">
              {t("experience.title")}
            </h1>
            <div className="w-full p-6">
              <ExperienceTimeline experiences={experience.experiences} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
