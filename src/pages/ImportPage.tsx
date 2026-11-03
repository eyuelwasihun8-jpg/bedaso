import { Link } from "react-router-dom";
import { images } from "../images";
import PageHero from "../components/PageHero";
import ProductCard from "../components/ProductCard";
import SectionHeader from "../components/SectionHeader";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function AnimatedDiv({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

const constructionProducts = [
  {
    image: images.corrugatedSheets,
    title: "Corrugated Iron Sheets",
    category: "Construction",
    description: "High-quality corrugated iron roofing sheets imported for residential, commercial, and industrial construction projects across Ethiopia.",
    details: "Our corrugated iron sheets are sourced from top international manufacturers, ensuring durability, weather resistance, and long-lasting performance. Available in various gauges and sizes to meet any construction requirement. Widely used in our Sunrise Real Estate projects in Dire Dawa.",
  },
  {
    image: images.rebar,
    title: "Reinforcement Bars (Rebars)",
    category: "Construction",
    description: "Premium-grade steel reinforcement bars essential for structural concrete work in construction projects of all scales.",
    details: "We import deformed steel bars conforming to international standards. Our rebars provide the tensile strength needed for foundations, columns, beams, slabs and all structural concrete elements.",
  },
  {
    image: images.constructionWorkers,
    title: "Construction Materials",
    category: "Construction",
    description: "A comprehensive range of construction materials including steel, iron, and building supplies for residential and commercial projects.",
    details: "Beyond roofing sheets and rebars, we supply a full range of construction metals and materials. We work closely with contractors and developers to provide timely delivery of quality materials.",
  },
  {
    image: images.excavator,
    title: "Excavators & Loaders",
    category: "Machinery",
    description: "Heavy-duty construction machinery including excavators, loaders, and dump trucks from leading international brands.",
    details: "We import heavy construction machinery — excavators, wheel loaders, and dump trucks — designed for earthmoving, site preparation, mining, and large-scale infrastructure projects. All machines come with warranty and after-sales support.",
  },
];

const vehicleProducts = [
  {
    image: images.carShowroom,
    title: "Passenger Cars",
    category: "Vehicles",
    description: "Quality imported passenger vehicles available at our showroom in Furi, Sheger City (Addis Ababa). Wide selection of brands and models.",
    details: "Visit our vehicle showroom in Furi, Sheger City to explore our range of passenger cars. We import popular brands and models suitable for Ethiopian roads and conditions, offering competitive pricing and reliable service.",
    origin: "Showroom: Furi, Sheger City (Addis Ababa)",
  },
  {
    image: images.spareParts,
    title: "Vehicle Spare Parts",
    category: "Spare Parts",
    description: "Genuine spare parts for Sinotruk HOWO, trailers, heavy-duty trucks, and all types of passenger vehicles.",
    details: "We supply genuine and high-quality spare parts for heavy-duty vehicles including Sinotruk HOWO trucks, trailers, and all passenger car brands. Our parts are sourced directly from manufacturers to ensure authenticity and reliability.",
  },
  {
    image: images.loader,
    title: "Construction Machinery",
    category: "Machinery",
    description: "Backhoe loaders, wheel loaders, and other essential construction equipment for projects of all sizes.",
    details: "Our range of imported construction machinery includes backhoe loaders, wheel loaders, and specialized equipment for construction, mining, and infrastructure development. All units come with technical support.",
  },
];

const foodProducts = [
  {
    image: images.foodstuffs,
    title: "Sugar & Rice",
    category: "Foodstuffs",
    description: "Bulk wholesale import of essential food commodities including refined sugar, premium rice varieties, and other staple foods.",
    details: "We import sugar and rice in bulk quantities for wholesale distribution. Our products meet Ethiopian food safety standards and are sourced from reputable international suppliers to ensure quality and consistency.",
  },
  {
    image: images.grains,
    title: "Edible Oils",
    category: "Foodstuffs",
    description: "High-quality palm oil, sunflower oil, and other edible cooking oils imported for the Ethiopian market.",
    details: "We supply palm oil, sunflower oil, and other cooking oils in bulk. Our oils are refined and meet international food-grade standards, serving wholesale distributors, restaurants, and food processing companies.",
  },
  {
    image: images.containerShip,
    title: "Industrial Raw Materials",
    category: "Industrial",
    description: "Polypropylene Homopolymer (PP Resins) and other industrial raw materials for Ethiopian manufacturers.",
    details: "We import Polypropylene Homopolymer (PP Resins) and other essential industrial raw materials used in packaging, textiles, automotive parts, and various manufacturing processes in Ethiopia.",
  },
];

export default function ImportPage() {
  return (
    <article>
      <PageHero
        image={images.importHero}
        title="Import Division"
        subtitle="Construction materials, vehicles, machinery, foodstuffs, and industrial raw materials"
        breadcrumb="Our Divisions"
      />

      {/* Construction Materials */}
      <section className="py-16 sm:py-20 bg-white" aria-label="Construction materials and machinery imports">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Construction"
            title="Construction Materials & Machinery"
            subtitle="Premium imported construction materials, rebars, corrugated iron sheets, and heavy-duty machinery for Ethiopian projects."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {constructionProducts.map((p, idx) => (
              <AnimatedDiv key={p.title} delay={idx * 100}>
                <ProductCard {...p} />
              </AnimatedDiv>
            ))}
          </div>
          <AnimatedDiv delay={500}>
            <p className="text-center text-gray-500 text-sm mt-8">
              These materials are also used in our{" "}
              <Link to="/real-estate" className="text-primary hover:underline font-medium">
                Sunrise Real Estate
              </Link>{" "}
              development projects in Dire Dawa.
            </p>
          </AnimatedDiv>
        </div>
      </section>

      {/* Vehicles & Spare Parts */}
      <section className="py-16 sm:py-20 bg-gray-50" aria-label="Vehicle and spare parts imports">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Vehicles"
            title="Cars, Trucks & Spare Parts"
            subtitle="Quality imported vehicles at our Furi showroom, plus genuine spare parts for Sinotruk HOWO and all vehicle types."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicleProducts.map((p, idx) => (
              <AnimatedDiv key={p.title} delay={idx * 100}>
                <ProductCard {...p} />
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Foodstuffs & Raw Materials */}
      <section className="py-16 sm:py-20 bg-white" aria-label="Foodstuffs and industrial raw materials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Foodstuffs & Industrial"
            title="Food Commodities & Raw Materials"
            subtitle="Bulk import of sugar, rice, edible oils (palm oil, sunflower oil), and industrial raw materials like PP Resins."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodProducts.map((p, idx) => (
              <AnimatedDiv key={p.title} delay={idx * 100}>
                <ProductCard {...p} />
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Need Construction Materials or Vehicles?
          </h2>
          <p className="text-white/80 mb-8 text-base sm:text-lg">
            <Link to="/contact" className="underline hover:text-white transition-colors">
              Contact us
            </Link>{" "}
            for wholesale pricing on construction materials, vehicles,
            spare parts, and industrial supplies. Visit our showroom in Furi, Addis Ababa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-700 hover:bg-gray-100 rounded-full font-semibold transition-all hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
            >
              Request a Quote
            </Link>
            <Link
              to="/transport"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 hover:border-white text-white rounded-full font-semibold transition-all hover:-translate-y-1 text-sm sm:text-base"
            >
              Delivery & Logistics →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
