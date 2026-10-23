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
  Sparkles
} from "lucide-react";

interface RoomsSectionProps {
  onSelectRoomForInquiry?: (service: string) => void;
}

const TOUR_PHOTOS = [
  { src: "/room/room.webp", alt: "Heavens Room Tour - Bed & Interior" },
  { src: "/room/room2.webp", alt: "Heavens Room Tour - Window & Valley View" },
  { src: "/room/room3.webp", alt: "Heavens Room Tour - Bedding & Room" },
  { src: "/room/room4.webp", alt: "Heavens Room Tour - Room Space" },
  { src: "/room/bathroom.webp", alt: "Heavens Room Tour - Attached Bathroom" },
  { src: "/room/front2.webp", alt: "Heavens Room Tour - Resort & Balcony View" },
  { src: "/room/pool.webp", alt: "Heavens Room Tour - Swimming Pool" },
];

const FACILITIES = [
  {
    icon: Bed,
    title: "Clean & Cozy Rooms",
    desc: "Well-maintained rooms with quality bedding, fresh linens, and tranquil surroundings.",
  },
  {
    icon: ShowerHead,
    title: "24/7 Hot Water Geyser",
    desc: "Attached private bathrooms with 24-hour instant hot water showers.",
  },
  {
    icon: Waves,
    title: "Swimming Pool",
    desc: "Clean and refreshing swimming pool facility available for all guests.",
  },
  {
    icon: Mountain,
    title: "Scenic Valley Views",
    desc: "Natural mountain breeze and peaceful views overlooking the Western Ghats hills.",
  },
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    desc: "Reliable internet connectivity throughout the rooms and premises.",
  },
  {
    icon: Car,
    title: "Highway 85 Parking",
    desc: "Safe and spacious parking along Highway 85 for cars, traveler tempos, and bikes.",
  },
  {
    icon: Flame,
    title: "Campfire & Sit-Out",
    desc: "Outdoor seating and evening campfire sessions for relaxing mountain nights.",
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
              <span>Accommodations · Heavens Munnar</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
              Rooms Tour
            </h2>
            <p className="text-xs sm:text-sm text-[#717171] mt-2 leading-relaxed text-justify">
              Take a visual tour of our clean, comfortable, and well-maintained rooms. Equipped with attached private bathrooms, 24/7 hot water, and scenic mountain surroundings in Valara along Highway 85.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917902832575?text=Hi%20Heavens%20Munnar%20Holiday%20Resort,%20I%20would%20like%20to%20inquire%20about%20Room%20availability!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#12231b] hover:bg-[#ffb400] text-white hover:text-black font-bold text-xs uppercase tracking-wider rounded-xs transition shadow-sm flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#ffb400]" />
              <span>Check Availability</span>
            </a>
          </div>
        </div>

        {/* Rooms Tour Images Grid - Clean, Redesigned without tags */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TOUR_PHOTOS.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setActivePhoto(photo.src)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-900 border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-xs shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
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
                  <p className="text-xs text-[#666666] leading-relaxed text-justify">
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
                Planning your stay at Heavens Munnar?
              </h5>
              <p className="text-xs text-stone-500 text-justify">
                Contact our reception desk directly for room bookings, dates check, and sightseeing assistance.
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
                href="https://wa.me/917902832575?text=Hi%20Heavens%20Munnar%20Holiday%20Resort,%20I%20would%20like%20to%20inquire%20about%20Room%20availability!"
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
