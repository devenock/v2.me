import { BlogPost, ISkillListItem, SkillLevel } from "@/types";

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
    title: "Homemade GPT • JS",
    icon: "💬",
    date: "Nov 2024",
    stars: 61,
    description:
      "A minimal TensorFlow.js re-implementation of Karpathy's minGPT (Generative Pre-trained Transformer)",
    tags: ["GPT", "Transformers", "TensorFlow"],
    image: "/images/automate.png",
  },
  {
    title: "Micrograd TS",
    icon: "🤖",
    date: "Aug 2023",
    stars: 67,
    description:
      "A tiny scalar-valued autograd engine and a neural net on top of it. A TypeScript version of the karpathy/micrograd repo.",
    tags: ["AI", "ML", "Machine Learning"],
    image: "/images/automate.png",
  },
  {
    title: "Observations",
    icon: "👁️",
    date: "Jun 2023",
    stars: 0,
    description:
      "Subjective graph of observations, assumptions, questions, and interpretations",
    tags: ["Observations", "Thoughts"],
    image: "/images/automate.png",
    hasSource: false,
  },
  {
    title: "AutoMate",
    icon: "👁️",
    date: "Jun 2023",
    stars: 0,
    description:
      "Subjective graph of observations, assumptions, questions, and interpretations",
    tags: ["Observations", "Thoughts"],
    image: "/images/automate.png",
    hasSource: false,
  },
  {
    title: "Apitestdoc",
    icon: "👁️",
    date: "Jun 2023",
    stars: 0,
    description:
      "Subjective graph of observations, assumptions, questions, and interpretations",
    tags: ["Observations", "Thoughts"],
    image: "/images/apitest.png",
    hasSource: false,
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

export const blogPosts: BlogPost[] = [
  {
    id: "system-design-sketches",
    title: "System Design Sketches",
    date: "Jul 18, 2024",
    description:
      "System design sketches for popular system design interview questions.",
    image: "/placeholder.svg?height=400&width=600",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      youtube: "#",
      whatsapp: "#",
      uber: "#",
      medium: "#",
    },
  },
  {
    id: "micrograd-ts",
    title: "Micrograd TS",
    date: "Aug 7, 2023",
    description:
      "A TypeScript version of karpathy/micrograd. A tiny scalar-valued autograd engine and a neural net on top of it.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "observations",
    title: "Observations",
    date: "Jun 27, 2023",
    description:
      "My subjective observations, assumptions, questions, and interpretations about the world around us. Ultimate origin, science, Creator, theories, axioms, consciousness, universe, God's sensor, good vs evil, etc. Don't take it seriously.",
    image: "/placeholder.svg?height=400&width=600",
  },
];
