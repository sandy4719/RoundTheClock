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
            <span className="text-amber-400 font-semibold">Premium</span>{" "}
            All-In-One Home Services. Your{" "}
            <span className="text-amber-400 font-semibold">Trusted Partner</span>{" "}
            for Installation, Service and Maintenance.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-amber-400 transition-colors"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-amber-400 transition-colors"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038C23.987 15.668 24 15.259 24 12s-.013-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
          </div>
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
