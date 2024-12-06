import {BlogPost, ISkillListItem, SkillLevel} from "@/types";

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
        description: "A minimal TensorFlow.js re-implementation of Karpathy's minGPT (Generative Pre-trained Transformer)",
        tags: ["GPT", "Transformers", "TensorFlow"],
        image: "/images/automate.png",
    },
    {
        title: "Micrograd TS",
        icon: "🤖",
        date: "Aug 2023",
        stars: 67,
        description: "A tiny scalar-valued autograd engine and a neural net on top of it. A TypeScript version of the karpathy/micrograd repo.",
        tags: ["AI", "ML", "Machine Learning"],
        image: "/images/automate.png",
    },
    {
        title: "Observations",
        icon: "👁️",
        date: "Jun 2023",
        stars: 0,
        description: "Subjective graph of observations, assumptions, questions, and interpretations",
        tags: ["Observations", "Thoughts"],
        image: "/images/automate.png",
        hasSource: false,
    },
    {
        title: "AutoMate",
        icon: "👁️",
        date: "Jun 2023",
        stars: 0,
        description: "Subjective graph of observations, assumptions, questions, and interpretations",
        tags: ["Observations", "Thoughts"],
        image: "/images/automate.png",
        hasSource: false,
    },
    {
        title: "Apitestdoc",
        icon: "👁️",
        date: "Jun 2023",
        stars: 0,
        description: "Subjective graph of observations, assumptions, questions, and interpretations",
        tags: ["Observations", "Thoughts"],
        image: "/images/apitest.png",
        hasSource: false,
    },
]

export const frontendTools = [
    { name: "Vue", icon: "/placeholder.svg?height=64&width=64" },
    { name: "React", icon: "/placeholder.svg?height=64&width=64" },
    { name: "TypeScript", icon: "/placeholder.svg?height=64&width=64" },
    { name: "JavaScript", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Nuxt", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Tailwind", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Git", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Shopify Liquid", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Formkit", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Node.js", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Redux Toolkit", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Apollo Client", icon: "/placeholder.svg?height=64&width=64" },
    { name: "MUI", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Pinia", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Directus", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Bootstrap", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Chart.js", icon: "/placeholder.svg?height=64&width=64" },
    { name: "HTML5", icon: "/placeholder.svg?height=64&width=64" },
    { name: "CSS3", icon: "/placeholder.svg?height=64&width=64" },
]

export const backendTools = [
    { name: "Node.js", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Express", icon: "/placeholder.svg?height=64&width=64" },
    { name: "PostgreSQL", icon: "/placeholder.svg?height=64&width=64" },
    { name: "MongoDB", icon: "/placeholder.svg?height=64&width=64" },
    { name: "GraphQL", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Redis", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Docker", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Nginx", icon: "/placeholder.svg?height=64&width=64" },
]

export const cloudTools = [
    { name: "AWS", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Google Cloud", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Azure", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Heroku", icon: "/placeholder.svg?height=64&width=64" },
    { name: "DigitalOcean", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Cloudflare", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Firebase", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Netlify", icon: "/placeholder.svg?height=64&width=64" },
]

export const deploymentTools = [
    { name: "Docker", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Kubernetes", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Jenkins", icon: "/placeholder.svg?height=64&width=64" },
    { name: "GitLab CI", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Travis CI", icon: "/placeholder.svg?height=64&width=64" },
    { name: "CircleCI", icon: "/placeholder.svg?height=64&width=64" },
    { name: "GitHub Actions", icon: "/placeholder.svg?height=64&width=64" },
    { name: "ArgoCD", icon: "/placeholder.svg?height=64&width=64" },
]

export const blogPosts: BlogPost[] = [
    {
        id: "system-design-sketches",
        title: "System Design Sketches",
        date: "Jul 18, 2024",
        description: "System design sketches for popular system design interview questions.",
        image: "/placeholder.svg?height=400&width=600",
        socialLinks: {
            facebook: "#",
            twitter: "#",
            youtube: "#",
            whatsapp: "#",
            uber: "#",
            medium: "#"
        }
    },
    {
        id: "micrograd-ts",
        title: "Micrograd TS",
        date: "Aug 7, 2023",
        description: "A TypeScript version of karpathy/micrograd. A tiny scalar-valued autograd engine and a neural net on top of it.",
        image: "/placeholder.svg?height=400&width=600"
    },
    {
        id: "observations",
        title: "Observations",
        date: "Jun 27, 2023",
        description: "My subjective observations, assumptions, questions, and interpretations about the world around us. Ultimate origin, science, Creator, theories, axioms, consciousness, universe, God's sensor, good vs evil, etc. Don't take it seriously.",
        image: "/placeholder.svg?height=400&width=600"
    }
]




