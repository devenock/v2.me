import Link from "next/link";
import {AiFillLinkedin, AiOutlineGithub, AiOutlineMedium, AiOutlineTwitter} from "react-icons/ai";

export default function Socials(){
    return (
        <div className="flex gap-4 mb-8">
            <Link href="https://linkedin.com" className="hover:opacity-75">
                <AiFillLinkedin size={24}/>
            </Link>
            <Link href="https://github.com" className="hover:opacity-75">
                <AiOutlineGithub size={24}/>
            </Link>
            <Link href="https://twitter.com" className="hover:opacity-75">
                <AiOutlineTwitter size={24}/>
            </Link>
            <Link href="https://medium.com" className="hover:opacity-75">
                <AiOutlineMedium size={24}/>
            </Link>
        </div>
    )
}