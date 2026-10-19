import Image from "next/image";
import Badge from "@/components/Badge";
import { cn } from "@/lib/utils";

// 카드 실제 너비: 모바일 1열(좌우 여백 20px씩), md 2열(여백 40px씩, 열 간격 40px),
// xl 2열(여백 120px씩), 1440px 이상은 최대 580px
const IMAGE_SIZES =
  "(min-width: 1440px) 580px, (min-width: 1280px) calc(50vw - 140px), (min-width: 768px) calc(50vw - 60px), calc(100vw - 40px)";

export default function ProjectCard({ project }) {
  const { id, name, status, image, summary, role, description, techStack, githubLinks, siteLink } = project;

  // 테마별 이미지는 둘 다 렌더링하고 dark: 클래스로 하나만 표시 (Next.js Image 문서 Theme detection 패턴).
  // 기본 loading="lazy"라 숨겨진(display: none) 쪽은 내려받지 않음
  const images = image?.srcDark
    ? [
        { src: image.src, className: "dark:hidden" },
        { src: image.srcDark, className: "hidden dark:block" },
      ]
    : [{ src: image?.src }];

  return (
    <article aria-labelledby={id + "-heading"} className="min-w-0">
      {status && (
        <>
          <div className="relative flex aspect-[2.23] items-center justify-center overflow-hidden bg-slot">
            {image ? (
              images.map(({ src, className }) => (
                <Image
                  key={src.src}
                  src={src}
                  alt={image.alt}
                  fill
                  sizes={IMAGE_SIZES}
                  className={cn("object-cover", className)}
                />
              ))
            ) : (
              <span className="text-xs leading-none tracking-[0.02em] text-ash">스크린샷</span>
            )}
          </div>
          <Badge status={status} className="mt-4.5">
            {status === "completed" ? "Completed" : "In Progress"}
          </Badge>
        </>
      )}
      <h4
        id={id + "-heading"}
        className={cn("text-lg font-semibold leading-[1.4] md:text-xl", status && "mt-4.5")}
      >
        {name}
      </h4>
      <p className="mt-1.5 text-[15px] leading-[1.55] text-ash">{summary}</p>
      <p className="mt-3.5 text-sm font-medium leading-[1.6]">{role}</p>
      <p className="mt-3 text-sm leading-[1.7] text-ash">{description}</p>
      {techStack && (
        <p className="mt-3.5 text-[13px] font-light leading-[1.7] text-ash">{techStack}</p>
      )}
      {githubLinks && (
        <div className="mt-3.5 flex flex-wrap gap-x-5 gap-y-2 font-archivo text-[13px] font-medium leading-[1.2] text-accent">
          {githubLinks.map(({ id: linkId, label, href }) => (
            <a
              key={linkId}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name + " " + label + " " + (linkId === "fe" ? "Frontend" : "Backend") + " 저장소 (새 탭)"}
            >
              {label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      )}
      {siteLink && (
        <a
          href={siteLink.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name + " " + siteLink.label + " (새 탭)"}
          className="mt-3.5 inline-block max-w-full font-archivo text-[13px] font-medium leading-[1.2] wrap-anywhere text-accent"
        >
          {siteLink.label} <span aria-hidden="true">→</span>
        </a>
      )}
    </article>
  );
}
