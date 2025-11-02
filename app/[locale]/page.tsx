import { ProfileHeader } from "@/components/header";
import { useTranslations } from "next-intl";
import { Code2, Server, Cloud, Cpu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const t = useTranslations("homepage");

  return (
    <main
      className="min-h-screen flex justify-center px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 bg-gradient-to-br from-background to-muted/20 selection:bg-white selection:text-zinc-950 "
      id="#"
    >
      <div className="w-full max-w-3xl flex flex-col items-center gap-4 p-4  border-zinc-800 text-[0.8rem] ">
        <div className="w-full px-2 sm:px-4 mt-4 sm:mt-7 flex flex-col gap-2 sm:gap-4">
          <ProfileHeader
            jobTitle={t("header.jobtitle")}
            hireme={t("header.hireme")}
          />

          <p className="text-zinc-300  leading-relaxed px-4 sm:px-6 py-2 sm:py-2 font-[500] tracking-wide ">
            {t("profile.description")}
          </p>
          <div className="w-full px-4">
            <h1 className="text-sm font-semibold text-white mb-2">
              {t("focusareas.title")}:
            </h1>
            <ul className="space-y-2 text-zinc-300 text-[0.8rem] font-[500] tracking-wide list-disc pl-5">
              <li className="flex items-center gap-2">
                <Code2 size={14} className="text-zinc-400" />
                <span>{t("focusareas.fullstack")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Server size={14} className="text-zinc-400" />
                <span>{t("focusareas.devops")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Cloud size={14} className="text-zinc-400" />
                <span>{t("focusareas.scalability")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Cpu size={14} className="text-zinc-400" />
                <span>{t("focusareas.automation")}</span>
              </li>
            </ul>
          </div>
          <div className="w-full px-4">
            <h1 className="text-sm font-semibold text-white mb-2">
              {t("services.title")}:
            </h1>
            <div className="w-full px-3">
              <Accordion
                type="single"
                collapsible
                className="w-full gap-1 border-b-zinc-700"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {t("services.fullstack.title")}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col  text-balance">
                    <p className="p-2">{t("services.fullstack.description")}</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    {t("services.devops.title")}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className="p-2">{t("services.devops.description")}</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>{t("services.ai.title")}</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className="p-2">{t("services.ai.description")}</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>{t("services.api.title")}</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className="p-2">{t("services.api.description")}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
