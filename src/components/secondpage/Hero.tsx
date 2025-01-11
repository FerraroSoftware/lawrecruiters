"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  Home,
  Shield,
  Star,
  Quote,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";

import { Toaster } from "@/components/ui/toaster";

import roofing from "@/images/roofing.png";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: Date;
  address: string;
  service: string;
  message: string;
}

export default function Hero() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/sendgrid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        if (result.redirect) {
          router.push(result.redirect);
        } else {
          toast({
            title: "Success",
            description: "Message sent successfully!",
            duration: 3000,
          });
        }
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <Image
        src={roofing}
        alt="Roofing background"
        fill
        className="absolute inset-0 z-0 object-cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      <div className="container px-4 md:px-6 mx-auto relative z-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_800px] lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Protect Your Home with Confidence
              </h1>
              <p className="max-w-[600px] text-gray-200 md:text-xl">
                Expert roofing solutions tailored to your needs. Quality
                materials, transparent pricing, and peace of mind guaranteed.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-[#E07A5F] text-white hover:bg-[#E07A5F]/90">
                Get a Free Consultation
              </Button>
              <Button
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-[#1E293B]"
              >
                <Phone className="mr-2 h-5 w-5" /> (555) 123-4567
              </Button>
            </div>
            <div className="mt-8 space-y-4 text-white">
              <div className="flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 mr-2" />
                <span>100+ 5-Star Reviews</span>
              </div>
              <div className="flex items-center">
                <Home className="w-6 h-6 mr-2" />
                <span>20+ Years Experience</span>
              </div>
            </div>
            <div className="mt-8 bg-white bg-opacity-10 p-6 rounded-lg">
              <Quote className="w-8 h-8 text-[#E07A5F] mb-4" />
              <p className="text-white italic mb-4">
                &ldquo;TrustRoof Solutions transformed our home with their
                exceptional service. Their team was professional, efficient, and
                the quality of work exceeded our expectations. We couldn&apos;t
                be happier with our new roof!&rdquo;
              </p>
              <p className="text-[#E07A5F] font-semibold">
                - Sarah Johnson, Homeowner
              </p>
            </div>
          </div>
          <div className="lg:mt-0 lg:ml-40">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-[#1E293B]">
                Request a Consultation
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-[#1E293B]"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your Name"
                      {...register("name", { required: true })}
                      className="mt-1 w-full"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-[#1E293B]"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="Your Email"
                      type="email"
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      className="mt-1 w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-[#1E293B]"
                    >
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      placeholder="Your Phone"
                      type="tel"
                      {...register("phone", { required: true })}
                      className="mt-1 w-full"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="preferredDate"
                      className="text-sm font-medium text-[#1E293B]"
                    >
                      Preferred Date
                    </Label>
                    <Controller
                      control={control}
                      name="preferredDate"
                      render={({ field }) => (
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="address"
                    className="text-sm font-medium text-[#1E293B]"
                  >
                    Address
                  </Label>
                  <Input
                    id="address"
                    placeholder="Your Address"
                    {...register("address", { required: true })}
                    className="mt-1 w-full"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="service"
                    className="text-sm font-medium text-[#1E293B]"
                  >
                    Service Needed
                  </Label>
                  <Controller
                    name="service"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger id="service" className="mt-1 w-full">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="roof-repair">
                            Roof Repair
                          </SelectItem>
                          <SelectItem value="roof-replacement">
                            Roof Replacement
                          </SelectItem>
                          <SelectItem value="inspection">
                            Roof Inspection
                          </SelectItem>
                          <SelectItem value="maintenance">
                            Roof Maintenance
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-[#1E293B]"
                  >
                    Message
                  </Label>

                  <Textarea
                    id="message"
                    placeholder="Tell us more about your roofing needs"
                    {...register("message", { required: true })}
                    className="mt-1 w-full"
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#1E293B] text-white hover:bg-[#1E293B]/90"
                >
                  Request Consultation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
}
