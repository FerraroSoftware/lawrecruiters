import Image from "next/image";
import { format } from "date-fns";

interface BlogProps {
  blog: {
    title: string;
    description: string;
    date: string;
    image: string;
  };
  children: React.ReactNode;
}

export function BlogLayout({ blog, children }: BlogProps) {
  return (
    <article className="mx-auto max-w-2xl py-16">
      <div className="mb-6 text-center">
        <h1 className="mb-2 text-3xl font-bold">{blog.title}</h1>
        <time dateTime={blog.date} className="text-sm text-gray-600">
          {format(new Date(blog.date), "MMMM d, yyyy")}
        </time>
      </div>
      {blog.image && (
        <Image
          src={blog.image}
          alt={blog.title}
          width={700}
          height={350}
          className="mb-8 rounded-lg"
        />
      )}
      <div className="prose prose-lg">{children}</div>
    </article>
  );
}
