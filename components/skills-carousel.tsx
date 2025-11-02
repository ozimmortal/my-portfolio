"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  TypeScriptLogo,
  NextJsLogo,
  PostgresqlLogo,
  ReactLogo,
  DockerLogo,
  GoLogo,
  PythonLogo,
  KubernetesLogo,
  AwsLogo,
  GitLogo,
} from "./logos";

const skills = [
  {
    name: "TypeScript",
    icon: <TypeScriptLogo />,
    link: "https://www.typescriptlang.org/",
  },
  { name: "Next.js", icon: <NextJsLogo />, link: "https://nextjs.org/" },
  {
    name: "PostgreSQL",
    icon: <PostgresqlLogo />,
    link: "https://www.postgresql.org/",
  },
  { name: "React", icon: <ReactLogo />, link: "https://reactjs.org/" },
  { name: "Docker", icon: <DockerLogo />, link: "https://www.docker.com/" },
  { name: "Go", icon: <GoLogo />, link: "https://golang.org/" },
  { name: "Python", icon: <PythonLogo />, link: "https://www.python.org/" },
  {
    name: "Kubernetes",
    icon: <KubernetesLogo />,
    link: "https://kubernetes.io/",
  },
  { name: "AWS", icon: <AwsLogo />, link: "https://aws.amazon.com/" },
  { name: "Git", icon: <GitLogo />, link: "https://git-scm.com/" },
];

export function SkillsCarousel({ title }: { title?: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full overflow-hidden py-6 md:py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 md:space-y-8"
      >
        <h2 className="text-sm font-semibold pl-4 pr-4 text-white">
          {title || "Skills & Technologies"}
        </h2>

        <div className="relative">
          <div className="flex gap-3 md:gap-4 overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: hoveredIndex !== null ? 0 : 50,
                  ease: "linear",
                },
              }}
            >
              {skills.concat(skills).map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex flex-col items-center justify-center gap-1 md:gap-2 p-2 md:p-3"
                >
                  <Link
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      className="relative flex items-center justify-center"
                      animate={{
                        scale: hoveredIndex === index ? 1.3 : 1,
                        y: hoveredIndex === index ? -8 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 lg:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 lg:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
}
