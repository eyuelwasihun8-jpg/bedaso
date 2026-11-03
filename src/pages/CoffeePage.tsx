import { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../images";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { CheckCircle, Send } from "lucide-react";

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

const origins = [
  {
    name: "Harar Coffee",
    region: "Hararghe",
    image: images.coffeeSack,
    alt: "Ethiopian Harar coffee in burlap sack for export",
    desc: "Harar coffee is one of the oldest coffees in the world, known for its winey, fruity quality with distinctive blueberry notes and a heavy body. Grown at elevations of 1,500–2,100m.",
    process: "Unwashed (Sun-Dried Natural)",
    grades: "Grade 3 – Grade 5",
  },
  {
    name: "Yirgacheffe Coffee",
    region: "Southern Ethiopia",
    image: images.coffeeGreen,
    alt: "Fresh green Yirgacheffe coffee beans before roasting",
    desc: "World-renowned for its bright, floral, and citrusy flavour profile. Yirgacheffe is considered among the finest coffees globally, grown at 1,700–2,200m altitude.",
    process: "Washed & Unwashed",
    grades: "Grade 1 – Grade 3",
  },
  {
    name: "Sidamo Coffee",
    region: "Sidama Zone",
    image: images.coffeeBeans,
    alt: "Premium Sidamo Arabica coffee beans ready for export",
    desc: "Sidamo coffee offers a complex, well-balanced cup with wine-like acidity, full body, and sweet berry and chocolate undertones. A favourite of specialty roasters.",
    process: "Washed & Unwashed",
    grades: "Grade 1 – Grade 4",
  },
  {
    name: "Guji Coffee",
    region: "Guji Zone, Oromia",
    image: images.coffeeRoasted,
    alt: "Roasted Guji region single-origin coffee beans",
    desc: "Guji coffees are prized for their vibrant acidity, floral aromatics, and stone fruit flavours. Grown at high elevations in the Guji Zone of Oromia.",
    process: "Washed & Unwashed",
    grades: "Grade 1 – Grade 3",
  },
  {
    name: "Jimma Coffee",
    region: "Jimma Zone",
    image: images.coffeeCherry,
    alt: "Ripe coffee cherries from Jimma growing region Ethiopia",
    desc: "Jimma is one of Ethiopia's largest coffee-producing regions, delivering coffees with earthy, spicy notes and a full body. Excellent for blending.",
    process: "Unwashed (Sun-Dried Natural)",
    grades: "Grade 4 – Grade 5",
  },
  {
    name: "Limu & Lekempti",
    region: "Western Ethiopia",
    image: images.coffeeDark,
    alt: "Dark roasted Ethiopian coffee from Limu and Lekempti regions",
    desc: "These western Ethiopian coffees offer a well-balanced cup with mild acidity, fruity sweetness, and a clean finish. Excellent quality Arabica beans.",
    process: "Washed & Unwashed",
    grades: "Grade 2 – Grade 5",
  },
];

export default function CoffeePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    quantity: "",
    coffeeType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Iconbuna Coffee Export,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nQuantity: ${formData.quantity}\nCoffee Type: ${formData.coffeeType}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/251915018916?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <article>
      <PageHero
        image={images.coffeeHero}
        title="Iconbuna Coffee Export"
        subtitle="Ethiopia's Finest Arabica Coffee for the World Market"
        breadcrumb="☕ Coffee Division"
      />

      {/* About Iconbuna */}
      <section className="py-16 sm:py-20 bg-white" aria-label="About Iconbuna Coffee Export">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <AnimatedDiv>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                ☕ About Iconbuna
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Premium Ethiopian{" "}
                <span className="text-primary">Fine Arabica</span> Coffee
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Iconbuna Coffee Export</strong> is our dedicated division
                for bringing Ethiopia's finest Arabica coffee to the world
                market. Ethiopia is the birthplace of coffee, and we take pride
                in exporting some of the world's most sought-after single-origin
                beans.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our coffee is hand-picked from smallholder farms across
                Yirgacheffe, Sidamo, Guji, Harar, Jimma, Arsi, Limu, Lekempti,
                Kaffa, Bench Maji, and other prime growing regions — at altitudes
                ranging from 1,500 to 2,200 metres. Every lot undergoes rigorous
                cupping, quality control, and grading before being shipped via
                our{" "}
                <Link to="/transport" className="text-primary hover:underline font-medium">
                  transport & logistics division
                </Link>.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                <div className="bg-primary/5 rounded-xl p-4">
                  <p className="text-2xl font-bold text-primary">10+</p>
                  <p className="text-xs text-gray-600 mt-1">Growing Regions</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4">
                  <p className="text-2xl font-bold text-primary">Grade 1-5</p>
                  <p className="text-xs text-gray-600 mt-1">Quality Grades</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4">
                  <p className="text-2xl font-bold text-primary">1,500m+</p>
                  <p className="text-xs text-gray-600 mt-1">Altitude</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-xs text-gray-600 mt-1">Arabica</p>
                </div>
              </div>
            </AnimatedDiv>

            <AnimatedDiv delay={200}>
              <div className="relative">
                <img
                  src={images.coffeePlantation}
                  alt="Ethiopian women harvesting coffee cherries at a highland Arabica coffee farm for Iconbuna export"
                  className="rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-coffee text-white rounded-2xl shadow-xl p-5 sm:p-6">
                  <p className="font-serif font-bold text-lg">Iconbuna</p>
                  <p className="text-white/70 text-sm">Premium Coffee Export</p>
                </div>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* Processing Methods */}
      <section className="py-16 sm:py-20 bg-coffee text-white" aria-label="Coffee processing methods">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Processing"
            title="Coffee Processing Methods"
            subtitle="We offer both washed and unwashed (natural) processed coffees, each with their own unique flavour characteristics."
            light
          />

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <AnimatedDiv>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/15 transition-all duration-300 h-full">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Washed Coffee
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Our washed (wet-processed) coffees are carefully depulped,
                  fermented in water, and thoroughly washed to produce beans with
                  exceptionally clean, bright cup profiles. The process highlights
                  the inherent flavour characteristics of each origin.
                </p>
                <ul className="space-y-2">
                  {[
                    "Clean, bright acidity",
                    "Floral and citrus notes",
                    "Consistent cup quality",
                    "Grade 1 – Grade 5 available",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                      <CheckCircle size={14} className="text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedDiv>

            <AnimatedDiv delay={150}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/15 transition-all duration-300 h-full">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Unwashed / Natural Coffee
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Our natural (sun-dried) coffees are dried with the fruit
                  cherry still attached, resulting in coffees with intense fruity
                  sweetness, heavier body, and complex berry and wine-like notes.
                  A traditional Ethiopian processing method.
                </p>
                <ul className="space-y-2">
                  {[
                    "Full body and sweetness",
                    "Berry and wine-like notes",
                    "Traditional sun-dried process",
                    "Grade 1 – Grade 5 available",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                      <CheckCircle size={14} className="text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* Coffee Origins */}
      <section className="py-16 sm:py-20 bg-gray-50" aria-label="Ethiopian coffee growing origins">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Origins"
            title="Our Coffee Origins"
            subtitle="We source premium Arabica coffee from Ethiopia's most celebrated growing regions."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {origins.map((origin, idx) => (
              <AnimatedDiv key={origin.name} delay={idx * 100}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src={origin.image}
                      alt={origin.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-lg">
                        {origin.region}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {origin.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                      {origin.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">
                        {origin.process}
                      </span>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md font-medium">
                        {origin.grades}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 sm:py-20 bg-white" id="inquiry" aria-label="Coffee export inquiry form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Get in Touch"
            title="Coffee Export Inquiry"
            subtitle="Interested in our premium Ethiopian coffee? Fill out the form below and we'll get back to you shortly."
          />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            <AnimatedDiv>
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Quantity (kg/tons)
                      </label>
                      <input
                        type="text"
                        value={formData.quantity}
                        onChange={(e) =>
                          setFormData({ ...formData, quantity: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="e.g. 20 tons"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Coffee Type / Origin Preference
                    </label>
                    <select
                      value={formData.coffeeType}
                      onChange={(e) =>
                        setFormData({ ...formData, coffeeType: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Select coffee type</option>
                      <option value="Harar Unwashed">Harar — Unwashed</option>
                      <option value="Yirgacheffe Washed">Yirgacheffe — Washed</option>
                      <option value="Yirgacheffe Unwashed">Yirgacheffe — Unwashed</option>
                      <option value="Sidamo Washed">Sidamo — Washed</option>
                      <option value="Sidamo Unwashed">Sidamo — Unwashed</option>
                      <option value="Guji Washed">Guji — Washed</option>
                      <option value="Guji Unwashed">Guji — Unwashed</option>
                      <option value="Jimma Unwashed">Jimma — Unwashed</option>
                      <option value="Arsi">Arsi</option>
                      <option value="Limu">Limu</option>
                      <option value="Lekempti">Lekempti</option>
                      <option value="Multiple/Custom">Multiple / Custom Order</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full py-4 bg-primary hover:bg-primary-dark disabled:bg-green-600 text-white rounded-xl font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    {submitted ? (
                      "✓ Opening WhatsApp…"
                    ) : (
                      <>
                        <Send size={18} />
                        Send Inquiry via WhatsApp
                      </>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedDiv>

            <AnimatedDiv delay={200}>
              <div className="space-y-6">
                <div className="bg-coffee text-white rounded-2xl p-6 sm:p-8">
                  <h3 className="text-xl font-serif font-bold mb-4">
                    Why Choose Iconbuna Coffee?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Direct sourcing from Ethiopian smallholder farms",
                      "Rigorous cupping and quality control",
                      "Full traceability from farm to port",
                      "Competitive FOB pricing",
                      "All grades: Grade 1 through Grade 5",
                      "Both washed and unwashed processing",
                      "Flexible order quantities",
                      "Professional export documentation",
                      "Reliable shipping via Djibouti port",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-white/80 text-sm">
                        <CheckCircle size={14} className="text-accent mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-accent/10 rounded-2xl p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Contact Directly
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><a href="tel:+251915018916" className="hover:text-primary transition-colors">📞 +251 915 018 916</a></p>
                    <p><a href="tel:+251915444546" className="hover:text-primary transition-colors">📞 +251 915 444 546</a></p>
                    <p><a href="tel:+251942333335" className="hover:text-primary transition-colors">📞 +251 942 333 335</a></p>
                    <p>🌐 www.bedhasoimportexport.com</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-accent/20">
                    <Link
                      to="/contact"
                      className="text-primary hover:text-primary-dark text-sm font-medium transition-colors"
                    >
                      Visit our Contact Page →
                    </Link>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Related Services
                  </h3>
                  <div className="space-y-2 text-sm">
                    <Link to="/export" className="block text-primary hover:underline font-medium">
                      → All Export Products
                    </Link>
                    <Link to="/transport" className="block text-primary hover:underline font-medium">
                      → Transport & Logistics
                    </Link>
                    <Link to="/import" className="block text-primary hover:underline font-medium">
                      → Import Division
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary to-coffee text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Source Premium Ethiopian Coffee?
          </h2>
          <p className="text-white/80 mb-8 text-base sm:text-lg">
            From Harar to Yirgacheffe, from Grade 1 to Grade 5 — Iconbuna
            Coffee delivers Ethiopia's finest Arabica beans to your doorstep.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/251915018916?text=Hello%20Iconbuna%20Coffee%2C%20I%20would%20like%20to%20discuss%20a%20coffee%20export%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent-light text-coffee rounded-full font-semibold transition-all hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
            >
              Start Your Order Today
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
