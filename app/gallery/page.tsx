"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthModal from "../components/AuthModal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  "/galary/gal1.webp",
  "/galary/jeep.webp",
  "/galary/elephant.webp",
  "/galary/gal2.webp",
  "/galary/gal3.webp",
  "/galary/jeep2.webp",
  "/galary/elephant2.webp",
  "/galary/gal4.webp",
  "/galary/gal5.webp",
  "/galary/gal6.webp",
  "/galary/gal7.webp",
  "/galary/gal8.webp",
  "/galary/gal9.webp",
  "/galary/gal10.webp",
  "/galary/gal11.webp",
  "/galary/gal13.webp",
];

export default function GalleryPage() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentImage = lightboxIndex !== null ? GALLERY_IMAGES[lightboxIndex] : null;

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar onOpenAuth={(mode) => { setAuthMode(mode); setAuthModalOpen(true); }} />

        <main className="max-w-7xl mx-auto px-4 md:px-12 py-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#FF5A5F] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2">
              Official Photo Gallery
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              HEAVENS Munnar Gallery
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              Explore photo captures of our resort, cottages, offroad jeep safaris, and nature in Munnar.
            </p>
          </div>

          {/* Clean Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((imgSrc, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 cursor-pointer shadow-xs hover:shadow-xl transition duration-300"
              >
                <img
                  src={imgSrc}
                  alt={`HEAVENS Munnar Photo ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Lightbox Modal */}
      {currentImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in">
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left / Right Nav Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image */}
          <div className="relative max-w-5xl w-full max-h-[88vh] flex items-center justify-center">
            <img
              src={currentImage}
              alt="HEAVENS Munnar Photo Lightbox"
              className="max-h-[85vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}

      <Footer />
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} initialMode={authMode} />
    </div>
  );
}
