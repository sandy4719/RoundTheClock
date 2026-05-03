import { useState, useEffect } from "react";

const STORAGE_KEY = "rtc_reviews";

type Review = {
  id: string;
  name: string;
  service: string;
  rating: number;
  text: string;
  date: string;
};

const avatarColors = [
  "from-blue-500 to-blue-700",
  "from-indigo-500 to-indigo-700",
  "from-blue-600 to-blue-800",
  "from-blue-700 to-indigo-800",
  "from-indigo-600 to-blue-800",
];

const defaultTestimonials: Review[] = [
  {
    id: "default-1",
    name: "Murugan R.",
    service: "AC Repair",
    rating: 5,
    text: "Fast, professional, and affordable. Fixed my AC same day!",
    date: "Madurai",
  },
  {
    id: "default-2",
    name: "Priya S.",
    service: "Home Cleaning",
    rating: 5,
    text: "My house sparkled! The team was thorough and respectful.",
    date: "Madurai",
  },
  {
    id: "default-3",
    name: "Karthik M.",
    service: "Car Wash",
    rating: 5,
    text: "They came to my apartment and cleaned my car perfectly.",
    date: "Madurai",
  },
];

function getStoredReviews(): Review[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

export default function Testimonials() {
  const [userReviews, setUserReviews] = useState<Review[]>([]);

  useEffect(() => {
    setUserReviews(getStoredReviews());

    const onStorage = () => setUserReviews(getStoredReviews());
    window.addEventListener("storage", onStorage);

    const interval = setInterval(() => setUserReviews(getStoredReviews()), 2000);
    return () => {
      window.removeEventListener("storage", onStorage);
      clearInterval(interval);
    };
  }, []);

  const allReviews = [...userReviews, ...defaultTestimonials];

  return (
    <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #f0f4ff 0%, #eef2ff 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-white border border-blue-100 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase shadow-sm">
            Customer Reviews
          </div>
          <h2 className="text-4xl font-bold text-[#1a2456]">
            What Our <span className="text-amber-500">Customers</span> Say
          </h2>
          {userReviews.length > 0 && (
            <p className="text-gray-500 mt-2 text-sm">
              {userReviews.length} review{userReviews.length !== 1 ? "s" : ""} from our customers
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allReviews.map((t, idx) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-blue-100 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarColors[idx % avatarColors.length]} text-white font-bold flex items-center justify-center text-sm shadow-md`}>
                  {initials(t.name)}
                </div>
                <div>
                  <div className="font-bold text-[#1a2456]">{t.name}</div>
                  <div className="text-xs text-gray-400">📍 {t.date}</div>
                </div>
              </div>

              <div className="flex gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className={`text-lg ${s <= t.rating ? "text-amber-400" : "text-gray-200"}`}>★</span>
                ))}
              </div>

              <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full mb-3 w-fit">
                ✓ {t.service}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
