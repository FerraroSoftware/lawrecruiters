import { Hammer, Shield, Droplets, Sun, Wind, Wrench } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import {
  GavelIcon,
  ScaleIcon as ScalesIcon,
  BookOpenIcon,
  BriefcaseIcon,
  GlobeIcon,
  ClipboardCheckIcon,
} from "lucide-react";

import corporatelaw from "@/images/corporate-law-recruitment.jpg";
import litigation from "@/images/litigation-law-recruitment.jpg";
import intellectualproperty from "@/images/intellectual-property-recruitment.jpg";
import employmentlaw from "@/images/team.jpg";
import internationallaw from "@/images/international-law-recruitment.jpg";
import compliancelaw from "@/images/compliance-law-recruitment.jpg";

export default function LegalServices() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 dark:bg-gray-900 md:py-24 lg:py-32">
      <BackgroundSVG />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold uppercase tracking-wide text-[#3366CC]">
            Our Expertise
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Comprehensive Legal Recruitment Services
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-500 dark:text-gray-300">
            From entry-level positions to partner-level placements, we offer a
            wide range of legal recruitment services to meet all your staffing
            needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<GavelIcon className="h-8 w-8" />}
            title="Corporate Law Recruitment"
            description="Expert placement of corporate lawyers for mergers, acquisitions, and business transactions."
            link="/services/corporate-law-recruitment"
            imageSrc={corporatelaw}
          />
          <ServiceCard
            icon={<ScalesIcon className="h-8 w-8" />}
            title="Litigation Recruitment"
            description="Sourcing top-tier litigators for civil, criminal, and appellate cases."
            link="/services/litigation-recruitment"
            imageSrc={litigation}
          />
          <ServiceCard
            icon={<BookOpenIcon className="h-8 w-8" />}
            title="Intellectual Property Recruitment"
            description="Connecting firms with specialized IP lawyers for patents, trademarks, and copyrights."
            link="/services/ip-recruitment"
            imageSrc={intellectualproperty}
          />
          <ServiceCard
            icon={<BriefcaseIcon className="h-8 w-8" />}
            title="Employment Law Recruitment"
            description="Placing expert employment and labor law attorneys in leading firms."
            link="/services/employment-law-recruitment"
            imageSrc={employmentlaw}
          />
          <ServiceCard
            icon={<GlobeIcon className="h-8 w-8" />}
            title="International Law Recruitment"
            description="Facilitating cross-border placements for global law practices."
            link="/services/international-law-recruitment"
            imageSrc={internationallaw}
          />
          <ServiceCard
            icon={<ClipboardCheckIcon className="h-8 w-8" />}
            title="Compliance Recruitment"
            description="Sourcing compliance officers and regulatory experts for law firms and corporations."
            link="/services/compliance-recruitment"
            imageSrc={compliancelaw}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  link,
  imageSrc,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  imageSrc: string | StaticImageData;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={200}
          className="h-48 w-full object-cover"
        />
        <div className="absolute -bottom-6 right-6 rounded-full bg-gray-800 p-3 text-[#3366CC] shadow-md ">
          {icon}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 pt-8">
        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mb-4 flex-1 text-gray-600 dark:text-gray-300">
          {description}
        </p>
        <Link
          href={link}
          className="text-sm font-medium text-[#3366CC] hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Learn More <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

function BackgroundSVG() {
  return (
    <svg
      className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 dark:stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="legal-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          patternTransform="translate(-20 -20) scale(0.5) rotate(0)"
        >
          <path d="M0 40V20L20 40M40 40V20L20 40" fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth="0"
        fill="url(#legal-pattern)"
      />
    </svg>
  );
}
