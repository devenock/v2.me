import Link from "next/link";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="flex gap-4 mb-8">
      <Link
        href="https://www.linkedin.com/in/enock-omondi/"
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        target="_blank"
        aria-label="LinkedIn"
      >
        <AiFillLinkedin size={24} />
      </Link>
      <Link
        href="https://github.com/devenock"
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        target="_blank"
        aria-label="GitHub"
      >
        <AiOutlineGithub size={24} />
      </Link>
      <Link
        href="https://x.com/dev_enock"
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        target="_blank"
        aria-label="X (Twitter)"
      >
        <FaXTwitter size={24} />
      </Link>
    </div>
  );
}
