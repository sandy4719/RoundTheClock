import { useState, useEffect } from "react";

type Review = {
  id: string;
  name: string;
  service: string;
  rating: number;
  text: string;
  date: string;
};

const SERVICES = [
  "Repair & Maintenance",
  "Cleaning Services",
  "Car Services",
  "Garden Services",
  "Pet Services",
  "Support Services",
  "Home Improvement",
  "Other",
];

const STORAGE_KEY = "rtc_reviews";

function getReviews(): Review[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveReview(review: Review) {
  const reviews = getReviews();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([review, ...reviews]));
}

function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
          className={`text-3xl transition-transform hover:scale-110 ${
            star <= (hovered || value) ? "text-amber-400" : "text-gray-300"
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default function ReviewsPage({ onBack }: { onBack: () => void }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [form, setForm] = useState({ name: "", service: "", rating: 0, text: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setReviews(getReviews());
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.service) e.service = "Please select a service";
    if (!form.rating) e.rating = "Please select a rating" as any;
    if (!form.text.trim()) e.text = "Please write your review";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    const review: Review = {
      id: Date.now().toString(),
      name: form.name.trim(),
      service: form.service,
      rating: form.rating,
      text: form.text.trim(),
      date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
    };
    saveReview(review);
    setReviews(getReviews());
    setForm({ name: "", service: "", rating: 0, text: "" });
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const initials = (name: string) =>
    name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();

  const avatarColors = [
    "from-blue-500 to-blue-700",
    "from-indigo-500 to-indigo-700",
    "from-blue-600 to-blue-800",
    "from-blue-700 to-indigo-800",
    "from-indigo-600 to-blue-800",
  ];

  const allReviews = [...reviews];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">

        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#1a2456] hover:text-amber-500 text-sm font-medium mb-8 transition-colors"
        >
          ← Back to Home
        </button>

        <div className="text-center mb-12">
          <div className="inline-block bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Customer Feedback
          </div>
          <h1 className="text-4xl font-bold text-[#1a2456] mb-2">
            Share Your <span className="text-amber-500">Experience</span>
          </h1>
          <p className="text-gray-500">Your feedback helps us serve Madurai better</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8">
            <h2 className="text-xl font-bold text-[#1a2456] mb-6 flex items-center gap-2">
              ✍️ Write a Review
            </h2>

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 mb-6 text-sm font-medium flex items-center gap-2">
                ✅ Thank you! Your review has been posted.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[#1a2456] mb-1">Your Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Murugan R."
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full border-2 ${errors.name ? "border-red-400" : "border-gray-200"} rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a2456] mb-1">Service Used *</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={`w-full border-2 ${errors.service ? "border-red-400" : "border-gray-200"} rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors bg-white`}
                >
                  <option value="">Select a service…</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a2456] mb-2">Rating *</label>
                <StarPicker value={form.rating} onChange={(v) => setForm({ ...form, rating: v })} />
                {errors.rating && <p className="text-red-500 text-xs mt-1">{errors.rating as string}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a2456] mb-1">Your Review *</label>
                <textarea
                  placeholder="Tell us about your experience…"
                  rows={4}
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  className={`w-full border-2 ${errors.text ? "border-red-400" : "border-gray-200"} rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none`}
                />
                {errors.text && <p className="text-red-500 text-xs mt-1">{errors.text}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a2456] text-white py-3 rounded-xl font-bold hover:bg-amber-500 transition-all hover:shadow-md text-sm"
              >
                Submit Review →
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-br from-[#1a2456] to-[#1e3a8a] rounded-2xl p-6 text-white text-center">
              <div className="text-5xl font-bold text-amber-400 mb-1">
                {allReviews.length > 0
                  ? (allReviews.reduce((s, r) => s + r.rating, 0) / allReviews.length).toFixed(1)
                  : "4.9"}
              </div>
              <div className="flex justify-center gap-0.5 mb-2">
                {[1,2,3,4,5].map((s) => <span key={s} className="text-amber-400 text-xl">★</span>)}
              </div>
              <div className="text-white/70 text-sm">
                {allReviews.length > 0 ? `Based on ${allReviews.length} review${allReviews.length !== 1 ? "s" : ""}` : "Average Rating"}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-blue-100 p-5 shadow-sm">
              <h3 className="font-bold text-[#1a2456] mb-3 text-sm uppercase tracking-wide">Why Review Us?</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Help other customers make informed decisions",
                  "Your feedback drives our improvement",
                  "Recognize our best service professionals",
                  "Be part of Madurai's trusted community",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">✓</span> {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {allReviews.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[#1a2456] mb-6">
              Customer Reviews <span className="text-amber-500">({allReviews.length})</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {allReviews.map((r, idx) => (
                <div key={r.id} className="bg-white rounded-2xl p-5 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[idx % avatarColors.length]} text-white font-bold flex items-center justify-center text-xs shadow-sm`}>
                      {initials(r.name)}
                    </div>
                    <div>
                      <div className="font-bold text-[#1a2456] text-sm">{r.name}</div>
                      <div className="text-xs text-gray-400">{r.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {[1,2,3,4,5].map((s) => (
                      <span key={s} className={`text-base ${s <= r.rating ? "text-amber-400" : "text-gray-200"}`}>★</span>
                    ))}
                  </div>
                  <div className="inline-flex bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-2">
                    ✓ {r.service}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">"{r.text}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {allReviews.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <div className="text-5xl mb-3">💬</div>
            <p className="text-base">No reviews yet — be the first to share your experience!</p>
          </div>
        )}
      </div>
    </div>
  );
}
