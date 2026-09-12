"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthModal from "../components/AuthModal";
import AttractionsSection from "../components/AttractionsSection";

export default function AttractionsPage() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar onOpenAuth={(mode) => { setAuthMode(mode); setAuthModalOpen(true); }} />

        <main className="max-w-7xl mx-auto px-4 md:px-12 py-10">
          <AttractionsSection />
        </main>
      </div>

      <Footer />
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} initialMode={authMode} />
    </div>
  );
}
