"use client";

import { useState } from "react";
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";
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
      className="group cursor-pointer flex flex-col gap-2.5 rounded-2xl p-2 hover:bg-gray-50/80 transition duration-200"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-100">
        <img
          src={stay.images[currentImageIndex]}
          alt={stay.location}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Guest Favorite Badge */}
        {stay.guestFavorite && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-gray-900 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
            <span>Guest favorite</span>
          </div>
        )}

        {/* Wishlist Heart Icon */}
        <button
          onClick={handleWishlistClick}
          aria-label="Wishlist"
          className="absolute top-3 right-3 p-1.5 rounded-full hover:scale-110 transition active:scale-95 text-white/90 hover:text-white"
        >
          <Heart
            className={`w-5 h-5 drop-shadow-md stroke-[2] ${
              saved
                ? "fill-[#FF5A5F] text-[#FF5A5F]"
                : "fill-black/30 text-white"
            }`}
          />
        </button>

        {/* Image Nav Arrows on Hover */}
        {stay.images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <button
              onClick={handlePrevImage}
              aria-label="Previous photo"
              className="pointer-events-auto w-7 h-7 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center shadow-md transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextImage}
              aria-label="Next photo"
              className="pointer-events-auto w-7 h-7 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center shadow-md transition"
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
                  idx === currentImageIndex ? "bg-white w-2.5" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Stay Details */}
      <div className="flex flex-col gap-0.5 text-sm px-1">
        <div className="flex items-start justify-between font-semibold text-gray-900">
          <span className="truncate">{stay.location}</span>
          <div className="flex items-center gap-1 text-xs shrink-0 ml-1">
            <Star className="w-3.5 h-3.5 fill-gray-900 text-gray-900" />
            <span>{stay.rating}</span>
            <span className="text-gray-500 font-normal">({stay.reviewsCount})</span>
          </div>
        </div>

        <p className="text-xs text-gray-500 truncate">{stay.type}</p>

        <div className="mt-1 flex items-baseline gap-1">
          <span className="font-bold text-gray-900 text-sm">
            ${stay.pricePerNight}
          </span>
          <span className="text-xs text-gray-500 font-normal">night</span>
        </div>
      </div>
    </div>
  );
}
