"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import RoomsSection from "./components/RoomsSection";
import { 
  Heart, 
  ShoppingBag, 
  Phone, 
  MapPin, 
  Compass, 
  ArrowRight, 
  Calendar, 
  Check, 
  X, 
  Star,
  Users,
  Clock,
  Sparkles,
  Mountain,
  Flame,
  Waves,
  Car,
  Trees,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  ShieldCheck,
  Menu,
  Navigation,
  ExternalLink,
  Map,
  Bed
} from "lucide-react";

// ==========================================
// DATA STRUCTURES
// ==========================================

const IDUKKI_ATTRACTIONS = [
  {
    number: "01",
    title: "Elephant Safari",
    category: "Wildlife Experience",
    desc: "Experience a thrilling and safe elephant ride through serene nature pathways guided by expert mahouts.",
    image: "/explore/elepsafari.webp",
    highlights: ["Safe Elephant Ride", "Nature Pathway", "Family Friendly"],
  },
  {
    number: "02",
    title: "Kuthirakuthi View Point",
    category: "Hilltop Sunset View",
    desc: "Off-road jeep journey to a spectacular hilltop vantage point. Planning your visit for sunset offers an unforgettable golden panorama.",
    image: "/explore/kuthirakuthi.webp",
    highlights: ["Off-Road Jeep Trail", "Sunset Viewpoint", "360° Valley Panorama"],
  },
  {
    number: "03",
    title: "Varayadin Mudi ViewPoint",
    category: "High Altitude Peak",
    desc: "Majestic rocky mountain peak known for sweeping valley mist and occasional sightings of the endangered Nilgiri Tahr (Varayadu).",
    image: "/explore/varayadinmudi.webp",
    highlights: ["Nilgiri Tahr Spotting", "Rocky Mountain Peak", "Cloud Sea Canopy"],
  },
  {
    number: "04",
    title: "Mudippara Pine Forest",
    category: "Pine Woods & Lake",
    desc: "Scenic off-road drive up into dense, fragrant pine woods enclosing a tranquil secluded mountain lake.",
    image: "/explore/pineforest.webp",
    highlights: ["Off-Road to Pines", "Mountain Lake", "Evergreen Forest"],
  },
  {
    number: "05",
    title: "Valara Waterfall View Point",
    category: "Jungle Waterfall",
    desc: "Exciting jeep ride to a stunning vantage point overlooking the mighty Valara waterfalls tumbling over rocky jungle cliffs.",
    image: "/explore/valaraView.webp",
    highlights: ["Jeep Ride to Viewpoint", "Cascading Falls", "Lush Valley Backdrop"],
  },
  {
    number: "06",
    title: "Thalamaan Waterfall",
    category: "Jungle Trekking",
    desc: "Adventure trekking through lush tropical forest trails leading to an untamed hidden waterfall with crystalline natural wading pools.",
    image: "/explore/thalamanfalls.webp",
    highlights: ["Forest Trekking Trail", "Secluded Cascade", "Natural Pool Dip"],
  },
  {
    number: "07",
    title: "Cheeyappara Bathing Point",
    category: "Natural River Bath",
    desc: "Take a refreshing natural river bath right beneath the roaring multi-tiered Cheeyappara waterfalls along Highway 85.",
    image: "/explore/cheeypparabath.webp",
    highlights: ["Natural River Bath", "7-Tier Cascades", "Highway 85 Stop"],
  },
  {
    number: "08",
    title: "Mamalakandam Forest Safari",
    category: "Forest Jeep Safari",
    desc: "Rugged 4x4 open jeep safari traversing deep wilderness trails, featuring the renowned Mamalakandam forest school and roaring waterfalls.",
    image: "/explore/mamalasafari.webp",
    highlights: ["4x4 Forest Safari", "Mamalakandam School", "Jungle Waterfalls"],
  },
  {
    number: "09",
    title: "Anakkulam Wild Elephant Stream",
    category: "Wild Elephant Corridor",
    desc: "World-famous riverbank where wild elephants gather from dense forests to drink bubbling mineral-rich stream water, safely viewable from across the river.",
    image: "/explore/anakkulam.webp",
    highlights: ["Watch Wild Elephants Safely", "Mineral Stream", "Untouched Forest"],
  },
  {
    number: "10",
    title: "Munnar Special Packages",
    category: "Curated Munnar Tours",
    desc: "Personalized full-day and multi-day Munnar sightseeing packages covering world-famous tea gardens, viewpoints, dams, and spice plantations.",
    image: "/explore/munnar.webp",
    highlights: ["Munnar Tea Gardens", "Driver & Cab Included", "Custom Holiday Route"],
  },
];

