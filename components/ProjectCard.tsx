import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Play, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  icon: string;
  date: string;
  stars: number;
  description: string;
  tags: string[];
  image: string;
  hasDemo?: boolean;
  hasSource?: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  icon,
  // date,
  // stars,
  description,
  tags,
  image,
  hasDemo = true,
  hasSource = true,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" priority />
      </div>
      <CardHeader className="p-4 md:pb-4">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Image src={icon} width={30} height={30} alt={icon} priority />
            <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
          </div>
          {/*<div className="text-sm text-muted-foreground">*/}
          {/*  <span>{date}</span> • ⭐ {stars}*/}
          {/*</div>*/}
        </div>
      </CardHeader>
      <CardContent className="flex-1 px-4">
        <p className="text-sm md:text-base text-muted-foreground mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 gap-2">
        {hasDemo && (
          <Link
            href={liveUrl || "#"}
            target="_blank"
            className="flex-1 flex items-center w-1/4 justify-center shadow-md rounded-md px-3 py-4 text-sm md:text-base"
          >
            <Play className="mr-2 h-4 w-4" />
            Demo
          </Link>
        )}
        {hasSource && (
          <Link
            href={githubUrl || "#"}
            target="_blank"
            className="flex-1 flex items-center w-1/4 justify-center shadow-md rounded-md px-3 py-4 text-sm md:text-base"
          >
            <Github className="mr-2 h-4 w-4" />
            Source Code
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
