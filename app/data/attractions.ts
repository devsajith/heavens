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
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    description: "Panoramic hilltop viewpoint offering breathtaking vistas of lush tea gardens and green mountain valleys in Adimali.",
    highlights: ["Sunset & Sunrise Views", "Trekking Trails", "Photography Spot"],
  },
  {
    id: "att-2",
    number: 2,
    title: "Varayadin Mudi",
    category: "viewpoint",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    description: "Majestic rocky mountain peak known for Nilgiri Tahr mountain goats and high-altitude wilderness trekking.",
    highlights: ["Nilgiri Tahr Sightings", "High Peak Trekking", "Mist & Cloud Canopy"],
  },
  {
    id: "att-3",
    number: 3,
    title: "Mudippara Pine Forest",
    category: "forest",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80",
    description: "Serene pine forest reserve featuring towering evergreen trees, cool mountain air, and tranquil nature walks.",
    highlights: ["Evergreen Pine Trees", "Nature Photography", "Cool Climate Trails"],
  },
  {
    id: "att-4",
    number: 4,
    title: "Valara View Point",
    category: "waterfall",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
    description: "Iconic waterfall viewpoint overlooking cascading natural streams tumbling down dense jungle cliffs.",
    highlights: ["Cascading Waterfalls", "Dense Jungle Backdrop", "Highway Viewpoint Stop"],
  },
  {
    id: "att-5",
    number: 5,
    title: "Thalamaan Waterfalls",
    category: "waterfall",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1000&q=80",
    description: "Hidden natural waterfall paradise surrounded by tropical flora and natural stream pools.",
    highlights: ["Natural Pool Dip", "Secluded Jungle Spot", "Refreshing Cascade"],
  },
  {
    id: "att-6",
    number: 6,
    title: "Cheeyappara Batting Point",
    category: "waterfall",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1000&q=80",
    description: "Famous multi-tiered roadside waterfall along Winding Highway 85, a favorite offroad jeep safari stop.",
    highlights: ["Multi-Tier Cascade", "Highway 85 Stop", "Jeep Safari Route"],
  },
  {
    id: "att-7",
    number: 7,
    title: "Mamalakandam Forest",
    category: "forest",
    image: "https://images.unsplash.com/photo-1511497584788-8767611136f6?auto=format&fit=crop&w=1000&q=80",
    description: "Wild tropical forest sanctuary renowned for offroad jeep safaris, wild elephant sightings, and pristine streams.",
    highlights: ["Elephant Sightings", "Offroad 4x4 Safari", "Pristine Wilderness"],
  },
  {
    id: "att-8",
    number: 8,
    title: "Mamalakandam School",
    category: "heritage",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80",
    description: "Historic valley landmark situated in the heart of Mamalakandam village surrounded by mountain forest trails.",
    highlights: ["Village Heritage", "Mamalakandam Valley", "Scenic Drive Stop"],
  },
];
