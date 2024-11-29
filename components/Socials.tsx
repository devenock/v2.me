import Link from "next/link";
import {AiFillLinkedin, AiOutlineGithub, AiOutlineMedium, AiOutlineTwitter} from "react-icons/ai";

export default function Socials(){
    return (
        <div className="flex gap-4 mb-8">
            <Link href="https://www.linkedin.com/in/enock-omondi/" className="hover:opacity-75" target="_blank">
                <AiFillLinkedin size={24}/>
            </Link>
            <Link href="https://github.com/Trend20" className="hover:opacity-75" target="_blank">
                <AiOutlineGithub size={24}/>
            </Link>
            <Link href="https://x.com/dev_enock" className="hover:opacity-75" target="_blank">
                <AiOutlineTwitter size={24}/>
            </Link>
            <Link href="https://medium.com/@enockomondi305" className="hover:opacity-75" target="_blank">
                <AiOutlineMedium size={24}/>
            </Link>
        </div>
    )
}