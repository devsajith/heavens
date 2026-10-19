"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#131d16] text-stone-400 border-t border-stone-800 mt-20 text-xs">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-3.5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 shadow-sm bg-stone-900">
                <img
                  src="/logo.jpg"
                  alt="Heavens Munnar Holiday Resort Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-white tracking-wide leading-none">
                  HEAVENS
                </span>
                <span className="text-[10px] font-semibold text-[#e08e5e] uppercase tracking-wider mt-1">
                  Munnar Holiday Resort
                </span>
              </div>
            </Link>
            <p className="text-stone-400 leading-relaxed text-xs mt-1 max-w-sm">
              Located on Highway 85 near Valara, Adimali, Kerala. Comfortable room stays and curated sightseeing packages across Munnar's premier tea plantations, waterfalls, and mountain peaks.
            </p>
            <div className="flex items-center gap-2 mt-2 text-stone-300">
              <span className="text-xs text-stone-400">Desk & Hotline:</span>
              <a href="tel:7902832575" className="font-bold underline text-white hover:text-[#e08e5e] transition">
                +91 7902832575
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-bold text-stone-200 text-xs uppercase tracking-wider">Rooms & Packages</h4>
            <Link href="#contact" className="hover:text-white transition">Standard & Deluxe Rooms</Link>
            <Link href="#explore" className="hover:text-white transition">Munnar Sightseeing Packages</Link>
            <Link href="#explore" className="hover:text-white transition">Waterfall Day Tours</Link>
            <Link href="#contact" className="hover:text-white transition">Room + Sightseeing Combos</Link>
            <Link href="#gallery" className="hover:text-white transition">Photo Gallery</Link>
          </div>

          {/* Attractions Column */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-bold text-stone-200 text-xs uppercase tracking-wider">Munnar Sights</h4>
            <Link href="#explore" className="hover:text-white transition">Valara Waterfalls</Link>
            <Link href="#explore" className="hover:text-white transition">Cheeyappara Waterfalls</Link>
            <Link href="#explore" className="hover:text-white transition">Thalamaan Hidden Cascade</Link>
            <Link href="#explore" className="hover:text-white transition">Varayadin Mudi Rocky Peak</Link>
            <Link href="#explore" className="hover:text-white transition">Mudippara Pine Forest</Link>
          </div>

          {/* Support Column */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-bold text-stone-200 text-xs uppercase tracking-wider">Contact & Desk</h4>
            <span className="text-stone-300">Near Jacobite Church, Valara, Adimali, Kerala - 685561</span>
            <a href="tel:7902832575" className="hover:text-white transition">📞 +91 7902832575</a>
            <a href="tel:8606392143" className="hover:text-white transition">📞 +91 8606392143</a>
            <a
              href="https://maps.app.goo.gl/fevh6C9LK8ZTJeeF7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e08e5e] hover:underline font-semibold mt-1 inline-flex items-center gap-1"
            >
              📍 Google Maps Location
            </a>
            <a
              href="https://wa.me/917902832575"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white transition font-medium text-[11px]"
            >
              💬 WhatsApp Concierge
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 mt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-xs">
          <div>© {new Date().getFullYear()} Heavens Munnar Holiday Resort. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="#contact" className="hover:text-stone-300 transition">Book Rooms</Link>
            <span>·</span>
            <Link href="#explore" className="hover:text-stone-300 transition">Sightseeing Packages</Link>
            <span>·</span>
            <Link href="#contact" className="hover:text-stone-300 transition">Directions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
