import AboutUs from "@/components/About us/AboutUs";
import Expertise from "@/components/Expertise/Expertise";
import FeaturedWork from "@/components/Featured Work/FeaturedWork";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
import WorkingProgress from "@/components/Working Progress/WorkingProgress";

export default function Home() {
  return (
    <main>
      <Hero />
      <Expertise />
      <AboutUs />
      <Services />
      <FeaturedWork />
      <WorkingProgress />
      <Testimonial />
    </main>
  );
}
