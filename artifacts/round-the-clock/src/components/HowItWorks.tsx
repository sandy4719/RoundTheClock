const steps = [
  {
    number: 1,
    icon: "📱",
    title: "Call or WhatsApp Us",
    description: "Tell us what service you need and your location.",
  },
  {
    number: 2,
    icon: "📅",
    title: "Choose a Time Slot",
    description: "We schedule at your convenience, same day available.",
  },
  {
    number: 3,
    icon: "✅",
    title: "Expert at Your Door",
    description: "Vetted professionals arrive and get the job done right.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1a2456]">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gray-200 z-0" />

          {steps.map((step, idx) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-10 h-10 rounded-full bg-[#1a2456] text-white flex items-center justify-center font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                {step.number}
              </div>

              <div className="border border-gray-200 rounded-xl p-6 w-full hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4 mx-auto">{step.icon}</div>
                <h3 className="font-semibold text-[#1a2456] text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
