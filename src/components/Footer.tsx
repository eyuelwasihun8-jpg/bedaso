import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUp, Globe } from "lucide-react";
import { images } from "../images";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-900 text-gray-300 relative" role="contentinfo">
      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:-translate-y-1"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4" aria-label="Go to homepage">
              <img
                src={images.logoTransparent}
                alt="BAIM Family Group Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-gray-500 mb-3 italic">
              "Connecting Markets. Building Legacies."
            </p>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              A leading Ethiopian trading company specializing in{" "}
              <Link to="/coffee" className="text-accent hover:underline">coffee export</Link>,{" "}
              <Link to="/real-estate" className="text-accent hover:underline">real estate development</Link>,{" "}
              <Link to="/import" className="text-accent hover:underline">construction materials import</Link>,{" "}
              and{" "}
              <Link to="/transport" className="text-accent hover:underline">transport & logistics</Link> services.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Globe size={14} className="text-accent shrink-0" />
              <span>www.bedhasoimportexport.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Real Estate Division", path: "/real-estate" },
                { label: "Import Division", path: "/import" },
                { label: "Export Division", path: "/export" },
                { label: "Transport & Logistics", path: "/transport" },
                { label: "Iconbuna Coffee Export", path: "/coffee" },
                { label: "Contact Us", path: "/contact" },
              ].map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm hover:text-accent transition-colors hover:pl-1 duration-300 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone size={16} className="mt-0.5 text-accent shrink-0" />
                <div>
                  <a href="tel:+251915018916" className="hover:text-accent transition-colors block">+251 915 018 916</a>
                  <a href="tel:+251915444546" className="hover:text-accent transition-colors block">+251 915 444 546</a>
                  <a href="tel:+251942333335" className="hover:text-accent transition-colors block">+251 942 333 335</a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail size={16} className="mt-0.5 text-accent shrink-0" />
                <a href="mailto:info@bedhasoimportexport.com" className="hover:text-accent transition-colors">
                  info@bedhasoimportexport.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-accent hover:text-accent-light text-sm font-medium transition-colors"
              >
                Send us a message →
              </Link>
            </div>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Our Offices
            </h4>
            <ul className="space-y-3">
              {[
                { city: "Dire Dawa", area: "Kezira" },
                { city: "Addis Ababa", area: "Bole" },
                { city: "Sheger City", area: "Furi" },
              ].map((o) => (
                <li key={o.city} className="flex items-start gap-2 text-sm">
                  <MapPin size={16} className="mt-0.5 text-accent shrink-0" />
                  <span>
                    {o.city}, {o.area}
                  </span>
                </li>
              ))}
            </ul>

            {/* Cross-link to divisions */}
            <div className="mt-6 pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-medium">Our Divisions</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Coffee", path: "/coffee" },
                  { label: "Import", path: "/import" },
                  { label: "Export", path: "/export" },
                  { label: "Logistics", path: "/transport" },
                ].map((d) => (
                  <Link
                    key={d.path}
                    to={d.path}
                    className="text-xs bg-gray-800 hover:bg-gray-700 px-2.5 py-1 rounded-md transition-colors"
                  >
                    {d.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} BAIM Family Group — Bedhaso Abdella Import & Export General
            Trading. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            <Link to="/" className="hover:text-accent transition-colors">www.bedhasoimportexport.com</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}