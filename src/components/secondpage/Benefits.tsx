"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, DollarSign, Sun, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Trusted Experts",
      description:
        "Our team of certified professionals ensures top-quality workmanship and materials for your new roof.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description:
        "No hidden costs or surprises. We provide detailed quotes and flexible financing options to fit your budget.",
    },
    {
      icon: Sun,
      title: "Energy Efficient Solutions",
      description:
        "Our roofing options are designed to improve your home's energy efficiency, potentially lowering your utility costs.",
    },
    {
      icon: Clock,
      title: "Timely Completion",
      description:
        "Our efficient processes ensure your roofing project is completed on schedule without compromising quality.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="benefits"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="container px-4 md:px-6 mx-auto relative">
        <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]" />
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4 text-gray-900"
            variants={itemVariants}
          >
            We Deliver Exceptional Service
          </motion.h2>
          <motion.p
            className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Experience the difference with our premium roofing services tailored
            to your needs
          </motion.p>
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-white border-none shadow-lg transition-shadow duration-300">
                  <CardHeader className="relative">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="mt-16 text-center" variants={itemVariants}>
            <Button size="lg">
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
