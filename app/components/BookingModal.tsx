"use client";

import { useState } from "react";
import { X, Star, Heart, ShieldCheck, Wifi, Tv, Coffee, Car, MapPin, Check } from "lucide-react";
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
  const cleaningFee = 85;
  const serviceFee = 60;
  const grandTotal = totalPrice + cleaningFee + serviceFee;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 my-8 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 shadow-sm transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Stay Photos Header Grid */}
        <div className="relative h-64 sm:h-72 w-full bg-gray-100">
          <img
            src={stay.images[0]}
            alt={stay.location}
            className="w-full h-full object-cover"
          />
          {stay.guestFavorite && (
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-md">
              🏆 Guest Favorite
            </div>
          )}
        </div>

        {/* Details Content */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          {/* Header Info */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-gray-900">{stay.location}</h2>
              <div className="flex items-center gap-1 font-bold text-sm bg-gray-100 px-2.5 py-1 rounded-full">
                <Star className="w-4 h-4 fill-gray-900 text-gray-900" />
                <span>{stay.rating}</span>
                <span className="text-gray-500 font-normal text-xs">({stay.reviewsCount} reviews)</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium mt-1">{stay.type}</p>
          </div>

          {/* Amenities Grid */}
          <div className="border-y border-gray-100 py-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-gray-700">
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4 text-[#FF5A5F]" /> High-speed WiFi
            </div>
            <div className="flex items-center gap-2">
              <Tv className="w-4 h-4 text-[#FF5A5F]" /> 4K Smart TV
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-[#FF5A5F]" /> Espresso Machine
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-[#FF5A5F]" /> Free Parking
            </div>
          </div>

          {/* Pricing & Booking Breakdown */}
          {booked ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center gap-2 text-emerald-800">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-2xl">
                ✓
              </div>
              <h3 className="text-lg font-bold">Booking Confirmed!</h3>
              <p className="text-xs text-emerald-600">
                You're all set for your stay in {stay.location}. Confirmation details sent to your email.
              </p>
            </div>
          ) : (
            <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-200/80 flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">${stay.pricePerNight} x {nights} nights</span>
                <span className="font-semibold text-gray-900">${totalPrice}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Cleaning fee</span>
                <span className="font-semibold text-gray-900">${cleaningFee}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">AirNest service fee</span>
                <span className="font-semibold text-gray-900">${serviceFee}</span>
              </div>

              <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-base font-extrabold text-gray-900">
                <span>Total before taxes</span>
                <span className="text-[#FF5A5F]">${grandTotal}</span>
              </div>

              <button
                onClick={handleReserve}
                className="mt-2 w-full py-3.5 text-sm font-bold text-white bg-[#FF5A5F] hover:bg-[#e0484d] rounded-xl shadow-md transition transform active:scale-98"
              >
                Reserve Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
