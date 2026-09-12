"use client";

import { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import SearchBookingBar from "./components/SearchBookingBar";
import FeaturedStays from "./components/FeaturedStays";
import AttractionsSection from "./components/AttractionsSection";
import ValueProps from "./components/ValueProps";
import NewsletterBanner from "./components/NewsletterBanner";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import BookingModal from "./components/BookingModal";
import { INITIAL_STAYS, Stay } from "./data/stays";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchParams, setSearchParams] = useState({ location: "Anywhere", guests: 2 });

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const [selectedStay, setSelectedStay] = useState<Stay | null>(null);

  const handleOpenAuth = (mode: "login" | "signup" = "login") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleSearch = (params: { location: string; guests: number }) => {
    setSearchParams(params);
  };

  const filteredStays = useMemo(() => {
    return INITIAL_STAYS.filter((stay) => {
      // Category filter
      if (selectedCategory !== "all" && stay.category !== selectedCategory) {
        return false;
      }
      // Location filter from search bar
      if (
        searchParams.location !== "Anywhere" &&
        !stay.location.toLowerCase().includes(searchParams.location.split(",")[0].toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, searchParams]);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#FF5A5F]/20 selection:text-[#FF5A5F]">
      <div>
        {/* Main Navbar */}
        <Navbar onOpenAuth={handleOpenAuth} />

        {/* Main Container */}
        <main className="max-w-7xl mx-auto px-4 md:px-12">
          {/* Hero Banner Section */}
          <HeroBanner onExploreClick={() => setSelectedCategory("all")} />

          {/* Floating Search & Booking Bar */}
          <SearchBookingBar onSearch={handleSearch} />

          {/* Featured Stays Grid */}
          <FeaturedStays
            stays={filteredStays}
            onSelectStay={(stay) => setSelectedStay(stay)}
            onViewAllClick={() => {
              setSelectedCategory("all");
              setSearchParams({ location: "Anywhere", guests: 2 });
            }}
          />

          {/* Adimali 8 Scenic Attractions Section */}
          <AttractionsSection />

          {/* Value Propositions */}
          <ValueProps />

          {/* Newsletter Banner */}
          <NewsletterBanner />
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />

      {/* Booking Modal */}
      <BookingModal
        stay={selectedStay}
        onClose={() => setSelectedStay(null)}
      />
    </div>
  );
}
