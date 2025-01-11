"use client";

import { CheckCircle, DollarSign, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ProcessSection() {
  const steps = [
    {
      icon: CheckCircle,
      title: "Free Inspection",
      description:
        "We thoroughly assess your roof's condition, identifying any issues or potential problems.",
    },
    {
      icon: DollarSign,
      title: "Detailed Quote",
      description:
        "Receive a comprehensive, no-obligation estimate with transparent pricing and material options.",
    },
    {
      icon: Clock,
      title: "Efficient Installation",
      description:
        "Our expert team completes the job with minimal disruption, ensuring quality and timeliness.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="process"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-[#334155] text-[#F8FAFC] overflow-hidden"
    >
      <motion.div
        className="container px-4 md:px-6 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6">
          Our Simple 3-Step Process
        </h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-[#F8FAFC]/80">
          We&apos;ve streamlined our roofing process to make it as easy and
          stress-free as possible for you.
        </p>
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 h-[calc(100%-88px)] w-0.5 bg-[#E07A5F] hidden md:block" />
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start mb-12 last:mb-0 relative"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#E07A5F] flex items-center justify-center mb-4 md:mb-0 md:mr-6 shadow-lg z-10 relative">
                <span className="text-3xl font-bold text-white">
                  {index + 1}
                </span>
              </div>
              <div className="bg-[#F8FAFC] text-[#334155] p-6 rounded-lg shadow-xl flex-grow">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <step.icon className="w-6 h-6 mr-2 text-[#E07A5F]" />
                  {step.title}
                </h3>
                <p className="text-[#475569]">{step.description}</p>
              </div>
              <div className="absolute left-8 top-8 w-8 h-0.5 bg-[#E07A5F] hidden md:block" />
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-[#E07A5F] hover:bg-[#E07A5F]/90 text-white"
          >
            Start Your Free Inspection <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
