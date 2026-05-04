type HeroProps = {
  onExplore: () => void;
};

const serviceIcons = ["⚡", "🔧", "🧹", "🚗", "🐕", "🌿", "🧑‍🔧", "🏠"];

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section
      id="hero"
      className="bg-[#1a2456] min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16"
      style={{ background: "linear-gradient(135deg, #0f1a3d 0%, #1a2456 50%, #1e3a8a 100%)" }}
    >
      <div className="max-w-4xl mx-auto">
        <img
          src="/text-logo.png"
          alt="Round The Clock – Help is Here"
          className="w-full sm:w-11/12 md:w-5/6 max-w-3xl mx-auto mb-6 object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
          Home Services{" "}
          <span className="text-amber-400">You Can Trust</span>
        </h1>

        <p className="text-white/70 text-lg sm:text-xl mb-10 tracking-wider">
          <span className="text-amber-300 font-semibold">Install</span>
          {" "}|{" "}
          <span className="text-amber-300 font-semibold">Service</span>
          {" "}|{" "}
          <span className="text-amber-300 font-semibold">Maintenance</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={onExplore}
            className="bg-amber-400 text-[#1a2456] px-8 py-3 rounded-full text-base font-bold hover:bg-amber-300 transition-all duration-200 hover:scale-105 shadow-lg shadow-amber-400/30"
          >
            Explore Services
          </button>
          <a
            href="tel:+919600344322"
            className="bg-white/10 border-2 border-white/40 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-white/20 hover:border-amber-400 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
          >
            📞 <span className="text-amber-300 font-bold">+91 96003 44322</span>
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

      <div className="mt-16 animate-bounce text-amber-400/60">
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
