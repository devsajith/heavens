"use client";

import { useState } from "react";
import { Compass, User, Search, Tent, MapPin } from "lucide-react";

interface SearchBookingBarProps {
  onSearch: (params: { location: string; guests: number }) => void;
}

export default function SearchBookingBar({ onSearch }: SearchBookingBarProps) {
  const [location, setLocation] = useState("All Idukki Trails");
  const [stayType, setStayType] = useState("Any Adventure Stay");
  const [guests, setGuests] = useState(2);

  const [activeDropdown, setActiveDropdown] = useState<"where" | "stayType" | "guests" | null>(null);

  const locations = [
    "All Idukki Trails",
    "Mamalakandam Wild Forest (4x4)",
    "Hidden Waterfall & River Pool",
    "Varayadin Mudi High Peak",
    "Kuthirakuthi Viewpoint",
    "HEAVENS Basecamp Resort",
  ];

  const stayTypes = [
    "Any Adventure Stay",
    "4x4 Off-Road Jeep Safari",
    "Peak Tent Camping & Bonfire",
    "Forest Wooden A-Hut",
    "Valley View Deluxe Room",
    "Trekking Dormitory Stay",
    "Fresh Up Facility (Day Pass)",
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ location: location === "All Idukki Trails" ? "Anywhere" : location, guests });
    setActiveDropdown(null);
  };

  return (
    <div className="relative z-30 w-full max-w-5xl mx-auto -mt-8 sm:-mt-10 mb-14 px-2 sm:px-0">
      <form
        onSubmit={handleSearchSubmit}
        className="bg-white rounded-2xl sm:rounded-full border border-stone-200/90 shadow-xl shadow-stone-900/5 p-2 sm:p-2.5 flex flex-col sm:flex-row items-center justify-between gap-1.5 transition-all duration-200 hover:shadow-2xl hover:border-stone-300"
      >
        {/* Where / Trail Zone Segment */}
        <div
          onClick={() => setActiveDropdown(activeDropdown === "where" ? null : "where")}
          className={`relative w-full sm:w-2/5 px-4 py-2 sm:py-2 rounded-xl sm:rounded-full cursor-pointer transition ${
            activeDropdown === "where" ? "bg-stone-100" : "hover:bg-stone-50"
          }`}
        >
          <div className="flex items-start gap-3">
            <Compass className="w-5 h-5 text-[#b85d2a] mt-0.5 shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">
                Expedition Zone
              </span>
              <span className="text-sm font-bold text-stone-900 truncate">
                {location}
              </span>
            </div>
          </div>

          {/* Location Dropdown */}
          {activeDropdown === "where" && (
            <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-stone-200 p-3 z-50 text-stone-900 animate-in fade-in slide-in-from-top-2">
              <div className="text-[10px] font-bold text-stone-400 mb-2 px-2 uppercase tracking-wider">
                Idukki Adventure Trails
              </div>
              {locations.map((loc) => (
                <button
                  type="button"
                  key={loc}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLocation(loc);
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-3 py-2 text-xs sm:text-sm text-stone-700 hover:bg-stone-100 rounded-xl transition font-medium flex items-center justify-between"
                >
                  <span>{loc}</span>
                  {location === loc && <span className="text-[#b85d2a] font-bold">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="hidden sm:block w-px h-8 bg-stone-200" />

        {/* Stay Type / Experience Segment */}
        <div
          onClick={() => setActiveDropdown(activeDropdown === "stayType" ? null : "stayType")}
          className={`relative w-full sm:w-2/5 px-4 py-2 sm:py-2 rounded-xl sm:rounded-full cursor-pointer transition ${
            activeDropdown === "stayType" ? "bg-stone-100" : "hover:bg-stone-50"
          }`}
        >
          <div className="flex items-start gap-3">
            <Tent className="w-5 h-5 text-[#b85d2a] mt-0.5 shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">
                Experience & Stay
              </span>
              <span className="text-sm font-bold text-stone-900 truncate">
                {stayType}
              </span>
            </div>
          </div>

          {activeDropdown === "stayType" && (
            <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-stone-200 p-3 z-50 text-stone-900 animate-in fade-in slide-in-from-top-2">
              <div className="text-[10px] font-bold text-stone-400 mb-2 px-2 uppercase tracking-wider">
                Select Activity / Stay
              </div>
              {stayTypes.map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={(e) => {
                    e.stopPropagation();
                    setStayType(type);
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-3 py-2 text-xs sm:text-sm text-stone-700 hover:bg-stone-100 rounded-xl transition font-medium flex items-center justify-between"
                >
                  <span>{type}</span>
                  {stayType === type && <span className="text-[#b85d2a] font-bold">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="hidden sm:block w-px h-8 bg-stone-200" />

        {/* Explorers / Guests Segment */}
        <div
          onClick={() => setActiveDropdown(activeDropdown === "guests" ? null : "guests")}
          className={`relative w-full sm:w-1/4 px-4 py-2 sm:py-2 rounded-xl sm:rounded-full cursor-pointer transition ${
            activeDropdown === "guests" ? "bg-stone-100" : "hover:bg-stone-50"
          }`}
        >
          <div className="flex items-start gap-3">
            <User className="w-5 h-5 text-stone-500 mt-0.5 shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">
                Explorers
              </span>
              <span className="text-sm font-bold text-stone-900 truncate">
                {guests} {guests === 1 ? "Guest" : "Guests"}
              </span>
            </div>
          </div>

          {activeDropdown === "guests" && (
            <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-stone-200 p-4 z-50 text-stone-900">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-stone-700">Explorers Count</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setGuests(Math.max(1, guests - 1));
                    }}
                    className="w-7 h-7 rounded-full border border-stone-300 flex items-center justify-center font-bold text-stone-600 hover:bg-stone-100"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm text-stone-900">{guests}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setGuests(guests + 1);
                    }}
                    className="w-7 h-7 rounded-full border border-stone-300 flex items-center justify-center font-bold text-stone-600 hover:bg-stone-100"
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
          className="w-full sm:w-12 h-12 bg-[#16241c] hover:bg-[#b85d2a] text-white rounded-xl sm:rounded-full flex items-center justify-center shadow-md hover:scale-105 transition shrink-0 cursor-pointer"
          aria-label="Find Stays & Safaris"
        >
          <Search className="w-5 h-5 stroke-[2.2]" />
        </button>
      </form>
    </div>
  );
}
