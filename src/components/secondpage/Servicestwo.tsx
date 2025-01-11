"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Home, Wrench, Droplets, Sun, Shield, Zap } from "lucide-react";

import roofinstallation from "@/images/roof-installation.jpg";
import roofrepair from "@/images/roof-repair.jpg";
import roofwaterproofing from "@/images/roof-waterproofing.jpg";
import roofingmaintenance from "@/images/roofing-maintenance.jpg";
import solarroofing from "@/images/solar-roofing.jpg";
import stormdamagerepair from "@/images/storm-damage-repair.jpg";

const services = [
  {
    title: "Roof Installation",
    description: "Expert installation of high-quality roofing systems.",
    icon: Home,
    link: "/services/roof-installation",
    image: roofinstallation,
  },
  {
    title: "Roof Repair",
    description: "Quick and reliable repairs for all types of roof damage.",
    icon: Wrench,
    link: "/services/roof-repair",
    image: roofrepair,
  },
  {
    title: "Waterproofing",
    description: "Comprehensive waterproofing solutions for your roof.",
    icon: Droplets,
    link: "/services/waterproofing",
    image: roofwaterproofing,
  },
  {
    title: "Solar Roof Installation",
    description: "Integrate solar panels with your roofing system.",
    icon: Sun,
    link: "/services/solar-roof-installation",
    image: solarroofing,
  },
  {
    title: "Roof Inspection",
    description: "Thorough inspections to prevent future issues.",
    icon: Shield,
    link: "/services/roof-inspection",
    image: roofingmaintenance,
  },
  {
    title: "Emergency Services",
    description: "24/7 emergency roof repair and protection.",
    icon: Zap,
    link: "/services/emergency-services",
    image: stormdamagerepair,
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full pt-12 md:pt-24 pb-12 md:pb-24 lg:pb-32 bg-[#F8FAFC]">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Roofing Services
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.link} passHref>
                  <div className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={service.image}
                        alt={`${service.title} image`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center mb-4">
                        <IconComponent className="w-8 h-8 text-[#E07A5F] mr-3" />
                        <h3 className="text-xl font-semibold text-[#475569] group-hover:text-[#E07A5F] transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-[#64748B] mb-4 flex-grow">
                        {service.description}
                      </p>
                      <span className="text-[#E07A5F] font-semibold group-hover:underline">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
