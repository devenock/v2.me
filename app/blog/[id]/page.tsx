import { notFound } from "next/navigation"
import Image from "next/image"
import { Calendar } from 'lucide-react'
import {blogPosts} from "@/data";

interface BlogPostPageProps {
    params: {
        id: string
    }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const post = blogPosts.find((post) => post.id === params.id)

    if (!post) {
        notFound()
    }

    return (
        <article className="container mx-auto py-8 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="relative w-full aspect-video mb-8">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center text-muted-foreground mb-8">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={post.date}>{post.date}</time>
                </div>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                    <p>{post.description}</p>
                    {/* Add more content sections as needed */}
                </div>
            </div>
        </article>
    )
}

