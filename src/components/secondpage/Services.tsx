"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Wrench, Droplets, Sun, Shield, Zap } from "lucide-react";

const services = [
  {
    title: "Roof Installation",
    description: "Expert installation of high-quality roofing systems.",
    icon: Home,
    link: "/services/roof-installation",
  },
  {
    title: "Roof Repair",
    description: "Quick and reliable repairs for all types of roof damage.",
    icon: Wrench,
    link: "/services/roof-repair",
  },
  {
    title: "Waterproofing",
    description: "Comprehensive waterproofing solutions for your roof.",
    icon: Droplets,
    link: "/services/waterproofing",
  },
  {
    title: "Solar Roof Installation",
    description: "Integrate solar panels with your roofing system.",
    icon: Sun,
    link: "/services/solar-roof-installation",
  },
  {
    title: "Roof Inspection",
    description: "Thorough inspections to prevent future issues.",
    icon: Shield,
    link: "/services/roof-inspection",
  },
  {
    title: "Emergency Services",
    description: "24/7 emergency roof repair and protection.",
    icon: Zap,
    link: "/services/emergency-services",
  },
];

export default function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#475569]"
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
                  <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col">
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
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
