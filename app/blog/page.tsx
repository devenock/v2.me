import {blogPosts} from "@/data";
import BlogPostCard from "@/components/BlogCard";

export default function BlogPage() {
    return (
        <div className="container mx-auto py-8 px-4">
            <div className="flex items-baseline gap-2 mb-8">
                <h1 className="text-4xl font-bold">BLOG</h1>
                <span className="text-muted-foreground">{blogPosts.length}</span>
            </div>
            <div className="space-y-6">
                {blogPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

