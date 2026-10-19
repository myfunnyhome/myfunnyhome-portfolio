import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function SiteHeader() {
  return (
    <header className="page-container flex items-center py-5 md:py-9">
      <p className="text-[15px] font-semibold leading-none tracking-[0.6px] whitespace-nowrap">
        박지선
      </p>

      <nav aria-label="주요 메뉴" className="ml-6.5 hidden md:block">
        <ul className="flex items-center gap-9 font-archivo text-sm font-medium leading-none text-ash">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="transition-colors hover:text-ink">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </header>
  );
}
