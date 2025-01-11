import fs from "fs/promises";
import path from "path";

interface Blog {
  title: string;
  description: string;
  date: string;
  image?: string;
}

export interface BlogWithSlug extends Blog {
  slug: string;
}

async function getBlogSlugs() {
  const postsDirectory = path.join(process.cwd(), "src/app/blog");
  const slugs = await fs.readdir(postsDirectory, { withFileTypes: true });
  return slugs
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

async function importBlog(slug: string): Promise<BlogWithSlug> {
  const { blog } = (await import(`../app/blog/${slug}/page.mdx`)) as {
    blog: Blog;
  };
  return {
    ...blog,
    slug,
  };
}

export async function getAllBlogs(): Promise<BlogWithSlug[]> {
  const slugs = await getBlogSlugs();
  const blogs = await Promise.all(slugs.map(importBlog));
  return blogs.sort(
    (a, z) => new Date(z.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getRecentBlogs(limit = 3): Promise<BlogWithSlug[]> {
  const blogs = await getAllBlogs();
  return blogs.slice(0, limit);
}
