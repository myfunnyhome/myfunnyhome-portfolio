// motion/react-client 요소에 펼쳐 쓰는 공통 애니메이션 props.
// 서버 컴포넌트에서 클라이언트(motion) 요소로 넘어가므로 함수 없이 직렬화 가능한 값만 사용한다.
// data-reveal: prefers-reduced-motion일 때 globals.css에서 즉시 표시하는 대상

const EASE = [0.22, 1, 0.36, 1];

// 스크롤로 화면 하단 10% 안쪽까지 들어오면 한 번만 실행 (높이가 큰 목록도 감지되도록 amount 대신 margin 사용)
export const inView = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "0px 0px -10% 0px" },
};

export function fadeUp(delay = 0) {
  return {
    "data-reveal": "",
    variants: {
      hidden: { opacity: 0, y: 16 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay } },
    },
  };
}

export const fadeIn = {
  "data-reveal": "",
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
  },
};
