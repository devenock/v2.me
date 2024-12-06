import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Play, Github } from 'lucide-react'

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
}

export default function ProjectCard({
                                title,
                                icon,
                                date,
                                stars,
                                description,
                                tags,
                                image,
                                hasDemo = true,
                                hasSource = true,
                            }: ProjectCardProps) {
    return (
        <Card className="flex flex-col overflow-hidden">
            <div className="relative aspect-[2/1] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xl">{icon}</span>
                        <h2 className="text-xl font-semibold">{title}</h2>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <span>{date}</span>
                        <span>•</span>
                        <span className="flex items-center">
              ⭐ {stars}
            </span>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="gap-2">
                {hasDemo && (
                    <Button variant="outline" className="flex-1">
                        <Play className="mr-2 h-4 w-4" />
                        Demo
                    </Button>
                )}
                {hasSource && (
                    <Button variant="outline" className="flex-1">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}

