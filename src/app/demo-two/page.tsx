import Benefits from "@/components/secondpage/Benefits";
import Blogs from "@/components/secondpage/Blogs";
import Cta from "@/components/secondpage/Cta";
import DualFeature from "@/components/secondpage/DualFeature";
import FAQSection from "@/components/secondpage/Faq";
import FinancingSection from "@/components/secondpage/Financing";
import Hero from "@/components/secondpage/Hero";
import ProcessSection from "@/components/secondpage/ProcessSection";
import Reviews from "@/components/secondpage/Reviews";

import Servicestwo from "@/components/secondpage/Servicestwo";
import React from "react";

export default function page() {
  return (
    <>
      <Hero />
      <Benefits />

      <Servicestwo />
      <DualFeature />
      <ProcessSection />
      <Reviews />
      <FinancingSection />
      <FAQSection />
      <Blogs />
      <Cta />
    </>
  );
}
