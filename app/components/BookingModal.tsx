"use client";

import { useState } from "react";
import { X, Star, Heart, ShieldCheck, Wifi, Tv, Coffee, Car, MapPin, Check, Flame, Waves } from "lucide-react";
import { Stay } from "../data/stays";

interface BookingModalProps {
  stay: Stay | null;
  onClose: () => void;
}

export default function BookingModal({ stay, onClose }: BookingModalProps) {
  const [nights, setNights] = useState(3);
  const [booked, setBooked] = useState(false);

  if (!stay) return null;

  const handleReserve = () => {
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
      onClose();
    }, 2500);
  };

  const totalPrice = stay.pricePerNight * nights;
  const taxes = Math.round(totalPrice * 0.05);
  const grandTotal = totalPrice + taxes;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-200 my-8 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white shadow-sm transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Stay Photos Header Grid */}
        <div className="relative h-64 sm:h-72 w-full bg-stone-900">
          <img
            src={stay.images[0]}
            alt={stay.location}
            className="w-full h-full object-cover"
          />
          {stay.adventureBadge && (
            <div className="absolute bottom-4 left-4 bg-[#0d2a1c]/90 text-amber-300 border border-amber-500/40 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-black shadow-md">
              🌲 {stay.adventureBadge}
            </div>
          )}
        </div>

        {/* Details Content */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          {/* Header Info */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-stone-900">{stay.location}</h2>
              <div className="flex items-center gap-1 font-black text-sm bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>{stay.rating}</span>
                <span className="text-stone-500 font-normal text-xs">({stay.reviewsCount} reviews)</span>
              </div>
            </div>
            <p className="text-sm text-stone-600 font-medium mt-1">{stay.type}</p>
          </div>

          {/* Amenities Grid */}
          <div className="border-y border-[#e5e0d5] py-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-[#16241c]">
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-[#b85d2a]" /> 4x4 Safari Base
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#b85d2a]" /> Campfire Night
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-[#b85d2a]" /> Mountain Pool
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#b85d2a]" /> 24/7 Desk
            </div>
          </div>

          {/* Pricing & Booking Breakdown */}
          {booked ? (
            <div className="p-6 rounded-2xl bg-[#16241c]/5 border border-[#16241c]/15 text-center flex flex-col items-center gap-2 text-[#16241c]">
              <div className="w-12 h-12 rounded-full bg-[#16241c] text-white flex items-center justify-center font-bold text-2xl">
                ✓
              </div>
              <h3 className="text-lg font-bold">Stay Reserved</h3>
              <p className="text-xs text-stone-600 font-light">
                You're all set for your wilderness stay at HEAVENS Idukki. Our reception will contact you via WhatsApp for check-in & 4x4 safari options.
              </p>
            </div>
          ) : (
            <div className="bg-[#fbfaf7] rounded-2xl p-5 border border-[#e5e0d5] flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-600 font-light">₹{stay.pricePerNight} x {nights} nights</span>
                <span className="font-semibold text-[#16241c]">₹{totalPrice}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-600 font-light">Resort & Forest Eco Fee (5%)</span>
                <span className="font-semibold text-[#16241c]">₹{taxes}</span>
              </div>

              <div className="pt-3 border-t border-[#e5e0d5] flex items-center justify-between text-base font-bold text-[#16241c]">
                <span>Total Amount</span>
                <span className="text-[#b85d2a]">₹{grandTotal}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <button
                  onClick={handleReserve}
                  className="w-full py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#16241c] hover:bg-[#203429] rounded-xl shadow-md transition transform active:scale-98 cursor-pointer"
                >
                  Confirm Reservation
                </button>
                <a
                  href={`https://wa.me/917902832575?text=${encodeURIComponent(`Hi HEAVENS Idukki, I want to reserve: ${stay.type} in ${stay.location} for ${nights} nights (Total ₹${grandTotal}). Please confirm availability.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#0e3b2b] hover:bg-[#124d38] rounded-xl shadow-md transition text-center flex items-center justify-center"
                >
                  💬 Reserve via WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
