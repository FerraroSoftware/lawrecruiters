"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

import review1 from "@/images/review1.jpg";
import review2 from "@/images/review2.jpg";
import review3 from "@/images/review3.jpg";

export default function Reviews() {
  const testimonials = [
    {
      name: "Johny T.",
      quote:
        "TrustRoof made the entire process so easy. Their team was professional, and the new roof looks amazing!",
      image: review1,
      location: "Homeowner in Austin, TX",
      rating: 5,
    },
    {
      name: "Michael R.",
      quote:
        "I appreciated their transparent pricing and energy-efficient options. My utility bills have noticeably decreased.",
      image: review2,
      location: "Business Owner in Dallas, TX",
      rating: 5,
    },
    {
      name: "Emily L.",
      quote:
        "The attention to detail and customer service were outstanding. I highly recommend TrustRoof to anyone needing roofing work.",
      image: review3,
      location: "Homeowner in Houston, TX",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4 text-gray-900"
            variants={itemVariants}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            className="text-xl text-center mb-12 text-[#475569] max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Don&apos;t just take our word for it. Here&apos;s what some of our
            satisfied customers have to say about their experience with
            TrustRoof.
          </motion.p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#E07A5F] mr-4">
                        <Image
                          src={testimonial.image}
                          alt={`${testimonial.name}'s avatar`}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#334155]">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-[#64748B]">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-current text-[#E07A5F]"
                        />
                      ))}
                    </div>
                    <div className="flex-grow">
                      <Quote className="w-8 h-8 text-[#E07A5F] opacity-20 mb-2" />
                      <p className="text-[#475569] italic leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
