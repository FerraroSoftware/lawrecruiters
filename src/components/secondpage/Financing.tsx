import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Percent, Calendar, CheckCircle } from "lucide-react";

export default function FinancingSection() {
  const financingOptions = [
    {
      title: "Low Monthly Payments",
      description:
        "Spread the cost of your new roof over time with affordable monthly installments.",
      icon: DollarSign,
    },
    {
      title: "Competitive Interest Rates",
      description:
        "Benefit from our partnerships with leading financial institutions to secure favorable rates.",
      icon: Percent,
    },
    {
      title: "Flexible Monthly Terms",
      description:
        "Choose from a variety of repayment terms to suit your financial situation.",
      icon: Calendar,
    },
  ];

  const benefits = [
    "Quick and easy application process",
    "No prepayment penalties",
    "Transparent terms and conditions",
    "Dedicated support throughout the process",
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              We Do Financing
            </h2>
            <p className="text-xl text-[#64748B] mb-8">
              Don&apos;t let budget constraints hold you back from getting the
              roof you need. Explore our flexible financing options.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {financingOptions.map((option, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader className="flex flex-col items-center text-center">
                    <div className="p-2 bg-[#E07A5F] rounded-full">
                      <option.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="mt-4 text-lg font-semibold text-[#475569]">
                      {option.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-[#64748B]">
                      {option.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* <div className="mt-8 flex justify-center">
              <Button className="bg-[#E07A5F] text-white hover:bg-[#E07A5F]/90 text-lg px-8 py-3">
                Apply for Financing
              </Button>
            </div> */}
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#475569] mb-6">
              Why Choose Our Financing?
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#E07A5F] mr-3 flex-shrink-0 mt-1" />
                  <span className="text-[#64748B]">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-[#475569] mb-4">
                Ready to get started?
              </h4>
              <p className="text-[#64748B] mb-4">
                Our financing experts are here to help you find the best option
                for your roofing project.
              </p>
              <Button className="bg-black text-white hover:bg-black/90 w-full">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
