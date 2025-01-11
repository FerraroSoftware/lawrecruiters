import Image from "next/image";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import lawgirl from "@/images/lawgirl.png";
import law4 from "@/images/law4.png";

export default function RecruitmentOptions() {
  const features = [
    "Customized candidate matching",
    "Flexible hiring options (full-time, contract, remote)",
    "Dedicated account manager for personalized support",
    "30-day placement guarantee",
  ];

  return (
    <div className="py-12 md:py-20 lg:py-24">
      <Card className="w-full max-w-5xl mx-auto overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6">
            <CardHeader className="px-0">
              <CardTitle className="text-3xl font-bold">
                Tailored Recruitment Solutions
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                Our platform offers comprehensive recruitment options designed
                for law firms, including:
              </CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-[#3366CC]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="mt-6 w-full md:w-auto bg-[#3366CC] hover:bg-[#2952A3]"
                size="lg"
              >
                Explore Recruitment Options
              </Button>
            </CardContent>
          </div>
          <div className="relative h-full min-h-[300px] md:min-h-[400px]">
            <Image
              src={law4}
              alt="Legal recruitment illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-r-lg"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
