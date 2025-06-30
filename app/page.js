import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Portfolio from "@/components/Portfolio";
import Footer from "../components/Footer";
import Image from "next/image";
export default function Home() {
  return (
 <div>
  <Header/>
  <HeroSection/>
  <Portfolio />
  <Footer/>

</div>
  );
}
