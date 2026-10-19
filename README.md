# myfunnyhome-portfolio

박지선(Lucy Park)의 개인 포트폴리오 사이트입니다.
Shopify 기반 E-commerce 개발 경력과 풀스택 프로젝트를 한 페이지로 소개합니다.

## 주요 기능

- Hero, Brands, About, Experience, Projects, Skills로 구성된 반응형 싱글 페이지 (모바일 375px ~ 데스크톱 1440px 기준)
- 다크 / 라이트 테마 전환 (기본값은 시스템 설정, 선택한 테마는 새로고침 후에도 유지)
- 헤더 메뉴에서 각 섹션으로 이동 (모바일에서는 메뉴 숨김)
- 오류 페이지(`error.js`)와 404 페이지(`not-found.js`)

프로젝트 스크린샷은 아직 준비 중이며, 현재는 빈 이미지 영역으로 표시됩니다.

## 기술 스택

- Next.js 16 (App Router), React 19, JavaScript (JSX)
- Tailwind CSS v4
- next-themes (테마 전환)
- clsx + tailwind-merge (`cn()`), class-variance-authority (Badge 변형)
- React Compiler
- ESLint

## 폴더 구조

```
src/
├── app/          # layout, page, error, not-found, providers, globals.css
├── assets/       # 아이콘, Hero 그래픽 등 SVG 에셋
├── components/   # 공통 UI 컴포넌트
├── data/         # 경력, 프로젝트, 기술 스택 등 정적 데이터
├── lib/          # 공통 유틸리티
└── sections/     # 페이지 섹션 컴포넌트
```

## 로컬 실행

Node.js 20.9 이상이 필요합니다.

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.

```bash
npm run lint    # ESLint 검사
npm run build   # 프로덕션 빌드
npm run start   # 빌드 결과 실행
```
