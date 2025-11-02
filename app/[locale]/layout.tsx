import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { HomeIcon, BookOpen, User } from "lucide-react";
import { FloatingDock } from "@/components/floating-dock";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getTranslations } from "next-intl/server";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "Oliyad Zelalem",
  description: "This is my Personal Portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const t = await getTranslations("layout");
  const dockItems = [
    {
      title: t("home"),
      icon: <HomeIcon className="w-full h-full" />,
      href: "/",
    },
    {
      title: t("about"),
      icon: <User className="w-full h-full" />,
      href: "/about",
    },
    {
      title: t("blogs"),
      icon: <BookOpen className="w-5 h-5" />,
      href: "/blog",
    },
  ];
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#4B5563 transparent",
        scrollBehavior: "smooth",
      }}
    >
      <body
        className={`antialiased scroll-smooth ${poppinsFont.variable} overflow-auto `}
      >
        <NextIntlClientProvider messages={messages}>
          <main>{children}</main>
          <FloatingDock items={dockItems} className="w-fit " />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
