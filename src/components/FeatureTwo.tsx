import Image from "next/image";
import { Button } from "@/components/ui/button";
import premiumRoofing from "@/images/premium-roofing-solutions.jpg";

export default function Feature() {
  return (
    <section className="bg-white py-12 dark:bg-gray-900 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="order-2 lg:order-1 lg:mb-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Premium Roofing Solutions
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-300">
              Our expert team delivers top-quality roofing services using the
              latest techniques and premium materials. We ensure your roof not
              only looks great but also provides lasting protection for your
              home.
            </p>
            <div className="mt-8 space-y-4">
              <p className="text-base text-gray-700 dark:text-gray-300">
                We offer professional installation and repair, a wide range of
                roofing materials, energy-efficient solutions, and long-lasting
                durability for all our projects.
              </p>
            </div>
            <div className="mt-8 flex space-x-4">
              <Button asChild>
                <a href="/contact">Get a Free Quote</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/services">Our Services</a>
              </Button>
            </div>
          </div>
          <div className="relative mb-10 mt-10 order-last lg:order-first lg:mb-0 lg:mt-0">
            <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={premiumRoofing}
                alt="Roofing expert installing shingles"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 h-full w-full border-2 border-[#36CA37] rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
