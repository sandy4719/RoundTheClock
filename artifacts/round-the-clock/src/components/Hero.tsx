type HeroProps = {
  onExplore: () => void;
};

const serviceIcons = ["⚡", "🔧", "🧹", "🚗", "🐕", "🌿", "🧑‍🔧", "🏠"];

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section
      id="hero"
      className="bg-white min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto">
        <div className="inline-block bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
          Madurai's #1 Home Services
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a2456] leading-tight mb-4">
          Home Services{" "}
          <span className="text-amber-500">You Can Trust</span>
        </h1>

        <p className="text-gray-500 text-lg sm:text-xl mb-10 tracking-wider">
          <span className="text-amber-500 font-semibold">Install</span>
          {" "}•{" "}
          <span className="text-amber-500 font-semibold">Service</span>
          {" "}•{" "}
          <span className="text-amber-500 font-semibold">Maintenance</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={onExplore}
            className="bg-[#1a2456] text-white px-8 py-3 rounded-full text-base font-bold hover:bg-[#253070] transition-all duration-200 hover:scale-105 shadow-lg shadow-[#1a2456]/30"
          >
            Explore Services
          </button>
          <a
            href="tel:+919600344322"
            className="bg-amber-400 text-[#1a2456] px-8 py-3 rounded-full text-base font-bold hover:bg-amber-300 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-amber-400/30"
          >
            📞 <span className="font-bold">+91 96003 44322</span>
          </a>
        </div>

        <div className="flex justify-center gap-6 sm:gap-10 flex-wrap">
          {serviceIcons.map((icon, i) => (
            <div
              key={i}
              className="text-4xl sm:text-5xl hover:scale-125 transition-transform duration-200 cursor-default drop-shadow-lg"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 animate-bounce text-[#1a2456]/40">
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
