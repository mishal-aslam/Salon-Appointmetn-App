import Image from "next/image";
// import Hero from "./components/Hero";
import Hero from "../../Hero";
import Works from "../../Works";
import TrendingTreat from "../../TrendingTreat";
import Testimonials from "../../Testimonials";
import Newsletter from '../../Newslatter'

const page = () => {
  return (
    <div className="bg-bgPrimary max-w-[1750px] mx-auto">
    <Hero />
    <Works />
    <TrendingTreat />
    <Testimonials />
    <Newsletter />
  </div>
  )
}

export default page