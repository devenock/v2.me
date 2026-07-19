import Link from "next/link";
import {
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Lightbulb, MessagesSquare, GitMerge } from "lucide-react";

export const metadata = {
  title: "Hire Me",
  description: "Get in touch — I'm open to new opportunities and collaborations.",
};

const EMAIL = "enockomondi305@gmail.com";
const WHATSAPP_NUMBER = "+254112637766";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}`;

const socials = [
  {
    name: "WhatsApp",
    handle: WHATSAPP_NUMBER,
    href: WHATSAPP_URL,
    icon: FaWhatsapp,
    description: "Message me directly on WhatsApp.",
  },
  {
    name: "LinkedIn",
    handle: "enock-omondi",
    href: "https://www.linkedin.com/in/enock-omondi/",
    icon: AiFillLinkedin,
    description: "Connect with me professionally.",
  },
  {
    name: "GitHub",
    handle: "devenock",
    href: "https://github.com/devenock",
    icon: AiOutlineGithub,
    description: "See what I'm building.",
  },
  {
    name: "X (Twitter)",
    handle: "@dev_enock",
    href: "https://x.com/dev_enock",
    icon: FaXTwitter,
    description: "Follow my thoughts and updates.",
  },
];

export default function HireMePage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Let&apos;s Work Together
        </h1>
        <p className="mt-2 text-muted-foreground">
          I&apos;m open to new opportunities, freelance work, and collaborations.
          Reach out through any of the channels below.
        </p>

        {/* Open for */}
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Open For
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 px-4 py-4">
              <MessagesSquare className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
              <div>
                <p className="font-semibold text-foreground text-sm">Consultations</p>
                <p className="mt-0.5 text-xs text-muted-foreground">Architecture reviews, technical deep-dives, and engineering advice.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 px-4 py-4">
              <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
              <div>
                <p className="font-semibold text-foreground text-sm">Product Brainstorming</p>
                <p className="mt-0.5 text-xs text-muted-foreground">Turning early-stage ideas into concrete technical direction.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 px-4 py-4">
              <GitMerge className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
              <div>
                <p className="font-semibold text-foreground text-sm">Open Source</p>
                <p className="mt-0.5 text-xs text-muted-foreground">Contributing to and collaborating on open source projects.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Primary — Email */}
        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Primary Contact
          </p>
          <Link
            href={`mailto:${EMAIL}`}
            className="group flex items-center gap-4 rounded-lg border border-border bg-muted/30 px-5 py-4 transition-colors hover:bg-muted/60"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
              <MdOutlineEmail size={22} />
            </span>
            <div className="min-w-0">
              <p className="font-semibold text-foreground">Email</p>
              <p className="text-sm text-muted-foreground truncate">{EMAIL}</p>
            </div>
            <span className="ml-auto text-xs text-muted-foreground group-hover:text-foreground transition-colors">
              Send →
            </span>
          </Link>
        </div>

        {/* Other platforms */}
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Other Platforms
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {socials.map(({ name, handle, href, icon: Icon, description }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-border bg-muted/30 px-5 py-4 transition-colors hover:bg-muted/60"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground">{name}</p>
                  <p className="text-sm text-muted-foreground truncate">{handle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
