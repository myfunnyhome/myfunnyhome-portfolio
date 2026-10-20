import * as motion from "motion/react-client";
import { brands } from "@/data/brands";
import { revealEase, revealViewport } from "@/lib/motion";

export default function Brands() {
  return (
    <section aria-labelledby="brands-heading" className="border-y border-rule">
      <motion.div
        data-reveal="fade"
        whileInView="visible"
        viewport={revealViewport}
        variants={{
          visible: {
            opacity: 1,
            transition: { duration: 0.6, ease: revealEase },
          },
        }}
        className="page-container flex flex-col gap-4.5 py-10"
      >
        <h2 id="brands-heading" className="text-[13px] leading-none tracking-[0.02em] text-ash">
          구축과 운영에 참여한 Shopify 스토어
        </h2>
        <p className="text-[15px] font-light leading-[1.8] md:text-[21px]">{brands.join(", ")}</p>
      </motion.div>
    </section>
  );
}
