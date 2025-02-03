import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/home/navbar";
import { ThemeProvider } from "@/components/theme/theme-provider"
import Footer from "@/components/home/footer";



export const metadata: Metadata = {
  title: "Oliyad | Personal Portfolio",
  description: "This is Oliyad's Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <header>
            <NavBar />

        </header>
        <main>
        {children}
        </main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
