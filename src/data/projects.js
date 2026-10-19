import hermaDark from "@/assets/images/projects/herma-dark.png";
import hermaLight from "@/assets/images/projects/herma-light.png";
import manseDark from "@/assets/images/projects/manse-dark.png";
import manseLight from "@/assets/images/projects/manse-light.png";
import photoImage from "@/assets/images/projects/photo.png";
import snackImage from "@/assets/images/projects/snack.png";
import studyDark from "@/assets/images/projects/study-dark.png";
import studyLight from "@/assets/images/projects/study-light.png";

// image: 팀/개인 프로젝트에서만 사용. 없으면 카드에 "스크린샷" placeholder 표시
// srcDark가 있으면 src는 라이트, srcDark는 다크 테마에서 표시
export const projectGroups = [
  {
    id: "team",
    title: "Full-Stack",
    subtitle: "팀 프로젝트",
    projects: [
      {
        id: "snack",
        name: "SNACK (간식대장)",
        status: "completed",
        image: {
          src: snackImage,
          alt: "SNACK 메인 화면과 AI 어시스턴트 Snacky 대화창",
        },
        summary: "조직의 간식 구매 요청과 예산을 관리하는 서비스",
        role: "담당 Auth, User, Invitations, RAG 기반 AI 어시스턴트 Snacky, 배포와 CI/CD 전반",
        description:
          "RAG 기반으로 사내 간식 데이터를 검색하고 질문에 답변하는 AI 어시스턴트 Snacky를 개발했습니다. AWS EC2 환경에서 Nginx와 PM2를 활용해 서버를 배포하고, RDS와 S3를 연동했습니다. HTTPS 적용 및 GitHub Actions 기반 CI/CD 파이프라인을 구성했으며, Cloudflare Turnstile을 활용한 봇 차단과 프록시 설정 등 보안 관련 작업도 담당했습니다.",
        techStack:
          "Next.js, TypeScript, Express 5, Prisma 7, PostgreSQL, zod, AWS (EC2, RDS, S3), Nginx, PM2, GitHub Actions",
        githubLinks: [
          {
            id: "fe",
            label: "GitHub FE",
            href: "https://github.com/myfunnyhome/13-2-snack-fe",
          },
          {
            id: "be",
            label: "GitHub BE",
            href: "https://github.com/myfunnyhome/13-2-snack-be",
          },
        ],
      },
      {
        id: "favorite-photo",
        name: "최애의 포토",
        status: "completed",
        image: {
          src: photoImage,
          alt: "최애의 포토 랜딩 화면과 포토카드 마켓플레이스 화면",
        },
        summary: "포토카드 기반 거래 서비스",
        role: "백엔드 초기 환경 구성과 사용자(User), 포인트(Point), 알림(Notification) 관련 API 개발을 담당했으며, SSE 기반 실시간 알림과 Google OAuth 로그인 기능은 BE와 FE 모두 구현",
        description:
          "SSE를 활용해 포토카드 교환 제안, 거절, 성사 알림을 실시간으로 전달하는 기능을 구현했습니다. multer를 이용한 이미지 업로드 API를 개발하고, 마켓 게시글 조회 API의 응답 구조를 개선했습니다. 프론트엔드에서는 Google OAuth 로그인, 실시간 알림 수신, 로딩 및 전역 오류 처리 기능을 담당했습니다.",
        techStack: "Next.js, Express, PostgreSQL, Multer, Vercel, Render",
        githubLinks: [
          {
            id: "fe",
            label: "GitHub FE",
            href: "https://github.com/myfunnyhome/13-favorite-photo-4-FE",
          },
          {
            id: "be",
            label: "GitHub BE",
            href: "https://github.com/myfunnyhome/13-favorite-photo-4-BE",
          },
        ],
      },
      {
        id: "study-forest",
        name: "공부의 숲",
        status: "completed",
        image: {
          src: studyLight,
          srcDark: studyDark,
          alt: "공부의 숲 프로젝트 이미지 (스크린샷 준비 중)",
        },
        summary: "스터디 기록용 서비스",
        role: "오늘의 집중 페이지 담당, 스키마와 API 라우트 설계, FE 공통 Tag 컴포넌트",
        description:
          "‘오늘의 집중’ 페이지 화면과 타이머 기능을 구현하고, 집중 시간 기록을 저장하고 조회하는 API를 개발했습니다. 데이터베이스 구조와 API 경로를 설계했으며, 백엔드에서 발생하는 오류를 일관되게 처리할 수 있도록 공통 에러 처리 기능을 구현했습니다.",
        techStack: "React, Express, PostgreSQL, Prisma, Netlify, Render",
        githubLinks: [
          {
            id: "fe",
            label: "GitHub FE",
            href: "https://github.com/myfunnyhome/13-study-forest-team2-fe",
          },
          {
            id: "be",
            label: "GitHub BE",
            href: "https://github.com/myfunnyhome/13-study-forest-team2-be",
          },
        ],
      },
    ],
  },
  {
    id: "personal",
    title: "개인 프로젝트",
    subtitle: "소스 비공개 예정",
    projects: [
      {
        id: "saju-engine",
        name: "만세력",
        status: "inProgress",
        image: {
          src: manseLight,
          srcDark: manseDark,
          alt: "만세력 프로젝트 이미지 (스크린샷 준비 중)",
        },
        summary: "사주 만세력 엔진",
        role: "담당 1인 개발",
        description: "현재 천문성 개발 중입니다.",
      },
      {
        id: "herma-studio",
        name: "Herma Studio 사이트",
        status: "inProgress",
        image: {
          src: hermaLight,
          srcDark: hermaDark,
          alt: "Herma Studio 사이트 프로젝트 이미지 (스크린샷 준비 중)",
        },
        summary: "Shopify 에이전시 사이트",
        role: "담당 개발 총괄",
        description: "개발 진행 중입니다.",
      },
    ],
  },
  {
    id: "commerce",
    title: "Shopify & E-commerce",
    subtitle: "상업 프로젝트 - 소스코드 비공개",
    projects: [
      {
        id: "abib",
        name: "Abib US",
        summary: "미니멀 스킨케어 브랜드 글로벌 스토어",
        role: "Herma Studio",
        description: "테마 구축, 프론트엔드 구현, 섹션 커스터마이징",
        siteLink: { label: "en.abib.com", href: "https://en.abib.com" },
      },
      {
        id: "kwangjuyo",
        name: "KWANGJUYO",
        summary: "프리미엄 도자 브랜드 E-commerce",
        role: "Herma Studio",
        description: "테마 구축, 프론트엔드 구현",
        siteLink: { label: "kjy1963.com", href: "https://kjy1963.com" },
      },
      {
        id: "frazile",
        name: "FRAZILE",
        summary: "틴 센트릭 뷰티 브랜드 E-commerce",
        role: "Herma Studio",
        description: "테마 구축, 프론트엔드 구현, 섹션 커스터마이징",
        siteLink: { label: "frzlbeauty.com", href: "https://frzlbeauty.com" },
      },
      {
        id: "hanyul",
        name: "Hanyul Global",
        summary: "한율 글로벌 E-commerce 스토어 구축",
        role: "콘센트릭스서비스코리아",
        description: "Shopify 개발, 스토어 구축",
        siteLink: { label: "int.hanyul.com", href: "https://int.hanyul.com" },
      },
      {
        id: "innisfree",
        name: "innisfree Japan",
        summary: "이니스프리 일본 Shopify 스토어",
        role: "콘센트릭스서비스코리아",
        description: "Shopify 개발",
        siteLink: { label: "innisfree.jp", href: "https://innisfree.jp" },
      },
      {
        id: "line-friends",
        name: "LINE FRIENDS SQUARE",
        summary: "라인프렌즈 캐릭터 굿즈 스토어 구축",
        role: "삼백씨비티 (300cbt)",
        description: "Shopify 개발, 스토어 구축",
        siteLink: {
          label: "linefriendssquare.com",
          href: "https://linefriendssquare.com",
        },
      },
      {
        id: "dior",
        name: "Dior Korea",
        summary: "스토어 구축 및 운영, 유지보수",
        role: "삼백씨비티 (300cbt)",
        description:
          "Shopify 기반으로 구축, 운영. 현재는 타 플랫폼으로 이전되어 라이브 링크를 걸지 않습니다.",
      },
      {
        id: "hjc",
        name: "HJC",
        summary: "헬멧 브랜드 멀티스토어 - 한국, 미국, 유럽 3개 마켓",
        role: "삼백씨비티 (300cbt)",
        description: "멀티스토어 구축, 마켓별 분기",
        siteLink: { label: "hjchelmets.kr", href: "https://hjchelmets.kr" },
      },
      {
        id: "blue-bottle",
        name: "Blue Bottle Coffee Korea",
        summary: "테마, 컴포넌트 개발",
        role: "삼백씨비티 (300cbt)",
        description: "테마 커스터마이징, 컴포넌트 개발",
        siteLink: {
          label: "kr.bluebottlecoffee.com",
          href: "https://kr.bluebottlecoffee.com",
        },
      },
    ],
  },
];
