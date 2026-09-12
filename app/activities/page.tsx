"use client";

import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthModal from "../components/AuthModal";
import { Star, Clock, Users, MapPin, Check, X } from "lucide-react";

interface Activity {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  groupSize: string;
  rating: number;
  reviewsCount: number;
  pricePerPerson: number;
  hostName: string;
  hostAvatar: string;
  image: string;
  description: string;
}

const ACTIVITIES: Activity[] = [
  {
    id: "act-1",
    title: "Offroad Jeep Trekking & Mountain Viewpoint Safari",
    category: "jeep-trekking",
    location: "Munnar Hills, Kerala",
    duration: "3 hours",
    groupSize: "Up to 6 per Jeep",
    rating: 4.99,
    reviewsCount: 230,
    pricePerPerson: 1200,
    hostName: "HEAVENS Offroad Team",
    hostAvatar: "/logo.jpg",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80",
    description: "Thrilling 4x4 mountain jeep safari through rugged tea estate trails to sunrise & sunset viewpoints in Munnar.",
  },
  {
    id: "act-2",
    title: "Stargazing Night Camp Fire & Music Session",
    category: "campfire",
    location: "HEAVENS Resort Ground, Munnar",
    duration: "Evening (7 PM - 10 PM)",
    groupSize: "Resort Guests",
    rating: 4.97,
    reviewsCount: 185,
    pricePerPerson: 500,
    hostName: "Resort Campfire Host",
    hostAvatar: "/logo.jpg",
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1000&q=80",
    description: "Gather around a warm bonfire under the starry sky with music, light snacks, and hot tea/coffee.",
  },
  {
    id: "act-3",
    title: "Mountain Peak Tent Camping Experience",
    category: "camping",
    location: "Munnar Peak Trail",
    duration: "Overnight (1 Day / 1 Night)",
    groupSize: "2 - 10 Guests",
    rating: 4.98,
    reviewsCount: 142,
    pricePerPerson: 1500,
    hostName: "HEAVENS Outdoor Guide",
    hostAvatar: "/logo.jpg",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1000&q=80",
    description: "Immerse in nature with comfortable tent camping, sleeping bags, campfire, and morning mist sunrise view.",
  },
  {
    id: "act-4",
    title: "Munnar Tea Plantation & Factory Guided Tour",
    category: "sightseeing",
    location: "Munnar Tea Estates",
    duration: "2.5 hours",
    groupSize: "Up to 8 Guests",
    rating: 4.95,
    reviewsCount: 160,
    pricePerPerson: 600,
    hostName: "Local Heritage Guide",
    hostAvatar: "/logo.jpg",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
    description: "Walk through lush green tea gardens, learn tea leaf plucking, and sample freshly brewed high-range tea.",
  },
  {
    id: "act-5",
    title: "Resort Swimming Pool & Sunbed Relaxation",
    category: "resort-amenity",
    location: "HEAVENS Swimming Pool",
    duration: "Full Day Access",
    groupSize: "All Resort Guests",
    rating: 4.96,
    reviewsCount: 120,
    pricePerPerson: 300,
    hostName: "HEAVENS Hospitality",
    hostAvatar: "/logo.jpg",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80",
    description: "Cool off in our crystal-clear hill-view swimming pool with sun loungers and towel service.",
  },
];

export default function ActivitiesPage() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const filteredActivities = useMemo(() => {
    if (categoryFilter === "all") return ACTIVITIES;
    return ACTIVITIES.filter((act) => act.category === categoryFilter);
  }, [categoryFilter]);

  const handleBook = () => {
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
      setSelectedActivity(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar onOpenAuth={(mode) => { setAuthMode(mode); setAuthModalOpen(true); }} />

        <main className="max-w-7xl mx-auto px-4 md:px-12 py-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#FF5A5F] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2">
              Resort Activities & Adventures
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Jeep Trekking, Camping & Experiences
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              Enhance your stay at HEAVENS Munnar with exciting offroad safaris, night campfires, and tea garden tours.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
            {[
              { id: "all", label: "All Activities" },
              { id: "jeep-trekking", label: "Jeep Trekking" },
              { id: "campfire", label: "Camp Fire" },
              { id: "camping", label: "Tent Camping" },
              { id: "sightseeing", label: "Tea Garden Tour" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCategoryFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition ${
                  categoryFilter === tab.id
                    ? "bg-[#FF5A5F] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((act) => (
              <div
                key={act.id}
                onClick={() => setSelectedActivity(act)}
                className="group cursor-pointer bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Banner */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <img
                      src={act.image}
                      alt={act.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#FF5A5F]" />
                      <span>{act.location}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs font-bold text-gray-900">
                        <Star className="w-3.5 h-3.5 fill-gray-900 text-gray-900" />
                        <span>{act.rating}</span>
                        <span className="text-gray-500 font-normal">({act.reviewsCount})</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{act.duration}</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-gray-900 text-base group-hover:text-[#FF5A5F] transition leading-snug">
                      {act.title}
                    </h3>

                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {act.description}
                    </p>

                    <div className="flex items-center gap-2.5 pt-2 border-t border-gray-100 mt-1">
                      <img
                        src={act.hostAvatar}
                        alt={act.hostName}
                        className="w-7 h-7 rounded-full object-cover border border-gray-200"
                      />
                      <span className="text-xs font-semibold text-gray-700">{act.hostName}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Price & Action */}
                <div className="px-6 py-4 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-base font-extrabold text-gray-900">₹{act.pricePerPerson}</span>
                    <span className="text-xs text-gray-500"> / guest</span>
                  </div>
                  <button className="px-4 py-2 text-xs font-bold text-white bg-[#FF5A5F] rounded-full group-hover:bg-[#e0484d] transition">
                    Book Activity
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Activity Booking Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100 animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedActivity(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#FF5A5F]/10 text-gray-500 hover:text-gray-900 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col gap-4">
              <div className="h-44 w-full rounded-2xl overflow-hidden">
                <img src={selectedActivity.image} alt={selectedActivity.title} className="w-full h-full object-cover" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#FF5A5F]">{selectedActivity.location}</span>
                <h2 className="text-xl font-bold text-gray-900 mt-0.5">{selectedActivity.title}</h2>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">{selectedActivity.description}</p>
              </div>

              {bookingConfirmed ? (
                <div className="p-4 bg-emerald-50 text-emerald-800 rounded-2xl text-center font-bold text-sm flex items-center justify-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Activity Reserved! Contacting via WhatsApp.</span>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-extrabold text-gray-900">₹{selectedActivity.pricePerPerson}</span>
                    <span className="text-xs text-gray-500"> / guest</span>
                  </div>
                  <button
                    onClick={handleBook}
                    className="px-6 py-3 text-sm font-semibold text-white bg-[#FF5A5F] hover:bg-[#e0484d] rounded-full shadow-md transition cursor-pointer"
                  >
                    Confirm Experience
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} initialMode={authMode} />
    </div>
  );
}
