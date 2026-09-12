"use client";

import { useState } from "react";
import { MapPin, Calendar, User, Search, X } from "lucide-react";

interface SearchBookingBarProps {
  onSearch: (params: { location: string; guests: number }) => void;
}

export default function SearchBookingBar({ onSearch }: SearchBookingBarProps) {
  const [location, setLocation] = useState("Anywhere");
  const [checkIn, setCheckIn] = useState("May 24, 2024");
  const [checkOut, setCheckOut] = useState("May 27, 2024");
  const [guests, setGuests] = useState(2);

  const [activeDropdown, setActiveDropdown] = useState<"where" | "checkin" | "checkout" | "guests" | null>(null);

  const locations = ["Anywhere", "Malibu, CA", "Big Bear, CA", "Santorini, Greece", "New York, NY", "Kyoto, Japan", "Amalfi, Italy"];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ location, guests });
    setActiveDropdown(null);
  };

  return (
    <div className="relative z-30 w-full max-w-4xl mx-auto -mt-10 sm:-mt-14 mb-10 px-2 sm:px-0">
      <form
        onSubmit={handleSearchSubmit}
        className="bg-white rounded-2xl sm:rounded-full border border-gray-200/80 shadow-xl p-2 sm:p-3 flex flex-col sm:flex-row items-center justify-between gap-2 transition-all duration-300 hover:shadow-2xl"
      >
        {/* Where Segment */}
        <div
          onClick={() => setActiveDropdown(activeDropdown === "where" ? null : "where")}
          className={`relative w-full sm:w-1/4 px-4 py-2 sm:py-1.5 rounded-xl sm:rounded-full cursor-pointer transition ${
            activeDropdown === "where" ? "bg-gray-100/80" : "hover:bg-gray-50"
          }`}
        >
          <div className="flex items-start gap-2.5">
            <MapPin className="w-5 h-5 text-gray-500 mt-1 shrink-0" />
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-gray-800 uppercase tracking-wider">
                Where
              </span>
              <span className="text-sm font-semibold text-gray-600 truncate">
                {location}
              </span>
            </div>
          </div>

          {/* Location Dropdown */}
          {activeDropdown === "where" && (
            <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 z-50 animate-in fade-in slide-in-from-top-2">
              <div className="text-xs font-semibold text-gray-400 mb-2 px-2">Popular destinations</div>
              {locations.map((loc) => (
                <button
                  type="button"
                  key={loc}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLocation(loc);
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition font-medium flex items-center justify-between"
                >
                  <span>{loc}</span>
                  {location === loc && <span className="text-[#FF5A5F] font-bold">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="hidden sm:block w-px h-8 bg-gray-200" />

        {/* Check in Segment */}
        <div
          onClick={() => setActiveDropdown(activeDropdown === "checkin" ? null : "checkin")}
          className={`relative w-full sm:w-1/4 px-4 py-2 sm:py-1.5 rounded-xl sm:rounded-full cursor-pointer transition ${
            activeDropdown === "checkin" ? "bg-gray-100/80" : "hover:bg-gray-50"
          }`}
        >
          <div className="flex items-start gap-2.5">
            <Calendar className="w-5 h-5 text-gray-500 mt-1 shrink-0" />
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-gray-800 uppercase tracking-wider">
                Check in
              </span>
              <span className="text-sm font-semibold text-gray-600 truncate">
                {checkIn}
              </span>
            </div>
          </div>

          {activeDropdown === "checkin" && (
            <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50">
              <label className="text-xs font-semibold text-gray-500 block mb-2">Select Check-in Date</label>
              <input
                type="date"
                defaultValue="2024-05-24"
                onChange={(e) => {
                  if (e.target.value) setCheckIn(e.target.value);
                  setActiveDropdown(null);
                }}
                className="w-full text-sm border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
              />
            </div>
          )}
        </div>

        <div className="hidden sm:block w-px h-8 bg-gray-200" />

        {/* Check out Segment */}
        <div
          onClick={() => setActiveDropdown(activeDropdown === "checkout" ? null : "checkout")}
          className={`relative w-full sm:w-1/4 px-4 py-2 sm:py-1.5 rounded-xl sm:rounded-full cursor-pointer transition ${
            activeDropdown === "checkout" ? "bg-gray-100/80" : "hover:bg-gray-50"
          }`}
        >
          <div className="flex items-start gap-2.5">
            <Calendar className="w-5 h-5 text-gray-500 mt-1 shrink-0" />
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-gray-800 uppercase tracking-wider">
                Check out
              </span>
              <span className="text-sm font-semibold text-gray-600 truncate">
                {checkOut}
              </span>
            </div>
          </div>

          {activeDropdown === "checkout" && (
            <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50">
              <label className="text-xs font-semibold text-gray-500 block mb-2">Select Check-out Date</label>
              <input
                type="date"
                defaultValue="2024-05-27"
                onChange={(e) => {
                  if (e.target.value) setCheckOut(e.target.value);
                  setActiveDropdown(null);
                }}
                className="w-full text-sm border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
              />
            </div>
          )}
        </div>

        <div className="hidden sm:block w-px h-8 bg-gray-200" />

        {/* Guests Segment */}
        <div
          onClick={() => setActiveDropdown(activeDropdown === "guests" ? null : "guests")}
          className={`relative w-full sm:w-1/4 px-4 py-2 sm:py-1.5 rounded-xl sm:rounded-full cursor-pointer transition ${
            activeDropdown === "guests" ? "bg-gray-100/80" : "hover:bg-gray-50"
          }`}
        >
          <div className="flex items-start gap-2.5">
            <User className="w-5 h-5 text-gray-500 mt-1 shrink-0" />
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-gray-800 uppercase tracking-wider">
                Guests
              </span>
              <span className="text-sm font-semibold text-gray-600 truncate">
                {guests} {guests === 1 ? "Guest" : "Guests"}
              </span>
            </div>
          </div>

          {/* Guest Count Popover */}
          {activeDropdown === "guests" && (
            <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-800">Guests</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setGuests(Math.max(1, guests - 1));
                    }}
                    className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center font-bold text-gray-600 hover:border-gray-900"
                  >
                    -
                  </button>
                  <span className="font-semibold text-sm">{guests}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setGuests(guests + 1);
                    }}
                    className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center font-bold text-gray-600 hover:border-gray-900"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Action Button */}
        <button
          type="submit"
          className="w-full sm:w-12 h-12 bg-[#FF5A5F] hover:bg-[#e0484d] text-white rounded-xl sm:rounded-full flex items-center justify-center shadow-md hover:scale-105 transition shrink-0"
          aria-label="Search stays"
        >
          <Search className="w-5 h-5 stroke-[2.5]" />
        </button>
      </form>
    </div>
  );
}
