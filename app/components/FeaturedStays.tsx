"use client";

import { ArrowRight } from "lucide-react";
import { Stay } from "../data/stays";
import PropertyCard from "./PropertyCard";

interface FeaturedStaysProps {
  stays: Stay[];
  onSelectStay: (stay: Stay) => void;
  onViewAllClick: () => void;
}

export default function FeaturedStays({
  stays,
  onSelectStay,
  onViewAllClick,
}: FeaturedStaysProps) {
  return (
    <section className="w-full my-10">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <span className="text-[#b85d2a] font-bold text-xs uppercase tracking-widest block mb-1">
            Wild Accommodations · Idukki
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
            Wilderness Stays & Basecamps
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-normal mt-1">
            Handcrafted timber A-huts, 4x4 cliff camps, and valley suites surrounded by evergreen mountains.
          </p>
        </div>

        <button
          onClick={onViewAllClick}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-[#b85d2a] transition group bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-full cursor-pointer"
        >
          <span>View all stays</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Grid of Stays */}
      {stays.length === 0 ? (
        <div className="w-full py-16 text-center text-gray-500 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <p className="text-base font-semibold">No stays found for this category.</p>
          <p className="text-xs text-gray-400 mt-1">Try selecting another filter or searching above.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stays.map((stay) => (
            <PropertyCard key={stay.id} stay={stay} onSelect={onSelectStay} />
          ))}
        </div>
      )}
    </section>
  );
}
