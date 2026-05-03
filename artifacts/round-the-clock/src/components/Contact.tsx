export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#1a2456] mb-3">Ready to Book? Get in Touch!</h2>
        <p className="text-gray-500 mb-10">We're just a call or message away</p>

        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 space-y-8">
          <div className="flex flex-col items-center gap-2">
            <div className="text-4xl">📍</div>
            <div className="font-semibold text-[#1a2456] text-lg">Address</div>
            <p className="text-gray-600 text-sm text-center">
              Plot No.197, 1st Floor, N.M.S. Nagar, Madurai – 625014
            </p>
            <a
              href="https://maps.google.com/?q=N.M.S.+Nagar+Madurai+625014"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a2456] text-sm font-medium hover:underline flex items-center gap-1"
            >
              🗺️ Get Directions
            </a>
          </div>

          <div className="border-t border-gray-200" />

          <div className="flex flex-col items-center gap-2">
            <div className="text-4xl">📞</div>
            <div className="font-semibold text-[#1a2456] text-lg">Call Us</div>
            <a
              href="tel:+919600344322"
              className="text-gray-600 text-sm hover:text-[#1a2456] transition-colors"
            >
              +91 96003 44322
            </a>
          </div>

          <div className="border-t border-gray-200" />

          <div className="flex flex-col items-center gap-2">
            <div className="text-4xl">💬</div>
            <div className="font-semibold text-[#1a2456] text-lg">WhatsApp</div>
            <a
              href="https://wa.me/919600344322"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 text-sm hover:text-[#1a2456] transition-colors"
            >
              +91 96003 44322
            </a>
          </div>

          <div className="border-t border-gray-200" />

          <div className="flex flex-col items-center gap-2">
            <div className="text-4xl">📧</div>
            <div className="font-semibold text-[#1a2456] text-lg">Email</div>
            <a
              href="mailto:rtccorporatellp@gmail.com"
              className="text-gray-600 text-sm hover:text-[#1a2456] transition-colors"
            >
              rtccorporatellp@gmail.com
            </a>
          </div>

          <div className="border-t border-gray-200" />

          <div className="flex justify-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1a2456] text-white flex items-center justify-center hover:bg-[#253070] transition-colors text-lg"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1a2456] text-white flex items-center justify-center hover:bg-[#253070] transition-colors text-lg"
              aria-label="Instagram"
            >
              📷
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
