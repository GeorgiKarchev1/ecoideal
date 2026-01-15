import { Hero } from "@/components/home/Hero";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { Process } from "@/components/home/Process";
import { Products } from "@/components/home/Products";
import { ProductsGrid } from "@/components/home/ProductsGrid";
import { VideoShowcase } from "@/components/home/VideoShowcase";
import { TrendingNow } from "@/components/home/TrendingNow";
import { Certificates } from "@/components/home/Certificates";
import { BookCall } from "@/components/home/BookCall";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoShowcase />
      <LogoMarquee />
      <ProductsGrid />
      <Products />
      <Process />
      <TrendingNow />
      <Certificates />
      <BookCall />
    </>
  );
}
