"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChangeEvent, useTransition } from "react";
import { useParams } from "next/navigation";
export default function LanguageSelector({
  defaultLocale,
}: {
  defaultLocale?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const params = useParams();
  const handleLanguageChange = (locale: string) => {
    startTransition(() => {
      //@ts-expect-error
      router.replace({ pathname, params }, { locale: locale });
    });
  };
  return (
    <div className=" mt-1">
      <Select defaultValue={defaultLocale} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-16 md:w-32 border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-800">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent className="bg-zinc-900 text-zinc-300 text-xs border-zinc-700 w-fit ">
          <SelectItem value="en" defaultChecked>
            <span>🇬🇧</span>
            <span className="hidden md:inline ml-2 text-xs">English</span>
          </SelectItem>
          <SelectItem value="se">
            <span>🇸🇪</span>
            <span className="hidden md:inline ml-2 text-xs">Sueco</span>
          </SelectItem>
          <SelectItem value="es">
            <span>🇪🇸</span>
            <span className="hidden md:inline ml-2 text-xs">Español</span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
