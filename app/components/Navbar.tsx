"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, X, Phone } from "lucide-react";

interface NavbarProps {
  onOpenAuth?: (mode: "login" | "signup") => void;
}

export default function Navbar({ onOpenAuth }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/activities", label: "4x4 & Adventures", badge: "Safari" },
    { href: "/attractions", label: "Waterfalls & Sights" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "Our Story" },
    { href: "/contact", label: "Contact & Desk" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#fbfaf7]/90 backdrop-blur-md border-b border-stone-200/80 px-4 md:px-10 py-3 text-stone-900 transition-all duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo with Image */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-stone-300 shadow-2xs group-hover:scale-105 transition-transform bg-stone-100">
            <img
              src="/logo.jpg"
              alt="HEAVENS Idukki Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-lg font-black tracking-tight text-stone-900 font-sans leading-tight">
                HEAVENS
              </span>
              <span className="bg-stone-200/70 text-stone-700 text-[10px] font-bold uppercase px-1.5 py-0.5 rounded tracking-wider">
                IDUKKI
              </span>
            </div>
            <span className="text-[10px] font-semibold tracking-wider text-[#b85d2a] uppercase">
              Wilderness & 4x4 Retreat
            </span>
          </div>
        </Link>

        {/* Main Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-xs sm:text-sm font-semibold tracking-tight transition-colors flex items-center gap-1.5 ${
                  isActive
                    ? "text-[#16241c] font-black"
                    : "text-stone-600 hover:text-stone-950"
                }`}
              >
                {item.label}
                {item.badge && (
                  <span className="bg-[#b85d2a]/10 text-[#b85d2a] font-bold text-[10px] px-1.5 py-0.5 rounded-full uppercase tracking-tighter">
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#b85d2a] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button: 4x4 Safari Booking & Phone */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:7902832575"
            className="hidden xl:inline-flex items-center gap-1 text-xs font-semibold text-stone-600 hover:text-stone-900 transition"
          >
            <Phone className="w-3.5 h-3.5 text-stone-400" />
            <span>+91 7902832575</span>
          </a>

          <a
            href="https://wa.me/917902832575?text=Hi%20HEAVENS%20Idukki,%20I%20am%20interested%20in%20booking%204x4%20Off-Road%20Jeep%20Safari%20and%20Stay!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#16241c] hover:bg-[#25392d] rounded-full shadow-sm hover:shadow transition transform hover:-translate-y-0.5"
          >
            <Compass className="w-3.5 h-3.5 text-amber-300" />
            <span>Book 4x4 Safari</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 rounded-xl bg-stone-100 border border-stone-200 text-stone-700"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t border-stone-200 flex flex-col gap-2 pb-2 animate-in fade-in slide-in-from-top-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm font-semibold flex items-center justify-between transition ${
                  isActive
                    ? "bg-stone-200/80 text-stone-950 font-black"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="bg-[#b85d2a]/10 text-[#b85d2a] font-bold text-[10px] px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <a
              href="https://wa.me/917902832575?text=Hi%20HEAVENS%20Idukki,%20I%20am%20interested%20in%20booking%204x4%20Off-Road%20Jeep%20Safari%20and%20Stay!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2.5 px-4 text-xs font-bold text-white bg-[#16241c] hover:bg-[#25392d] rounded-xl shadow-xs"
            >
              Book 4x4 Safari on WhatsApp
            </a>
            <a
              href="tel:7902832575"
              className="text-center py-2 text-xs font-semibold text-stone-600"
            >
              Call Safari Desk: +91 7902832575
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
