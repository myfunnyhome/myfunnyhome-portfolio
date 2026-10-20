import javascriptIcon from "@/assets/icons/skills/JavaScript.svg";
import typescriptIcon from "@/assets/icons/skills/TypeScript.svg";
import reactIcon from "@/assets/icons/skills/React.svg";
import nextIcon from "@/assets/icons/skills/NextJs.svg";
import nodeIcon from "@/assets/icons/skills/NodeJs.svg";
import expressIcon from "@/assets/icons/skills/Express.svg";
import postgresIcon from "@/assets/icons/skills/PostgreSql.svg";
import prismaIcon from "@/assets/icons/skills/Prisma.svg";
import shopifyIcon from "@/assets/icons/skills/Shopify.svg";
import gitIcon from "@/assets/icons/skills/Git.svg";
import githubActionsIcon from "@/assets/icons/skills/GitHubActions.svg";

export const skills = [
  { id: "javascript", name: "JavaScript", icon: javascriptIcon },
  { id: "typescript", name: "TypeScript", icon: typescriptIcon },
  { id: "react", name: "React", icon: reactIcon },
  { id: "next", name: "Next.js", icon: nextIcon },
  { id: "node", name: "Node.js", icon: nodeIcon },
  { id: "express", name: "Express", icon: expressIcon },
  { id: "postgresql", name: "PostgreSQL", icon: postgresIcon },
  { id: "prisma", name: "Prisma", icon: prismaIcon },
  { id: "shopify", name: "Shopify", icon: shopifyIcon },
  { id: "git", name: "Git", icon: gitIcon },
  { id: "github-actions", name: "GitHub Actions", icon: githubActionsIcon },
];

export const skillDetails = [
  {
    id: "shopify-depth",
    title: "Shopify",
    paragraphs: [
      "Liquid, 테마 아키텍처, 섹션 스키마, Shopify CLI",
      "Storefront API, Admin API, React, Polaris, React Router",
    ],
  },
  {
    id: "analytics-monitoring",
    title: "분석 및 모니터링",
    paragraphs: ["Shopify 앱 연동 및 운영 이슈 해결"],
  },
  {
    id: "infrastructure-deployment",
    title: "인프라 및 배포",
    paragraphs: [
      "AWS (EC2, ALB, Route 53, ACM, RDS, S3), Nginx, PM2",
      "GitHub Actions CI/CD",
    ],
  },
  {
    id: "database-cache",
    title: "데이터베이스 및 캐시",
    paragraphs: ["PostgreSQL, Prisma ORM"],
  },
  {
    id: "testing",
    title: "테스트",
    paragraphs: ["Jest"],
  },
  {
    id: "collaboration",
    title: "버전 관리 및 협업",
    paragraphs: ["Git, GitHub, Bitbucket, Jira"],
  },
];
