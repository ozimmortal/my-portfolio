import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Github, SquareArrowOutUpRight } from "lucide-react";

export interface ProjectAccordionProps {
  title: string;
  description: string;
  githubLink?: string;
  liveDemoLink?: string;
}
export function ProjectAccordion({
  projects,
}: {
  projects: ProjectAccordionProps[];
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-0"
    >
      {projects.map((project, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{project.title}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4  ">
            <p>{project.description}</p>
            <div className=" flex gap-2">
              {project.githubLink && (
                <Link href={project.githubLink} target="_blank">
                  <Github className="size-4" />
                </Link>
              )}
              {project.liveDemoLink && (
                <Link href={project.liveDemoLink} target="_blank">
                  <SquareArrowOutUpRight className="size-4" />
                </Link>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