const GALLERY_PICTURES = [
  { src: "/galary/gal1.webp", title: "Misty Mountain Safari", tag: "Safari" },
  { src: "/galary/gal2.webp", title: "Off-Road Forest Trail", tag: "Adventure" },
  { src: "/galary/gal3.webp", title: "Highland Valley Vistas", tag: "Viewpoint" },
  { src: "/galary/gal4.webp", title: "Pine Valley Exploration", tag: "Nature" },
  { src: "/galary/gal5.webp", title: "Mountain Peak Dawn", tag: "Sunrise" },
  { src: "/galary/gal6.webp", title: "Heavens Holiday Moments", tag: "Resort Life" },
  { src: "/galary/gal7.webp", title: "Rocky Cliff Horizon", tag: "Trek" },
  { src: "/galary/gal8.webp", title: "Jungle Stream Crossing", tag: "Wild Trail" },
  { src: "/galary/gal9.webp", title: "Munnar Tea Slopes", tag: "Valleys" },
  { src: "/galary/gal10.webp", title: "Sunset Over Misty Hills", tag: "Sunset" },
  { src: "/galary/gal11.webp", title: "Scenic Hill Highway", tag: "Journey" },
  { src: "/galary/gal12.webp", title: "Golden Hour Viewpoint", tag: "Sunset View" },
  { src: "/galary/gal13.webp", title: "High Altitude Overlook", tag: "Panorama" },
  { src: "/galary/gal14.webp", title: "Tour Group Safari Gathering", tag: "Expedition" },
  { src: "/galary/gal15.webp", title: "Verdant Hillside Escapes", tag: "Scenery" },
  { src: "/galary/gal16.webp", title: "Wilderness Trekking Trail", tag: "Trekking" },
  { src: "/galary/gal17.webp", title: "Mountain Crest Explorers", tag: "Highland" },
  { src: "/galary/gal19.webp", title: "Deep Forest Pathway", tag: "Nature Walk" },
  { src: "/galary/gal20.webp", title: "Panoramic Mountain Lookout", tag: "Viewpoint" },
  { src: "/galary/gal22.webp", title: "Misty Cliff Edge", tag: "Vistas" },
  { src: "/galary/gal23.webp", title: "Holiday Memories at Heavens", tag: "Guest Diary" },
  { src: "/galary/gal30.webp", title: "Heavens 4x4 Jeep Safari", tag: "4x4 Safari" },
  { src: "/galary/gal31.webp", title: "Sunset Cliff Vantage Point", tag: "Sunset" },
  { src: "/galary/gal33.webp", title: "High Peak Escapade", tag: "Landscape" },
  { src: "/galary/elephant.webp", title: "Elephant Safari Adventure", tag: "Wildlife" },
  { src: "/galary/elephant2.webp", title: "Gentle Giant Experience", tag: "Wildlife" },
  { src: "/galary/jeep.webp", title: "Heavens 4x4 Mountain Jeep", tag: "Off-Road" },
  { src: "/galary/jeep2.webp", title: "Safari Expedition Vehicle", tag: "4x4 Tour" },
];

const FAQS = [
  {
    q: "What types of rooms are available at Heaven?",
    a: "Heaven offers clean, cozy, and well-maintained rooms for families, couples, solo travelers, and groups. Rooms are set in peaceful mountain surroundings near Valara along Highway 85.",
  },
  {
    q: "What sightseeing packages do you offer in Munnar and nearby?",
    a: "We arrange curated sightseeing tour packages covering Munnar tea gardens, misty viewpoints, Valara & Cheeyappara waterfalls, Thalamaan cascades, and scenic nature trails with local driver-guides.",
  },
  {
    q: "Can I book a combined Room + Sightseeing package?",
    a: "Yes! We specialize in custom combo packages that include your room accommodations along with full-day or multi-day Munnar sightseeing tours at affordable rates.",
  },
  {
    q: "How do I reach Heaven Munnar?",
    a: "Heaven is located near Jacobite Church, Valara, Adimali, Kerala 685561 on Highway 85 (the primary Kochi-Munnar route). You can navigate directly using our Google Maps location pin or contact our desk for route assistance.",
  },
];

