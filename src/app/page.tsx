// "use client";
import Image from "next/image";
import Hero from "./components/Hero";
import Works from "./components/Works";
import TrendingTreat from "./components/TrendingTreat";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="bg-bgPrimary">
      <Hero />
      <Works />
      <TrendingTreat />
      <Testimonials />
    </div>
  );
}
