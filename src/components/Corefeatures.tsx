import { Button } from "@/components/ui/button";
import Image from "next/image";
import lawgirl from "@/images/lawgirl.png";
import law1 from "@/images/law1.jpg";
import law2 from "@/images/law2.jpg";
import law3 from "@/images/law3.jpg";

const features = [
  {
    title: "AI-Powered Candidate Matching",
    description:
      "Our advanced algorithm analyzes countless data points to match the perfect candidates with your firm's unique needs and culture. Save time and resources by focusing only on the most qualified applicants.",
    image: law1,
    alt: "AI-powered candidate matching illustration",
    cta1: "Try AI Matching",
    cta2: "Learn More",
  },
  {
    title: "Comprehensive Talent Pool",
    description:
      "Access a vast network of pre-vetted legal professionals across all specializations and experience levels. From recent law school graduates to seasoned partners, find the right talent to grow your firm.",
    image: law2,
    alt: "Diverse legal professionals illustration",
    cta1: "Browse Candidates",
    cta2: "See Specializations",
  },
  {
    title: "Streamlined Hiring Process",
    description:
      "Simplify your recruitment workflow with our intuitive platform. From posting job listings to scheduling interviews and making offers, our tools help you manage the entire hiring process efficiently and effectively.",
    image: law3,
    alt: "Streamlined hiring process illustration",
    cta1: "Start Hiring",
    cta2: "View Demo",
  },
];

export default function Corefeatures() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col gap-8 mb-16 last:mb-0 lg:flex-row lg:items-center ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1">
              <Image
                src={feature.image}
                alt={feature.alt}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2756] sm:text-4xl">
                {feature.title}
              </h2>
              <p className="text-lg text-gray-600 sm:text-xl max-w-2xl">
                {feature.description}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-[#3366CC] hover:bg-[#2952A3]">
                  {feature.cta1}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#3366CC] text-[#3366CC] hover:bg-[#3366CC]/10"
                >
                  {feature.cta2}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
