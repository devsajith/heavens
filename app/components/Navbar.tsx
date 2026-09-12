"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onOpenAuth?: (mode: "login" | "signup") => void;
}

export default function Navbar({ onOpenAuth }: NavbarProps) {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/attractions", label: "Attractions" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 md:px-12 py-2 flex items-center justify-between shadow-xs">
      {/* Brand Logo with Image */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-gray-200 shadow-xs group-hover:scale-105 transition-transform bg-amber-50">
          <img
            src="/logo.jpg"
            alt="Heavens Munnar Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-extrabold tracking-tight text-gray-900 font-sans leading-tight">
            HEAVENS
          </span>
          <span className="text-[10px] font-semibold tracking-wider text-[#FF5A5F] uppercase">
            Munnar Holiday Resort
          </span>
        </div>
      </Link>

      {/* Main Navigation Links */}
      <nav className="flex items-center space-x-6 sm:space-x-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-1 text-xs sm:text-sm font-medium transition-colors ${
                isActive
                  ? "text-gray-900 font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#FF5A5F] rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
