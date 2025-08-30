import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import UnitType from "@/components/UnitType";
import Service from "@/components/Service";
import Footer from "@/components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
    <AboutUs />
    <UnitType />
    <Service />
    {/* <Footer /> */}
   </div>
  );
}
