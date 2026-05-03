import type { ServiceItem } from "@/App";

type ServicesProps = {
  onBook: (service: ServiceItem) => void;
};

const serviceCategories = [
  {
    icon: "🔧",
    title: "Repair & Maintenance",
    items: [
      "Electrician Services",
      "Plumbing Services",
      "AC Installation/Repair/Service",
      "RO Installation/Repair/Service",
      "Fridge & Washing Machine Repair",
      "Inverter & Battery Services",
    ],
    itemIcons: ["⚡", "🔩", "❄️", "💧", "🧊", "🔋"],
  },
  {
    icon: "🧹",
    title: "Cleaning Services",
    items: [
      "Home / Office Cleaning",
      "Bathroom Cleaning",
      "Water Tank Cleaning",
    ],
    itemIcons: ["🏠", "🛁", "💧"],
  },
  {
    icon: "🚗",
    title: "Car Services",
    items: [
      "Car Pickup & Drop",
      "Car Cleaning at Your Location",
      "On-Demand Male & Female Driver",
    ],
    itemIcons: ["🚗", "✨", "🧑‍✈️"],
  },
  {
    icon: "🌿",
    title: "Garden Services",
    items: [
      "Garden Maintenance",
      "Plant Care & Watering",
      "Landscape Cleaning",
    ],
    itemIcons: ["🌱", "🪴", "🍃"],
  },
  {
    icon: "🐕",
    title: "Pet Services",
    items: [
      "Pet Grooming",
      "Pet Walking",
      "Pet Sitting",
    ],
    itemIcons: ["✂️", "🦮", "🏠"],
  },
  {
    icon: "🧑‍💼",
    title: "Support Services",
    items: [
      "Personal Assistance",
      "Grocery Shopping",
      "Document Work Help",
    ],
    itemIcons: ["🤝", "🛒", "📄"],
  },
];

export default function Services({ onBook }: ServicesProps) {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1a2456] mb-3">Our Services</h2>
          <p className="text-gray-500 text-lg">Everything your home needs, anytime</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((cat) => (
            <div
              key={cat.title}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="bg-[#1a2456] px-5 py-4 flex items-center gap-3">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-semibold text-lg">{cat.title}</h3>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <ul className="space-y-2 mb-6">
                  {cat.items.map((item, i) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="text-base">{cat.itemIcons[i]}</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onBook({ name: cat.title, category: cat.title })}
                  className="w-full bg-[#1a2456] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-[#253070] transition-colors duration-200 flex items-center justify-center gap-1"
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
