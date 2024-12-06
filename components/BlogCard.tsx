import Link from "next/link"
import Image from "next/image"
import { Calendar } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {BlogPost} from "@/types";

export default function BlogPostCard({ post }: { post: BlogPost }) {
    return (
        <Link href={`/blog/${post.id}`}>
            <Card className="flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full md:w-72 h-48">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="flex-1 p-6">
                    {post.socialLinks && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.socialLinks.facebook && (
                                <Button size="sm" variant="outline" className="bg-blue-500 text-white hover:bg-blue-600">
                                    Share
                                </Button>
                            )}
                            {post.socialLinks.youtube && (
                                <Button size="sm" variant="outline" className="bg-red-500 text-white hover:bg-red-600">
                                    Watch
                                </Button>
                            )}
                            {post.socialLinks.whatsapp && (
                                <Button size="sm" variant="outline" className="bg-green-500 text-white hover:bg-green-600">
                                    Message
                                </Button>
                            )}
                            {post.socialLinks.uber && (
                                <Button size="sm" variant="outline" className="bg-black text-white hover:bg-gray-800">
                                    Ride
                                </Button>
                            )}
                            {post.socialLinks.medium && (
                                <Button size="sm" variant="outline" className="bg-orange-500 text-white hover:bg-orange-600">
                                    Read
                                </Button>
                            )}
                            {post.socialLinks.twitter && (
                                <Button size="sm" variant="outline" className="bg-purple-500 text-white hover:bg-purple-600">
                                    Follow
                                </Button>
                            )}
                        </div>
                    )}
                    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                    <div className="flex items-center text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <p className="text-muted-foreground">{post.description}</p>
                </div>
            </Card>
        </Link>
    )
}