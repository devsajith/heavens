"use client";

import {
  Home,
  Users,
  Store,
  Trees,
  Bath,
  Grid,
  Compass,
  Tent,
  Mountain,
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
  Compass,
  Tent,
  Mountain,
};

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="w-full my-6 border-b border-stone-200/80 pb-5">
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-3 sm:gap-4 px-1 py-1">
        {CATEGORIES.map((cat) => {
          const IconComponent = ICON_MAP[cat.iconName] || Compass;
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full border text-xs font-semibold tracking-tight transition-all duration-200 shrink-0 cursor-pointer ${
                isSelected
                  ? "bg-[#16241c] border-[#16241c] text-white shadow-sm"
                  : "bg-white border-stone-200 text-stone-700 hover:border-stone-400 hover:text-stone-900"
              }`}
            >
              <IconComponent className={`w-4 h-4 stroke-[2] ${isSelected ? "text-amber-300" : "text-stone-500"}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