export default function SinglePageApp() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [trailMapOpen, setTrailMapOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [contactSuccess, setContactSuccess] = useState(false);

  const currentLightboxIndex = lightboxImg 
    ? GALLERY_PICTURES.findIndex((p) => p.src === lightboxImg) 
    : -1;

  const showPrevLightbox = () => {
    if (currentLightboxIndex > 0) {
      setLightboxImg(GALLERY_PICTURES[currentLightboxIndex - 1].src);
    } else if (currentLightboxIndex === 0) {
      setLightboxImg(GALLERY_PICTURES[GALLERY_PICTURES.length - 1].src);
    }
  };

  const showNextLightbox = () => {
    if (currentLightboxIndex >= 0 && currentLightboxIndex < GALLERY_PICTURES.length - 1) {
      setLightboxImg(GALLERY_PICTURES[currentLightboxIndex + 1].src);
    } else if (currentLightboxIndex === GALLERY_PICTURES.length - 1) {
      setLightboxImg(GALLERY_PICTURES[0].src);
    }
  };

  useEffect(() => {
    if (!lightboxImg) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImg(null);
      if (e.key === "ArrowLeft") showPrevLightbox();
      if (e.key === "ArrowRight") showNextLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImg, currentLightboxIndex]);

  // Scrollspy observer & dynamic scroll tracking
  useEffect(() => {
    const sectionIds = ["home", "about", "rooms", "attractions", "gallery", "contact"];
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 40);

      // Track total document scroll percentage (0 - 100%)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (currentScrollY / docHeight) * 100)));
      }

      const scrollPosition = currentScrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setContactForm({
        name: "",
        phone: "",
        message: "",
      });
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans antialiased selection:bg-[#ffb400]/30 selection:text-black">
      {/* Dynamic Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#00a896] via-[#ffb400] to-[#ffb400] transition-all duration-75 ease-out shadow-xs"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* =========================================================================
          NAVBAR: FULL HERO HEADER -> COMPACT SLIM WHITE BAR ON SCROLL
          ========================================================================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-stone-200/90 shadow-xs"
            : mobileMenuOpen
            ? "bg-[#12231b] border-b border-white/10 shadow-lg"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent border-b border-transparent"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo with Emblem Image */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer text-left"
          >
            <img
              src="/galary/logo.webp"
              alt="Heavens Munnar Holiday Resort Logo"
              className={`w-auto object-contain drop-shadow-xs rounded-md transition-all duration-300 ${
                isScrolled ? "h-8 sm:h-9" : "h-11 sm:h-12"
              }`}
            />
            <div className="flex flex-col">
              <span
                className={`font-extrabold tracking-tight leading-none transition-colors duration-300 ${
                  isScrolled
                    ? "text-stone-900 text-base sm:text-lg"
                    : "text-white text-xl sm:text-2xl drop-shadow-xs"
                }`}
              >
                Heavens<span className="text-[#ffb400]">.</span>
              </span>
              <span
                className={`font-semibold tracking-wider uppercase mt-0.5 transition-colors duration-300 ${
                  isScrolled
                    ? "text-stone-500 text-[8px] sm:text-[9px]"
                    : "text-white/85 text-[10px] sm:text-xs"
                }`}
              >
                Munnar Holiday Resort
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 sm:gap-8">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "rooms", label: "Rooms & Stays" },
              { id: "attractions", label: "Attractions" },
              { id: "gallery", label: "Gallery" },
              { id: "contact", label: "Contact" },
            ].map((nav) => {
              const isActive = activeSection === nav.id;
              return (
                <button
                  key={nav.id}
                  onClick={() => scrollToSection(nav.id)}
                  className={`relative py-1 transition cursor-pointer text-xs sm:text-sm font-semibold tracking-wide ${
                    isScrolled
                      ? isActive
                        ? "text-[#00a896] font-bold after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-[#00a896]"
                        : "text-stone-600 hover:text-stone-950"
                      : isActive
                      ? "text-[#ffb400] font-bold after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-[#ffb400]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {nav.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/917902832575?text=Hi%20Heavens%20Munnar%20Holiday%20Resort,%20I%20want%20to%20enquire%20about%20Rooms%20and%20Sightseeing%20Packages!"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold text-xs uppercase tracking-wider rounded-lg shadow-xs transition-all duration-300 ${
                isScrolled
                  ? "px-4 py-1.5 bg-[#12231b] hover:bg-[#ffb400] text-white hover:text-black"
                  : "px-5 py-2.5 bg-[#ffb400] hover:bg-[#e6a200] text-black font-bold rounded-xs shadow-sm"
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`lg:hidden p-1.5 transition cursor-pointer ${
              isScrolled ? "text-stone-800 hover:text-black" : "text-white hover:text-[#ffb400]"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden px-6 py-4 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 border-t ${
              isScrolled
                ? "bg-white/98 text-stone-800 border-stone-200 shadow-xl"
                : "bg-[#12231b] text-white border-white/10 shadow-xl"
            }`}
          >
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "rooms", label: "Rooms & Stays" },
              { id: "attractions", label: "Attractions" },
              { id: "gallery", label: "Gallery" },
              { id: "contact", label: "Contact" },
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => scrollToSection(nav.id)}
                className={`py-2 text-left text-sm font-semibold tracking-wide transition ${
                  activeSection === nav.id
                    ? isScrolled
                      ? "text-[#00a896] font-bold"
                      : "text-[#ffb400] font-bold"
                    : isScrolled
                    ? "text-stone-700 hover:text-black"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {nav.label}
              </button>
            ))}
            <div
              className={`pt-3 border-t flex flex-col gap-2 ${
                isScrolled ? "border-stone-200" : "border-white/10"
              }`}
            >
              <a
                href="https://wa.me/917902832575?text=Hi%20Heavens%20Munnar%20Holiday%20Resort,%20I%20want%20to%20enquire%20about%20Rooms%20and%20Sightseeing%20Packages!"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 font-bold text-center text-xs uppercase tracking-wider rounded-lg transition ${
                  isScrolled
                    ? "bg-[#12231b] hover:bg-[#ffb400] text-white hover:text-black"
                    : "bg-[#ffb400] hover:bg-[#e6a200] text-black"
                }`}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          SECTION 1: HOME (Hero with Scalloped Wave Cutout matching Adventor theme)
          ========================================================================= */}
      <section
        id="home"
        className="relative w-full min-h-[640px] sm:min-h-[700px] lg:min-h-[780px] h-screen max-h-[960px] flex flex-col justify-between pt-20 overflow-hidden"
      >
        {/* Hero Background Image - Full View & Parallax Scroll Effect */}
        <div 
          className="absolute inset-0 z-0 will-change-transform"
          style={{
            transform: `translate3d(0, ${scrollY * 0.3}px, 0)`,
          }}
        >
          <img
            src="/galary/jeep.webp"
            alt="Heavens Munnar Holiday Resort"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/65" />
        </div>

        {/* Hero Content - Centered & Gently Floats on Scroll */}
        <div 
          className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center my-auto px-6 py-6 will-change-transform transition-opacity duration-75"
          style={{
            transform: `translate3d(0, ${scrollY * 0.12}px, 0)`,
            opacity: Math.max(0, 1 - scrollY / 650),
          }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4 drop-shadow-lg">
            Heavens Munnar Holiday Resort
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-xl mx-auto mb-6 font-light tracking-wide drop-shadow-md text-justify">
            Comfortable room stays and customized sightseeing packages across Munnar, cascading waterfalls, tea hills, and scenic mountain destinations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => scrollToSection("rooms")}
              className="inline-flex items-center justify-center bg-[#ffb400] hover:bg-[#e6a200] text-black font-bold text-xs sm:text-sm px-7 py-3 rounded-xs shadow-lg transition-all duration-200 uppercase tracking-wider cursor-pointer"
            >
              View Rooms & Stays
            </button>
            <button
              onClick={() => scrollToSection("attractions")}
              className="inline-flex items-center justify-center bg-white/15 hover:bg-white/25 text-white border border-white/40 font-semibold text-xs sm:text-sm px-6 py-3 rounded-xs transition duration-200 uppercase tracking-wider cursor-pointer backdrop-blur-sm"
            >
              Top Attractions
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center bg-black/40 hover:bg-black/60 text-white border border-white/20 font-semibold text-xs sm:text-sm px-6 py-3 rounded-xs transition duration-200 uppercase tracking-wider cursor-pointer backdrop-blur-sm"
            >
              Book Tours
            </button>
          </div>
        </div>

        {/* Bottom Scalloped Wave Cutout Transition */}
        <div className="relative z-20 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            className="w-full h-12 sm:h-16 lg:h-20 fill-white block"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path d="M0,32 C120,72 240,16 360,54 C480,92 600,28 720,68 C840,108 960,34 1080,72 C1200,110 1320,38 1440,78 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT (Making Adventure tours, activities affordable)
          ========================================================================= */}
      <section id="about" className="relative w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          {/* Top Two-Column Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-6">
              <span className="text-[#00a896] text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">
                Rooms & Sightseeing in Munnar
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] leading-tight mb-4 tracking-tight">
                Comfortable Stays &<br />Munnar Tour Packages.
              </h2>
              <div className="w-16 h-1 bg-[#ffb400] mb-6 rounded-full" />

              <p className="text-sm text-[#555555] leading-relaxed mb-4 text-justify">
                Conveniently located near Jacobite Church in Valara along Highway 85 on the scenic corridor to Munnar, <strong>Heavens Munnar Holiday Resort</strong> is a trusted rooms provider and sightseeing package planner for travellers, families, and couples visiting the Western Ghats.
              </p>
              <p className="text-sm text-[#555555] leading-relaxed mb-6 text-justify">
                We combine clean, relaxing room accommodations with curated sightseeing packages covering Munnar tea valleys, misty viewpoints, majestic waterfalls (Valara & Cheeyappara), pine reserves, and safari trails. Everything is planned smoothly so you can enjoy your holiday with complete peace of mind.
              </p>

              {/* Stat badges */}
              <div className="grid grid-cols-3 gap-4 w-full pt-4 border-t border-stone-200">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#12231b]">Rooms</span>
                  <span className="text-xs text-[#717171] block font-medium">Clean & Comfortable</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#12231b]">Munnar</span>
                  <span className="text-xs text-[#717171] block font-medium">Sightseeing Tours</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#12231b]">100%</span>
                  <span className="text-xs text-[#717171] block font-medium">Custom Packages</span>
                </div>
              </div>
            </div>

            {/* Right Card with Mountain Elevation Marker */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/galary/gal4.webp"
                  alt="Traveller overlooking scenic Munnar mountains"
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6 sm:p-8">
                  <div className="text-white">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffb400] block mb-1">
                      Munnar • Valara • Adimali
                    </span>
                    <p className="text-lg sm:text-xl font-bold">
                      Your perfect base for relaxing stays and unforgettable Munnar sightseeing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Feature Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            <div className="p-6 rounded-xl bg-[#fbfbf9] border border-stone-200/80 hover:border-[#12231b] transition">
              <div className="w-10 h-10 rounded-lg bg-[#12231b] text-[#ffb400] flex items-center justify-center mb-4">
                <Bed className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#111111] mb-2">Clean & Cozy Rooms</h4>
              <p className="text-xs text-[#666666] leading-relaxed text-justify">
                Well-appointed, peaceful room accommodations equipped with cozy bedding, clean amenities, and scenic greenery.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#fbfbf9] border border-stone-200/80 hover:border-[#12231b] transition">
              <div className="w-10 h-10 rounded-lg bg-[#12231b] text-[#ffb400] flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#111111] mb-2">Munnar Sightseeing Packages</h4>
              <p className="text-xs text-[#666666] leading-relaxed text-justify">
                Full-day and multi-day sightseeing tours visiting rolling tea gardens, viewpoints, mountain dams, and cool valleys.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#fbfbf9] border border-stone-200/80 hover:border-[#12231b] transition">
              <div className="w-10 h-10 rounded-lg bg-[#12231b] text-[#ffb400] flex items-center justify-center mb-4">
                <Waves className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#111111] mb-2">Waterfalls & Nature Trails</h4>
              <p className="text-xs text-[#666666] leading-relaxed text-justify">
                Close proximity to Valara & Cheeyappara waterfalls, Thalamaan cascades, and Mudippara pine forest walks.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#fbfbf9] border border-stone-200/80 hover:border-[#12231b] transition">
              <div className="w-10 h-10 rounded-lg bg-[#12231b] text-[#ffb400] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#111111] mb-2">Custom Holiday Support</h4>
              <p className="text-xs text-[#666666] leading-relaxed text-justify">
                Experienced local route planners and driver-guides catering to families, couples, and holiday groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ROOMS & ACCOMMODATIONS SHOWCASE
          ========================================================================= */}
      <RoomsSection
        onSelectRoomForInquiry={(roomTitle) => {
          setContactForm((prev) => ({
            ...prev,
            message: `Hi, I am interested in reserving the ${roomTitle}. Please let me know the availability, check-in procedure, and special packages for my dates.`,
          }));
          scrollToSection("contact");
        }}
      />

      {/* =========================================================================
          SECTION 4: ATTRACTIONS (Key Attractions & Field Guide)
          ========================================================================= */}
      <section id="attractions" className="relative w-full py-16 sm:py-24 bg-white border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-2 text-[#00a896] text-xs sm:text-sm font-bold uppercase tracking-wider mb-1">
                <Compass className="w-4 h-4 text-[#00a896]" />
                <span>Field Guide · Top 10 Attractions</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
                Top Munnar & Adimali Attractions
              </h2>
              <p className="text-xs sm:text-sm text-[#717171] mt-2 max-w-xl text-justify">
                The top 10 viewpoints, cascading waterfalls, wild elephant streams, pine forests, and thrilling forest safaris around our Valara basecamp.
              </p>
            </div>

            <button
              onClick={() => setTrailMapOpen(true)}
              className="self-start sm:self-auto px-5 py-2.5 bg-stone-100 hover:bg-[#ffb400] text-stone-800 hover:text-black border border-stone-300 font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Map className="w-4 h-4 text-[#00a896]" />
              <span>View Official Trail Map</span>
            </button>
          </div>

          {/* Attractions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
            {IDUKKI_ATTRACTIONS.map((att) => (
              <div
                key={att.number}
                className="group relative bg-[#fbfbf9] rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                  <img
                    src={att.image}
                    alt={att.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-black/75 text-[#ffb400] text-xs font-black px-2.5 py-1 rounded-xs backdrop-blur-xs">
                    {att.number}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#00a896] block mb-1">
                    {att.category}
                  </span>
                  <h4 className="font-bold text-base text-[#111111] mb-2 group-hover:text-[#00a896] transition">
                    {att.title}
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed mb-3 flex-1 text-justify">
                    {att.desc}
                  </p>

                  {/* Highlight Pills */}
                  {att.highlights && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {att.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-medium text-stone-600 bg-stone-200/60 px-2 py-0.5 rounded-md"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="pt-3 border-t border-stone-200/60 flex items-center justify-end text-[11px] font-semibold text-stone-500">
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="text-[#12231b] hover:text-[#00a896] transition font-bold"
                    >
                      Plan Trip →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Munnar Sightseeing Corridor Banner */}
          <div className="rounded-3xl bg-[#12231b] text-white p-8 sm:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ffb400] block mb-2">
                Rooms & Sightseeing Packages
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                Munnar & Nearby Scenic Tour Packages
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light text-justify">
                Stay comfortably at Heavens Munnar Holiday Resort near Valara and explore Munnar's best tea plantations, viewpoints, and waterfalls with customized sightseeing packages.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 z-10">
              <a
                href="https://maps.app.goo.gl/fevh6C9LK8ZTJeeF7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#ffb400] hover:bg-[#e6a200] text-black font-bold text-xs uppercase tracking-wider rounded-xs transition shadow-md flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps
              </a>
              <a
                href="https://wa.me/917902832575?text=Hi%20Heavens%20Munnar%20Holiday%20Resort,%20please%20send%20details%20for%20rooms%20and%20sightseeing%20packages!"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xs transition border border-white/20"
              >
                Request Tour Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: GALLERY (Real Photos with Filter Pills & Lightbox)
          ========================================================================= */}
      <section id="gallery" className="relative w-full py-16 sm:py-24 bg-[#fbfbf9] border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#00a896] text-xs sm:text-sm font-bold tracking-wider uppercase block mb-1">
              Visual Journey
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
              Photo Gallery
            </h2>
            <p className="text-xs sm:text-sm text-[#717171] mt-2 text-justify">
              Glimpses of comfortable rooms, scenic Munnar valleys, cascading waterfalls, and memorable holiday experiences.
            </p>
          </div>

          {/* Photo Masonry Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">
            {GALLERY_PICTURES.map((pic, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxImg(pic.src)}
                className="group relative h-48 sm:h-64 rounded-2xl overflow-hidden bg-stone-200 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={pic.src}
                  alt={pic.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#ffb400]">
                    {pic.tag}
                  </span>
                  <p className="text-xs sm:text-sm font-bold">{pic.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-xs text-stone-500">
              Click any photo to view in high definition.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CONTACT & FAQ (Expedition Desk & Direct Booking)
          ========================================================================= */}
      <section id="contact" className="relative w-full py-16 sm:py-24 bg-white border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#00a896] text-xs sm:text-sm font-bold tracking-wider uppercase block mb-1">
              Reception & Tour Desk
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
              Contact Heavens Munnar Holiday Resort
            </h2>
            <p className="text-xs sm:text-sm text-[#717171] mt-2 text-justify">
              Book your comfortable room stay and curated sightseeing packages in Munnar and nearby locations directly with our team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-[#fbfbf9] rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-xs">
              <h3 className="text-xl font-bold text-[#111111] mb-6">Send a Room & Tour Inquiry</h3>

              {contactSuccess ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center text-emerald-800 flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold">Inquiry Sent Successfully!</h4>
                  <p className="text-xs text-emerald-700 max-w-sm">
                    Thank you. Our team will message or call you via WhatsApp shortly to confirm your room stay and sightseeing package details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="e.g. Adarsh Nair"
                        className="w-full px-4 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black outline-none bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">WhatsApp / Phone</label>
                      <input
                        type="tel"
                        required
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        className="w-full px-4 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black outline-none bg-white"
                      />
                    </div>
                  </div>


                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Special Notes / Group Size</label>
                    <textarea
                      rows={4}
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Mention expected check-in dates, number of guests, room preference, or sightseeing destinations..."
                      className="w-full px-4 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black outline-none bg-white"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 bg-[#12231b] hover:bg-[#ffb400] text-white hover:text-black font-semibold text-xs tracking-wider uppercase rounded-xl transition cursor-pointer"
                    >
                      Submit Room & Tour Inquiry
                    </button>
                    <a
                      href="https://wa.me/917902832575?text=Hi%20Heavens%20Munnar%20Holiday%20Resort,%20I%20want%20to%20book%20rooms%20and%20sightseeing%20packages!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm:w-auto px-6 py-3.5 bg-[#00a896] hover:bg-[#008f80] text-white font-semibold text-xs tracking-wider uppercase rounded-xl transition flex items-center justify-center gap-2"
                    >
                      <span>💬 WhatsApp Desk</span>
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Basecamp Hotline Information */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-[#12231b] rounded-3xl p-6 sm:p-8 text-white flex flex-col gap-6 shadow-xl border border-white/10">
                <h3 className="text-xl font-bold tracking-wide text-white">Heavens Reception & Desk</h3>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 text-[#ffb400] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest block">Property Location</span>
                    <p className="text-sm font-semibold text-white mt-0.5">HEAVENS MUNNAR HOLIDAY RESORT</p>
                    <p className="text-xs text-stone-200 mt-0.5 leading-relaxed font-light">
                      Near Jacobite Church, Valara, Adimali,<br />
                      Idukki District, Kerala - 685561
                    </p>
                    <a
                      href="https://maps.app.goo.gl/fevh6C9LK8ZTJeeF7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ffb400] text-black font-bold text-xs uppercase tracking-wider rounded-xs hover:bg-[#e6a200] transition"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      Open in Google Maps
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 text-[#ffb400] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest block">24/7 Room & Tour Hotline</span>
                    <div className="text-sm font-semibold text-white mt-1 flex flex-col gap-1">
                      <a href="tel:7902832575" className="hover:text-[#ffb400] transition">📞 +91 7902832575</a>
                      <a href="tel:8606392143" className="hover:text-[#ffb400] transition">📞 +91 8606392143</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 text-[#ffb400] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest block">Instant Chat Booking</span>
                    <a
                      href="https://wa.me/917902832575?text=Hi%20Heavens%20Munnar%20Holiday%20Resort,%20I%20would%20like%20to%20inquire%20about%20rooms%20and%20packages"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#ffb400] hover:underline block mt-0.5"
                    >
                      Chat with Tour Coordinator →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 text-[#ffb400] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest block">Desk Operations</span>
                    <p className="text-sm text-stone-200 mt-0.5 font-light">
                      Room Reception: 24/7 Open<br />
                      Sightseeing & Tour Desk: 7:00 AM to 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Location Showcase (Compact Size) */}
          <div className="max-w-3xl mx-auto mb-14 bg-[#fbfbf9] rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
            <div className="px-5 py-4 border-b border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#00a896] animate-pulse" />
                  <span className="text-[#00a896] text-[11px] font-bold uppercase tracking-wider">
                    Property Location
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#111111] tracking-tight">
                  HEAVENS MUNNAR HOLIDAY RESORT
                </h3>
                <p className="text-xs text-stone-500">
                  Near Jacobite Church, Valara, Adimali, Kerala - 685561
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="https://maps.app.goo.gl/fevh6C9LK8ZTJeeF7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-[#12231b] hover:bg-[#ffb400] text-white hover:text-black font-semibold text-xs tracking-wider uppercase rounded-lg transition flex items-center gap-1.5 shadow-xs"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#ffb400]" />
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://wa.me/917902832575?text=Hi%20Heavens,%20please%20share%20directions%20to%20Heavens%20Munnar%20Holiday%20Resort%20in%20Valara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-[#00a896] hover:bg-[#008f80] text-white font-semibold text-xs tracking-wider uppercase rounded-lg transition flex items-center gap-1.5"
                >
                  <span>💬 WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Compact Google Map Embed */}
            <div className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] bg-stone-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.1883395914755!2d76.84565457585098!3d10.038922490069032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0795756ad24a0d%3A0x94606f22b147222!2sHEAVENS%20MUNNAR%20HOLIDAY%20RESORT!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HEAVENS Munnar Holiday Resort Google Map"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto pt-6">
            <h3 className="text-2xl font-bold text-[#111111] mb-6 text-center">
              Frequently Asked Questions
            </h3>
            <div className="flex flex-col gap-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-stone-200 rounded-2xl p-5 bg-[#fbfbf9] cursor-pointer transition hover:border-[#12231b]"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                  >
                    <div className="flex items-center justify-between font-bold text-[#111111] text-sm sm:text-base">
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#ffb400]" : ""
                        }`}
                      />
                    </div>
                    {isOpen && (
                      <p className="mt-3 text-xs sm:text-sm text-stone-600 font-light leading-relaxed border-t border-stone-200/60 pt-3 text-justify">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GLOBAL FOOTER (Compact, Small Footer)
          ========================================================================= */}
      <footer className="w-full bg-[#12231b] text-white py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/galary/logo.webp"
              alt="Heavens Munnar Logo"
              className="h-10 w-auto object-contain rounded-md bg-white/5 p-1 border border-white/10"
            />
            <div>
              <span className="text-lg font-extrabold tracking-tight text-white block leading-none">
                Heavens<span className="text-[#ffb400]">.</span>
              </span>
              <span className="text-[10px] font-semibold text-[#00a896] uppercase tracking-wider block mt-0.5">
                Munnar Holiday Resort • Valara, Adimali
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs text-white/70">
            <button onClick={() => scrollToSection("home")} className="hover:text-white transition cursor-pointer">Home</button>
            <button onClick={() => scrollToSection("about")} className="hover:text-white transition cursor-pointer">About</button>
            <button onClick={() => scrollToSection("rooms")} className="hover:text-white transition cursor-pointer">Rooms</button>
            <button onClick={() => scrollToSection("attractions")} className="hover:text-white transition cursor-pointer">Attractions</button>
            <button onClick={() => scrollToSection("gallery")} className="hover:text-white transition cursor-pointer">Gallery</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-white transition cursor-pointer">Contact</button>
          </nav>

          {/* Contact & Location Link */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:7902832575"
              className="text-white/80 hover:text-[#ffb400] transition"
            >
              📞 +91 7902832575
            </a>
            <a
              href="https://wa.me/917902832575?text=Hi%20Heavens%20Munnar%20Holiday%20Resort"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffb400] font-semibold hover:underline"
            >
              💬 WhatsApp
            </a>
            <a
              href="https://maps.app.goo.gl/fevh6C9LK8ZTJeeF7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#ffb400] transition flex items-center gap-1"
            >
              <MapPin className="w-3 h-3 text-[#ffb400]" />
              <span>Maps</span>
            </a>
          </div>
        </div>

        {/* Copyright strip */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 gap-2 text-center">
          <p>© {new Date().getFullYear()} Heavens Munnar Holiday Resort. All rights reserved.</p>
          <p>Valara, Highway 85, Adimali, Kerala - 685561</p>
        </div>
      </footer>

      {/* =========================================================================
          LIGHTBOX MODAL FOR GALLERY
          ========================================================================= */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in"
          onClick={() => setLightboxImg(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous image button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrevLightbox();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition cursor-pointer z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next image button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNextLightbox();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition cursor-pointer z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            className="relative flex flex-col items-center max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImg}
              alt={currentLightboxIndex !== -1 ? GALLERY_PICTURES[currentLightboxIndex].title : "Enlarged photo"}
              className="max-h-[78vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            />
            {currentLightboxIndex !== -1 && (
              <div className="mt-3 text-center text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ffb400] block">
                  {GALLERY_PICTURES[currentLightboxIndex].tag}
                </span>
                <p className="text-sm sm:text-base font-semibold mt-0.5">
                  {GALLERY_PICTURES[currentLightboxIndex].title}
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  {currentLightboxIndex + 1} of {GALLERY_PICTURES.length}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          OFFICIAL ATTRACTIONS TRAIL MAP MODAL
          ========================================================================= */}
      {trailMapOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
          onClick={() => setTrailMapOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-2xl overflow-hidden animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Map className="w-5 h-5 text-[#00a896]" />
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  Adimali & Highway 85 Scenic Attractions Trail Map
                </h3>
              </div>
              <button
                onClick={() => setTrailMapOpen(false)}
                className="p-2 rounded-full hover:bg-stone-100 text-stone-600 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-auto rounded-2xl bg-stone-100 flex items-center justify-center">
              <img
                src="/adimali-attractions-map.jpg"
                alt="Adimali Attractions Trail Map"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
            <div className="mt-3 text-center text-xs text-stone-500 font-medium">
              Official Highway 85 Guide to the scenic attractions in Adimali & Valara, Idukki.
            </div>
          </div>
        </div>
      )}

      {/* Floating Scroll-to-Top Button */}
      <button
        onClick={() => scrollToSection("home")}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#12231b]/90 hover:bg-[#ffb400] text-white hover:text-black shadow-2xl border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur-md cursor-pointer ${
          scrollY > 400
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <ChevronUp className="w-5 h-5 stroke-[2.5]" />
      </button>
    </div>
  );
}
