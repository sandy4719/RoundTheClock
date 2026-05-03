export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1a2456] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-3">Round The Clock</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Madurai's premium all-in-one home & lifestyle services. Your trusted partner for maintenance, repairs, and care.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white/80 uppercase text-xs tracking-widest">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "Home", id: "hero" },
              { label: "Services", id: "services" },
              { label: "How It Works", id: "how-it-works" },
              { label: "Contact", id: "contact" },
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white/80 uppercase text-xs tracking-widest">Contact Details</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>Plot No.197, 1st Floor, N.M.S. Nagar, Madurai – 625014</li>
            <li>
              <a href="tel:+919600344322" className="hover:text-white transition-colors">
                +91 96003 44322
              </a>
            </li>
            <li>
              <a href="mailto:rtccorporatellp@gmail.com" className="hover:text-white transition-colors">
                rtccorporatellp@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/40 text-sm">
        © 2025 Round The Clock. All Rights Reserved. | Madurai, Tamil Nadu
      </div>
    </footer>
  );
}
