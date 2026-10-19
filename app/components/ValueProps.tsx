"use client";

import {
  Car,
  Waves,
  Trees,
  Flame,
  Store,
  Users,
  ShowerHead,
  Compass,
} from "lucide-react";

export default function ValueProps() {
  const features = [
    {
      icon: Car,
      title: "4x4 Off-Road Trailhead",
      description: "Direct starting hub for rocky mountain jeep safaris & viewpoint drops.",
    },
    {
      icon: Waves,
      title: "Hidden Waterfall Treks",
      description: "Guided private hikes to secluded cascades & freshwater natural stream pools.",
    },
    {
      icon: Trees,
      title: "Mountain Ridge Tents",
      description: "Weatherproof dome camping overlooking morning cloud beds and mist.",
    },
    {
      icon: Flame,
      title: "Evening Campfires",
      description: "Wood-fired mountain bonfires under starry skies with hot spiced tea.",
    },
    {
      icon: Store,
      title: "Timber A-Hut Cabins",
      description: "Aesthetic wooden triangular cottages nestled in evergreen mountain flora.",
    },
    {
      icon: Waves,
      title: "Hill Swimming Pool",
      description: "Crystal-clear hill-view pool facing panoramic tea & mountain ridges.",
    },
    {
      icon: Users,
      title: "Trekker Dormitory",
      description: "Comfortable bunk facilities designed for hiking groups, bikers & teams.",
    },
    {
      icon: ShowerHead,
      title: "Fresh-Up Pitstop",
      description: "Hot shower and locker facilities for day visitors and overland travelers.",
    },
  ];

  return (
    <section className="w-full my-16 bg-white rounded-3xl p-6 sm:p-12 border border-stone-200/90 shadow-2xs">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-[#b85d2a] text-xs font-bold uppercase tracking-widest block">
          Basecamp Amenities & Facilities
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-stone-900 mt-1.5">
          Engineered for Adventure & Mountain Comfort
        </h2>
        <p className="text-xs sm:text-sm text-stone-500 mt-2">
          From extreme 4x4 trailheads to cozy timber cabins and hot showers after waterfall hikes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl bg-[#fbfaf7] border border-stone-200/80 hover:border-stone-400 hover:bg-white hover:shadow-md transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-stone-200/70 text-stone-800 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-[#b85d2a] stroke-[2]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-bold text-stone-900 text-sm">{feature.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
