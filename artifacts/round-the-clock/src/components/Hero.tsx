type HeroProps = {
  onExplore: () => void;
};

const serviceIcons = ["⚡", "🔧", "🧹", "🚗", "🐕", "🌿", "🧑‍🔧", "🏠"];

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section
      id="hero"
      className="bg-[#1a2456] min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
          Home Services You Can Trust
        </h1>
        <p className="text-white/70 text-lg sm:text-xl mb-10 tracking-wider">
          Install • Service • Maintenance
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={onExplore}
            className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-white/20 transition-all duration-200 hover:scale-105"
          >
            Explore Services
          </button>
          <a
            href="tel:+919600344322"
            className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-white/20 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
          >
            📞 +91 96003 44322
          </a>
        </div>

        <div className="flex justify-center gap-6 sm:gap-10 flex-wrap">
          {serviceIcons.map((icon, i) => (
            <div
              key={i}
              className="text-4xl sm:text-5xl hover:scale-125 transition-transform duration-200 cursor-default"
              title="Service"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 animate-bounce text-white/40">
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
