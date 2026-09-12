"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <section className="w-full my-12 bg-white rounded-3xl border border-gray-200/80 p-4 sm:p-6 shadow-xs overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {/* Left Interior Image */}
        <div className="w-full md:w-1/3 h-52 md:h-44 rounded-2xl overflow-hidden shrink-0">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
            alt="Cozy interior room"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content & Form */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            Get inspired for your next trip
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 mb-5 max-w-lg">
            Exclusive stays, travel tips, and special offers—straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 text-xs sm:text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent text-gray-800 placeholder-gray-400"
            />
            <button
              type="submit"
              className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#FF5A5F] hover:bg-[#e0484d] rounded-full shadow-xs hover:shadow transition transform active:scale-95 shrink-0"
            >
              {subscribed ? (
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4" /> Subscribed!
                </span>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
