"use client";

import { Compass, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AdventureShowcase() {
  const adventures = [
    {
      id: "offroad",
      title: "Extreme 4x4 Off-Road Jeep Safari",
      subtitle: "Mamalakandam Rocky Trails & Peak Ridges",
      badge: "Signature Expedition",
      image: "/galary/jeep2.webp",
      description:
        "Tackle rugged boulder tracks, river crossings, and steep mountain inclines in customized 4x4 jeeps steered by seasoned local trail masters.",
      highlights: [
        "Unpaved wilderness trail to high mountain viewpoints",
        "Conquer steep rocky ascents inaccessible to ordinary cars",
        "Sunrise & sunset cloud canopy safaris",
      ],
      whatsappMsg: "Hi HEAVENS Idukki, I want to book the Extreme 4x4 Off-Road Jeep Safari!",
    },
    {
      id: "waterfall",
      title: "Hidden Waterfalls & Natural Stream Plunge",
      subtitle: "Secluded Jungle Cascades & River Pools",
      badge: "Secret Natural Spot",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1000&q=80",
      description:
        "Trek through untouched forest canopies to discover secluded natural waterfalls including Thalamaan streams, featuring pristine freshwater plunge pools.",
      highlights: [
        "Crisp, crystal-clear mountain freshwater dip",
        "Secluded trails far away from crowded tourist highways",
        "Natural forest bath & stream photography",
      ],
      whatsappMsg: "Hi HEAVENS Idukki, I want to book a Hidden Waterfall Guided Trek!",
    },
    {
      id: "camping",
      title: "Mountain Ridge Tent Camping & Bonfire",
      subtitle: "Stargazing Nights at High Altitude",
      badge: "Peak Stays",
      image: "/galary/gal6.webp",
      description:
        "Pitch your tent high on the mountain ridge surrounded by drifting mist. Gather around a crackling wood bonfire as the mountain breeze sets in.",
      highlights: [
        "Weatherproof dome tents & comfortable bedding",
        "Lively night campfire with music & hot tea",
        "Wake up above the morning sea of clouds",
      ],
      whatsappMsg: "Hi HEAVENS Idukki, I want to reserve Mountain Ridge Tent Camping with Campfire!",
    },
    {
      id: "wildlife",
      title: "Mamalakandam Wild Forest Corridor Safari",
      subtitle: "Elephant Corridors & Evergreen Valleys",
      badge: "Wildlife & Nature",
      image: "/galary/elephant.webp",
      description:
        "Drive through the boundary of pristine evergreen reserves known for wild elephant herds, endemic birds, and ancient tropical trees.",
      highlights: [
        "Wild elephant habitat observation stops",
        "Dense pine forest nature walk at Mudippara",
        "Scenic valley crossing through Adimali",
      ],
      whatsappMsg: "Hi HEAVENS Idukki, I want to join the Mamalakandam Forest Wildlife Safari!",
    },
  ];

  return (
    <section className="w-full my-16 bg-white text-stone-900 rounded-3xl p-6 sm:p-12 border border-stone-200/90 shadow-sm relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-[#b85d2a] text-xs font-bold uppercase tracking-widest mb-2">
            <Compass className="w-4 h-4 text-[#b85d2a]" />
            <span>Curated Wilderness Activities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            Off-Road Jeep Safaris & <br />
            <span className="text-[#b85d2a]">
              Hidden Waterfall Expeditions
            </span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed">
            Move beyond standard tourist circuits. HEAVENS connects you directly to the raw wilderness of Idukki with custom 4x4 trail machines, tribal guides, and hidden mountain pools.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link
            href="/activities"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#16241c] hover:bg-[#25392d] rounded-full shadow-sm transition transform hover:-translate-y-0.5"
          >
            <span>All Activities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:7902832575"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-full transition"
          >
            <span>Hotline: 7902832575</span>
          </a>
        </div>
      </div>

      {/* Grid of 4 Key Adventures */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {adventures.map((adv) => (
          <div
            key={adv.id}
            className="group bg-[#fbfaf7] border border-stone-200/90 hover:border-stone-400 rounded-3xl overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-xl transition-all duration-300"
          >
            <div>
              {/* Image banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-200">
                <img
                  src={adv.image}
                  alt={adv.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-stone-800 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-2xs border border-white/40">
                  {adv.badge}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex flex-col gap-2.5">
                <span className="text-[11px] font-bold text-[#b85d2a] tracking-wider uppercase">
                  {adv.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-stone-900 leading-snug group-hover:text-[#b85d2a] transition">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {adv.description}
                </p>

                {/* Highlights */}
                <div className="pt-3 flex flex-col gap-1.5 border-t border-stone-200/80 mt-2">
                  {adv.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#b85d2a] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Action */}
            <div className="px-6 sm:p-8 pt-0 pb-6 flex items-center justify-between">
              <span className="text-xs font-semibold text-stone-500">
                Daily Departures Available
              </span>
              <a
                href={`https://wa.me/917902832575?text=${encodeURIComponent(adv.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#16241c] hover:bg-[#b85d2a] rounded-full shadow-2xs transition"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
