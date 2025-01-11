"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, Check } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Homeowner",
    content:
      "The roofing team did an excellent job! Our new roof looks fantastic and was completed on time.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Emily Johnson",
    role: "Business Owner",
    content:
      "Professional service from start to finish. They handled our commercial roofing project with expertise.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Property Manager",
    content:
      "Reliable and efficient. They've been our go-to roofing company for all our properties for years.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function ServiceHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* First Column: Header, Paragraph, and CTA Buttons */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">
              Expert Roofing Solutions for Your Home
            </h1>
            <p className="text-xl text-gray-600">
              With over 20 years of experience, we provide top-quality roofing
              services for residential and commercial properties. Trust us to
              protect your investment with durable, weather-resistant roofing
              solutions.
            </p>
            <div className="space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Get a Free Quote
              </Button>
              <Button
                variant="outline"
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Second Column: Testimonial Slider */}
          <div className="space-y-4">
            {/* Testimonial Slider */}
            <div className="relative h-[500px] w-full max-w-xl mx-auto">
              <AnimatePresence initial={false}>
                {testimonials.map((testimonial, index) => {
                  let position = index - currentIndex;
                  if (position < 0) position += testimonials.length;
                  const xPercentage =
                    position === 0 ? 0 : position === 1 ? 30 : -30;
                  return (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, scale: 0.8, x: `${xPercentage}%` }}
                      animate={{
                        opacity: position === 0 ? 1 : 0.7,
                        scale: position === 0 ? 1 : 0.85,
                        x: `${xPercentage}%`,
                        y: position === 0 ? 0 : "10%",
                        zIndex: testimonials.length - Math.abs(position),
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        x: position === 1 ? "60%" : "-60%",
                      }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
                      className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                    >
                      <Card
                        className={`w-full max-w-sm bg-white shadow-lg ${
                          position !== 0 ? "blur-[1px] pointer-events-none" : ""
                        }`}
                      >
                        <CardContent className="p-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                            className="flex items-center space-x-4 mb-4"
                          >
                            <Avatar>
                              <AvatarImage
                                src={testimonial.avatar}
                                alt={testimonial.name}
                              />
                              <AvatarFallback>
                                {testimonial.name[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold text-gray-900">
                                {testimonial.name}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {testimonial.role}
                              </p>
                            </div>
                          </motion.div>
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 text-yellow-400 fill-current"
                                />
                              ))}
                            </div>
                            <span className="text-green-600 flex items-center">
                              <Check className="w-4 h-4 mr-1" /> Verified
                            </span>
                          </div>
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                            className="text-gray-700"
                          >
                            {testimonial.content}
                          </motion.p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">215</span> reviews on Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
