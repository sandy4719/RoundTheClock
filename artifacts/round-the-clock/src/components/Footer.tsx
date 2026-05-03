import type { Page } from "@/App";

type FooterProps = {
  setPage: (p: Page) => void;
};

export default function Footer({ setPage }: FooterProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="text-white py-14 px-4"
      style={{ background: "linear-gradient(135deg, #0f1a3d 0%, #1a2456 60%, #1e3a8a 100%)" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.jpeg" alt="Round The Clock" className="h-12 w-12 rounded-full object-cover shadow-md" />
            <h3 className="text-xl font-bold text-white">
              Round The Clock
            </h3>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Madurai's{" "}
            <span className="text-amber-400 font-semibold">premium</span>{" "}
            all-in-one home & lifestyle services. Your{" "}
            <span className="text-amber-400 font-semibold">trusted</span>{" "}
            partner for maintenance, repairs, and care.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-amber-400 uppercase text-xs tracking-widest">Quick Links</h4>
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
                  className="text-white/60 hover:text-amber-400 text-sm transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-400/50">→</span> {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => { setPage("reviews"); window.scrollTo(0, 0); }}
                className="text-white/60 hover:text-amber-400 text-sm transition-colors flex items-center gap-1.5"
              >
                <span className="text-amber-400/50">→</span> ⭐ Reviews
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-amber-400 uppercase text-xs tracking-widest">Contact Details</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li className="flex items-start gap-1.5">
              <span className="text-amber-400 mt-0.5">📍</span>
              Plot No.197, 1st Floor, N.M.S. Nagar, Madurai – 625014
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-amber-400">📞</span>
              <a href="tel:+919600344322" className="hover:text-amber-400 transition-colors">
                +91 96003 44322
              </a>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-amber-400">📧</span>
              <a href="mailto:rtccorporatellp@gmail.com" className="hover:text-amber-400 transition-colors">
                rtccorporatellp@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/40 text-sm">
        © 2025{" "}
        <span className="text-amber-400 font-semibold">Round The Clock</span>
        . All Rights Reserved. | Madurai, Tamil Nadu
      </div>
    </footer>
  );
}
