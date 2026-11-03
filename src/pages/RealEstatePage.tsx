import { Link } from "react-router-dom";
import { images } from "../images";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";

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

const properties = [
  {
    image: images.luxuryVilla,
    title: "Luxury Villa Houses",
    alt: "Luxury villa house with pool at Sunrise Real Estate Melka Jebdu Dire Dawa",
    desc: "Beautifully designed luxury villas featuring modern architecture, spacious layouts, premium finishes, and landscaped gardens. Ideal for families seeking an upscale lifestyle in Dire Dawa.",
    features: ["Modern Architecture", "Spacious Gardens", "Premium Finishes", "Gated Community"],
  },
  {
    image: images.villaHouse,
    title: "G+1 Modern Residences",
    alt: "G+1 modern two-storey residence at Sunrise Real Estate Dire Dawa",
    desc: "Contemporary two-storey homes with open-plan living areas, modern kitchens, and comfortable bedrooms. Perfect for growing families who value style and practicality.",
    features: ["Open Plan Design", "Modern Kitchen", "Two Storeys", "Parking Space"],
  },
  {
    image: images.modernHouse,
    title: "G+2 Residential & Commercial",
    alt: "G+2 mixed-use residential and commercial building Dire Dawa Ethiopia",
    desc: "Versatile multi-level properties suitable for residential living or commercial use. Strategic locations ideal for business ventures or mixed-use development.",
    features: ["Multi-level", "Commercial Ready", "Strategic Location", "Modern Design"],
  },
  {
    image: images.hillsideVillas,
    title: "Residential Plots & Land",
    alt: "Residential land plots for sale in Melka Jebdu Dire Dawa",
    desc: "Prime plots of land in Melka Jebdu, Dire Dawa — ready for custom development. An excellent investment opportunity in one of Ethiopia's fastest-growing cities.",
    features: ["Prime Location", "Custom Development", "Investment Opportunity", "Title Deed Ready"],
  },
];

export default function RealEstatePage() {
  return (
    <article>
      <PageHero
        image={images.realEstateHero}
        title="Real Estate Division"
        subtitle="Sunrise Real Estate — Modern living in Melka Jebdu, Dire Dawa"
        breadcrumb="Our Divisions"
      />

      {/* Intro */}
      <section className="py-16 sm:py-20 bg-white" aria-label="Sunrise Real Estate overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <AnimatedDiv>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                🏗 Sunrise Real Estate
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Building Your Dream Home in{" "}
                <span className="text-primary">Dire Dawa</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Sunrise Real Estate</strong>, located in Melka Jebdu, Dire Dawa, is our
                flagship property development project. We deliver modern,
                beautiful, and high-quality residential and commercial properties
                designed for comfortable living and profitable business ventures.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                From luxury villas to G+1 and G+2 buildings, every property is
                crafted with attention to detail, modern design principles, and
                quality{" "}
                <Link to="/import" className="text-primary hover:underline font-medium">
                  construction materials
                </Link>.
              </p>
              <div className="flex items-center gap-2 text-accent font-medium mb-6">
                <MapPin size={18} />
                <span>Melka Jebdu, Dire Dawa, Ethiopia</span>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium text-sm transition-all"
              >
                Schedule a viewing <ArrowRight size={16} />
              </Link>
            </AnimatedDiv>

            <AnimatedDiv delay={200}>
              <img
                src={images.luxuryVilla}
                alt="Modern luxury villa with swimming pool and landscaped garden at Sunrise Real Estate Dire Dawa"
                className="rounded-2xl shadow-2xl w-full h-[350px] sm:h-[450px] object-cover"
                loading="lazy"
              />
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="py-16 sm:py-20 bg-gray-50" aria-label="Available property types">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Property Types"
            title="Available Properties"
            subtitle="Explore our range of modern residential and commercial properties designed for comfort and convenience."
          />

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {properties.map((prop, idx) => (
              <AnimatedDiv key={prop.title} delay={idx * 100}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={prop.image}
                      alt={prop.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {prop.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {prop.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {prop.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2 text-sm text-gray-500"
                        >
                          <CheckCircle size={14} className="text-primary shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Interested in Our Properties?
          </h2>
          <p className="text-white/80 mb-8 text-base sm:text-lg">
            <Link to="/contact" className="underline hover:text-accent-light transition-colors">
              Contact us
            </Link>{" "}
            today to schedule a viewing or learn more about available
            properties at Sunrise Real Estate, Melka Jebdu, Dire Dawa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/251915018916?text=Hello%2C%20I%20am%20interested%20in%20Sunrise%20Real%20Estate%20properties."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary hover:bg-gray-100 rounded-full font-semibold transition-all hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
            >
              WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 hover:border-white text-white rounded-full font-semibold transition-all hover:-translate-y-1 text-sm sm:text-base"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
