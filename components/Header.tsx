import Link from "next/link"

export default function Header() {
    return (
        <header className="py-3">
            <nav className="flex space-x-6 items-center">
                <Link href="/" className="text-sm font-bold">
                    ENOCK
                </Link>
                <div className="space-x-6">
                    <Link href="/projects" className="hover:text-gray-600 text-sm">
                        PROJECTS
                    </Link>
                    <Link href="/blog" className="hover:text-gray-600 text-sm">
                        BLOG
                    </Link>
                    <Link href="/stack" className="hover:text-gray-600 text-sm">
                        TECH STACK
                    </Link>
                </div>
            </nav>
        </header>
    )
}

