"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Quote, Check } from "lucide-react";

import roofingcontractor from "@/images/roofing-contractor.png";
import premiumRoofing from "@/images/premium-roofing-solutions.jpg";

export default function TwoColumnSections() {
  const fadeInLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="container px-4 md:px-6 mx-auto">
        {/* First Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            className="relative h-64 md:h-full min-h-[400px]"
            {...fadeInLeft}
          >
            <Image
              src={roofingcontractor}
              alt="Roofing contractor at work"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-lg object-cover lg:object-top"
            />
          </motion.div>
          <motion.div className="flex flex-col justify-center" {...fadeInRight}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4">
              Quality Roofing Solutions
            </h2>
            <p className="text-lg text-[#64748B] mb-6">
              Our expert team provides top-notch roofing services to protect
              your home and increase its value. With years of experience and
              high-quality materials, we ensure long-lasting results.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <Quote className="w-8 h-8 text-[#E07A5F] mb-2" />
              <p className="text-[#475569] italic mb-4">
                &lsquo;At TrustRoof, we&apos;re not just building roofs,
                we&apos;re building trust. Our commitment to quality and
                customer satisfaction is the foundation of every project we
                undertake.&rsquo;
              </p>
              <p className="text-[#64748B] font-semibold">
                - John Doe, Founder of TrustRoof
              </p>
            </div>
            <Button className="w-fit bg-[#E07A5F] text-white hover:bg-[#E07A5F]/90">
              Get a Free Quote
            </Button>
          </motion.div>
        </section>

        {/* Second Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 md:py-24">
          <motion.div className="flex flex-col justify-center" {...fadeInLeft}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4">
              Premium Roofing Solutions
            </h2>
            <p className="text-lg text-[#64748B] mb-6">
              Discover our range of premium roofing solutions designed to
              enhance the beauty and durability of your home. We use top-quality
              materials and innovative techniques to ensure your roof stands the
              test of time.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#E07A5F] mr-2" />
                <span className="text-[#475569]">
                  Long-lasting durability with premium materials
                </span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#E07A5F] mr-2" />
                <span className="text-[#475569]">
                  Energy-efficient options to reduce utility costs
                </span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#E07A5F] mr-2" />
                <span className="text-[#475569]">
                  Expert installation by certified professionals
                </span>
              </li>
            </ul>
            <Button className="w-fit bg-black text-white hover:bg-black/90">
              Explore Our Solutions
            </Button>
          </motion.div>
          <motion.div
            className="relative h-64 md:h-full min-h-[400px]"
            {...fadeInRight}
          >
            <Image
              src={premiumRoofing}
              alt="Premium roofing solutions"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-lg object-cover"
            />
          </motion.div>
        </section>
      </div>
    </div>
  );
}
