import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import LanguageSelector from "./language-select";
import { useLocale } from "next-intl";
import { Button } from "./ui/button";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function ProfileHeader({
  jobTitle,
  hireme,
}: {
  jobTitle?: string;
  hireme?: string;
}) {
  const locale = useLocale();
  return (
    <header className=" border-zinc-800 pt-3 ">
      <div className="container mx-auto px-4  flex justify-between  border-zinc-800 pb-3">
        <div className="flex flex-col justify-between gap-4 ">
          {/* Profile Info */}
          <div className="flex items-center gap-3">
            <Avatar className="size-10">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/78490326?v=4"
                alt="Oliyad Zelalem"
              />
              <AvatarFallback className="bg-zinc-800 text-white">
                OZ
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-s font-semibold tracking-tight first:mt-0 hover:text-blue-300 transition-colors">
                Oliyad Zelalem Abdena
              </h1>
              <p className="text-xs font-semibold text-zinc-400">
                {jobTitle ? jobTitle : "Software Engineer"}
              </p>
            </div>
          </div>

          {/* Language Selector */}
          <LanguageSelector defaultLocale={locale} />

          {/* Right side: Social + Language */}
          <div className="flex flex-col  gap-4 md:flex-row  mt-1">
            {/* Social Links */}
            <div className=" gap-4 flex">
              <Link
                href="https://www.linkedin.com/in/oliyad-zelalem"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-zinc-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="size-4" />
              </Link>
              <Link
                href="mailto:oliyad.dev@gmail.com"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="size-4" />
              </Link>
              <Link
                href="https://x.com/oliyadza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex items-center gap-1 text-zinc-400 hover:text-sky-400 transition-colors"
              >
                <Twitter className="size-4" />
              </Link>
              <Link
                href="https://github.com/ozimmortal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-4" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <HoverBorderGradient
            containerClassName="rounded-full "
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <Link href="mailto:oliyad.dev@gmail.com">
              {" "}
              <span className=" text-xs font-bold">{hireme}</span>
            </Link>
          </HoverBorderGradient>
        </div>
      </div>
    </header>
  );
}
