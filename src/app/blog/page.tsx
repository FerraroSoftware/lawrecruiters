import Link from "next/link";
import Image from "next/image";
import { getAllBlogs } from "@/lib/blog";

export const metadata = {
  title: "Blog - Wireless Pros",
  description: "Latest articles and insights from Wireless Pros",
};

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      {blogs.length === 0 ? (
        <p>No blog posts found.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`}>
              <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                {blog.image && (
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 mb-2">{blog.description}</p>
                  <time dateTime={blog.date} className="text-sm text-gray-500">
                    {new Date(blog.date).toLocaleDateString()}
                  </time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
