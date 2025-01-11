"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

export default function Stats() {
  const items = [
    {
      description:
        "Years of experience in providing top-quality roofing solutions.",
      value: 25,
    },
    {
      description: "Satisfied customers who trust us with their roofs.",
      value: 10000,
    },
    {
      description:
        "Square feet of roofing installed and repaired across the country.",
      value: 5000000,
    },
    {
      description: "Certified roofing professionals in our expert team.",
      value: 50,
    },
  ];

  return (
    <section className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl p-6 py-16 md:p-10 md:py-20">
      <div className="relative z-20">
        <h2 className="text-center text-2xl font-bold text-neutral-700 dark:text-neutral-100 md:text-3xl">
          Trusted by homeowners and businesses nationwide
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-neutral-600 dark:text-neutral-300 md:text-base">
          We are a team of experienced roofing professionals dedicated to
          protecting your property with high-quality, durable roofing solutions.
        </p>
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              initial={{
                y: 20,
                opacity: 0,
                filter: "blur(4px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              key={`card-${index}`}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center">
                <p className="text-3xl font-bold text-neutral-700 dark:text-neutral-200">
                  <AnimatedNumber value={item.value} />+
                </p>
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({
  value,
  initial = 0,
}: {
  value: number;
  initial?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const spring = useSpring(initial, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
