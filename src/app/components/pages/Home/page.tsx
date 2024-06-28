import Image from "next/image";
// import Hero from "./components/Hero";
import Hero from "../../Hero";
import Works from "../../Works";
import TrendingTreat from "../../TrendingTreat";
import Testimonials from "../../Testimonials";
import Newsletter from '../../Neslatter'

const page = () => {
  return (
    <div className="bg-bgPrimary">
    <Hero />
    <Works />
    <TrendingTreat />
    <Testimonials />
    <Newsletter />
  </div>
  )
}

export default page