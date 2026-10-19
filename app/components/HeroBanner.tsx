"use client";

import { ArrowRight, Compass, Shield, MapPin } from "lucide-react";

interface HeroBannerProps {
  onExploreClick: () => void;
}

export default function HeroBanner({ onExploreClick }: HeroBannerProps) {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden shadow-xl my-6 border border-stone-200/60 bg-[#111c15] text-white">
      {/* Background Image with Cinematic Atmospheric Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/galary/jeep.webp"
          alt="HEAVENS Idukki 4x4 Off-Road Jeep Safari"
          className="w-full h-full object-cover object-center scale-102 filter brightness-[0.68] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111c15] via-[#111c15]/65 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111c15]/95 via-[#111c15]/75 md:to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-6 sm:px-12 md:px-16 py-16 sm:py-24 max-w-3xl flex flex-col justify-center">
        {/* Refined Location / Identity Kicker */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-white/10 backdrop-blur-md border border-white/15 text-stone-200 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#e08e5e]" />
            <span>Idukki Highlands · Kerala</span>
          </span>
          <span className="hidden sm:inline-block text-xs font-medium text-stone-300/80 tracking-wide">
            4x4 Trails & Hidden Cascades
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white mb-5 drop-shadow-sm">
          Raw Wilderness. <br />
          <span className="text-[#f5a77b]">
            4x4 Off-Road Safaris.
          </span> <br />
          Untamed Living.
        </h1>

        {/* Editorial Subtitle */}
        <p className="text-stone-300 text-sm sm:text-base font-normal leading-relaxed mb-8 max-w-xl">
          Hidden deep inside the rugged evergreen terrain of Adimali and Mamalakandam. HEAVENS offers authentic 4x4 mountain jeep expeditions, secluded natural waterfall treks, ridge tent camping, and wooden A-hut cabins.
        </p>

        {/* Refined Key Feature List (clean typography, no childish boxes) */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 text-xs font-medium text-stone-200/90 border-y border-white/10 py-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a77b]" />
            <span>Rocky 4x4 Trails</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a77b]" />
            <span>Hidden Jungle Waterfalls</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a77b]" />
            <span>Campfires & Stargazing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a77b]" />
            <span>A-Frame Forest Cabins</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap gap-3.5 items-center">
          <button
            onClick={onExploreClick}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#b85d2a] hover:bg-[#a14e20] rounded-full shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <span>Explore Stays & Tents</span>
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </button>

          <a
            href="https://wa.me/917902832575?text=Hello%20HEAVENS%20Idukki,%20I%20want%20to%20book%20a%204x4%20Off-Road%20Jeep%20Trek%20and%20Stay!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full shadow-sm backdrop-blur-md transition transform hover:-translate-y-0.5 active:scale-95"
          >
            <span>WhatsApp 4x4 Booking</span>
          </a>

          <a
            href="tel:7902832575"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-stone-300 hover:text-white transition ml-2"
          >
            <span className="text-stone-400">Desk:</span>
            <span className="underline font-bold text-stone-200">+91 7902832575</span>
          </a>
        </div>
      </div>
    </div>
  );
}
