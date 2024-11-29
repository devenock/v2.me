import Link from "next/link"
import {AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from "react-icons/ai";

export default function Footer() {
    return (
        <footer className="py-8">
            <div className="flex w-1/2 justify-between items-center">
                <div className="flex space-x-4">
                    <Link href="/subscribe" className="text-gray-600 hover:text-gray-900">
                        Subscribe
                    </Link>
                    <Link href="/support" className="text-gray-600 hover:text-gray-900">
                        Support
                    </Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="https://linkedin.com" className="hover:opacity-75">
                        <AiFillLinkedin />
                    </Link>
                    <Link href="https://github.com" className="hover:opacity-75">
                        <AiFillGithub />
                    </Link>
                    <Link href="https://twitter.com" className="hover:opacity-75">
                        <AiOutlineTwitter />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

