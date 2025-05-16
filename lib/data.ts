

import quizImg from "@/public/quiz.png";
import agrImg from "@/public/agar.png";
import pollImg from "@/public/poll.png";
import whiteboardImg from "@/public/whiteboard.png";
import solplusImg from "@/public/solpluse.png";


export const projectsData = [
    {
      title: "Quiz App",
      description:
        "A Quiz Builder App. It has features like adding, deleting and editing quizzes.",
      tags: ["Html", "Bulma css","Javascript","Servlet","Java" ,"Mysql"],
      imageUrl: quizImg,
    },
    {
      title: "Agar.Io clone ",
      description:
        "A clone of Agar.io multiplayer game with socket.io and Node.js",
      tags: ["Html", "Css", "Javascript", "express", "Socket.io", "Node.js"],
      imageUrl: agrImg,
    },
    {
      title: "Polling App",
      description:
        "A simple polling app made using svelte. It has features like adding, deleting and editing polls.",
      tags: ["Svelte", "Css"],
      imageUrl: pollImg,
    },
    {
        title: "Collaborative Whiteboard",
        description:
          "A simple whiteboard made using Nextjs for frontend and express for backend. It has features like drawing, erasing and saving whiteboard images.",
        tags: ["Nextjs", "Tailwindcss","Socket.io","Node.js"],
        imageUrl: whiteboardImg,
      },
      {
        title: "Solpluse ",
        description:
          "It is a Solana Wallet activity checkerthat I built",
        tags: ["Nextjs", "Tailwindcss","Upstash Reddis","Node.js","REST API"],
        imageUrl: solplusImg,
      },
  ] as const;




export const skillsData =  [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "HTMX",
  "Node.js",
  "Express.js",
  "Django",
  "Socket.io",
  "WebSockets",
  "Drizzle ORM",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Java",
  "Python",
  "C++",
  "Servlets",
] as const;

export const links = [
  {
      title: "Home",
      href: "#home",
      
  },
  {
      title: "About",
      href: "#about",
      
  },
  {
      title: "Projects",
      href: "#projects",
  },
  {
      title: "Skills",
      href: "#skills",
  },
  {
      title: "Contact",
      href: "#contact",
  }
] as const;