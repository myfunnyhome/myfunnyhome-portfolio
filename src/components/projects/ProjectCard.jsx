import Image from "next/image";
import Badge from "@/components/Badge";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project }) {
  const {
    id,
    name,
    status,
    image,
    summary,
    role,
    description,
    techStack,
    githubLinks,
    siteLink,
  } = project;

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
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={cn("object-cover", className)}
                />
              ))
            ) : (
              <span className="text-xs leading-none tracking-[0.02em] text-ash">
                스크린샷
              </span>
            )}
          </div>
          <Badge status={status} className="mt-4.5">
            {status === "completed" ? "Completed" : "In Progress"}
          </Badge>
        </>
      )}
      <h4
        id={id + "-heading"}
        className={cn(
          "text-lg font-semibold leading-[1.4] md:text-xl",
          status && "mt-4.5",
        )}
      >
        {name}
      </h4>
      <p className="mt-1.5 text-[15px] leading-[1.55] text-ash">{summary}</p>
      <p className="mt-3.5 text-sm font-medium leading-[1.6]">{role}</p>
      <p className="mt-3 text-sm leading-[1.7] text-ash">{description}</p>
      {techStack && (
        <p className="mt-3.5 text-[13px] font-light leading-[1.7] text-ash">
          {techStack}
        </p>
      )}
      {githubLinks && (
        <div className="mt-3.5 flex flex-wrap gap-x-5 gap-y-2 font-archivo text-[13px] font-medium leading-tight text-accent">
          {githubLinks.map(({ id: linkId, label, href }) => (
            <a
              key={linkId}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name + " " + label + " 저장소 (새 탭)"}
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
          className="mt-3.5 inline-block max-w-full font-archivo text-[13px] font-medium leading-tight wrap-anywhere text-accent"
        >
          {siteLink.label} <span aria-hidden="true">→</span>
        </a>
      )}
    </article>
  );
}
