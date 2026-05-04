const serviceCategories = [
  {
    icon: "🔧",
    title: "Repair & Maintenance",
    color: "from-blue-600 to-blue-800",
    items: [
      { label: "Electrical Services", icon: "⚡" },
      { label: "Plumbing Services", icon: "🔩" },
      { label: "AC Install/Service/Maintenance", icon: "❄️" },
      { label: "RO Install/Service/Maintenance", icon: "💧" },
      { label: "Fridge & Washing Machine Repair", icon: "🧊" },
      { label: "Inverter & Battery Services", icon: "🔋" },
    ],
  },
  {
    icon: "🧹",
    title: "Cleaning Services",
    color: "from-indigo-600 to-indigo-800",
    items: [
      { label: "Home / Office Cleaning", icon: "🏠" },
      { label: "Bathroom Cleaning", icon: "🛁" },
      { label: "Water Tank Cleaning", icon: "💧" },
    ],
  },
  {
    icon: "🚗",
    title: "Car Services",
    color: "from-blue-700 to-blue-900",
    items: [
      { label: "Car Pickup & Drop", icon: "🚗" },
      { label: "Car Cleaning at Your Location", icon: "✨" },
      { label: "On-Demand Male & Female Driver", icon: "🧑‍✈️" },
    ],
  },
  {
    icon: "🌿",
    title: "Gardening Service",
    color: "from-blue-500 to-blue-700",
    items: [
      { label: "Terrace Garden Setup", icon: "🌿" },
      { label: "Front House/Office Decorative Plants Setup", icon: "🪴" },
      { label: "Water Fountain Installation", icon: "⛲" },
      { label: "Garden Design", icon: "🌺" },
      { label: "All Maintenance", icon: "🌱" },
    ],
  },
  {
    icon: "🐕",
    title: "Pet Care",
    color: "from-indigo-500 to-indigo-700",
    items: [
      { label: "Dog Grooming", icon: "✂️" },
      { label: "Pet Bathing & Cleaning", icon: "🛁" },
      { label: "Nail Trimming", icon: "💅" },
      { label: "Pet Walking at Your Location", icon: "🦮" },
      { label: "Pet Day Care & Feeding at Your Location", icon: "🐾" },
      { label: "Pet Training at Your Location", icon: "🎓" },
    ],
  },
  {
    icon: "🧑‍💼",
    title: "Support Services",
    color: "from-blue-800 to-blue-950",
    items: [
      { label: "Personal Assistance", icon: "🤝" },
      { label: "Grocery Shopping", icon: "🛒" },
      { label: "Document Work Help", icon: "📄" },
    ],
  },
  {
    icon: "🏠",
    title: "Home Improvement",
    color: "from-blue-600 to-indigo-800",
    items: [
      { label: "Painting – Interior & Exterior", icon: "🖌️" },
      { label: "Wall Putty – Smoothing & Polishing", icon: "🪟" },
      { label: "False Ceiling – POP & Gypsum", icon: "🏗️" },
      { label: "Tile Fixing – Flooring & Wall Tiling", icon: "🟫" },
    ],
  },
];

const WA_LINK = "https://wa.me/919600344322";

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            What We Offer
          </div>
          <h2 className="text-4xl font-bold text-[#1a2456] mb-3">
            Our <span className="text-amber-500">Services</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Everything your home needs,{" "}
            <span className="text-amber-500 font-semibold">anytime</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col border border-blue-100"
            >
              <div className={`bg-gradient-to-r ${cat.color} px-5 py-4 flex items-center gap-3`}>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
                  {cat.icon}
                </div>
                <h3 className="text-white font-bold text-lg">{cat.title}</h3>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <ul className="space-y-2.5 mb-6">
                  {cat.items.map((item) => (
                    <li key={item.label} className="flex items-center gap-2.5 text-gray-700 text-sm">
                      <span className="text-base w-6 flex-shrink-0">{item.icon}</span>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full bg-amber-400 text-[#1a2456] py-2.5 rounded-lg text-sm font-bold hover:bg-amber-300 transition-all duration-200 hover:shadow-md flex items-center justify-center gap-2"
                >
                  Book Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
