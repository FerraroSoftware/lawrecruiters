"use client";

import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Clock } from "lucide-react";

const jobListings = [
  {
    id: 1,
    title: "Corporate Lawyer",
    company: "Global Law LLP",
    location: "New York, NY",
    type: "Full-time",
    experience: "5-7 years",
    salary: "$120,000 - $180,000",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Intellectual Property Associate",
    company: "Tech Legal Solutions",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "3-5 years",
    salary: "$110,000 - $150,000",
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "Litigation Paralegal",
    company: "Justice & Associates",
    location: "Chicago, IL",
    type: "Full-time",
    experience: "2-4 years",
    salary: "$55,000 - $75,000",
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "Environmental Law Specialist",
    company: "EcoLaw Firm",
    location: "Seattle, WA",
    type: "Contract",
    experience: "7+ years",
    salary: "Competitive",
    posted: "Just now",
  },
  {
    id: 5,
    title: "Legal Intern",
    company: "City Attorney's Office",
    location: "Boston, MA",
    type: "Internship",
    experience: "Entry Level",
    salary: "Paid Internship",
    posted: "5 days ago",
  },
];

export default function JobListings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedJobType, setSelectedJobType] = useState("all");

  const filteredJobs = useMemo(() => {
    return jobListings.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation =
        selectedLocation === "all" || job.location.includes(selectedLocation);
      const matchesJobType =
        selectedJobType === "all" || job.type === selectedJobType;

      return matchesSearch && matchesLocation && matchesJobType;
    });
  }, [searchTerm, selectedLocation, selectedJobType]);

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#0A2756] mb-8">
          Legal Job Listings
        </h1>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Search jobs..."
            className="flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="New York">New York</SelectItem>
              <SelectItem value="San Francisco">San Francisco</SelectItem>
              <SelectItem value="Chicago">Chicago</SelectItem>
              <SelectItem value="Seattle">Seattle</SelectItem>
              <SelectItem value="Boston">Boston</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedJobType} onValueChange={setSelectedJobType}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Part-time">Part-time</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
              <SelectItem value="Internship">Internship</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-bold text-[#0A2756]">
                        {job.title}
                      </CardTitle>
                      <p className="text-lg text-gray-600">{job.company}</p>
                    </div>
                    <Badge variant="secondary">{job.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-[#3366CC] mr-2" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 text-[#3366CC] mr-2" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-[#3366CC] mr-2" />
                      <span>Posted {job.posted}</span>
                    </div>
                    <div className="font-semibold">{job.salary}</div>
                  </div>
                  <Button className="bg-[#3366CC] hover:bg-[#2952A3] text-white">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No jobs found matching your criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
