import * as motion from "motion/react-client";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/data/experiences";
import { fadeUp, inView } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="page-container py-14 md:py-24">
      <SectionHeading id="experience-heading">Experience</SectionHeading>

      <motion.ul {...inView}>
        {experiences.map(({ company, role, period, duration, tasks, clients, link }, index) => (
          <motion.li
            key={company}
            {...fadeUp(index * 0.1)}
            className="flex flex-col gap-4 border-b border-rule py-11 md:flex-row md:gap-14"
          >
            <p className="shrink-0 font-archivo text-[15px] font-medium leading-[1.4] text-ash md:w-full md:max-w-47.5">
              {period}
              {duration && (
                <>
                  <br />
                  {duration}
                </>
              )}
            </p>

            <div className="min-w-0 flex-1">
              <h3 className="text-[19px] font-semibold leading-[1.4] md:text-[22px]">{company}</h3>
              <p className="mt-1.5 leading-normal text-ash">{role}</p>

              <ul className="mt-4.5 flex flex-col gap-2.25">
                {tasks.map((task) => (
                  <li key={task} className="flex items-start gap-3 leading-[1.65]">
                    <span aria-hidden="true" className="mt-2.75 h-px w-3.5 shrink-0 bg-accent" />
                    {task}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-sm font-light leading-[1.7] text-ash">담당 {clients}</p>

              {link ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3.5 inline-block text-[13px] font-medium leading-[1.6]"
                >
                  {link.label} <span aria-hidden="true">→</span>
                </a>
              ) : (
                <p className="mt-3.5 text-[13px] font-medium leading-[1.6] text-ash">Coming soon</p>
              )}
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
