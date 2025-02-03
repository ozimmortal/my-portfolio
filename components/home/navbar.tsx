"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from '../theme/mode-toggle';
import { motion } from "motion/react";
import { cn } from '@/lib/utils';
import {links } from '@/lib/data';

export default function NavBar() {
    const current_path = usePathname();
  return (
    <div className='w-full flex items-center justify-center  p-6'>
        <motion.div
         initial={{ opacity: 0, scale: 0 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
             duration: 0.4,
             scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
         }}
        >
        <div className=' w-full md:w-[450px]  flex items-center justify-center gap-3 mt-2  p-2 shadow-md rounded-xl '>
            {links.map((link) => (
                <Link key={link.title} href={link.href} className={cn('text-sm font-semibold  rounded-md  pl-2 pr-2 pt-1 pb-1 shadow-sm hover:bg-accent hover:text-accent-foreground', current_path === link.href && 'bg-accent text-accent-foreground')}>{link.title}</Link>
            ))}
            <ModeToggle />
        </div>
        </motion.div>
    </div>
  )
}
