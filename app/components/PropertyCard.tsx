"use client";

import { useState } from "react";
import { Heart, Star, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Stay } from "../data/stays";

interface PropertyCardProps {
  stay: Stay;
  onSelect: (stay: Stay) => void;
  isSaved?: boolean;
  onToggleSave?: (stayId: string) => void;
}

export default function PropertyCard({
  stay,
  onSelect,
  isSaved = false,
  onToggleSave,
}: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [saved, setSaved] = useState(isSaved);

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % stay.images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + stay.images.length) % stay.images.length);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSaved(!saved);
    if (onToggleSave) onToggleSave(stay.id);
  };

  return (
    <div
      onClick={() => onSelect(stay)}
      className="group cursor-pointer flex flex-col gap-3 rounded-2xl p-2.5 bg-white border border-stone-200/80 hover:border-stone-400 hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-stone-100">
        <img
          src={stay.images[currentImageIndex]}
          alt={stay.location}
          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
        />

        {/* Refined Badge */}
        {stay.adventureBadge && (
          <div className="absolute top-3 left-3 bg-[#16241c]/80 backdrop-blur-md text-stone-200 border border-white/15 text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full shadow-2xs">
            <span>{stay.adventureBadge}</span>
          </div>
        )}

        {/* Wishlist Heart Icon */}
        <button
          onClick={handleWishlistClick}
          aria-label="Wishlist"
          className="absolute top-3 right-3 p-2 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md text-white transition active:scale-95"
        >
          <Heart
            className={`w-4 h-4 stroke-[2.2] ${
              saved
                ? "fill-[#b85d2a] text-[#b85d2a]"
                : "text-white"
            }`}
          />
        </button>

        {/* Image Nav Arrows on Hover */}
        {stay.images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <button
              onClick={handlePrevImage}
              aria-label="Previous photo"
              className="pointer-events-auto w-7 h-7 rounded-full bg-white/90 hover:bg-white text-stone-800 flex items-center justify-center shadow-md transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextImage}
              aria-label="Next photo"
              className="pointer-events-auto w-7 h-7 rounded-full bg-white/90 hover:bg-white text-stone-800 flex items-center justify-center shadow-md transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Carousel Dots */}
        {stay.images.length > 1 && (
          <div className="absolute bottom-2.5 inset-x-0 flex justify-center gap-1.5 pointer-events-none">
            {stay.images.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentImageIndex ? "bg-white w-2.5" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Stay Details */}
      <div className="flex flex-col gap-1 px-1 pb-1">
        <div className="flex items-start justify-between">
          <span className="font-bold text-stone-900 text-sm truncate">{stay.location}</span>
          <div className="flex items-center gap-1 text-xs shrink-0 ml-1 text-stone-700 font-semibold">
            <Star className="w-3.5 h-3.5 fill-[#b85d2a] text-[#b85d2a]" />
            <span>{stay.rating}</span>
          </div>
        </div>

        <p className="text-xs text-stone-500 line-clamp-1">{stay.type}</p>

        {stay.adventureHighlights && stay.adventureHighlights.length > 0 && (
          <div className="flex items-center gap-1.5 text-[11px] text-stone-600 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b85d2a] shrink-0" />
            <span className="truncate">{stay.adventureHighlights[0]}</span>
          </div>
        )}

        <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="font-black text-stone-900 text-base">
              ₹{stay.pricePerNight}
            </span>
            <span className="text-xs text-stone-500 font-normal">/ night</span>
          </div>
          <span className="text-xs font-semibold text-stone-800 group-hover:text-[#b85d2a] transition flex items-center gap-0.5">
            <span>Reserve</span>
            <span>→</span>
          </span>
        </div>
      </div>
    </div>
  );
}
