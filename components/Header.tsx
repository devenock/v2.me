import Link from "next/link"

export default function Header() {
    return (
        <header className="py-6">
            <nav className="flex space-x-6 items-center">
                <Link href="/" className="text-sm font-bold">
                    ENOCK OMONDI
                </Link>
                <div className="space-x-6">
                    <Link href="/projects" className="hover:text-gray-600 text-sm">
                        PROJECTS
                    </Link>
                    <Link href="/blog" className="hover:text-gray-600 text-sm">
                        BLOG
                    </Link>
                    <Link href="/publications" className="hover:text-gray-600 text-sm">
                        PUBLICATIONS
                    </Link>
                </div>
            </nav>
        </header>
    )
}

