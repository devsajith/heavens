"use client";

import { useState } from "react";
import { Compass, Phone, Sparkles, ChevronRight, X } from "lucide-react";
import { ATTRACTIONS, Attraction } from "../data/attractions";

export default function AttractionsSection() {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

  return (
    <section className="w-full my-16 bg-gradient-to-b from-amber-50/40 via-white to-gray-50/60 rounded-3xl p-4 sm:p-10 border border-amber-100/80 shadow-xs">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 px-2">
        <div>
          <div className="flex items-center gap-2 text-[#FF5A5F] text-xs font-extrabold uppercase tracking-widest mb-1">
            <Compass className="w-4 h-4" />
            <span>Adimali & Munnar Sightseeing</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Explore Adimali, Kerala: <span className="text-[#FF5A5F]">8 Scenic Attractions</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
            Discover 8 scenic viewpoints, waterfalls, pine forests, and safari trails passing through Adimali Town on Winding Highway 85.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:7902832575"
            className="px-5 py-3 bg-[#FF5A5F] hover:bg-[#e0484d] text-white text-xs sm:text-sm font-bold rounded-full shadow-md transition flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Tour Guide: 7902832575</span>
          </a>
        </div>
      </div>

      {/* Grid of 8 Scenic Attractions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ATTRACTIONS.map((att) => (
          <div
            key={att.id}
            onClick={() => setSelectedAttraction(att)}
            className="group cursor-pointer bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Photo Banner */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img
                  src={att.image}
                  alt={att.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#FF5A5F] text-white text-xs font-extrabold w-7 h-7 rounded-full flex items-center justify-center shadow-md">
                  {att.number}
                </div>
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Attraction #{att.number}
                </div>
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col gap-2">
                <h4 className="font-extrabold text-gray-900 text-base group-hover:text-[#FF5A5F] transition leading-snug">
                  {att.title}
                </h4>

                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                  {att.description}
                </p>

                {/* Highlight Pills */}
                <div className="flex flex-wrap gap-1 mt-1">
                  {att.highlights.slice(0, 2).map((h, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-700">
              <span>Guided Tour Available</span>
              <ChevronRight className="w-4 h-4 text-[#FF5A5F] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Attraction Detail Modal */}
      {selectedAttraction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in">
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAttraction(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-md transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-60 w-full">
              <img
                src={selectedAttraction.image}
                alt={selectedAttraction.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#FF5A5F] text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-md">
                Attraction #{selectedAttraction.number}
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col gap-4">
              <div>
                <span className="text-xs font-bold text-[#FF5A5F] block uppercase tracking-wider">Adimali Scenic Attraction</span>
                <h3 className="text-2xl font-extrabold text-gray-900 mt-0.5">{selectedAttraction.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  {selectedAttraction.description}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-2">Key Highlights</span>
                <div className="flex flex-wrap gap-2">
                  {selectedAttraction.highlights.map((h, idx) => (
                    <span key={idx} className="text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 px-3 py-1 rounded-full">
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500 font-medium block">Tour Guide Hotline</span>
                  <span className="text-sm font-extrabold text-gray-900">7902832575</span>
                </div>
                <a
                  href="tel:7902832575"
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#FF5A5F] hover:bg-[#e0484d] rounded-full shadow-md transition"
                >
                  Call Tour Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
