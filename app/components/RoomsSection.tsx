"use client";

import { useState } from "react";
import { 
  Bed, 
  Waves, 
  ShowerHead, 
  Wifi, 
  Car, 
  Mountain, 
  Flame, 
  Compass, 
  X, 
  Maximize2, 
  Phone, 
  MessageSquare,
  Sparkles,
  Check
} from "lucide-react";

interface RoomsSectionProps {
  onSelectRoomForInquiry?: (service: string) => void;
}

const ROOM_PHOTOS = [
  {
    src: "/room/room.webp",
    caption: "Spacious bedroom layout with clean, comfortable bedding",
    tag: "Room Interior",
  },
  {
    src: "/room/room2.webp",
    caption: "Quiet room ambiance with large windows and hillside views",
    tag: "Valley View",
  },
  {
    src: "/room/room3.webp",
    caption: "Neatly maintained bedding and warm blankets for the cool hill climate",
    tag: "Comfortable Bed",
  },
  {
    src: "/room/room4.webp",
    caption: "Well-ventilated, tidy room space with attached bathroom",
    tag: "Room Space",
  },
];

const FACILITIES = [
  {
    icon: Waves,
    title: "Hill Swimming Pool",
    desc: "Refreshing mountain pool with panoramic views of lush green valleys and mist.",
  },
  {
    icon: Bed,
    title: "Clean & Cozy Bedding",
    desc: "Spotless, well-kept rooms with comfortable mattresses, fresh linens, and pillows.",
  },
  {
    icon: ShowerHead,
    title: "24/7 Hot Water Geyser",
    desc: "Attached private bathroom equipped with 24-hour instant hot water shower.",
  },
  {
    icon: Mountain,
    title: "Scenic Valley Views",
    desc: "Natural breeze and views overlooking emerald tree hills along Highway 85.",
  },
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    desc: "Reliable internet connectivity throughout the rooms and pool deck.",
  },
  {
    icon: Car,
    title: "Highway 85 Parking",
    desc: "Safe, spacious roadside parking for cars, jeeps, traveler vans, and bikes.",
  },
  {
    icon: Flame,
    title: "Campfire & Sit-Out",
    desc: "Peaceful outdoor evenings and campfire sessions under the cool night sky.",
  },
  {
    icon: Compass,
    title: "Munnar Sightseeing Desk",
    desc: "Assistance with Munnar day tours, waterfalls visits, and 4x4 open jeep safaris.",
  },
];

export default function RoomsSection({ onSelectRoomForInquiry }: RoomsSectionProps) {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  return (
    <section id="rooms" className="relative w-full py-16 sm:py-24 bg-[#fbfbf9] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#00a896] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-[#00a896]" />
              <span>Accommodations & Pool · Heavens Munnar</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
              Our Rooms & Swimming Pool
            </h2>
            <p className="text-xs sm:text-sm text-[#717171] mt-2 leading-relaxed">
              We offer clean, peaceful, and well-maintained room accommodations equipped with attached modern bathrooms, 24/7 hot water, and direct access to our scenic hillside swimming pool.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917902832575?text=Hi%20Heavens%20Munnar%20Holiday%20Resort,%20I%20would%20like%20to%20inquire%20about%20Room%20and%20Pool%20availability!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#12231b] hover:bg-[#ffb400] text-white hover:text-black font-bold text-xs uppercase tracking-wider rounded-xs transition shadow-sm flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#ffb400]" />
              <span>Check Availability</span>
            </a>
          </div>
        </div>

        {/* Visual Showcase: Featured Hill Pool + Room Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          {/* Featured Large Card: Hill Swimming Pool */}
          <div 
            onClick={() => setActivePhoto("/room/pool.webp")}
            className="lg:col-span-6 group relative rounded-3xl overflow-hidden bg-stone-900 border border-stone-200 shadow-md hover:shadow-2xl transition-all duration-300 min-h-[360px] sm:min-h-[460px] flex flex-col justify-end cursor-pointer"
          >
            <img
              src="/room/pool.webp"
              alt="Heavens Hillside Mountain Swimming Pool"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 group-hover:via-black/35 transition-colors" />

            {/* Top Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <span className="bg-[#00a896] text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 backdrop-blur-xs">
                <Waves className="w-3.5 h-3.5" />
                Hill Swimming Pool
              </span>
              <button 
                aria-label="Enlarge pool photo"
                className="w-8 h-8 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 p-6 sm:p-8 text-white">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffb400] block mb-1">
                Resort Swimming Pool
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight drop-shadow-sm">
                Hillside Swimming Pool
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed max-w-lg mb-4 drop-shadow-sm">
                Enjoy a peaceful dip in our mountain pool overlooking the green forest slopes and cool misty breeze of Valara.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-medium text-white/90">
                <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Check className="w-3 h-3 text-[#ffb400]" /> Clean Mountain Water
                </span>
                <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Check className="w-3 h-3 text-[#ffb400]" /> Panoramic Valley View
                </span>
                <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Check className="w-3 h-3 text-[#ffb400]" /> Poolside Deck
                </span>
              </div>
            </div>
          </div>

          {/* Right 2x2 Grid: Room Photos */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ROOM_PHOTOS.map((room, idx) => (
              <div
                key={idx}
                onClick={() => setActivePhoto(room.src)}
                className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 shadow-xs hover:shadow-xl transition-all duration-300 h-52 sm:h-56 flex flex-col justify-end cursor-pointer"
              >
                <img
                  src={room.src}
                  alt={`Heavens Room View ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Tag */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="bg-black/60 backdrop-blur-md text-[#ffb400] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-white/10">
                    {room.tag}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Caption */}
                <div className="relative z-10 p-4 text-white">
                  <h4 className="font-bold text-xs sm:text-sm text-white mb-0.5 leading-snug">
                    Guest Room View
                  </h4>
                  <p className="text-[11px] text-stone-300 font-light line-clamp-1">
                    {room.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities & Amenities Section */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[#00a896] text-xs font-bold uppercase tracking-wider block mb-1">
              Guest Comfort & Inclusions
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
              Room & Resort Facilities
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Thoughtful conveniences provided to ensure a relaxing and hassle-free stay.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES.map((facility, idx) => {
              const IconComponent = facility.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#fbfbf9] border border-stone-200/80 hover:border-[#12231b] transition-all duration-200 flex flex-col"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#12231b] text-[#ffb400] flex items-center justify-center mb-3.5 shrink-0 shadow-xs">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-[#111111] mb-1.5">
                    {facility.title}
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {facility.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Fast Action Banner */}
          <div className="mt-8 pt-8 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h5 className="font-bold text-sm text-stone-900">
                Looking for room booking or pool availability?
              </h5>
              <p className="text-xs text-stone-500">
                Contact our reception desk directly for bookings, family stays, and Munnar tour assistance.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:7902832575"
                className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs uppercase tracking-wider rounded-lg transition flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#00a896]" />
                <span>+91 7902832575</span>
              </a>
              <a
                href="https://wa.me/917902832575?text=Hi%20Heavens%20Munnar%20Holiday%20Resort,%20I%20would%20like%20to%20inquire%20about%20Room%20and%20Pool%20availability!"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#00a896] hover:bg-[#008f80] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition flex items-center gap-1.5 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PHOTO LIGHTBOX MODAL
          ========================================================================= */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activePhoto}
            alt="Enlarged view"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
