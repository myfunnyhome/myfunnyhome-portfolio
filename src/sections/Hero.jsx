import Image from "next/image";
import circlesDark from "@/assets/images/hero/hero-circles-dark.svg";
import circlesLight from "@/assets/images/hero/hero-circles-light.svg";
import circlesMobileDark from "@/assets/images/hero/hero-circles-mobile-dark.svg";
import circlesMobileLight from "@/assets/images/hero/hero-circles-mobile-light.svg";

export default function Hero() {
  return (
    <section className="page-container flex flex-col items-start gap-10 pt-6 pb-16 lg:flex-row lg:items-end lg:gap-16 lg:pt-16 lg:pb-28">
      <div className="min-w-0 flex-1">
        <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
          박 지선
        </h1>
        <p className="mt-3 font-archivo text-[26px] font-medium leading-tight text-ash">
          Lucy Park
        </p>

        <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 pt-7 font-archivo text-lg leading-tight md:text-xl">
          <span
            aria-hidden="true"
            className="size-2.25 shrink-0 rounded-full bg-accent"
          />
          <span className="font-semibold">Full-Stack Engineer</span>
          <span className="text-ash">Shopify &amp; E-commerce</span>
        </p>

        <p className="mt-9 max-w-155 text-lg leading-[1.75]">
          Shopify로 해외 온라인 쇼핑몰을 개발하며
          <br />
          국내외 30여 개 브랜드의 글로벌 쇼핑몰을 만들었습니다.
          <br />
          <br />
          현재는 React, Next.js, Node.js를 활용해 <br />
          사용자가 보는 화면부터 서버와 데이터 관리까지 웹서비스 전반을 개발하고
          있습니다.
        </p>
      </div>

      <div aria-hidden="true" className="shrink-0">
        <div className="lg:hidden">
          <Image
            src={circlesMobileLight}
            alt=""
            unoptimized
            className="size-55 dark:hidden"
          />
          <Image
            src={circlesMobileDark}
            alt=""
            unoptimized
            className="hidden size-55 dark:block"
          />
        </div>
        <div className="hidden lg:block">
          <Image
            src={circlesLight}
            alt=""
            unoptimized
            className="size-105 dark:hidden"
          />
          <Image
            src={circlesDark}
            alt=""
            unoptimized
            className="hidden size-105 dark:block"
          />
        </div>
      </div>
    </section>
  );
}
