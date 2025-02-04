import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

interface BlogPost {
  title: string
  excerpt: string
  image: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    title: "How Atul Bakery Makes Every Celebration Extra Special with...",
    excerpt:
      "Birthdays are magical moments filled with joy, laughter, and unforgettable memories. At Atul Bakery, we believe every birthday...",
    image: "https://images.unsplash.com/photo-1736156725121-027231636f9d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "celebration-special",
  },
  {
    title: "House of Freshness: How Atul Bakery Maintains its Quality Standards",
    excerpt:
      'In the world of baking, freshness and quality are non-negotiable. Atul Bakery, fondly known as the "House of Freshness," has carved a...',
    image: "https://images.unsplash.com/photo-1736156725121-027231636f9d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "quality-standards",
  },
  {
    title: "The Atul Bakery Journey: From Two Employees to 270+ Outlets",
    excerpt:
      "When it comes to stories of growth and success, Atul Bakery stands as a shining example. What began as a humble bakery...",
    image: "https://images.unsplash.com/photo-1736156725121-027231636f9d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "growth-journey",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="overflow-hidden flex flex-col">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardContent className="flex-1 p-6">
              <h2 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h2>
              <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
            <Link
                href={`/blog/${post.slug}`}
                className="inline-flex h-9 items-center justify-center rounded-md border border-red-600 px-8 text-sm font-medium text-red-600 transition-colors hover:bg-red-600 hover:text-white"
              >
                Read More
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

