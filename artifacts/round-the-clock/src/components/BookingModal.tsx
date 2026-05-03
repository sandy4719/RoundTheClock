import { useState } from "react";
import type { ServiceItem } from "@/App";

type BookingModalProps = {
  open: boolean;
  service: ServiceItem | null;
  onClose: () => void;
};

const timeSlots = [
  "9:00 AM – 11:00 AM",
  "11:00 AM – 1:00 PM",
  "1:00 PM – 3:00 PM",
  "3:00 PM – 5:00 PM",
  "5:00 PM – 7:00 PM",
];

export default function BookingModal({ open, service, onClose }: BookingModalProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
    slot: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Valid 10-digit phone required";
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.date) e.date = "Date is required";
    if (!form.slot) e.slot = "Please select a time slot";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const handleClose = () => {
    setForm({ name: "", phone: "", address: "", date: "", slot: "", notes: "" });
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="flex flex-col items-center justify-center p-10 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-4xl mb-4 shadow-lg">
              ✅
            </div>
            <h3 className="text-2xl font-bold text-[#1a2456] mb-2">
              Booking <span className="text-amber-500">Confirmed</span>!
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Thank you,{" "}
              <span className="text-[#1a2456] font-bold">{form.name}</span>! We've received your booking for{" "}
              <span className="text-amber-500 font-semibold">{service?.name}</span>. Our team will call you at{" "}
              <span className="text-[#1a2456] font-bold">{form.phone}</span> to confirm.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-left w-full text-sm space-y-2 mb-6">
              <p><span className="text-gray-400">Date:</span> <strong className="text-[#1a2456]">{form.date}</strong></p>
              <p><span className="text-gray-400">Time:</span> <strong className="text-amber-500">{form.slot}</strong></p>
              <p><span className="text-gray-400">Address:</span> <strong className="text-[#1a2456]">{form.address}</strong></p>
            </div>
            <button
              onClick={handleClose}
              className="bg-amber-400 text-[#1a2456] px-8 py-3 rounded-full font-bold hover:bg-amber-300 transition-all hover:scale-105 shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div
              className="px-6 py-5 rounded-t-2xl flex items-center justify-between"
              style={{ background: "linear-gradient(135deg, #0f1a3d 0%, #1a2456 100%)" }}
            >
              <div>
                <h2 className="text-white font-bold text-lg">
                  Book a <span className="text-amber-400">Service</span>
                </h2>
                {service && (
                  <p className="text-amber-400/80 text-sm mt-0.5 font-medium">{service.name}</p>
                )}
              </div>
              <button
                onClick={handleClose}
                className="text-white/70 hover:text-amber-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#1a2456] mb-1">Your Name *</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full border-2 ${errors.name ? "border-red-400" : "border-gray-200"} rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a2456] mb-1">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={`w-full border-2 ${errors.phone ? "border-red-400" : "border-gray-200"} rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a2456] mb-1">Service Address *</label>
                <textarea
                  placeholder="Enter your full address"
                  rows={2}
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className={`w-full border-2 ${errors.address ? "border-red-400" : "border-gray-200"} rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none`}
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a2456] mb-1">Preferred Date *</label>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className={`w-full border-2 ${errors.date ? "border-red-400" : "border-gray-200"} rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors`}
                />
                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a2456] mb-2">Time Slot *</label>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setForm({ ...form, slot })}
                      className={`text-xs py-2 px-3 rounded-lg border-2 transition-all font-medium ${
                        form.slot === slot
                          ? "bg-amber-400 text-[#1a2456] border-amber-400 shadow-sm"
                          : "border-gray-200 text-gray-600 hover:border-amber-300 hover:bg-amber-50"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {errors.slot && <p className="text-red-500 text-xs mt-1">{errors.slot}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a2456] mb-1">Additional Notes</label>
                <textarea
                  placeholder="Any specific requirements or details…"
                  rows={2}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-400 text-[#1a2456] py-3 rounded-xl font-bold hover:bg-amber-300 transition-all hover:shadow-md mt-2 text-sm"
              >
                Confirm Booking →
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
