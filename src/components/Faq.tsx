"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const FAQs = [
  {
    question: "What types of legal positions do you recruit for?",
    answer:
      "We recruit for a wide range of legal positions including associates, partners, in-house counsel, paralegals, and legal support staff. We cover various practice areas such as corporate law, litigation, intellectual property, employment law, and more.",
  },
  {
    question: "How long does a typical recruitment process take?",
    answer:
      "The duration of the recruitment process can vary depending on the position and the specific needs of the client. On average, it takes 4-8 weeks from initial job posting to offer acceptance. However, some specialized or senior positions may take longer.",
  },
  {
    question: "Do you offer free consultations for law firms?",
    answer:
      "Yes, we offer free initial consultations for law firms. Our experienced recruiters will assess your staffing needs and provide you with a detailed strategy tailored to your firm's requirements.",
  },
  {
    question: "What guarantees do you provide on your placements?",
    answer:
      "We offer a 90-day replacement guarantee on all our permanent placements. If a candidate leaves within the first 90 days, we will find a replacement at no additional cost. For temporary placements, we offer a 30-day guarantee.",
  },
  {
    question: "How do you ensure candidate quality?",
    answer:
      "We have a rigorous screening process that includes thorough background checks, multiple interviews, skills assessments, and reference checks. We also use AI-powered matching technology to ensure the best fit between candidates and law firms.",
  },
  {
    question: "Can you assist with international legal recruitment?",
    answer:
      "Absolutely. We have extensive experience in international legal recruitment. We can assist with cross-border placements, helping law firms expand into new markets or find specialized talent from around the world.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-20 md:grid-cols-2 md:px-8 md:py-40">
      <h2 className="text-center text-4xl font-bold tracking-tight text-neutral-600 dark:text-neutral-50 md:text-left md:text-5xl">
        Frequently asked questions about our legal recruitment services
      </h2>
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <div
      className="cursor-pointer py-4"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
          <IconPlus
            className={cn(
              "absolute inset-0 h-6 w-6 transform text-[#3366CC] transition-all duration-200",
              isOpen && "rotate-90 scale-0"
            )}
          />
          <IconMinus
            className={cn(
              "absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-[#3366CC] transition-all duration-200",
              isOpen && "rotate-0 scale-100"
            )}
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-neutral-500 dark:text-neutral-400"
              >
                <p>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
