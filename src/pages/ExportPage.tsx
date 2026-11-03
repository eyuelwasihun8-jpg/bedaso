import { Link } from "react-router-dom";
import { images } from "../images";
import PageHero from "../components/PageHero";
import ProductCard from "../components/ProductCard";
import SectionHeader from "../components/SectionHeader";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

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

const coffeeProducts = [
  {
    image: images.coffeeBeans,
    title: "Ethiopian Arabica Coffee",
    category: "Coffee",
    description: "Premium Ethiopian Arabica coffee beans sourced from highland regions renowned for their distinctive flavour profiles.",
    details: "Ethiopia is the birthplace of coffee. We export some of the world's most sought-after single-origin Arabica beans. Our coffee is hand-picked from smallholder farms across Yirgacheffe, Sidamo, Guji, Harar, and Limu — at altitudes ranging from 1,500 to 2,200 metres. Every lot undergoes rigorous cupping and quality control before export.",
    origin: "Ethiopian Highlands • 1,500 – 2,200 m altitude",
  },
  {
    image: images.coffeeRoasted,
    title: "Washed Coffee (Grade 1-5)",
    category: "Coffee",
    description: "Water-processed and meticulously prepared washed coffee with clean, bright acidity and complex flavour notes.",
    details: "Our washed (wet-processed) coffees undergo careful depulping, fermentation, and thorough washing to produce beans with exceptionally clean cup profiles. Available in Grade 1 through Grade 5, each grade meeting strict Ethiopian export standards.",
    origin: "Yirgacheffe, Sidamo, Guji, Jimma",
  },
  {
    image: images.coffeeDark,
    title: "Unwashed / Natural Coffee",
    category: "Coffee",
    description: "Sun-dried natural coffee with full body, fruit-forward notes, and the rich traditional Ethiopian coffee character.",
    details: "Our unwashed (natural / sun-dried) coffees are dried with the cherry fruit still attached, resulting in coffees with heavier body, intense fruity sweetness, and complex berry-wine notes. A favourite among specialty coffee roasters worldwide.",
    origin: "Harar, Jimma, Arsi, Lekempti",
  },
];

const pulseProducts = [
  {
    image: images.redKidneyBeans,
    title: "Red Kidney Beans",
    category: "Pulses",
    description: "Premium quality Ethiopian red kidney beans, carefully selected and cleaned to meet international export standards.",
    details: "Our red kidney beans are sourced from Ethiopian farms, hand-sorted for uniform size and colour, and cleaned to remove all impurities. They are rich in protein and fibre, meeting strict quality requirements for global markets including the Middle East, Europe, and Asia.",
  },
  {
    image: images.whiteKidneyBeans,
    title: "White Kidney Beans",
    category: "Pulses",
    description: "High-quality white kidney beans exported in bulk, prized for their creamy texture and nutritional value.",
    details: "Ethiopian white kidney beans are known for their excellent cooking quality, creamy texture, and mild flavour. We export them in various grades and packaging options, meeting the requirements of food processors and wholesalers worldwide.",
  },
  {
    image: images.sesameSeeds,
    title: "Sesame Seeds",
    category: "Oilseeds",
    description: "Pure, clean sesame seeds meeting global export standards — prized for their rich oil content and nutty flavour.",
    details: "Ethiopia produces some of the world's finest sesame seeds, known for their high oil content (50-55%) and distinctive nutty aroma. Our sesame is carefully cleaned, graded, and packed for export to international markets for oil extraction, confectionery, and food use.",
  },
  {
    image: images.soybeans,
    title: "Soybeans",
    category: "Oilseeds",
    description: "Quality Ethiopian soybeans for international markets, suitable for oil extraction, animal feed, and food processing.",
    details: "We export Ethiopian soybeans that meet international standards for protein and oil content. Our soybeans are sourced from prime agricultural regions, cleaned and graded for export to oil processors, feed manufacturers, and food companies worldwide.",
  },
  {
    image: images.pulsesBowls,
    title: "Other Pulses & Grains",
    category: "Agricultural",
    description: "A wide variety of Ethiopian pulses and grains including lentils, chickpeas, and other legumes prepared for export.",
    details: "Beyond our main export items, we offer a diverse range of Ethiopian agricultural products including various types of lentils, chickpeas, and other grains. All products are processed, cleaned, and packed to meet international quality and phytosanitary standards.",
  },
];

export default function ExportPage() {
  return (
    <article>
      <PageHero
        image={images.exportHero}
        title="Export Division"
        subtitle="Premium Ethiopian coffee, pulses, and oilseeds for the global market"
        breadcrumb="Our Divisions"
      />

      {/* Coffee Section */}
      <section className="py-16 sm:py-20 bg-white" aria-label="Ethiopian Arabica coffee exports">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="☕ Iconbuna Coffee"
            title="Ethiopian Arabica Coffee"
            subtitle="From the birthplace of coffee — premium single-origin Arabica beans, washed and unwashed, Grade 1 to Grade 5."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coffeeProducts.map((p, idx) => (
              <AnimatedDiv key={p.title} delay={idx * 100}>
                <ProductCard {...p} />
              </AnimatedDiv>
            ))}
          </div>

          <AnimatedDiv delay={400}>
            <div className="mt-10 text-center">
              <Link
                to="/coffee"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold transition-all hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
              >
                View Full Coffee Catalog
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedDiv>
        </div>
      </section>

      {/* Pulses & Oilseeds */}
      <section className="py-16 sm:py-20 bg-gray-50" aria-label="Pulses and oilseeds exports">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Pulses & Oilseeds"
            title="Agricultural Exports"
            subtitle="Red & white kidney beans, sesame seeds, soybeans, and other quality Ethiopian agricultural products."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pulseProducts.map((p, idx) => (
              <AnimatedDiv key={p.title} delay={idx * 100}>
                <ProductCard {...p} />
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Looking for Quality Ethiopian Exports?
          </h2>
          <p className="text-white/80 mb-8 text-base sm:text-lg">
            <Link to="/contact" className="underline hover:text-white transition-colors">
              Contact us
            </Link>{" "}
            for export pricing, sample requests, and shipping details
            for coffee, pulses, oilseeds, and agricultural products. We handle{" "}
            <Link to="/transport" className="underline hover:text-white transition-colors">
              logistics & shipping
            </Link>{" "}
            too.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-amber-700 hover:bg-gray-100 rounded-full font-semibold transition-all hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
            >
              Request Export Pricing
            </Link>
            <Link
              to="/coffee"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 hover:border-white text-white rounded-full font-semibold transition-all hover:-translate-y-1 text-sm sm:text-base"
            >
              Coffee Catalog →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
