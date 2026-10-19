import { ThemeProvider } from "next-themes";
import { Archivo, IBM_Plex_Sans_KR } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const plexSansKr = IBM_Plex_Sans_KR({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plex-kr",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo-en",
});

export const metadata = {
  title: "Lucy Park | Full Stack Developer",
  description:
    "풀스택 개발자 Lucy Park의 포트폴리오입니다. React, Next.js, Express, TypeScript를 활용한 프로젝트와 개발 경험을 소개합니다.",
  openGraph: {
    title: "Lucy Park | Full Stack Developer",
    description: "풀스택 개발자 Lucy Park의 프로젝트와 개발 경험을 소개합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ko"
      className={`${plexSansKr.variable} ${archivo.variable} h-full scroll-smooth antialiased motion-reduce:scroll-auto`}
      suppressHydrationWarning
    >
      <head>
        <noscript>
          <style>
            {"[data-reveal]{opacity:1!important;transform:none!important}"}
          </style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
