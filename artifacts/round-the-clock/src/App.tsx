import { useState, useEffect, useRef } from "react";
import BookingModal from "@/components/BookingModal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export type ServiceItem = {
  name: string;
  category: string;
};

export const BookingContext = {
  open: false,
  service: null as ServiceItem | null,
};

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const openBooking = (service: ServiceItem) => {
    setSelectedService(service);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar onBook={() => openBooking({ name: "General Service", category: "General" })} />
      <Hero onExplore={() => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
      }} />
      <Services onBook={openBooking} />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
      <BookingModal
        open={bookingOpen}
        service={selectedService}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
