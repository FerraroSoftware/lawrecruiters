import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "@/images/logo.svg";

export default function Footer() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="border-b border-neutral-200 pb-2 dark:border-neutral-700">
          <div className="mb-10 max-w-xl">
            <Logo className="justify-start" />
            <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              Connecting top legal talent with leading law firms. Our expert
              team ensures perfect matches that drive success for both
              candidates and employers in the legal industry.
            </p>
            <div className="text-sm text-neutral-700 dark:text-neutral-300">
              A trusted name in legal recruitment since{" "}
              <span className="font-medium text-neutral-800 dark:text-neutral-400">
                2005
              </span>
            </div>
            <div className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              Follow our updates on{" "}
              <Link
                href="https://linkedin.com/company/legal-recruiters-pro"
                className="font-medium text-neutral-800 underline dark:text-neutral-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 border-b border-neutral-200 pb-10 pt-10 dark:border-neutral-700 md:grid-cols-4">
          <ul className="text-base font-medium text-neutral-800 dark:text-neutral-200">
            <li className="mb-4 text-sm font-bold text-black dark:text-white">
              Our Services
            </li>
            {RECRUITMENT_SERVICES.map((item, idx) => (
              <li key={"service" + idx} className="mb-4 text-sm font-normal">
                <Link
                  href={item.href}
                  className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="text-base font-medium text-neutral-800 dark:text-neutral-200">
            <li className="mb-4 text-sm font-bold text-black dark:text-white">
              Practice Areas
            </li>
            {PRACTICE_AREAS.map((item, idx) => (
              <li key={"area" + idx} className="mb-4 text-sm font-normal">
                <Link
                  href={item.href}
                  className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="text-base font-medium text-neutral-800 dark:text-neutral-200">
            <li className="mb-4 text-sm font-bold text-black dark:text-white">
              Company
            </li>
            {COMPANY_PAGES.map((item, idx) => (
              <li key={"company" + idx} className="mb-4 text-sm font-normal">
                <Link
                  href={item.href}
                  className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="text-base font-medium text-neutral-800 dark:text-neutral-200">
            <li className="mb-4 text-sm font-bold text-black dark:text-white">
              Resources
            </li>
            {RESOURCES.map((item, idx) => (
              <li key={"resource" + idx} className="mb-4 text-sm font-normal">
                <Link
                  href={item.href}
                  className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mb-4 pt-10 text-sm text-neutral-600 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} Legal Recruiters Pro. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
}

const RECRUITMENT_SERVICES = [
  {
    title: "Attorney Placement",
    href: "/services/attorney-placement",
  },
  {
    title: "In-House Counsel Recruitment",
    href: "/services/in-house-counsel-recruitment",
  },
  {
    title: "Partner Recruitment",
    href: "/services/partner-recruitment",
  },
  {
    title: "Legal Support Staff Placement",
    href: "/services/legal-support-staff-placement",
  },
  {
    title: "Law Firm Mergers",
    href: "/services/law-firm-mergers",
  },
  {
    title: "Legal Talent Consulting",
    href: "/services/legal-talent-consulting",
  },
];

const PRACTICE_AREAS = [
  {
    title: "Corporate Law",
    href: "/practice-areas/corporate-law",
  },
  {
    title: "Litigation",
    href: "/practice-areas/litigation",
  },
  {
    title: "Intellectual Property",
    href: "/practice-areas/intellectual-property",
  },
  {
    title: "Employment Law",
    href: "/practice-areas/employment-law",
  },
  {
    title: "Real Estate Law",
    href: "/practice-areas/real-estate-law",
  },
  {
    title: "Tax Law",
    href: "/practice-areas/tax-law",
  },
];

const COMPANY_PAGES = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Our Team",
    href: "/team",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
  },
  {
    title: "FAQs",
    href: "/faqs",
  },
];

const RESOURCES = [
  {
    title: "Legal Career Guide",
    href: "/resources/legal-career-guide",
  },
  {
    title: "Salary Insights",
    href: "/resources/salary-insights",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Industry Reports",
    href: "/resources/industry-reports",
  },
  {
    title: "Interview Tips",
    href: "/resources/interview-tips",
  },
  {
    title: "Legal Tech Trends",
    href: "/resources/legal-tech-trends",
  },
];

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex flex-shrink-0 items-center justify-center space-x-2 py-6 text-center text-2xl font-bold text-neutral-600 selection:bg-blue-500 dark:text-gray-100",
        className
      )}
    >
      <div className="relative flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-white text-sm text-black antialiased md:h-150 md:w-150">
        <div className="absolute inset-x-0 -top-10 h-10 w-full rounded-full bg-blue-500/[0.2] blur-xl" />
        <div className="relative z-20 text-sm text-blue-500">
          <Image
            src={logo}
            height="150"
            width="150"
            alt="Logo"
            className="block"
          />
        </div>
      </div>
      <div
        className={cn(
          "flex items-center gap-2 font-sans text-xl text-black dark:text-white"
        )}
      >
        Legal Recruiters Pro{" "}
        <div className="relative rounded-sm border border-transparent bg-white px-2 py-0.5 text-xs font-bold text-black shadow-input dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:shadow-none">
          est. 2005
        </div>
      </div>
    </Link>
  );
};
