import { useState, useEffect } from "react";

type NavbarProps = {
  onBook: () => void;
};

export default function Navbar({ onBook }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="Round The Clock" className="h-14 w-14 rounded-full object-cover shadow-md border-2 border-amber-400" />
          <span className="text-lg font-bold text-[#1a2456] tracking-tight">
            Round <span className="text-amber-500">The Clock</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {["hero", "services", "how-it-works", "contact"].map((id, i) => {
            const labels = ["Home", "Services", "How It Works", "Contact"];
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-[#1a2456]/70 hover:text-amber-500 text-sm font-medium transition-colors"
              >
                {labels[i]}
              </button>
            );
          })}
          <button
            onClick={onBook}
            className="bg-[#1a2456] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-amber-500 transition-all hover:scale-105 shadow-md"
          >
            Book Now
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#1a2456] p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 shadow-md">
          {["hero", "services", "how-it-works", "contact"].map((id, i) => {
            const labels = ["Home", "Services", "How It Works", "Contact"];
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-[#1a2456]/70 hover:text-amber-500 text-sm font-medium text-left transition-colors"
              >
                {labels[i]}
              </button>
            );
          })}
          <button
            onClick={() => { onBook(); setMenuOpen(false); }}
            className="bg-[#1a2456] text-white px-5 py-2 rounded-full text-sm font-bold w-fit hover:bg-amber-500 transition-colors"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
