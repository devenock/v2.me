import Link from "next/link"
import {AiFillLinkedin, AiOutlineGithub, AiOutlineTwitter} from "react-icons/ai";

export default function Footer() {
    return (
        <footer className="py-8">
            <div className="flex w-1/2 justify-between items-center">
                <div className="flex space-x-4">
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                        Subscribe
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                        Support
                    </Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="https://www.linkedin.com/in/enock-omondi/" className="hover:opacity-75" target="_blank">
                        <AiFillLinkedin size={24}/>
                    </Link>
                    <Link href="https://github.com/Trend20" className="hover:opacity-75" target="_blank">
                        <AiOutlineGithub size={24}/>
                    </Link>
                    <Link href="https://x.com/dev_enock" className="hover:opacity-75" target="_blank">
                        <AiOutlineTwitter size={24}/>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

