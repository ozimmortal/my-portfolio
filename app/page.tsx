"use client";

import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import { ArrowDown, ArrowRight,Github,Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import ProjectCard from "@/components/home/project-card";
import { projectsData} from "@/lib/data";
import Contact from "@/components/home/contact";
import Skills from "@/components/home/skills";
export default function Home() {
  const introduction = `I'm a developer with a deep passion for building innovative and scalable applications. My expertise spans full-stack web development, software engineering,  and embedded systems.`;
  return (
    <div className="w-full flex items-center justify-center p-2" >
      <div className=" w-full md:w-[90%] lg:w-1/2 flex flex-col items-center">
          <section className="hero mt-4 w-ful flex flex-col items-center" id="home">
              <motion.div 
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              >
              <div className="relative shadow-md  border-yellow-100 rounded-full border-4">
                <Image src="/profile.jpg" alt="Oliyad profile Image" quality={"95"} priority={true} width={120} height={120} className="rounded-full"></Image>
                <p className="absolute bottom-0 right-0 text-2xl">👋</p>
              </div>
              </motion.div>
              <div className="text-center w-[80%] mt-8 mb-10 ">
                <h4 className="scroll-m-20 text-md font-semibold tracking-tight">
              Hi, I am{"  "}
              <span>Oliyad Zelalem 👋</span>
            </h4>
                  <TextGenerateEffect duration={0.5} words={introduction} className="text-slate-200 text-lg mt-4" />
              </div>
              <div className="flex gap-2 mt-8">
                <Button onClick={() => {window.location.href="#contact"}}>Contact me here <ArrowRight /></Button>
                <a className="bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 flex items-center gap-2 rounded-md text-sm" href="/oresume.pdf" download={true}>Download Cv  <ArrowDown className="size-4" /></a>
              </div>
              <div className="flex gap-3 mt-8">
                  <Link className="border p-3 rounded-full shadow-sm hover:bg-slate-50" href="https://github.com/ozimmortal" ><Github  /></Link>
                  <Link className="border p-3 rounded-full shadow-sm hover:bg-slate-50" href="https://www.linkedin.com/in/oliyad-zelalem" ><Linkedin /></Link>
              </div>

              <div className="mt-8 border-l-2 h-14 border-l-slate-200">

              </div>
          </section>
          <section className="aboutme mt-20 mb-12 w-ful flex flex-col items-center " id="about">
          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            About Me
          </h2>
          <div className=" w-[80%] mt-10 mb-12   ">
          Hi ! I&apos;m Oliyad, a software engineering student and full-stack developer with a passion for building good software. 
          With expertise in React (Next.js), Express.js, and Socket.io, I love turning ideas into functional, high-performance applications. Whether it&apos;s crafting dynamic frontends, optimizing backend performance, or integrating real-time features, I thrive on solving complex challenges with clean and efficient code.Beyond coding, you&apos;ll often find me exploring new tech trends, experimenting with AI tools, or diving into game logic development.
           I&apos;m always eager to learn, push boundaries, and create impactful solutions that blend innovation with practicality.
          </div>
          </section>
          <section className="myprojects mt-4 mb-8 w-ful flex flex-col items-center " id="projects">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
              My Projects
            </h2>
            <div className="w-[97%] mt-10" >
            {projectsData.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
            </div>
          </section>
          <section className="myprojects mt-10  w-ful flex flex-col items-center " id="skills">
          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
              My Skills
            </h2>
            <div className="w-[97%] mt-10 flex flex-wrap gap-4">
              <Skills/>
            </div>
          </section>
          <section className="myprojects  mb-8 w-ful flex flex-col items-center" id="contact">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
              Contact me
            </h2>
            <div className="w-[97%] mt-10" >
              <Contact/>
            </div>
          </section>
      </div>
    </div>
  );
}
