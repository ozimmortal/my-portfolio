"use client";

import type React from "react";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useRef } from "react";

export interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

interface FloatingDockProps {
  items: DockItem[];
  className?: string;
}

export function FloatingDock({ items, className }: FloatingDockProps) {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);

  return (
    <div
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 z-50",
        "md:bottom-10",
        className,
      )}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
        className={cn(
          "flex items-end gap-2 md:gap-3",
          "px-3 py-2 md:px-5 md:py-2.5",
          "bg-black/90 backdrop-blur-xl",
          "border border-white/10 rounded-3xl",
          "shadow-2xl shadow-black/50",
          "overflow-visible",
        )}
      >
        {items.map((item, idx) => (
          <DockIcon key={idx} {...item} mouseX={mouseX} />
        ))}
      </motion.div>
    </div>
  );
}
//@typescript-eslint/no-explicit-any
function DockIcon({
  title,
  icon,
  href,
  mouseX,
}: DockItem & { mouseX: number | any }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [32, 64, 32]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  });

  const heightSync = useTransform(distance, [-150, 0, 150], [32, 64, 32]);
  const height = useSpring(heightSync, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  });

  const ySync = useTransform(distance, [-150, 0, 150], [0, -40, 0]);
  const y = useSpring(ySync, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  });

  return (
    <Link href={href} ref={ref} className="relative group">
      <motion.div
        style={{ width, height, y }}
        className={cn(
          "flex items-center justify-center",
          "rounded-xl",
          "bg-white/5 hover:bg-white/10",
          "transition-colors duration-300",
          "cursor-pointer",
          "border border-white/5",
        )}
      >
        <div className="size-4 text-white">{icon}</div>
      </motion.div>

      <div
        className={cn(
          "absolute -top-12 left-1/2 -translate-x-1/2 ",
          "px-3 py-1.5 rounded-lg",
          "bg-black/95 text-white text-sm font-medium",
          "border border-white/10 shadow-xl",
          "whitespace-nowrap pointer-events-none",
          "opacity-0 group-hover:opacity-100",
          "transition-all duration-200",
          "scale-90 group-hover:scale-100",
          "-translate-y-1 group-hover:translate-y-0",
        )}
      >
        <span className=" text-xs font-semibold">{title}</span>
        <div className="absolute  -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/95 border-r border-b border-white/10 rotate-45" />
      </div>
    </Link>
  );
}
