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
    <section className="w-full my-8">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Featured stays
          </h2>
          <p className="text-sm text-gray-500 font-medium mt-0.5">
            Handpicked homes guests love
          </p>
        </div>

        <button
          onClick={onViewAllClick}
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#FF5A5F] hover:text-[#e0484d] transition group"
        >
          <span>View all homes</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
