import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Community } from "@/components/sections/Community";
import { SafetyGuide } from "@/components/sections/SafetyGuide";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <Community />
      <SafetyGuide />
    </main>
  );
}
