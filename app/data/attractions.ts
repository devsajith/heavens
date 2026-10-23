export interface Attraction {
  id: string;
  number: string;
  title: string;
  category: string;
  image: string;
  desc: string;
  description?: string;
  dist?: string;
  highlights: string[];
}

export const ATTRACTIONS: Attraction[] = [
  {
    id: "att-1",
    number: "01",
    title: "Elephant Safari",
    category: "Wildlife Experience",
    image: "/explore/elepsafari.webp",
    desc: "Experience a thrilling and safe elephant ride through serene nature pathways guided by expert mahouts.",
    dist: "Safe Elephant Ride",
    highlights: ["Safe Elephant Ride", "Nature Pathway", "Family Friendly"],
  },
  {
    id: "att-2",
    number: "02",
    title: "Kuthirakuthi View Point",
    category: "Hilltop Sunset View",
    image: "/explore/kuthirakuthi.webp",
    desc: "Off-road jeep journey to a spectacular hilltop vantage point. Planning your visit for sunset offers an unforgettable golden panorama.",
    dist: "4.2 km from Basecamp",
    highlights: ["Off-Road Jeep Trail", "Sunset Viewpoint", "360° Valley Panorama"],
  },
  {
    id: "att-3",
    number: "03",
    title: "Varayadin Mudi ViewPoint",
    category: "High Altitude Peak",
    image: "/explore/varayadinmudi.webp",
    desc: "Majestic rocky mountain peak known for sweeping valley mist and occasional sightings of the endangered Nilgiri Tahr (Varayadu).",
    dist: "9.5 km from Basecamp",
    highlights: ["Nilgiri Tahr Spotting", "Rocky Mountain Peak", "Cloud Sea Canopy"],
  },
  {
    id: "att-4",
    number: "04",
    title: "Mudippara Pine Forest",
    category: "Pine Woods & Lake",
    image: "/explore/pineforest.webp",
    desc: "Scenic off-road drive up into dense, fragrant pine woods enclosing a tranquil secluded mountain lake.",
    dist: "Off-Road Route",
    highlights: ["Off-Road to Pines", "Mountain Lake", "Evergreen Forest"],
  },
  {
    id: "att-5",
    number: "05",
    title: "Valara Waterfall View Point",
    category: "Jungle Waterfall",
    image: "/explore/valaraView.webp",
    desc: "Exciting jeep ride to a stunning vantage point overlooking the mighty Valara waterfalls tumbling over rocky jungle cliffs.",
    dist: "7.8 km from Basecamp",
    highlights: ["Jeep Ride to Viewpoint", "Cascading Falls", "Lush Valley Backdrop"],
  },
  {
    id: "att-6",
    number: "06",
    title: "Thalamaan Waterfall",
    category: "Jungle Trekking",
    image: "/explore/thalamanfalls.webp",
    desc: "Adventure trekking through lush tropical forest trails leading to an untamed hidden waterfall with crystalline natural wading pools.",
    dist: "8.5 km from Basecamp",
    highlights: ["Forest Trekking Trail", "Secluded Cascade", "Natural Pool Dip"],
  },
  {
    id: "att-7",
    number: "07",
    title: "Cheeyappara Bathing Point",
    category: "Natural River Bath",
    image: "/explore/cheeypparabath.webp",
    desc: "Take a refreshing natural river bath right beneath the roaring multi-tiered Cheeyappara waterfalls along Highway 85.",
    dist: "11 km from Basecamp",
    highlights: ["Natural River Bath", "7-Tier Cascades", "Highway 85 Stop"],
  },
  {
    id: "att-8",
    number: "08",
    title: "Mamalakandam Forest Safari",
    category: "Forest Jeep Safari",
    image: "/explore/mamalasafari.webp",
    desc: "Rugged 4x4 open jeep safari traversing deep wilderness trails, featuring the renowned Mamalakandam forest school and roaring waterfalls.",
    dist: "Guided Safari Tour",
    highlights: ["4x4 Forest Safari", "Mamalakandam School", "Jungle Waterfalls"],
  },
  {
    id: "att-9",
    number: "09",
    title: "Anakkulam Wild Elephant Stream",
    category: "Wild Elephant Corridor",
    image: "/explore/anakkulam.webp",
    desc: "World-famous riverbank where wild elephants gather from dense forests to drink bubbling mineral-rich stream water, safely viewable from across the river.",
    dist: "Scenic Day Tour",
    highlights: ["Watch Wild Elephants Safely", "Mineral Stream", "Untouched Forest"],
  },
  {
    id: "att-10",
    number: "10",
    title: "Munnar Special Packages",
    category: "Curated Munnar Tours",
    image: "/explore/munnar.webp",
    desc: "Personalized full-day and multi-day Munnar sightseeing packages covering world-famous tea gardens, viewpoints, dams, and spice plantations.",
    dist: "Full Day / Custom Tour",
    highlights: ["Munnar Tea Gardens", "Driver & Cab Included", "Custom Holiday Route"],
  },
];
