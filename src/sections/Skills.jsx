import * as motion from "motion/react-client";
import SectionHeading from "@/components/SectionHeading";
import { skills, skillDetails } from "@/data/skills";
import { revealEase, revealViewport } from "@/lib/motion";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="page-container py-14 md:py-24"
    >
      <SectionHeading id="skills-heading">Skills</SectionHeading>

      <motion.ul
        whileInView="visible"
        viewport={revealViewport}
        className="mt-12 grid grid-cols-3 gap-x-4 gap-y-7 lg:grid-cols-6 lg:gap-x-6 lg:gap-y-9"
      >
        {skills.map(({ id, name, icon }, index) => (
          <motion.li
            key={id}
            data-reveal="up"
            variants={{
              visible: {
                opacity: 1,
                translate: "0px 0px",
                transition: {
                  duration: 0.5,
                  ease: revealEase,
                  delay: index * 0.06,
                },
              },
            }}
            className="min-w-0"
          >
            <div
              aria-hidden="true"
              className="flex w-13 items-center p-1.25 justify-center rounded-[10px] border border-rule bg-slot"
            >
              <span
                className="block size-6.5 bg-accent mask-center mask-no-repeat"
                style={{ maskImage: `url("${icon.src}")` }}
              />
            </div>
            <p className="mt-3 font-archivo text-[13px] font-medium leading-[1.4] text-ash wrap-anywhere">
              {name}
            </p>
          </motion.li>
        ))}
      </motion.ul>

      <motion.dl
        whileInView="visible"
        viewport={revealViewport}
        className="mt-16 border-t border-rule"
      >
        {skillDetails.map(({ id, title, paragraphs }, index) => (
          <motion.div
            key={id}
            data-reveal="up"
            variants={{
              visible: {
                opacity: 1,
                translate: "0px 0px",
                transition: {
                  duration: 0.5,
                  ease: revealEase,
                  delay: index * 0.08,
                },
              },
            }}
            className="grid grid-cols-2 border-b border-rule py-5.5 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_5fr]"
          >
            <dt className="text-sm font-medium leading-[1.65] text-ash">
              {title}
            </dt>
            <dd className="min-w-0 text-[17px] leading-[1.75] wrap-anywhere">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </dd>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  );
}
