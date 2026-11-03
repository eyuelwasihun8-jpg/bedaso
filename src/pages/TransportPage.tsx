import { Link } from "react-router-dom";
import { images } from "../images";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Truck, Shield, Clock, Globe, CheckCircle, Route } from "lucide-react";

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

const features = [
  {
    icon: Truck,
    title: "Heavy Cargo Transport",
    desc: "Specialized fleet of heavy-duty trucks including Sinotruk HOWO vehicles and trailers for cargo of any size and weight.",
  },
  {
    icon: Shield,
    title: "Safe & Reliable",
    desc: "Your goods are handled with care. We maintain strict safety protocols and comprehensive cargo insurance throughout transit.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Time-sensitive logistics solutions with real-time tracking and reliable delivery schedules along established trade corridors.",
  },
  {
    icon: Globe,
    title: "Ethio-Djibouti Corridor",
    desc: "Expert operations along the Ethio-Djibouti trade corridor — Ethiopia's primary gateway for international commerce.",
  },
  {
    icon: Route,
    title: "Nationwide Coverage",
    desc: "Comprehensive logistics network covering all major cities and trade routes across Ethiopia and beyond.",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Service",
    desc: "Complete logistics solutions from pickup to delivery, including customs clearance, warehousing, and documentation support.",
  },
];

export default function TransportPage() {
  return (
    <article>
      <PageHero
        image={images.transportHero}
        title="Transport & Logistics"
        subtitle="Fast, reliable, and quality heavy cargo transport services along the Ethio-Djibouti corridor"
        breadcrumb="Our Divisions"
      />

      {/* Intro */}
      <section className="py-16 sm:py-20 bg-white" aria-label="Transport and logistics overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <AnimatedDiv>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                🚛 Logistics Division
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Connecting Ethiopia to{" "}
                <span className="text-primary">Global Markets</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We provide fast, reliable, and quality heavy cargo transport and
                logistics services along the <strong>Ethio-Djibouti corridor</strong> and other
                major trade routes. Our fleet of modern vehicles ensures your
                goods arrive safely and on time.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From{" "}
                <Link to="/import" className="text-primary hover:underline font-medium">
                  construction materials and machinery
                </Link>{" "}
                to{" "}
                <Link to="/export" className="text-primary hover:underline font-medium">
                  agricultural exports
                </Link>
                , we handle all types of cargo with professionalism and care. Our
                experienced team manages every aspect of the supply chain —
                pickup, transit, customs, and final delivery.
              </p>
              <ul className="space-y-2">
                {[
                  "Ethio-Djibouti corridor transport",
                  "Heavy-duty cargo with Sinotruk HOWO fleet",
                  "Customs clearance assistance",
                  "Door-to-port logistics",
                  "Temperature-sensitive cargo handling",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle size={16} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedDiv>

            <AnimatedDiv delay={200}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <img
                  src={images.truckLogistics}
                  alt="Bedhaso Abdella cargo truck transporting goods on Ethiopian highway"
                  className="rounded-2xl shadow-xl w-full h-44 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <img
                  src={images.containerPort}
                  alt="Container port at Djibouti with cargo ready for Ethiopian import export"
                  className="rounded-2xl shadow-xl w-full h-44 sm:h-56 object-cover mt-6 sm:mt-8 hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <img
                  src={images.containerShip}
                  alt="Container ship loaded with Ethiopian export cargo at commercial dock"
                  className="rounded-2xl shadow-xl w-full h-44 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <img
                  src={images.dumpTruck}
                  alt="Industrial dump truck at construction site for heavy material transport"
                  className="rounded-2xl shadow-xl w-full h-44 sm:h-56 object-cover mt-6 sm:mt-8 hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 bg-gray-50" aria-label="Why choose our logistics services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Services"
            title="Why Choose Our Logistics?"
            subtitle="End-to-end transport and logistics solutions with a focus on reliability, safety, and speed."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <AnimatedDiv key={f.title} delay={idx * 100}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <f.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Need Reliable Cargo Transport?
          </h2>
          <p className="text-white/80 mb-8 text-base sm:text-lg">
            <Link to="/contact" className="underline hover:text-white transition-colors">
              Contact us
            </Link>{" "}
            for competitive rates on heavy cargo transport, port-to-door
            delivery, and full logistics solutions. We also deliver materials for our{" "}
            <Link to="/import" className="underline hover:text-white transition-colors">
              import division
            </Link>{" "}
            and{" "}
            <Link to="/export" className="underline hover:text-white transition-colors">
              export shipments
            </Link>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-700 hover:bg-gray-100 rounded-full font-semibold transition-all hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
            >
              Get a Logistics Quote
            </Link>
            <Link
              to="/coffee"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 hover:border-white text-white rounded-full font-semibold transition-all hover:-translate-y-1 text-sm sm:text-base"
            >
              Coffee Export →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
