import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Flag } from "lucide-react";

import lawgirl from "@/images/lawgirl.png";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-36">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          {/* Left Column (Text Content) */}
          <div className="flex-1 space-y-8">
            {/* Rating */}
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-orange-400 text-orange-400"
                  />
                ))}
                <span className="ml-2 text-lg font-medium">4.7 (3,350)</span>
              </div>
              <div className="flex items-center gap-2">
                <Flag className="h-5 w-5 text-[#012169]" />
                <p className="text-sm font-semibold tracking-wide text-[#012169]">
                  THE #1 LEGAL RECRUITMENT PLATFORM
                </p>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold tracking-tight text-[#0A2756] sm:text-4xl lg:text-5xl xl:text-6xl">
              Connect with top legal talent your firm needs.
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 sm:text-xl">
              Transform your legal recruitment process with our comprehensive
              platform. We connect leading law firms with exceptional legal
              talent across all specializations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-[#3366CC] hover:bg-[#2952A3]">
                Start Recruiting
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#3366CC] text-[#3366CC] hover:bg-[#3366CC]/10"
              >
                View Candidates
              </Button>
            </div>
          </div>

          {/* Right Column - Circular Image with Stats */}
          <div className="relative flex-1 order-last mt-8 lg:mt-0">
            <div className="relative aspect-square w-full max-w-[300px] lg:max-w-[500px] mx-auto">
              {/* Circular Image */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src={lawgirl}
                  alt="Legal professional placeholder"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Stat Cards */}
              <div className="absolute inset-0">
                {/* Right Card */}
                <Card className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-36 sm:w-48 bg-white/90 backdrop-blur p-3 sm:p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#3366CC]">
                      15k+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Legal Professionals Placed
                    </div>
                  </div>
                </Card>

                {/* Bottom Left Card */}
                <Card className="absolute bottom-0 left-0 -translate-x-1/2 w-36 sm:w-48 bg-white/90 backdrop-blur p-3 sm:p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#3366CC]">
                      94%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Placement Success Rate
                    </div>
                  </div>
                </Card>

                {/* Bottom Right Card */}
                <Card className="absolute bottom-0 right-0 translate-x-1/2 w-36 sm:w-48 bg-white/90 backdrop-blur p-3 sm:p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#3366CC]">
                      500+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Partner Law Firms
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
