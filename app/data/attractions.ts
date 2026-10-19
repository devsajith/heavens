export interface Attraction {
  id: string;
  number: number;
  title: string;
  category: "viewpoint" | "waterfall" | "forest" | "heritage";
  image: string;
  description: string;
  highlights: string[];
}

export const ATTRACTIONS: Attraction[] = [
  {
    id: "att-1",
    number: 1,
    title: "Kuthirakuthi View Point",
    category: "viewpoint",
    image: "/explore/kuthirakuthi.webp",
    description: "Panoramic hilltop viewpoint offering breathtaking vistas of lush tea gardens and green mountain valleys in Adimali.",
    highlights: ["Sunset & Sunrise Views", "Trekking Trails", "Photography Spot"],
  },
  {
    id: "att-2",
    number: 2,
    title: "Varayadin Mudi",
    category: "viewpoint",
    image: "/explore/varayadinmudi.webp",
    description: "Majestic rocky mountain peak known for Nilgiri Tahr mountain goats and high-altitude wilderness trekking.",
    highlights: ["Nilgiri Tahr Sightings", "High Peak Trekking", "Mist & Cloud Canopy"],
  },
  {
    id: "att-3",
    number: 3,
    title: "Valara View Point",
    category: "waterfall",
    image: "/explore/valara.webp",
    description: "Iconic waterfall viewpoint overlooking cascading natural streams tumbling down dense jungle cliffs.",
    highlights: ["Cascading Waterfalls", "Dense Jungle Backdrop", "Highway Viewpoint Stop"],
  },
  {
    id: "att-4",
    number: 4,
    title: "Thalamaan Waterfalls",
    category: "waterfall",
    image: "/explore/thalaman.webp",
    description: "Hidden natural waterfall paradise surrounded by tropical flora and natural stream pools.",
    highlights: ["Natural Pool Dip", "Secluded Jungle Spot", "Refreshing Cascade"],
  },
  {
    id: "att-5",
    number: 5,
    title: "Cheeyappara Cascades",
    category: "waterfall",
    image: "/explore/cheeypparabath.webp",
    description: "Famous multi-tiered roadside waterfall along Winding Highway 85, a favorite offroad jeep safari stop.",
    highlights: ["Multi-Tier Cascade", "Highway 85 Stop", "Jeep Safari Route"],
  },
  {
    id: "att-6",
    number: 6,
    title: "Anakkulam Elephant River",
    category: "forest",
    image: "/explore/anakkulam.webp",
    description: "World-renowned riverbank where herds of wild elephants emerge from the deep forest to drink mineral-rich bubbling stream water.",
    highlights: ["Wild Elephant Herds", "Natural Mineral Stream", "Untouched Forest"],
  },
  {
    id: "att-7",
    number: 7,
    title: "Muthikkadu Lake & Hilltop",
    category: "viewpoint",
    image: "/explore/muthikkadulake.webp",
    description: "Tranquil mountain lake surrounded by lush green slopes, mist-covered hills, and peaceful natural reflection waters.",
    highlights: ["Calm Waters", "Misty Hills", "Nature Walks"],
  },
  {
    id: "att-8",
    number: 8,
    title: "4x4 Off-Road Jeep Safari Trail",
    category: "forest",
    image: "/explore/jeep.webp",
    description: "Thrilling 4x4 open jeep safari traversing rugged boulder tracks, hidden mountain streams, and remote tea plantation routes.",
    highlights: ["Rugged 4x4 Trail", "Stream Crossing", "Plantation Trails"],
  },
];
