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
  adventureBadge?: string;
  adventureHighlights?: string[];
}

export interface Category {
  id: string;
  label: string;
  iconName: string;
}

export const CATEGORIES: Category[] = [
  { id: "all", label: "All Wild Stays", iconName: "Compass" },
  { id: "camping", label: "4x4 & Tent Camping", iconName: "Tent" },
  { id: "a-hut", label: "Wooden A-Huts", iconName: "Mountain" },
  { id: "rooms", label: "Valley View Rooms", iconName: "Home" },
  { id: "dormitory", label: "Trekker Dormitory", iconName: "Users" },
  { id: "fresh-up", label: "Trekker Fresh Up", iconName: "ShowerHead" },
];

export const INITIAL_STAYS: Stay[] = [
  {
    id: "stay-1",
    location: "HEAVENS Basecamp, Idukki",
    type: "Deluxe Mountain Cliff Room · Hill Swimming Pool",
    rating: 4.98,
    reviewsCount: 154,
    pricePerNight: 2800,
    guestFavorite: true,
    category: "rooms",
    adventureBadge: "Near Hidden Waterfalls",
    adventureHighlights: ["Direct valley mist view", "Access to hill swimming pool", "Waterfall guide available"],
    images: [
      "/galary/gal1.webp",
      "/galary/gal2.webp",
      "/galary/gal3.webp"
    ]
  },
  {
    id: "stay-2",
    location: "Forest Ridge, Idukki",
    type: "Wild Wooden A-Hut Cottage · Campfire & Night Stars",
    rating: 4.95,
    reviewsCount: 118,
    pricePerNight: 3200,
    guestFavorite: true,
    category: "a-hut",
    adventureBadge: "Wild Forest Cottage",
    adventureHighlights: ["Triangular timber architecture", "Night bonfire with music", "Bordering evergreen forest"],
    images: [
      "/galary/gal7.webp",
      "/galary/gal5.webp",
      "/galary/gal4.webp"
    ]
  },
  {
    id: "stay-3",
    location: "Idukki Mountain Ridge",
    type: "Cliffside Tent Camping · 4x4 Off-Road Jeep Safari Included",
    rating: 4.99,
    reviewsCount: 210,
    pricePerNight: 1500,
    guestFavorite: true,
    category: "camping",
    adventureBadge: "Extreme 4x4 Safari Base",
    adventureHighlights: ["Rugged 4x4 jeep mountain trail", "High-altitude tent stay", "Campfire & morning cloud sea"],
    images: [
      "/galary/jeep.webp",
      "/galary/gal6.webp",
      "/galary/jeep2.webp"
    ]
  },
  {
    id: "stay-4",
    location: "HEAVENS Resort, Idukki",
    type: "Expedition Group Dormitory · Base for Off-Roaders & Trekkers",
    rating: 4.92,
    reviewsCount: 88,
    pricePerNight: 800,
    guestFavorite: false,
    category: "dormitory",
    adventureBadge: "Adventure Group Special",
    adventureHighlights: ["Bunk beds for biking/trekking groups", "Secure off-road vehicle parking", "Hot showers after trails"],
    images: [
      "/galary/gal11.webp",
      "/galary/gal8.webp"
    ]
  },
  {
    id: "stay-5",
    location: "Adimali Highway 85 Trailhead",
    type: "Trekker Fresh Up Facility · Locker, Changing & Hot Shower",
    rating: 4.96,
    reviewsCount: 145,
    pricePerNight: 500,
    guestFavorite: false,
    category: "fresh-up",
    adventureBadge: "Waterfall Pitstop Hub",
    adventureHighlights: ["Ideal after waterfall dip", "Hot showers & luggage lockers", "Quick rest before 4x4 safari"],
    images: [
      "/galary/gal10.webp",
      "/galary/gal9.webp"
    ]
  },
  {
    id: "stay-6",
    location: "HEAVENS Heights, Idukki",
    type: "Wild Luxury Mountain Suite · Panoramic Peak & Forest View",
    rating: 4.99,
    reviewsCount: 196,
    pricePerNight: 4500,
    guestFavorite: true,
    category: "rooms",
    adventureBadge: "Wildlife Corridor Panorama",
    adventureHighlights: ["High ridge valley view", "Private balcony facing mist", "Inclusive 4x4 viewpoint drop"],
    images: [
      "/galary/elephant.webp",
      "/galary/gal13.webp"
    ]
  }
];
