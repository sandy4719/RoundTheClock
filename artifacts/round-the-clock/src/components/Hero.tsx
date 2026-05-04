type HeroProps = {
  onExplore: () => void;
};

const serviceImages = [
  { src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=100&h=100&fit=crop&auto=format", label: "Electrical" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop&auto=format", label: "Plumbing" },
  { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100&h=100&fit=crop&auto=format", label: "Cleaning" },
  { src: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=100&h=100&fit=crop&auto=format", label: "Car Care" },
  { src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=100&h=100&fit=crop&auto=format", label: "Pet Care" },
  { src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&h=100&fit=crop&auto=format", label: "Gardening" },
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=100&h=100&fit=crop&auto=format", label: "Repairs" },
  { src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=100&h=100&fit=crop&auto=format", label: "Home" },
];

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
          className="w-1/2 sm:w-2/5 max-w-xs mx-auto mb-6 object-contain"
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

        <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
          {serviceImages.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5 group cursor-default">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-amber-400/50 group-hover:border-amber-400 group-hover:scale-110 transition-all duration-200 shadow-lg">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white/60 text-xs font-medium group-hover:text-amber-400 transition-colors">{item.label}</span>
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
