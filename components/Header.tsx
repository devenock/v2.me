import Link from "next/link"

export default function Header() {
    return (
        <header className="py-6">
            <nav className="flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    TREKHLEB
                </Link>
                <div className="space-x-6">
                    <Link href="/projects" className="hover:text-gray-600">
                        PROJECTS
                    </Link>
                    <Link href="/blog" className="hover:text-gray-600">
                        BLOG
                    </Link>
                    <Link href="/publications" className="hover:text-gray-600">
                        PUBLICATIONS
                    </Link>
                </div>
            </nav>
        </header>
    )
}

