import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight } from "lucide-react";
import Image from "next/image";
import blog1 from "@/images/blog1.jpg";
import blog2 from "@/images/blog2.jpg";
import blog3 from "@/images/blog3.jpg";

export default function Blogs() {
  const blogPosts = [
    {
      title: "5 Signs You Need a New Roof",
      excerpt:
        "Learn the key indicators that it might be time to replace your roof before major problems occur.",
      date: "2024-03-15",
      image: blog1,
    },
    {
      title: "The Benefits of Metal Roofing",
      excerpt:
        "Discover why metal roofing is becoming an increasingly popular choice for homeowners across the country.",
      date: "2024-03-10",
      image: blog2,
    },
    {
      title: "How to Prepare Your Roof for Storm Season",
      excerpt:
        "Essential tips to ensure your roof is ready to withstand heavy rains, high winds, and other severe weather conditions.",
      date: "2024-03-05",
      image: blog3,
    },
  ];

  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="max-w-[700px] text-lg text-[#475569] mb-8">
            Stay informed with the latest roofing tips, industry news, and
            expert advice from our team.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden border border-[#E2E8F0] shadow-sm"
            >
              <CardHeader className="p-0">
                <div className="relative w-full h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover "
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <div className="flex items-center text-sm text-[#64748B] mb-2">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <h3 className="text-xl font-semibold text-[#334155] mb-2">
                  {post.title}
                </h3>
                <p className="text-[#475569] mb-4">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full">
                  Read Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
