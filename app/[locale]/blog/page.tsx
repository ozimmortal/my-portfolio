import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Blog() {
  const t = useTranslations("blog");
  return (
    <main
      className="min-h-screen flex justify-center px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 bg-gradient-to-br from-background to-muted/20 selection:bg-white selection:text-zinc-950 "
      id="#"
    >
      <div className="w-full max-w-3xl flex flex-col items-center gap-4 p-4  border-zinc-800 text-[0.8rem] ">
        <div className="w-full px-2 sm:px-4 mt-4 sm:mt-7 flex items-center justify-between gap-2 sm:gap-4">
          <div className=" flex flex-col">
            <h1 className="text-2xl font-bold">{t("title")}</h1>
            <p className="text-sm text-zinc-600">{t("description")}</p>
          </div>
          <div>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-1 text-sm font-medium hover:underline text-zinc-300"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("backhome")}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
