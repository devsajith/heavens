"use client";

import {
  Home,
  Users,
  Store,
  Trees,
  Bath,
  Grid,
} from "lucide-react";
import { CATEGORIES } from "../data/stays";

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Home,
  Users,
  Store,
  Trees,
  ShowerHead: Bath,
  Grid,
};

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="w-full my-6 border-b border-gray-100 pb-4">
      <div className="flex items-center justify-center overflow-x-auto no-scrollbar gap-6 sm:gap-8 px-2 py-2">
        {CATEGORIES.map((cat) => {
          const IconComponent = ICON_MAP[cat.iconName] || Grid;
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="flex flex-col items-center gap-2 group shrink-0 transition cursor-pointer"
            >
              {/* Circular Icon Container */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-200 ${
                  isSelected
                    ? "border-[#FF5A5F] bg-[#FF5A5F]/5 text-[#FF5A5F] shadow-xs scale-105"
                    : "border-gray-200 text-gray-600 group-hover:border-gray-400 group-hover:text-gray-900 bg-white"
                }`}
              >
                <IconComponent className="w-5 h-5 stroke-[1.75]" />
              </div>

              {/* Category Label */}
              <span
                className={`text-xs font-medium transition ${
                  isSelected
                    ? "text-[#FF5A5F] font-bold"
                    : "text-gray-600 group-hover:text-gray-900"
                }`}
              >
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
