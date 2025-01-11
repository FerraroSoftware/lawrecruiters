import Image from "next/image";
import { CheckCircle } from "lucide-react";

import office2 from "@/images/team.jpg";
import employmentlaw from "@/images/employment-law-recruitment.jpg";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-12 dark:bg-gray-900 md:py-16 lg:py-20 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="col-span-1 grid grid-cols-1 gap-6 lg:col-span-2 lg:gap-8">
            <div className="col-span-1 lg:col-span-2">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#3366CC] dark:text-blue-400">
                Who We Are
              </p>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl ">
                Legal Recruitment Experts You Can Trust
              </h2>
              <p className="mb-6 text-base text-gray-700 dark:text-gray-300 md:text-lg">
                With over a decade of experience, our legal recruitment platform
                has been connecting top law firms with exceptional legal talent
                across all specializations.
              </p>
            </div>
            <div className="col-span-1 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
              <BenefitItem
                title="Law Firm Recruitment"
                description="Our advanced algorithms ensure precise candidate-firm matches based on skills, experience, and cultural fit."
              />
              <BenefitItem
                title="Extensive Talent Pool"
                description="Access a vast network of pre-vetted legal professionals across various specializations and experience levels."
              />
              <BenefitItem
                title="Efficient Process"
                description="Our streamlined recruitment process saves you time and resources, allowing you to focus on your core business."
              />
              <BenefitItem
                title="Client Satisfaction"
                description="Our commitment to excellence ensures high satisfaction rates for both law firms and candidates."
              />
            </div>
          </div>
          <div className="col-span-1 h-64 overflow-hidden rounded-lg lg:h-full lg:mt-10">
            <Image
              src={employmentlaw}
              alt="Legal recruitment experts at work"
              layout="responsive"
              width={600}
              height={800}
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-3">
      <CheckCircle className="h-6 w-6 flex-shrink-0 text-[#3366CC]" />
      <div>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
