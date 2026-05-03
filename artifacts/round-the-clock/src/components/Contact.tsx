export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-block bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
          Get In Touch
        </div>
        <h2 className="text-4xl font-bold text-[#1a2456] mb-2">
          Ready to <span className="text-amber-500">Book</span>?{" "}
          Get in <span className="text-amber-500">Touch</span>!
        </h2>
        <p className="text-gray-500 mb-10">We're just a call or message away</p>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 shadow-sm space-y-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-[#1a2456] rounded-full flex items-center justify-center text-2xl shadow-md">
              📍
            </div>
            <div className="font-bold text-[#1a2456] text-lg">Address</div>
            <p className="text-gray-600 text-sm text-center">
              Plot No.197, 1st Floor, N.M.S. Nagar,{" "}
              <span className="text-amber-500 font-semibold">Madurai</span> – 625014
            </p>
            <a
              href="https://maps.google.com/?q=N.M.S.+Nagar+Madurai+625014"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors flex items-center gap-1 bg-white px-3 py-1.5 rounded-full shadow-sm border border-blue-100 hover:shadow-md"
            >
              🗺️ Get Directions
            </a>
          </div>

          <div className="border-t border-blue-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-[#1a2456] rounded-full flex items-center justify-center text-2xl shadow-md">
                📞
              </div>
              <div className="font-bold text-[#1a2456]">Call Us</div>
              <a
                href="tel:+919600344322"
                className="text-amber-500 font-bold text-sm hover:text-amber-600 transition-colors"
              >
                +91 96003 44322
              </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-2xl shadow-md">
                💬
              </div>
              <div className="font-bold text-[#1a2456]">WhatsApp</div>
              <a
                href="https://wa.me/919600344322"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 font-bold text-sm hover:text-amber-600 transition-colors"
              >
                +91 96003 44322
              </a>
            </div>
          </div>

          <div className="border-t border-blue-200" />

          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-2xl shadow-md">
              📧
            </div>
            <div className="font-bold text-[#1a2456]">Email</div>
            <a
              href="mailto:rtccorporatellp@gmail.com"
              className="text-amber-500 font-bold text-sm hover:text-amber-600 transition-colors"
            >
              rtccorporatellp@gmail.com
            </a>
          </div>

          <div className="border-t border-blue-200" />

          <div className="flex justify-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#1a2456] text-white flex items-center justify-center hover:bg-amber-400 hover:text-[#1a2456] transition-all hover:scale-110 text-base font-bold shadow-md"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#1a2456] text-white flex items-center justify-center hover:bg-amber-400 hover:text-[#1a2456] transition-all hover:scale-110 shadow-md"
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
