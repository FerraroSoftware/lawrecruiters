"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "How long does a typical roof installation take?",
      answer:
        "Most residential roof installations are completed within 1-3 days, depending on the size and complexity of your roof.",
    },
    {
      question: "What types of roofing materials do you offer?",
      answer:
        "We offer a variety of materials including asphalt shingles, metal roofing, and tile. Our experts can help you choose the best option for your home and budget.",
    },
    {
      question: "Do you offer warranties on your roofing work?",
      answer:
        "Yes, we provide comprehensive warranties on both materials and workmanship to ensure your long-term satisfaction and peace of mind.",
    },
    {
      question: "How can I finance my new roof?",
      answer:
        "We offer various financing options to fit different budgets. Our team can discuss these options during your free consultation.",
    },
    {
      question: "How often should I have my roof inspected?",
      answer:
        "We recommend having your roof professionally inspected at least once a year, ideally in the spring or fall. However, you should also schedule an inspection after severe weather events like hailstorms or high winds.",
    },
    {
      question:
        "Can you work with my insurance company for storm damage repairs?",
      answer:
        "We have extensive experience working with insurance companies for storm damage claims. Our team can assist you throughout the entire process, from the initial inspection to the final repair or replacement.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Find answers to common questions about our roofing services and
            process.
          </p>
        </motion.div>
        <div className="w-full max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-[#E2E8F0] rounded-lg overflow-hidden bg-white shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-semibold text-[#334155]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#E07A5F] transition-transform duration-300 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-[#F1F5F9]"
                  >
                    <div className="px-6 py-4 text-[#475569]">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
