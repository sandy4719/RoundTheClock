const steps = [
  {
    number: 1,
    icon: "📱",
    title: "Call or WhatsApp Us",
    highlight: "WhatsApp",
    description: "Tell us what service you need and your location.",
  },
  {
    number: 2,
    icon: "📅",
    title: "Choose a Time Slot",
    highlight: "Time Slot",
    description: "We schedule at your convenience.",
  },
  {
    number: 3,
    icon: "✅",
    title: "Expert at Your Door",
    highlight: "Expert",
    description: "Expert At Your Door Step — Vetted Professionals Will Get The Job Done.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4" style={{ background: "linear-gradient(180deg, #f0f4ff 0%, #ffffff 100%)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Simple Process
          </div>
          <h2 className="text-4xl font-bold text-[#1a2456]">
            How It <span className="text-amber-500">Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-200 via-amber-300 to-blue-200 z-0" style={{ left: "18%", right: "18%" }} />

          {steps.map((step) => {
            const title = step.title.replace(
              step.highlight,
              `|||${step.highlight}|||`
            );
            const parts = title.split("|||");

            return (
              <div key={step.number} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-[#1a2456] text-white flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-[#1a2456] transition-all duration-200 shadow-lg">
                  {step.number}
                </div>

                <div className="border-2 border-blue-100 group-hover:border-amber-400 rounded-2xl p-6 w-full hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="text-5xl mb-4 mx-auto">{step.icon}</div>
                  <h3 className="font-bold text-[#1a2456] text-lg mb-2">
                    {parts.map((part, i) =>
                      part === step.highlight ? (
                        <span key={i} className="text-amber-500">{part}</span>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
