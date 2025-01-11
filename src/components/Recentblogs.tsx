import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import compliance from "@/images/blog1.jpg";
import employment from "@/images/blog2.jpg";
import intellectual from "@/images/blog3.jpg";

export default function RecentBlogs() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-gray-950"
        style={{ height: "60%" }}
      ></div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-8">
          <div className="col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Recent Legal Insights
            </h2>
            <p className="mt-3 text-xl text-gray-300">
              Stay updated with the latest trends, career advice, and industry
              insights in legal recruitment.
            </p>
          </div>
          <div className="flex items-start justify-end">
            <Button
              asChild
              className="bg-[#3366CC] hover:bg-[#2952A3] text-white"
            >
              <Link href="/blog">View All Insights</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <BlogCard
            title="5 Emerging Legal Specializations in High Demand"
            excerpt="Discover the cutting-edge legal fields that are seeing a surge in demand for skilled professionals."
            date="July 15, 2023"
            imageSrc={compliance}
            href="/blog/emerging-legal-specializations"
          />
          <BlogCard
            title="Navigating Career Transitions in Law"
            excerpt="Expert advice on successfully transitioning between different areas of law or moving from private practice to in-house roles."
            date="August 2, 2023"
            imageSrc={employment}
            href="/blog/career-transitions-in-law"
          />
          <BlogCard
            title="The Impact of AI on Legal Recruitment"
            excerpt="Explore how artificial intelligence is reshaping the legal recruitment landscape and what it means for job seekers and employers."
            date="August 20, 2023"
            imageSrc={intellectual}
            href="/blog/ai-impact-on-legal-recruitment"
          />
        </div>
      </div>
    </section>
  );
}

function BlogCard({
  title,
  excerpt,
  date,
  imageSrc,
  href,
}: {
  title: string;
  excerpt: string;
  date: string;
  imageSrc: string | StaticImageData;
  href: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="flex-shrink-0">
        <Image
          className="h-48 w-full object-cover"
          src={imageSrc}
          alt={title}
          width={400}
          height={200}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <Link href={href} className="mt-2 block">
            <p className="text-xl font-semibold text-[#0A2756]">{title}</p>
            <p className="mt-3 text-base text-gray-500">{excerpt}</p>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div className="ml-3">
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={date}>{date}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
