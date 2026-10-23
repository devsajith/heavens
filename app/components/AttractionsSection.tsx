"use client";

import { useState } from "react";
import { Compass, Phone, ChevronRight, X, Map, MapPin } from "lucide-react";
import { ATTRACTIONS, Attraction } from "../data/attractions";

export default function AttractionsSection() {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const [mapModalOpen, setMapModalOpen] = useState(false);

  return (
    <section className="w-full my-16 bg-[#f5f3ec] text-stone-900 rounded-3xl p-6 sm:p-12 border border-stone-300/70 shadow-2xs relative overflow-hidden">
      {/* Section Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 text-[#b85d2a] text-xs font-bold uppercase tracking-widest mb-1.5">
            <Compass className="w-4 h-4 text-[#b85d2a]" />
            <span>Wilderness Trail Guide · Idukki & Adimali</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Top 10 Scenic Attractions: <span className="text-[#b85d2a]">Waterfalls, Safaris & Viewpoints</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
            From cascading jungle waterfalls to high-altitude peaks and wild elephant habitats along Highway 85 and Mamalakandam.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={() => setMapModalOpen(true)}
            className="px-4 py-2.5 bg-white border border-stone-300 hover:border-stone-400 text-stone-800 text-xs sm:text-sm font-semibold rounded-full shadow-2xs transition flex items-center gap-2 cursor-pointer"
          >
            <Map className="w-4 h-4 text-[#b85d2a]" />
            <span>View Trail Map</span>
          </button>
          <a
            href="tel:7902832575"
            className="px-5 py-2.5 bg-[#16241c] hover:bg-[#b85d2a] text-white text-xs sm:text-sm font-semibold rounded-full shadow-2xs transition flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Guide Desk: 7902832575</span>
          </a>
        </div>
      </div>

      {/* Grid of 8 Scenic Attractions */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ATTRACTIONS.map((att) => (
          <div
            key={att.id}
            onClick={() => setSelectedAttraction(att)}
            className="group cursor-pointer bg-white rounded-2xl border border-stone-200/90 hover:border-stone-400 overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Photo Banner */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img
                  src={att.image}
                  alt={att.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-stone-900 text-[11px] font-black w-6 h-6 rounded-full flex items-center justify-center shadow-2xs border border-stone-200">
                  {att.number}
                </div>
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {att.category}
                </div>
              </div>

              {/* Info */}
              <div className="p-4 sm:p-5 flex flex-col gap-1.5">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base group-hover:text-[#b85d2a] transition leading-snug">
                  {att.title}
                </h4>

                <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                  {att.desc || att.description}
                </p>

                {/* Highlight Pills */}
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {att.highlights.slice(0, 2).map((h, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="px-4 py-3 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-700">
              <span>Trail Details</span>
              <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-[#b85d2a] group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Attraction Detail Modal */}
      {selectedAttraction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in">
          <div
            className="relative w-full max-w-lg bg-white text-stone-900 rounded-3xl shadow-2xl overflow-hidden border border-stone-200 animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAttraction(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-60 w-full bg-stone-100">
              <img
                src={selectedAttraction.image}
                alt={selectedAttraction.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md text-stone-900 font-bold text-xs px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                Attraction #{selectedAttraction.number} · {selectedAttraction.category}
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col gap-4">
              <div>
                <span className="text-xs font-bold text-[#b85d2a] block uppercase tracking-wider">Idukki Wilderness Attraction</span>
                <h3 className="text-2xl font-black text-stone-900 mt-0.5">{selectedAttraction.title}</h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  {selectedAttraction.description}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block mb-2">Key Highlights</span>
                <div className="flex flex-wrap gap-2">
                  {selectedAttraction.highlights.map((h, idx) => (
                    <span key={idx} className="text-xs font-semibold bg-stone-100 text-stone-800 border border-stone-200 px-3 py-1 rounded-full">
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-500 font-medium block">Tour & Safari Desk</span>
                  <span className="text-sm font-bold text-stone-900">+91 7902832575</span>
                </div>
                <a
                  href={`https://wa.me/917902832575?text=${encodeURIComponent(`Hi HEAVENS Idukki, I want to book a guided trek to Attraction #${selectedAttraction.number}: ${selectedAttraction.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#16241c] hover:bg-[#b85d2a] rounded-full shadow-sm transition"
                >
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Map Lightbox Modal */}
      {mapModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Map className="w-5 h-5 text-[#b85d2a]" />
                <h3 className="text-base font-bold text-stone-900">Adimali & Highway 85 Attractions Trail Map</h3>
              </div>
              <button
                onClick={() => setMapModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-stone-100 text-stone-600 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-auto rounded-2xl bg-stone-100">
              <img
                src="/adimali-attractions-map.jpg"
                alt="Adimali Attractions Map"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
            <div className="mt-3 text-center text-xs text-stone-500">
              Official Highway 85 Guide to all 8 scenic points in Adimali, Idukki.
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
