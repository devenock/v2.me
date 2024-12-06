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
        title: "Homemade GPT • JS",
        icon: "💬",
        date: "Nov 2024",
        stars: 61,
        description: "A minimal TensorFlow.js re-implementation of Karpathy's minGPT (Generative Pre-trained Transformer)",
        tags: ["GPT", "Transformers", "TensorFlow"],
        image: "/placeholder.svg?height=400&width=800",
    },
    {
        title: "Micrograd TS",
        icon: "🤖",
        date: "Aug 2023",
        stars: 67,
        description: "A tiny scalar-valued autograd engine and a neural net on top of it. A TypeScript version of the karpathy/micrograd repo.",
        tags: ["AI", "ML", "Machine Learning"],
        image: "/placeholder.svg?height=400&width=800",
    },
    {
        title: "Observations",
        icon: "👁️",
        date: "Jun 2023",
        stars: 0,
        description: "Subjective graph of observations, assumptions, questions, and interpretations",
        tags: ["Observations", "Thoughts"],
        image: "/placeholder.svg?height=400&width=800",
        hasSource: false,
    },
    {
        title: "Observations",
        icon: "👁️",
        date: "Jun 2023",
        stars: 0,
        description: "Subjective graph of observations, assumptions, questions, and interpretations",
        tags: ["Observations", "Thoughts"],
        image: "/placeholder.svg?height=400&width=800",
        hasSource: false,
    },
    {
        title: "Observations",
        icon: "👁️",
        date: "Jun 2023",
        stars: 0,
        description: "Subjective graph of observations, assumptions, questions, and interpretations",
        tags: ["Observations", "Thoughts"],
        image: "/placeholder.svg?height=400&width=800",
        hasSource: false,
    },
    {
        title: "Observations",
        icon: "👁️",
        date: "Jun 2023",
        stars: 0,
        description: "Subjective graph of observations, assumptions, questions, and interpretations",
        tags: ["Observations", "Thoughts"],
        image: "/placeholder.svg?height=400&width=800",
        hasSource: false,
    },
]

