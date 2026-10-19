import * as motion from "motion/react-client";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectGroups } from "@/data/projects";
import { fadeUp, inView } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="page-container py-14 md:py-24">
      <SectionHeading id="projects-heading">Projects</SectionHeading>
      <div className="mt-14 flex flex-col gap-14">
        {projectGroups.map(({ id, title, subtitle, projects }) => {
          const isCommerce = id === "commerce";

          return (
            <section key={id} aria-labelledby={"projects-" + id + "-heading"}>
              <div className={cn(
                "flex gap-3.5",
                isCommerce ? "flex-col items-start gap-y-2 md:flex-row md:items-center" : "items-center",
              )}>
                <h3
                  id={"projects-" + id + "-heading"}
                  className={cn("text-[17px] font-semibold leading-[1.2]", id !== "personal" && "font-archivo")}
                >
                  {title}
                </h3>
                <p className="text-sm leading-[1.4] text-ash">{subtitle}</p>
              </div>
              {/* 그룹마다 따로 실행해 14개 카드가 하나의 긴 순서로 묶이지 않도록 함 */}
              <motion.ul
                {...inView}
                className={cn(
                  "mt-6 grid grid-cols-1 items-start gap-y-12 md:grid-cols-2",
                  isCommerce ? "gap-x-8 lg:grid-cols-3 lg:gap-y-14" : "gap-x-10 md:gap-y-16",
                )}
              >
                {projects.map((project, index) => (
                  <motion.li key={project.id} {...fadeUp(index * 0.07)} className="min-w-0">
                    <ProjectCard project={project} />
                  </motion.li>
                ))}
              </motion.ul>
            </section>
          );
        })}
      </div>
      <p className="mt-14 text-sm leading-[1.7] text-ash">
        상업 프로젝트의 소스코드와 내부 구현 정보는 공개하지 않습니다. 현재 운영 중인 사이트는 참여 당시 구현과 다를 수 있습니다.
      </p>
    </section>
  );
}
