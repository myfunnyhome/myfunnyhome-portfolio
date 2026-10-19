"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import moonIcon from "@/assets/icons/icon-moon.svg";
import sunIcon from "@/assets/icons/icon-sun.svg";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="다크 모드/라이트 모드 전환"
      className="flex shrink-0 cursor-pointer items-center rounded-sm border border-rule px-2.25 py-2"
    >
      <Image src={sunIcon} alt="" unoptimized className="hidden size-4 dark:block" />
      <Image src={moonIcon} alt="" unoptimized className="size-4 dark:hidden" />
    </button>
  );
}
