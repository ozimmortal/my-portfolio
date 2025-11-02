"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Twitter } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function Xglimpse() {
  const profileImage =
    "https://pbs.twimg.com/profile_images/1934488067194146816/gbbJRKfx_400x400.jpg";

  return (
    <div className="inline-block">
      <HoverCard openDelay={10} closeDelay={100}>
        <HoverCardTrigger asChild>
          <Link
            href="https://x.com/oliyadza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="flex items-center gap-1 text-zinc-400 hover:text-sky-400 transition-colors"
          >
            <Twitter className="size-4" />
          </Link>
        </HoverCardTrigger>

        <HoverCardContent className="w-80 z-[20] bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-2xl p-4 shadow-xl transition-all duration-200">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex gap-4"
          >
            <Avatar className="size-14 ring-1 ring-zinc-700">
              <AvatarImage src={profileImage} />
              <AvatarFallback>OZ</AvatarFallback>
            </Avatar>

            <div className="flex flex-col justify-between space-y-1">
              <div>
                <Link
                  href="https://x.com/oliyadza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" underline hover:text-zinc-400 mb-1.5"
                >
                  <h4 className="text-sm font-semibold text-white">
                    @oliyadza
                  </h4>
                </Link>
                <p className="text-xs font-semibold text-zinc-400 leading-snug">
                  I make things on the internet. Sometimes they work.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-zinc-500 mt-2">
                Joined February 2025
              </div>
            </div>
          </motion.div>

          <div className="mt-3 border-t border-zinc-800 pt-3 text-xs flex justify-between text-zinc-400">
            <span>
              <span className="text-white font-semibold">10</span> Following
            </span>
            <span>
              <span className="text-white font-semibold">3</span> Followers
            </span>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
