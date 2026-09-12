export interface Stay {
  id: string;
  location: string;
  type: string;
  rating: number;
  reviewsCount: number;
  pricePerNight: number;
  images: string[];
  guestFavorite: boolean;
  category: string;
}

export interface Category {
  id: string;
  label: string;
  iconName: string;
}

export const CATEGORIES: Category[] = [
  { id: "all", label: "All Stays", iconName: "Grid" },
  { id: "rooms", label: "Rooms", iconName: "Home" },
  { id: "dormitory", label: "Dormitory", iconName: "Users" },
  { id: "a-hut", label: "A-Hut", iconName: "Store" },
  { id: "camping", label: "Tent Camping", iconName: "Trees" },
  { id: "fresh-up", label: "Fresh Up", iconName: "ShowerHead" },
];

export const INITIAL_STAYS: Stay[] = [
  {
    id: "stay-1",
    location: "Heavens Resort, Munnar",
    type: "Deluxe Mountain View Room · Swimming Pool Access",
    rating: 4.98,
    reviewsCount: 154,
    pricePerNight: 2800,
    guestFavorite: true,
    category: "rooms",
    images: [
      "/galary/gal1.webp",
      "/galary/gal2.webp",
      "/galary/gal3.webp"
    ]
  },
  {
    id: "stay-2",
    location: "Heavens Resort, Munnar",
    type: "Cozy Wooden A-Hut Cottage · Campfire Included",
    rating: 4.95,
    reviewsCount: 118,
    pricePerNight: 3200,
    guestFavorite: true,
    category: "a-hut",
    images: [
      "/galary/gal7.webp",
      "/galary/gal5.webp",
      "/galary/gal4.webp"
    ]
  },
  {
    id: "stay-3",
    location: "Munnar Mountain Peak",
    type: "Stargazing Tent Camping · Camp Fire & Offroad Jeep Trekking",
    rating: 4.97,
    reviewsCount: 210,
    pricePerNight: 1500,
    guestFavorite: true,
    category: "camping",
    images: [
      "/galary/jeep.webp",
      "/galary/gal6.webp",
      "/galary/jeep2.webp"
    ]
  },
  {
    id: "stay-4",
    location: "Heavens Resort, Munnar",
    type: "Group Dormitory Stay · Ideal for Friends & Trekking Groups",
    rating: 4.92,
    reviewsCount: 88,
    pricePerNight: 800,
    guestFavorite: false,
    category: "dormitory",
    images: [
      "/galary/gal11.webp",
      "/galary/gal8.webp"
    ]
  },
  {
    id: "stay-5",
    location: "Heavens Resort, Munnar",
    type: "Fresh Up Day Stay Facility · Locker & Shower Included",
    rating: 4.96,
    reviewsCount: 145,
    pricePerNight: 500,
    guestFavorite: false,
    category: "fresh-up",
    images: [
      "/galary/gal10.webp",
      "/galary/gal9.webp"
    ]
  },
  {
    id: "stay-6",
    location: "Heavens Resort, Munnar",
    type: "Executive Suite · Mountain View & Swimming Pool",
    rating: 4.99,
    reviewsCount: 196,
    pricePerNight: 4500,
    guestFavorite: true,
    category: "rooms",
    images: [
      "/galary/elephant.webp",
      "/galary/gal13.webp"
    ]
  }
];
