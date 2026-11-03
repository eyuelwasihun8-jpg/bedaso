import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Ship,
  Coffee,
  Truck,
  PackageOpen,
  ArrowRight,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { images } from "../images";
import SectionHeader from "../components/SectionHeader";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const heroSlides = [
  {
    image: images.heroSlides[0],
    title: "From Ethiopia to the World",
    subtitle: "Premium Arabica coffee, agricultural exports, and global trade solutions",
  },
  {
    image: images.heroSlides[1],
    title: "Reliable Import & Export",
    subtitle: "Construction materials, vehicles, and industrial supplies delivered",
  },
  {
    image: images.heroSlides[2],
    title: "Building the Future",
    subtitle: "Modern real estate development and transport & logistics services",
  },
];

const divisions = [
  { icon: Building2, title: "Real Estate Division", desc: "Sunrise Real Estate in Melka Jebdu, Dire Dawa — luxury villas and commercial properties.", path: "/real-estate", color: "from-blue-500 to-blue-600" },
  { icon: Ship, title: "Import Division", desc: "Construction materials, machinery, vehicles, spare parts, and industrial raw materials.", path: "/import", color: "from-indigo-500 to-indigo-600" },
  { icon: PackageOpen, title: "Export Division", desc: "Premium Ethiopian Arabica coffee, pulses, oilseeds, and more.", path: "/export", color: "from-amber-500 to-amber-600" },
  { icon: Truck, title: "Transport & Logistics", desc: "Fast, reliable heavy cargo transport along the Ethio-Djibouti corridor.", path: "/transport", color: "from-teal-500 to-teal-600" },
  { icon: Coffee, title: "Iconbuna Coffee", desc: "Ethiopia's finest Arabica coffee from Harar, Yirgacheffe, Sidamo, and more.", path: "/coffee", color: "from-primary to-primary-dark" },
];

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animDir, setAnimDir] = useState<"in" | "out">("in");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimDir((prev) => (prev === "in" ? "out" : "in"));
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <article>
      {/* ===== HERO SLIDER ===== */}
      <section className="relative h-screen overflow-hidden" aria-label="Hero slideshow">
        {heroSlides.map((slide, idx) => (
          <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
            <div className={`absolute inset-0 bg-cover bg-center ${idx === currentSlide ? animDir === "in" ? "animate-zoom-in" : "animate-zoom-out" : ""}`} style={{ backgroundImage: `url(${slide.image})` }} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 z-20" />
        <div className="relative z-30 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 key={currentSlide} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-4 animate-fade-in-up">
                {heroSlides[currentSlide].title}
              </h1>
              <p key={`sub-${currentSlide}`} className="text-lg sm:text-xl text-white/80 mb-3 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                {heroSlides[currentSlide].subtitle}
              </p>
              <p className="text-accent-light text-sm sm:text-base italic font-serif mb-8 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
                "Connecting Markets. Building Legacies."
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <Link to="/coffee" className="px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold transition-all hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 text-sm sm:text-base">
                  Explore Coffee Export <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full font-semibold transition-all border border-white/20 flex items-center gap-2 text-sm sm:text-base">
                  Contact Us
                </Link>
              </div>
            </div>
            {/* Slide indicators */}
            <div className="flex gap-2 mt-12">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentSlide
                      ? "w-10 bg-accent"
                      : "w-4 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT TEASER ===== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedCard>
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Welcome to BAIM Family Group
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Ethiopia's Premier Trading Partner
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Bedhaso Abdella Import & Export General Trading is a diversified enterprise connecting Ethiopia's rich agricultural heritage and infrastructure needs with global markets. Operating across five major divisions with offices in Addis Ababa and Dire Dawa.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-semibold transition-all hover:shadow-lg">
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </AnimatedCard>
        </div>
      </section>

      {/* ===== OUR DIVISIONS ===== */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Divisions"
            title="Comprehensive Trading Solutions"
            subtitle="Five specialized divisions working together to serve your import, export, real estate, and logistics needs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((div, idx) => (
              <AnimatedCard key={div.title} delay={idx * 100}>
                <Link to={div.path} className="group block bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${div.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <div.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{div.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{div.desc}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Learn More <ChevronRight size={16} />
                  </span>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COFFEE HIGHLIGHT ===== */}
      <section className="py-16 sm:py-20 bg-coffee text-white relative overflow-hidden" aria-label="Iconbuna Coffee highlight">
        <div className="absolute inset-0 opacity-10">
          <img src={images.coffeeBeans} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <AnimatedCard>
              <div>
                <span className="inline-block bg-accent/20 text-accent-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                  ☕ Iconbuna Coffee Export
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ethiopia's Finest Arabica Coffee for the World</h2>
                <p className="text-white/80 leading-relaxed mb-6">From the birthplace of coffee, we export premium single-origin Arabica beans from Ethiopia's most celebrated growing regions.</p>
                <Link to="/coffee" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent-light text-coffee rounded-full font-semibold transition-all hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base">
                  Discover Iconbuna Coffee <ArrowRight size={18} />
                </Link>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={200}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <img src={images.coffeeCherry} alt="Coffee cherries" className="rounded-2xl shadow-xl h-40 sm:h-48 w-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                <img src={images.coffeeRoasted} alt="Roasted coffee" className="rounded-2xl shadow-xl h-40 sm:h-48 w-full object-cover mt-6 sm:mt-8 hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* ===== OFFICES ===== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our Offices" title="Reach Us Across Ethiopia" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { city: "Dire Dawa", area: "Kezira", desc: "Headquarters & Real Estate." },
              { city: "Addis Ababa", area: "Bole", desc: "Trade coordination & coffee export." },
              { city: "Sheger City", area: "Furi", desc: "Vehicle showroom & spare parts." },
            ].map((office, idx) => (
              <AnimatedCard key={office.city} delay={idx * 150}>
                <div className="bg-gray-50 rounded-2xl p-6 hover:bg-primary/5 transition-all text-center h-full">
                  <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{office.city}</h3>
                  <p className="text-accent font-medium text-sm mb-3">{office.area}</p>
                  <p className="text-gray-600 text-sm">{office.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}