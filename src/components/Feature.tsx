import { Card, CardContent } from "@/components/ui/card";
import { Search, Users, Briefcase, Clock, Award, Shield } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Advanced Matching",
    description:
      "Our AI-powered algorithm ensures perfect candidate-firm matches.",
  },
  {
    icon: Users,
    title: "Diverse Talent Pool",
    description:
      "Access a wide range of legal professionals across all specializations.",
  },
  {
    icon: Briefcase,
    title: "Seamless Hiring",
    description: "Streamlined process from application to offer acceptance.",
  },
  {
    icon: Clock,
    title: "Time-Saving",
    description:
      "Reduce your hiring time by up to 50% with our efficient platform.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "All candidates are pre-screened and vetted for quality.",
  },
  {
    icon: Shield,
    title: "Data Security",
    description:
      "Your data is protected with enterprise-grade security measures.",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#0A2756] sm:text-4xl mb-4">
            Why Choose Our Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our features can transform your legal recruitment
            process and help you find the perfect candidates.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-[#3366CC] mb-4" />
                <h3 className="text-xl font-semibold text-[#0A2756] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
