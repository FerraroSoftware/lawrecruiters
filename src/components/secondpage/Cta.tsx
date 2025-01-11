import { Button } from "@/components/ui/button";
import Image from "next/image";

import roofinstallation from "@/images/roof-installation.jpg";

export default function Cta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <Image
        src={roofinstallation}
        alt="Roofing background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      <div className="container px-4 md:px-6 mx-auto relative z-20">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Ready to Protect Your Home?
            </h2>
            <p className="mx-auto max-w-[600px] text-white md:text-xl">
              Schedule your free consultation today and take the first step
              towards a safer, more energy-efficient home.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Button className="w-full bg-[#E07A5F] text-white hover:bg-[#E07A5F]/90">
              Get Your Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
