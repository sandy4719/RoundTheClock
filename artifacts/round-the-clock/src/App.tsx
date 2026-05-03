import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ReviewsPage from "@/components/ReviewsPage";

export type Page = "home" | "reviews";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="min-h-screen">
      <Navbar page={page} setPage={setPage} />
      {page === "home" ? (
        <>
          <Hero onExplore={() => {
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
          }} />
          <Services />
          <HowItWorks />
          <Stats />
          <Testimonials />
          <Contact />
          <Footer setPage={setPage} />
        </>
      ) : (
        <ReviewsPage onBack={() => setPage("home")} />
      )}
    </div>
  );
}
