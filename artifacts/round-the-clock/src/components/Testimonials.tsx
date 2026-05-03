const testimonials = [
  {
    initials: "MR",
    name: "Murugan R.",
    location: "Madurai",
    service: "AC Repair",
    rating: 5,
    text: "Fast, professional, and affordable. Fixed my AC same day!",
    color: "from-blue-500 to-blue-700",
    highlight: "same day",
  },
  {
    initials: "PS",
    name: "Priya S.",
    location: "Madurai",
    service: "Home Cleaning",
    rating: 5,
    text: "My house sparkled! The team was thorough and respectful.",
    color: "from-indigo-500 to-indigo-700",
    highlight: "sparkled",
  },
  {
    initials: "KM",
    name: "Karthik M.",
    location: "Madurai",
    service: "Car Wash",
    rating: 5,
    text: "They came to my apartment and cleaned my car perfectly.",
    color: "from-blue-600 to-blue-800",
    highlight: "perfectly",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #f0f4ff 0%, #eef2ff 100%)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-white border border-blue-100 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase shadow-sm">
            Customer Reviews
          </div>
          <h2 className="text-4xl font-bold text-[#1a2456]">
            What Our <span className="text-amber-500">Customers</span> Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => {
            const parts = t.text.split(t.highlight);
            return (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-blue-100 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} text-white font-bold flex items-center justify-center text-sm shadow-md`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#1a2456]">{t.name}</div>
                    <div className="text-xs text-gray-400">📍 {t.location}</div>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full mb-3 w-fit">
                  ✓ {t.service}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  "
                  {parts[0]}
                  <span className="text-amber-500 font-semibold">{t.highlight}</span>
                  {parts[1]}
                  "
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
