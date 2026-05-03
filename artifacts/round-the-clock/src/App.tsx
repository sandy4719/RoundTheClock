import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero onExplore={() => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
      }} />
      <Services />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
