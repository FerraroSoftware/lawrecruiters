import Image from "next/image";
import roofing2 from "@/images/roofing2.png";

export default function ThankYou() {
  return (
    <div className="relative py-72 w-full overflow-hidden">
      <Image
        src={roofing2}
        alt="Thank you background"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Thank You
          </h1>
          <p className="text-xl text-white sm:text-2xl md:text-3xl">
            We&apos;ll be in touch soon.
          </p>
        </div>
      </div>
    </div>
  );
}
