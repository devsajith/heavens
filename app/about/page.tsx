"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthModal from "../components/AuthModal";

export default function AboutPage() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const stats = [
    { value: "Munnar", label: "Kerala's Top Hill Destination" },
    { value: "8+", label: "Resort Stay Options & Activities" },
    { value: "100%", label: "Pure Mountain Freshness" },
    { value: "4.95★", label: "Guest Satisfaction Rating" },
  ];

  const features = [
    {
      title: "Deluxe Rooms",
      desc: "Private luxury rooms with scenic tea estate mountain views.",
    },
    {
      title: "Group Dormitory",
      desc: "Spacious dormitory stay perfect for student groups & trekking teams.",
    },
    {
      title: "Fresh Up Rooms",
      desc: "Convenient day-refresh stay with lockers and hot shower facilities.",
    },
    {
      title: "Tent Camping",
      desc: "Outdoor mountain peak tent stay under the starry sky.",
    },
    {
      title: "A-Hut Cottages",
      desc: "Cozy aesthetic wooden A-frame cottages nestled in nature.",
    },
    {
      title: "Swimming Pool",
      desc: "Hill-view crystal clear resort swimming pool.",
    },
    {
      title: "Camp Fire Nights",
      desc: "Evening bonfires with music and mountain atmosphere.",
    },
    {
      title: "Offroad Jeep Trekking",
      desc: "Thrilling 4x4 offroad jeep safaris to hidden Munnar viewpoints.",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar onOpenAuth={(mode) => { setAuthMode(mode); setAuthModalOpen(true); }} />

        <main className="max-w-7xl mx-auto px-4 md:px-12 py-10">
          {/* About Hero Banner */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-8 sm:p-16 mb-16 shadow-xl">
            <div className="max-w-2xl relative z-10">
              <span className="text-[#FF5A5F] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3">
                About HEAVENS Munnar
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                Your Sanctuary in the Hills of Munnar.
              </h1>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                HEAVENS Munnar Holiday Resort is your ultimate getaway destination in Kerala. Surrounded by misty tea hills, we offer versatile accommodations ranging from Deluxe Rooms and A-Hut Cottages to Dormitories, Mountain Tent Camping, Swimming Pool, Camp Fires, and Offroad Jeep Safaris.
              </p>
            </div>

            {/* Background Image */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 pointer-events-none hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                alt="Heavens Munnar Resort"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-16 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#FF5A5F]">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-gray-600 font-medium mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Offerings Grid */}
          <div className="mb-16">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-[#FF5A5F] font-bold text-xs uppercase tracking-wider block">
                What We Offer
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                Complete Holiday Experience at HEAVENS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition">
                  <div className="w-8 h-8 rounded-full bg-[#FF5A5F]/10 text-[#FF5A5F] flex items-center justify-center font-bold text-sm mb-3">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Booking Contact Box */}
          <div className="rounded-3xl bg-gray-900 text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl mb-16">
            <div>
              <span className="text-[#FF5A5F] font-bold text-xs uppercase tracking-wider block mb-1">
                Reception Booking Desk
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Visit HEAVENS Munnar?</h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-md">
                Call our reception directly for instant room availability, group dormitory rates, and jeep safari packages.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:7902832575"
                className="px-6 py-3.5 bg-[#FF5A5F] hover:bg-[#e0484d] text-white rounded-full font-bold text-sm shadow-md transition text-center"
              >
                📞 Call 7902832575
              </a>
              <a
                href="https://wa.me/917902832575"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white text-gray-900 hover:bg-gray-100 rounded-full font-bold text-sm shadow-md transition text-center"
              >
                💬 WhatsApp Chat
              </a>
            </div>
          </div>
        </main>
      </div>

      <Footer />
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} initialMode={authMode} />
    </div>
  );
}
