import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { Process } from "@/components/home/Process";
import { Products } from "@/components/home/Products";
import { VideoShowcase } from "@/components/home/VideoShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoShowcase />
      <LogoMarquee />
      <Features />
      <Products />
      <Process />
    </>
  );
}
