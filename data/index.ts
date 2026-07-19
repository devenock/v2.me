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

export type ProjectCategory = "web" | "api" | "cli";

export const projects = [
  {
    title: "dweaver",
    icon: "/images/go.svg",
    date: "2026",
    stars: 0,
    description: "Modern, easy-to-use open-source diagramming tool.",
    tags: ["Go", "TypeScript", "Open Source", "Diagramming"],
    image: "/images/automate.png",
    hasSource: true,
    hasDemo: false,
    githubUrl: "https://github.com/devenock/d_weaver",
    category: "web" as ProjectCategory,
  },
  {
    title: "Event Management API",
    icon: "/icons/api.svg",
    date: "2026",
    stars: 0,
    description:
      "A robust API for managing events and ticket bookings (in progress).",
    tags: ["Go", "gRPC", "PostgreSQL", "JWT", "RBAC"],
    image: "/images/api-testdoc.png",
    hasSource: true,
    hasDemo: false,
    githubUrl: "",
    category: "api" as ProjectCategory,
  },
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
    category: "web" as ProjectCategory,
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
    category: "api" as ProjectCategory,
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
  //   category: "web" as ProjectCategory,
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
    category: "cli" as ProjectCategory,
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
  { name: "SQLite", icon: "/images/sqlite.svg" },
  { name: "Supabase", icon: "/images/supabase.svg" },
  { name: "Firebase", icon: "/images/firebase.svg" },
  { name: "Prisma", icon: "/images/prisma.svg" },
  { name: "TypeORM", icon: "/images/typeorm.png" },
];

export const Analytics = [
  { name: "Metabase", icon: "/images/metabase.svg" },
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

// experience (used on landing page)
export const experiences = [
  {
    company: "Altech Group",
    description:
      "Altech Group is a technology holding company delivering PAYGO and fintech solutions across Africa.",
    roles: [
      {
        title: "Senior Software Engineer",
        dates: "Dec 2024 — Present",
        highlights: [
          "Building high-performance microservices for the PAYGO platform using Golang and NestJS, improving response time by 40%.",
          "Leading CI/CD implementation with GitHub Actions and Jenkins, reducing deployment time by 70%.",
          "Built reusable React component libraries, streamlining wallet and transaction interfaces across platforms.",
          "Leading cross-functional agile and remote teams, ensuring on-time delivery of mission-critical features.",
          "Integrating secure payment wallet systems into PAYGO platform, processing 10K+ daily transactions.",
          "Developing responsive React gaming dashboard with real-time analytics, improving player engagement by 35%.",
        ],
        tags: ["Golang", "NestJS", "React", "GitHub Actions", "Jenkins", "PostgreSQL", "Redis"],
      },
    ],
  },
  {
    company: "Riverbank Solutions Limited",
    description:
      "Riverbank Solutions is a digital payments and software consultancy building fintech platforms across East Africa.",
    roles: [
      {
        title: "Software Engineer",
        dates: "April 2023 — August 2024",
        highlights: [
          "Spearheaded the development of Zed Payments portal, employing Next.js and Node.js to enhance visual appeal, foster modular code, and accelerate performance by 40%.",
          "Implemented design thinking approaches to identify user pain points and develop innovative solutions, improving user satisfaction by 50%.",
          "Led cross-functional collaboration to define product goals and translate user needs into actionable development tasks.",
          "Implemented Docker containerization, reducing deployment time by 60% across environments.",
        ],
        tags: ["Next.js", "Node.js", "Docker", "TypeScript", "PostgreSQL"],
      },
    ],
  },
  {
    company: "ZED Payments",
    description:
      "ZED Payments is a Kenyan fintech platform enabling seamless digital payment solutions for businesses and consumers.",
    roles: [
      {
        title: "Senior Frontend Engineer",
        dates: "April 2023 — August 2024",
        highlights: [
          "Developed highly responsive user-interface components using React, improving accessibility by 30%.",
          "Optimized front-end performance by streamlining CSS code, reducing load time by 40% and increasing overall performance by 25%.",
          "Conducted thorough bug identification and resolution, enhancing web functionality and speed by 50%.",
          "Developed AI-powered prompts for customer service automation, improving response time by 45%.",
        ],
        tags: ["React", "TypeScript", "CSS", "Redux Toolkit", "REST APIs"],
      },
    ],
  },
  {
    company: "Whrrl Tech",
    description:
      "Whrrl Tech is a startup building financial tools and mobile applications to serve emerging markets.",
    roles: [
      {
        title: "Software Engineer",
        dates: "June 2022 — August 2023",
        highlights: [
          "Engineered and tested RESTful APIs using Go and NestJS to serve a React front-end handling over 20,000 concurrent users.",
          "Facilitated agile product development processes, leading to a 70% improvement in code quality and team productivity.",
          "Developed and launched the BruFinance mobile application using React Native and Expo, enhancing user engagement and streamlining financial services.",
        ],
        tags: ["Go", "NestJS", "React", "React Native", "Expo", "PostgreSQL"],
      },
    ],
  },
  {
    company: "Mortgage Ezy",
    description:
      "Mortgage Ezy is an Australian fintech company providing online mortgage brokering and lending solutions.",
    roles: [
      {
        title: "Software Engineer",
        dates: "June 2021 — May 2022",
        highlights: [
          "Implemented a robust testing strategy by writing unit tests for React components, improving application performance by 50%.",
          "Re-architected a multi-page dashboard into a single-page web app, resulting in a 50% improvement in user experience.",
          "Collaborated with cross-functional teams to design and implement features across iOS and Android platforms.",
        ],
        tags: ["React", "Jest", "TypeScript", "React Native"],
      },
    ],
  },
  {
    company: "Outgrowify",
    description:
      "Outgrowify is a digital marketing and growth agency delivering web solutions for clients across various industries.",
    roles: [
      {
        title: "Frontend Developer",
        dates: "October 2019 — April 2021",
        highlights: [
          "Collaborated with UX designers to translate wireframes into responsive web applications, ensuring pixel-perfect implementation and cross-browser compatibility.",
          "Integrated RESTful API endpoints with the frontend, implementing efficient state management with Redux.",
          "Participated in code reviews, fostering best practices in React development and improving team productivity by 20%.",
        ],
        tags: ["React", "Redux", "JavaScript", "HTML", "CSS", "REST APIs"],
      },
    ],
  },
];

export const navData = [
  { url: "/projects", name: "Projects" },
  { url: "/experience", name: "Experience" },
  { url: "/expertise", name: "Expertise" },
  { url: "/blog", name: "Blog" },
];
