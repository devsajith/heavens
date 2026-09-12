"use client";

import { MapPin, Phone, Globe, Menu } from "lucide-react";

interface TopUtilityBarProps {
  onOpenAuth: () => void;
}

export default function TopUtilityBar({ onOpenAuth }: TopUtilityBarProps) {
  return (
    <div className="w-full bg-white border-b border-gray-100 text-xs text-gray-700 py-2.5 px-4 md:px-12 flex justify-between items-center">
      {/* Left location indicator */}
      <div className="flex items-center space-x-1.5 font-medium hover:text-[#FF5A5F] cursor-pointer transition">
        <MapPin className="w-3.5 h-3.5 text-[#FF5A5F]" />
        <span>Munnar, Kerala, India</span>
      </div>

      {/* Middle link */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="https://instagram.com/heavensmunnar"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-gray-600 hover:text-[#FF5A5F] transition flex items-center gap-1"
        >
          <span>Instagram: @heavensmunnar</span>
        </a>
      </div>

      {/* Right side items */}
      <div className="flex items-center space-x-5">
        <div className="hidden sm:flex items-center space-x-2 font-medium">
          <Phone className="w-3.5 h-3.5 text-gray-500" />
          <a href="tel:7902832575" className="hover:text-[#FF5A5F]">7902832575</a>
          <span>/</span>
          <a href="tel:8606392143" className="hover:text-[#FF5A5F]">8606392143</a>
        </div>

        <button
          aria-label="Language selector"
          className="p-1 hover:bg-gray-100 rounded-full transition text-gray-600 hover:text-gray-900"
        >
          <Globe className="w-4 h-4" />
        </button>

        <button
          onClick={onOpenAuth}
          aria-label="User menu"
          className="p-1 hover:bg-gray-100 rounded-full transition text-gray-600 hover:text-gray-900"
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
