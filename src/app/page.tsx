import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Faq from "@/components/Faq";
import Testimonial from "@/components/Testimonial";
import WhoWeAre from "@/components/Whoweare";
import HomeServices from "@/components/HomeServices";
import RecentBlogs from "@/components/Recentblogs";
import Feature from "@/components/Feature";
import Contact from "@/components/Contact";
import Featuretwo from "@/components/FeatureTwo";
import RecruitmentOptions from "@/components/RecruitmentOptions";
import GeneralSchema from "@/components/GeneralSchema";
import Corefeatures from "@/components/Corefeatures";

export default function Home() {
  return (
    <>
      <GeneralSchema />
      <Hero />
      <Feature />
      <Corefeatures />
      <WhoWeAre />
      <HomeServices />
      <Testimonial />
      <RecruitmentOptions />
      <RecentBlogs />
      <Faq />
      <Contact />
    </>
  );
}
