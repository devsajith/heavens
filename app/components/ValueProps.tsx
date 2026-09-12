"use client";

import {
  Home,
  Users,
  ShowerHead,
  Trees,
  Store,
  Waves,
  Flame,
  Car,
} from "lucide-react";

export default function ValueProps() {
  const features = [
    {
      icon: Home,
      title: "Deluxe Rooms",
      description: "Comfortable, spacious resort rooms with scenic tea mountain views.",
    },
    {
      icon: Users,
      title: "Dormitory",
      description: "Budget-friendly group stay facilities ideal for trekking groups & friends.",
    },
    {
      icon: ShowerHead,
      title: "Fresh Up Facilities",
      description: "Quick refresh rooms with lockers & hot showers for day travelers.",
    },
    {
      icon: Trees,
      title: "Tent Camping",
      description: "Stargazing outdoor mountain camping surrounded by Munnar hills.",
    },
    {
      icon: Store,
      title: "A-Huts",
      description: "Cozy, aesthetic wooden triangle A-frame cottages.",
    },
    {
      icon: Waves,
      title: "Swimming Pool",
      description: "Refresh in our pristine hill-view resort swimming pool.",
    },
    {
      icon: Flame,
      title: "Camp Fire",
      description: "Warm night bonfires under the starry Munnar sky.",
    },
    {
      icon: Car,
      title: "Jeep Trekking",
      description: "Exciting offroad mountain jeep safaris & viewpoint tours.",
    },
  ];

  return (
    <section className="w-full my-12 bg-gray-50/90 rounded-3xl p-6 sm:p-10 border border-gray-100/80">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-[#FF5A5F] text-xs font-bold uppercase tracking-wider block">
          Resort Amenities & Services
        </span>
        <h2 className="text-2xl font-extrabold text-gray-900 mt-1">
          Everything You Need for a Perfect Holiday
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-2xs hover:shadow-md transition">
              <div className="w-11 h-11 rounded-full bg-[#FF5A5F]/10 flex items-center justify-center text-[#FF5A5F] shrink-0">
                <Icon className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-bold text-gray-900 text-sm">{feature.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
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
