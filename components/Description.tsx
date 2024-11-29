import Link from "next/link";
import Socials from "@/components/Socials";

export default function Description(){
    return (
        <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">ENOCK OMONDI</h1>
            <p className="text-gray-600 mb-4">Software Engineer</p>
            <p className="mb-1">Founder @Locate</p>
            <p className="mb-4">4+ years of full-stack experience</p>
            <p className="text-gray-600 mb-6">
                <span>📍 Nairobi, Kenya • 🇰🇪</span>
            </p>
            {/*socials*/}
            <Socials />
            <p className="text-gray-800">
                Hi there! I'm Enock. I work as a full-time software engineer. In my spare time I do open-sourcing.
                Most of my open-source{" "}
                <Link href="/projects" className="text-blue-600 hover:underline">
                    projects
                </Link>{" "}
                are focused on one thing – to help people learn. You may use these projects to learn about algorithms in
                JavaScript and get prepared for technical interviews, or to learn Python syntax and start experimenting
                with machine learning algorithms and math behind them, etc. I also write{" "}
                <Link href="/blog" className="text-blue-600 hover:underline">
                    articles
                </Link>{" "}
                about life, web-development and machine learning.
            </p>
        </div>
    )
}