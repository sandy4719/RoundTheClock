const testimonials = [
  {
    initials: "MR",
    name: "Murugan R.",
    location: "Madurai",
    service: "AC Repair",
    rating: 5,
    text: "Fast, professional, and affordable. Fixed my AC same day!",
    color: "bg-blue-600",
  },
  {
    initials: "PS",
    name: "Priya S.",
    location: "Madurai",
    service: "Home Cleaning",
    rating: 5,
    text: "My house sparkled! The team was thorough and respectful.",
    color: "bg-purple-600",
  },
  {
    initials: "KM",
    name: "Karthik M.",
    location: "Madurai",
    service: "Car Wash",
    rating: 5,
    text: "They came to my apartment and cleaned my car perfectly.",
    color: "bg-teal-600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1a2456]">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full ${t.color} text-white font-bold flex items-center justify-center text-sm`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-[#1a2456]">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.location}</div>
                </div>
              </div>

              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">★</span>
                ))}
              </div>

              <div className="text-xs font-medium text-[#1a2456] mb-2 uppercase tracking-wide">{t.service}</div>
              <p className="text-gray-600 text-sm leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
