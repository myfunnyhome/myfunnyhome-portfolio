import * as motion from "motion/react-client";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, inView } from "@/lib/motion";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="page-container py-14 md:py-24"
    >
      <SectionHeading id="about-heading">About</SectionHeading>
      <motion.div
        {...inView}
        {...fadeUp()}
        className="mt-10 flex max-w-225 flex-col gap-6 text-lg leading-[1.8]"
      >
        <p>
          Shopify 기반 이커머스 개발자로 국내외 30여 개 브랜드의 스토어 구축 및
          유지보수를 담당했습니다. Liquid 테마 커스터마이징, 섹션 개발,
          멀티스토어 3개 마켓 구축 경험이 있습니다.
        </p>
        <p>
          Shopify 앱 개발 과정에서 React 기반 프론트엔드 구현에 참여했으며,
          최근에는 React, Next.js, Node.js, Express, PostgreSQL을 활용해
          프론트엔드부터 백엔드 API, 데이터베이스 설계 및 배포까지 경험을
          쌓았습니다.
        </p>
      </motion.div>
    </section>
  );
}
