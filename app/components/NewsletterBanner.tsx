"use client";

import { useState } from "react";
import { Check, Mail } from "lucide-react";

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
    <section className="w-full my-16 bg-[#f5f3ec] rounded-3xl border border-stone-300/70 p-6 sm:p-10 shadow-2xs overflow-hidden text-stone-900">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Offroad/Nature Image */}
        <div className="w-full md:w-2/5 h-56 sm:h-64 rounded-2xl overflow-hidden shrink-0 bg-stone-200 shadow-sm">
          <img
            src="/galary/jeep.webp"
            alt="Idukki Offroad 4x4 Trail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content & Form */}
        <div className="flex-1 flex flex-col justify-center">
          <span className="text-[#b85d2a] text-xs font-bold uppercase tracking-widest block mb-2">
            The Wilderness Journal
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
            Secret Trail Coordinates & Seasonal Safari Offers
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 mb-6 max-w-lg leading-relaxed">
            Sign up to receive curated guides on hidden Idukki waterfalls, 4x4 trail conditions, and special seasonal rates for tent camping and timber cabins.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 text-xs sm:text-sm rounded-full bg-white border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#b85d2a] text-stone-900 placeholder-stone-400 shadow-2xs"
            />
            <button
              type="submit"
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#16241c] hover:bg-[#b85d2a] rounded-full shadow-sm transition transform active:scale-95 shrink-0 cursor-pointer"
            >
              {subscribed ? (
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> Subscribed
                </span>
              ) : (
                "Join Journal"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
