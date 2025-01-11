import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Building,
  GraduationCap,
} from "lucide-react";

// In a real application, you'd fetch this data based on the job ID
const jobDetails = {
  id: 1,
  title: "Corporate Lawyer",
  company: "Global Law LLP",
  location: "New York, NY",
  type: "Full-time",
  experience: "5-7 years",
  salary: "$120,000 - $180,000",
  posted: "2 days ago",
  description:
    "Global Law LLP is seeking an experienced Corporate Lawyer to join our dynamic team. The ideal candidate will have a strong background in mergers and acquisitions, corporate governance, and securities law.",
  responsibilities: [
    "Advise clients on complex corporate transactions",
    "Draft and negotiate various corporate agreements",
    "Ensure compliance with securities laws and regulations",
    "Assist in due diligence processes for M&A transactions",
    "Provide counsel on corporate governance matters",
  ],
  qualifications: [
    "Juris Doctor (JD) degree from an accredited law school",
    "5-7 years of experience in corporate law",
    "Active bar membership in New York State",
    "Strong analytical and problem-solving skills",
    "Excellent written and verbal communication skills",
  ],
  benefits: [
    "Competitive salary and bonus structure",
    "Health, dental, and vision insurance",
    "401(k) with company match",
    "Professional development opportunities",
    "Flexible work arrangements",
  ],
};

export default function DetailedJobListing() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <CardTitle className="text-3xl font-bold text-[#0A2756]">
                  {jobDetails.title}
                </CardTitle>
                <p className="text-xl text-gray-600">{jobDetails.company}</p>
              </div>
              <Badge variant="secondary" className="mt-2 md:mt-0">
                {jobDetails.type}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-[#3366CC] mr-2" />
                <span>{jobDetails.location}</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 text-[#3366CC] mr-2" />
                <span>{jobDetails.experience}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-[#3366CC] mr-2" />
                <span>Posted {jobDetails.posted}</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-[#3366CC] mr-2" />
                <span>{jobDetails.salary}</span>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-[#0A2756] mb-2">
                  Job Description
                </h2>
                <p>{jobDetails.description}</p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold text-[#0A2756] mb-2">
                  Responsibilities
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  {jobDetails.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-semibold text-[#0A2756] mb-2">
                  Qualifications
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  {jobDetails.qualifications.map((qual, index) => (
                    <li key={index}>{qual}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-semibold text-[#0A2756] mb-2">
                  Benefits
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  {jobDetails.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </section>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#0A2756]">
              Apply for this position
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Resume
                </label>
                <Input id="resume" type="file" accept=".pdf,.doc,.docx" />
              </div>
              <div>
                <label
                  htmlFor="coverLetter"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Cover Letter
                </label>
                <Textarea
                  id="coverLetter"
                  placeholder="Enter your cover letter"
                  rows={5}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#3366CC] hover:bg-[#2952A3] text-white"
              >
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
