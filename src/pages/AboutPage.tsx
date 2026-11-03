import { Link } from "react-router-dom";
import { images } from "../images";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Target, Lightbulb, Heart, Award, Shield, FileText, CheckCircle } from "lucide-react";

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

export default function AboutPage() {
  return (
    <article>
      <PageHero
        image={images.heroSlides[2]}
        title="About Us"
        subtitle="Connecting Markets. Building Legacies."
        breadcrumb="BAIM Family Group"
      />

      {/* Company Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <AnimatedDiv>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Ethiopia's Premier <span className="text-primary">Trading Company</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>BAIM Family Group</strong> — operating as Bedhaso Abdella Import & Export General Trading — is
                a diversified Ethiopian enterprise headquartered in Addis Ababa. Built on the four pillars of 
                <strong> Bedhaso, Abdella, Ibrahim, and Mumed</strong>, our company specializes in international trade
                and corporate investment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With strategic offices in Dire Dawa (Kezira), Addis Ababa (Bole), and Sheger City (Furi), we bridge the gap 
                between Ethiopia's rich agricultural heritage and global markets, while simultaneously importing vital 
                construction and industrial materials to build our nation's future.
              </p>
              <ul className="space-y-3 mb-8">
                {["Over a decade of trading excellence", "Multi-sector expertise (Coffee, Real Estate, Logistics)", "Commitment to Ethiopian quality and global standards"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedDiv>
            <AnimatedDiv delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <img src={images.coffeePlantation} alt="Ethiopian agriculture" className="rounded-2xl shadow-lg w-full h-48 sm:h-64 object-cover" />
                <img src={images.containerPort} alt="Logistics and shipping" className="rounded-2xl shadow-lg w-full h-48 sm:h-64 object-cover mt-8" />
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Core Philosophy"
            title="What Drives Us Forward"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Our Mission", desc: "To bring Ethiopia's finest products to the world and supply our local markets with high-quality global materials, fostering economic growth." },
              { icon: Lightbulb, title: "Our Vision", desc: "To be the most trusted, innovative, and impactful import/export and real estate development conglomerate in East Africa." },
              { icon: Heart, title: "Core Values", desc: "Integrity in all dealings, Excellence in service, Commitment to our community, and Sustainability in our agricultural sourcing." }
            ].map((box, idx) => (
              <AnimatedDiv key={box.title} delay={idx * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all h-full border-b-4 border-primary">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <box.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{box.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{box.desc}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Leadership (Moved from Homepage) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Leadership"
            title="Meet Our Founder"
            subtitle="Guiding BAIM Family Group with decades of industry experience."
          />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedDiv>
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                <img
                  src={images.ceoPortrait}
                  alt="Bedhaso Abdella — Founder and CEO"
                  className="rounded-3xl shadow-2xl w-full h-[450px] sm:h-[550px] object-cover object-center"
                />
                <div className="absolute -z-10 -top-4 -left-4 sm:-top-6 sm:-left-6 w-full h-full rounded-3xl border-4 border-accent/30" />
              </div>
            </AnimatedDiv>
            <AnimatedDiv delay={200}>
              <div>
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">Bedhaso Abdella</h3>
                <p className="text-primary font-semibold text-lg mb-6">Founder & Chief Executive Officer</p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  With decades of experience in Ethiopian trade and commerce, Mr. Bedhaso Abdella founded BAIM Family Group with a vision to connect Ethiopia's vast potential with global markets.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Under his leadership, the company has grown into a multi-division enterprise encompassing Iconbuna Coffee Export, Sunrise Real Estate, vehicle imports, and heavy cargo logistics. His commitment to quality, integrity, and Ethiopian excellence drives every aspect of the business.
                </p>
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 italic text-gray-700 text-sm">
                  "Our mission is to build modern infrastructure for our communities while sharing our rich agricultural heritage with the world."
                </div>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-16 sm:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Trust & Quality"
            title="Certifications & Licenses"
            subtitle="We operate at the highest standards of international trade."
            light
          />
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: Shield, title: "Licensed Exporter", desc: "Officially licensed by the Ethiopian Ministry of Trade and Regional Integration." },
              { icon: Award, title: "Coffee & Tea Authority", desc: "Certified premium grade exporter by the Ethiopian Coffee and Tea Authority." },
              { icon: FileText, title: "Global Compliance", desc: "Strict adherence to international phytosanitary, safety, and customs regulations." }
            ].map((cert, idx) => (
              <AnimatedDiv key={cert.title} delay={idx * 100}>
                <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors h-full">
                  <cert.icon className="mx-auto text-accent mb-4" size={40} />
                  <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                  <p className="text-gray-400 text-sm">{cert.desc}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}