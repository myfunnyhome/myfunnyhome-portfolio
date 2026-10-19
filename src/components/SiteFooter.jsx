import Image from "next/image";
import emailDark from "@/assets/icons/email-dark.svg";
import emailLight from "@/assets/icons/email-light.svg";
import githubDark from "@/assets/icons/github-dark.svg";
import githubLight from "@/assets/icons/github-light.svg";

const LINKS = [
  {
    href: "https://github.com/myfunnyhome",
    label: "GitHub",
    light: githubLight,
    dark: githubDark,
    external: true,
  },
  {
    href: "mailto:lucy920815@gmail.com",
    label: "이메일 보내기",
    light: emailLight,
    dark: emailDark,
  },
];

export default function SiteFooter() {
  return (
    <footer className="page-container flex flex-col items-start gap-3.5 py-8 text-[13px] leading-[1.4] text-ash md:flex-row md:items-center md:gap-0 md:pt-10 md:pb-14">
      <p>© 2026 박지선 Lucy Park</p>
      <p className="font-archivo md:ml-auto">Built with Next.js</p>
      <ul className="flex items-center gap-4.5 md:ml-14">
        {LINKS.map(({ href, label, light, dark, external }) => (
          <li key={label} className="flex">
            <a
              href={href}
              aria-label={label}
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              <Image
                src={light}
                alt=""
                unoptimized
                className="size-4.25 dark:hidden"
              />
              <Image
                src={dark}
                alt=""
                unoptimized
                className="hidden size-4.25 dark:block"
              />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
