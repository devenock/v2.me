import Link from "next/link";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
export default function Socials() {
  return (
    <div className="flex gap-4 mb-8">
      <Link
        href="https://www.linkedin.com/in/enock-omondi/"
        className="hover:opacity-75"
        target="_blank"
      >
        <AiFillLinkedin size={24} />
      </Link>
      <Link
        href="https://github.com/devenock"
        className="hover:opacity-75"
        target="_blank"
      >
        <AiOutlineGithub size={24} />
      </Link>
      <Link
        href="https://x.com/dev_enock"
        className="hover:opacity-75"
        target="_blank"
      >
        <FaXTwitter size={24} />
      </Link>
    </div>
  );
}
