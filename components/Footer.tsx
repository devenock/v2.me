import Link from "next/link";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0">
          <p>© {new Date().getFullYear()}. devenock. All rights reserved.</p>
        </div>
        <div className="flex justify-center sm:justify-end space-x-4">
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
            <AiOutlineTwitter size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
