"use client";

import { ArrowRight } from "lucide-react";

interface HeroBannerProps {
  onExploreClick: () => void;
}

export default function HeroBanner({ onExploreClick }: HeroBannerProps) {
  return (
    <div className="relative w-full h-[480px] sm:h-[520px] md:h-[560px] rounded-3xl overflow-hidden shadow-md my-4 border border-gray-100">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-2xl px-8 sm:px-14 text-white">
        <span className="text-[#FF5A5F] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">
          Welcome to Munnar, Kerala
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight sm:leading-none text-white drop-shadow-sm mb-4">
          HEAVENS Munnar <br />
          Holiday Resort
        </h1>

        <p className="text-gray-200 text-xs sm:text-sm max-w-md font-normal leading-relaxed mb-6">
          Experience Deluxe Rooms, Dormitories, Fresh Up Stay, Tent Camping, A-Huts, Swimming Pool, Camp Fires, and Offroad Jeep Trekking in lush Munnar.
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={onExploreClick}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#FF5A5F] hover:bg-[#e0484d] rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <span>Explore Stays</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="https://wa.me/917902832575"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-full shadow-lg transition transform hover:-translate-y-0.5 active:scale-95"
          >
            <span>WhatsApp Booking</span>
          </a>
        </div>
      </div>
    </div>
  );
}
