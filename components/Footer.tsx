import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="py-8 mt-12 border-t">
            <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                    <Link href="/subscribe" className="text-gray-600 hover:text-gray-900">
                        Subscribe
                    </Link>
                    <Link href="/support" className="text-gray-600 hover:text-gray-900">
                        Support
                    </Link>
                    <Link href="/rss" className="text-gray-600 hover:text-gray-900 flex items-center">
                        <Image src="/rss.svg" alt="RSS" width={16} height={16} className="mr-1" />
                        RSS
                    </Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="https://linkedin.com" className="hover:opacity-75">
                        <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
                    </Link>
                    <Link href="https://github.com" className="hover:opacity-75">
                        <Image src="/github.svg" alt="GitHub" width={20} height={20} />
                    </Link>
                    <Link href="https://twitter.com" className="hover:opacity-75">
                        <Image src="/twitter.svg" alt="Twitter" width={20} height={20} />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

