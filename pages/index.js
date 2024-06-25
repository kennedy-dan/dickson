import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Works from "@/components/Works";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div className='py-20'>
      <Hero />
      <Banner />
      <Services />
      <Works />
      <Footer />
      {/* <Contact /> */}
   </div>
  );
}
