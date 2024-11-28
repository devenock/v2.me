import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
      <div className="py-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-64 h-64 relative rounded-full overflow-hidden shrink-0">
            <Image
                src="/placeholder.svg"
                alt="Oleksii Trekhleb"
                fill
                className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">OLEKSII TREKHLEB</h1>
            <p className="text-gray-600 mb-4">Senior Software Engineer @ Uber</p>
            <p className="mb-1">Author of 180k ⭐ js-algorithms GitHub repo</p>
            <p className="mb-1">8+ times on HackerNews homepage</p>
            <p className="mb-4">15+ years of full-stack experience</p>
            <p className="text-gray-600 mb-6">
              <span>📍 Amsterdam, The Netherlands • from 🇺🇦</span>
            </p>
            <div className="flex gap-4 mb-8">
              <Link href="https://linkedin.com" className="hover:opacity-75">
                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link href="https://github.com" className="hover:opacity-75">
                <Image src="/github.svg" alt="GitHub" width={24} height={24} />
              </Link>
              <Link href="https://twitter.com" className="hover:opacity-75">
                <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
              </Link>
              <Link href="https://medium.com" className="hover:opacity-75">
                <Image src="/medium.svg" alt="Medium" width={24} height={24} />
              </Link>
              <Link href="https://dev.to" className="hover:opacity-75">
                <Image src="/dev.svg" alt="Dev.to" width={24} height={24} />
              </Link>
              <Link href="https://youtube.com" className="hover:opacity-75">
                <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
              </Link>
            </div>
            <p className="text-gray-800">
              Hi there! I'm Oleksii. I work as a full-time software engineer. In my spare time I do open-sourcing. Most of my open-source{" "}
              <Link href="/projects" className="text-blue-600 hover:underline">
                projects
              </Link>{" "}
              are focused on one thing – to help people learn. You may use these projects to learn about algorithms in JavaScript and get prepared for technical interviews, or to learn Python syntax and start experimenting with machine learning algorithms and math behind them, etc. I also write{" "}
              <Link href="/blog" className="text-blue-600 hover:underline">
                articles
              </Link>{" "}
              about life, web-development and machine learning.
            </p>
          </div>
        </div>
      </div>
  )
}

