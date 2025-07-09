import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import OurClients from "@/components/OurClients";
import OurProcess from "@/components/OurProcess";
import Footer from "../components/Footer";
import Image from "next/image";
export default function Home() {
  return (
 <div>
  <Header/>
  <HeroSection/>
  <Portfolio />
  <OurProcess/>
  <Testimonials/>
  <OurClients/>
  <Footer/>

</div>
  );
}
