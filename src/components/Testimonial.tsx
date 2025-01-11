"use client";
import React from "react";
import { cn } from "@/lib/utils";

import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";

import client from "@/images/client.png";
import review1 from "@/images/review1.jpg";
import review2 from "@/images/review2.jpg";
import review3 from "@/images/review3.jpg";
import review4 from "@/images/review4.jpg";
import review5 from "@/images/review5.jpg";
import review6 from "@/images/review6.jpg";
import review7 from "@/images/review7.jpg";
import review8 from "@/images/review8.jpg";
import review9 from "@/images/review9.jpg";
import review10 from "@/images/review10.jpg";

export default function Testimonial() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-32 overflow-hidden h-full ">
      <div className="pb-20">
        <h2 className="pt-4 font-bold text-black text-lg md:text-2xl dark:text-white">
          See What Our Clients Say
        </h2>
        <p className="text-base mt-4 text-neutral-600 dark:text-neutral-200">
          Our personalized approach to legal recruitment has helped hundreds of
          companies find talented legal professionals.
        </p>
      </div>

      <div className=" relative">
        <div className="h-full max-w-none overflow-hidden w-full bg-charcoal">
          <TestimonialsGrid />
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-40 w-full bg-gradient-to-t from-charcoal to-transparent"></div>
    </div>
  );
}

export const TestimonialsGrid = () => {
  const first = testimonials.slice(0, 6);
  const second = testimonials.slice(6, 12);

  return (
    <div className="relative [mask-image:linear-gradient(to_right,transparent_0%,white_10%,white_90%,transparent_100%)]">
      <Marquee direction="right" pauseOnHover speed={50}>
        {first.map((testimonial, index) => (
          <Card key={`testimonial-${index}`}>
            <Quote>{testimonial.quote}</Quote>
            <div className="flex gap-2 items-center mt-8">
              <Image
                src={testimonial.src}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <QuoteDescription className="text-neutral-600 dark:text-neutral-300">
                  {testimonial.name}
                </QuoteDescription>
                <QuoteDescription className="text-neutral-400">
                  {testimonial.designation}
                </QuoteDescription>
              </div>
            </div>
          </Card>
        ))}
      </Marquee>
      <Marquee className="mt-10" direction="right" pauseOnHover speed={70}>
        {second.map((testimonial, index) => (
          <Card key={`testimonial-${index + 6}`}>
            <Quote>{testimonial.quote}</Quote>
            <div className="flex gap-2 items-center mt-8">
              <Image
                src={testimonial.src}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <QuoteDescription className="text-neutral-300">
                  {testimonial.name}
                </QuoteDescription>
                <QuoteDescription className="text-neutral-400">
                  {testimonial.designation}
                </QuoteDescription>
              </div>
            </div>
          </Card>
        ))}
      </Marquee>
    </div>
  );
};
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-4 md:p-8 rounded-xl min-h-[230px] h-full max-w-xs md:max-w-md mx-4 bg-gray-50  dark:bg-neutral-900 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-sm md:text-base font-semibold dark:text-white text-black py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-xs md:text-sm font-normal dark:text-neutral-400 text-neutral-600 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

interface Testimonial {
  src: string | StaticImageData;
  quote: string;
  name: string;
  designation?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Johnson & Partners LLP",
    quote:
      "Their recruitment service is exceptional. They found us top-tier talent that perfectly fits our firm's culture and needs.",
    src: review1,
    designation: "Corporate Law Firm",
  },
  {
    name: "Chen & Associates",
    quote:
      "We've been consistently impressed with the quality of candidates they've brought to us. They truly understand our firm's requirements.",
    src: review2,
    designation: "Intellectual Property Specialists",
  },
  {
    name: "Rodriguez Legal Group",
    quote:
      "Their personalized approach to recruitment has helped us build a diverse and highly skilled team of litigators.",
    src: review3,
    designation: "Litigation Firm",
  },
  {
    name: "Kim & Lee LLP",
    quote:
      "They have an uncanny ability to match not just skills, but personalities that thrive in our fast-paced M&A practice.",
    src: review4,
    designation: "Mergers & Acquisitions Firm",
  },
  {
    name: "Patel Environmental Law",
    quote:
      "Their network in the environmental law sector is unparalleled. They've helped us find niche experts time and time again.",
    src: review5,
    designation: "Environmental Law Specialists",
  },
  {
    name: "Wilson Tax Advisors",
    quote:
      "The recruiters truly understand the nuances of tax law. They've been instrumental in growing our practice with top talent.",
    src: review6,
    designation: "Tax Law Firm",
  },
  {
    name: "Taylor Real Estate Law",
    quote:
      "Their recruitment process is efficient and effective. We've saved countless hours by relying on their expertise.",
    src: review7,
    designation: "Real Estate Law Firm",
  },
  {
    name: "Lee Banking & Finance",
    quote:
      "They've helped us stay competitive in a tough market by connecting us with rising stars in banking and finance law.",
    src: review8,
    designation: "Banking & Finance Law Firm",
  },
  {
    name: "Anderson Family Law",
    quote:
      "Their dedication to understanding our unique practice needs has helped us find compassionate and skilled attorneys who truly care about our clients.",
    src: review9,
    designation: "Family Law Firm",
  },
  {
    name: "Greenwood Energy Law",
    quote:
      "Their expertise in recruiting for the energy sector has been invaluable. We’ve secured top-tier talent to support our renewable energy initiatives.",
    src: review10,
    designation: "Energy Law Specialists",
  },
];
