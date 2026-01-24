import { ISkillListItem, SkillLevel } from "@/types";

export const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Expert,
        icon: "/skills/typescript.svg",
      },
      {
        title: "Golang",
        level: SkillLevel.Expert,
        icon: "/skills/go.svg",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Expert,
        icon: "/skills/css.svg",
      },
      {
        title: "SASS",
        level: SkillLevel.Intermediate,
        icon: "/skills/sass.svg",
      },
      {
        title: "TailwindCSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/tailwindcss.svg",
      },
      {
        title: "Redux Toolkit",
        level: SkillLevel.Expert,
        icon: "/skills/redux.svg",
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "Express.js",
        level: SkillLevel.Expert,
        icon: "/skills/express.svg",
      },
      {
        title: "Golang",
        level: SkillLevel.Expert,
        icon: "/skills/go.svg",
      },
      {
        title: "Nest.js",
        level: SkillLevel.Intermediate,
        icon: "/skills/nestjs.svg",
      },
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      {
        title: "React Native",
        level: SkillLevel.Intermediate,
        icon: "/skills/native.svg",
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Begginer,
        icon: "/skills/mysql.svg",
      },
    ],
  },
  {
    title: "DevOps/VCS",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Begginer,
        icon: "/skills/docker.png",
      },
      {
        title: "AWS",
        level: SkillLevel.Intermediate,
        icon: "/skills/aws.svg",
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
    ],
  },
];

// projects

export const projects = [
  {
    title: "Vendre",
    icon: "/icons/cart.svg",
    date: "Nov 2024",
    stars: 61,
    description:
      "A minimal TensorFlow.js re-implementation of Karpathy's minGPT (Generative Pre-trained Transformer)",
    tags: ["React", "Typescript", "Redux Toolkit"],
    image: "/images/vendre.png",
    hasSource: true,
    liveUrl: "https://vender-eta.vercel.app/",
    githubUrl: "https://github.com/devenock/vender",
  },
  {
    title: "Shopper API",
    icon: "/icons/shopper.svg",
    date: "Aug 2023",
    stars: 67,
    description:
      "ExpressJS e-commerce API that supports operations such as managing products, categories, users, payments, analytics and orders.",
    tags: ["NodeJS", "Express", "Swagger-UI", "MongoDB", "Redis"],
    image: "/images/shopper-api.png",
    hasSource: true,
    liveUrl: "https://expressjs-shoppers-api.onrender.com/api/v1/docs/",
    githubUrl: "https://github.com/devenock/expressjs-shoppers-api",
  },
  // {
  //   title: "SQLift",
  //   icon: "/icons/sql.svg",
  //   date: "Jun 2023",
  //   stars: 0,
  //   description: "SQL Playground with challenges to help you upskill.",
  //   tags: ["SQL", "db"],
  //   image: "/images/sqlift.png",
  //   hasSource: true,
  //   liveUrl: "https://github.com/devenock/SQLift",
  //   githubUrl: "https://github.com/devenock/SQLift",
  // },
  {
    title: "Apitestdoc",
    icon: "/icons/api.svg",
    date: "Jun 2023",
    stars: 0,
    description:
      "The APITestDoc is a powerful tool designed to simplify the process of testing API endpoints and generating comprehensive API documentation.",
    tags: ["Cobra-cli", "Viper", "CLI", "Golang"],
    image: "/images/apitest.png",
    hasSource: true,
    liveUrl: "https://devenock.github.io/apitestdoc/",
    githubUrl: "https://github.com/devenock/apitestdoc",
  },
];

export const Languages = [
  { name: "Golang", icon: "/images/go.svg" },
  { name: "TypeScript", icon: "/images/typescript.svg" },
  { name: "JavaScript", icon: "/images/javascript.svg" },
  { name: "HTML5", icon: "/images/html.svg" },
  { name: "CSS3", icon: "/images/css.svg" },
];

export const Frameworks = [
  { name: "React", icon: "/images/react.svg" },
  { name: "NextJS", icon: "/images/nextjs.svg" },
  { name: "React Native", icon: "/images/reactnt.svg" },
  { name: "Expo", icon: "/images/expo.svg" },
  { name: "NestJS", icon: "/images/nestjs.svg" },
  { name: "Gin", icon: "/images/gin.png" },
  { name: "Node.js", icon: "/images/nodejs.svg" },
  { name: "Express", icon: "/images/express.svg" },
  { name: "Redux Toolkit", icon: "/images/redux.svg" },
  { name: "MUI", icon: "/images/mui.svg" },
  { name: "Bootstrap", icon: "/images/bootstrap.svg" },
  { name: "Tailwind", icon: "/images/tailwindcss.svg" },
];

export const Databases = [
  { name: "PostgreSQL", icon: "/images/postgresql.svg" },
  { name: "MongoDB", icon: "/images/mongodb.svg" },
  { name: "MySQL", icon: "/images/mysql.svg" },
];

export const Tools = [
  { name: "AWS", icon: "/images/aws.svg" },
  { name: "Vercel", icon: "/images/vercel.svg" },
  { name: "DigitalOcean", icon: "/images/docean.svg" },
  { name: "Firebase", icon: "/images/firebase.svg" },
  { name: "Netlify", icon: "/images/netlify.svg" },
  { name: "Redis", icon: "/images/redis.svg" },
  { name: "Nginx", icon: "/images/nginx.svg" },
  { name: "Git", icon: "/images/git.svg" },
  { name: "Docker", icon: "/images/docker.svg" },
  { name: "Kubernetes", icon: "/images/kubernetes.svg" },
  { name: "Jenkins", icon: "/images/jenkins.svg" },
  { name: "GitLab CI", icon: "/images/gitlab.svg" },
  { name: "CircleCI", icon: "/images/circleci.svg" },
  { name: "GitHub Actions", icon: "/images/gh.svg" },
];

export const navData = [
  // { url: "/about", name: "About" },
  // { url: "/projects", name: "Projects" },
  { url: "/blog", name: "Blog" },
];
