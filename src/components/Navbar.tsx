import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { images } from "../images";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Real Estate", path: "/real-estate" },
  { label: "Import", path: "/import" },
  { label: "Export", path: "/export" },
  { label: "Logistics", path: "/transport" },
  { label: "Coffee", path: "/coffee" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Detect if we are on the Coffee page
  const isCoffeePage = location.pathname.startsWith("/coffee");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (path: string) => location.pathname === path;

  // Choose the correct logo
  const logoSrc = isCoffeePage
    ? images.coffeeLogo
    : scrolled || mobileOpen
    ? images.logo
    : images.logoTransparent;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "bg-white shadow-lg py-1"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to={isCoffeePage ? "/coffee" : "/"}
            className="shrink-0"
            aria-label={isCoffeePage ? "Iconbuna Coffee" : "BAIM Family Group Home"}
          >
            <img
              src={logoSrc}
              alt={isCoffeePage ? "Iconbuna Coffee Logo" : "BAIM Family Group Logo"}
              className={`transition-all duration-300 object-contain ${
                isCoffeePage
                  ? "h-16 sm:h-20 lg:h-24 drop-shadow-lg"
                  : scrolled || mobileOpen
                  ? "h-12 lg:h-14 rounded-lg"
                  : "h-14 lg:h-16 drop-shadow-lg"
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-0"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2.5 xl:px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 relative group whitespace-nowrap ${
                  isActive(link.path)
                    ? scrolled
                      ? "text-primary"
                      : "text-white"
                    : scrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${
                    isActive(link.path)
                      ? "w-5 bg-accent"
                      : "w-0 group-hover:w-5 bg-accent"
                  }`}
                />
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 px-4 xl:px-5 py-2 bg-primary hover:bg-primary-dark text-white rounded-full text-[13px] font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled || mobileOpen
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen
              ? "max-h-[600px] opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav
            className="bg-white rounded-2xl shadow-xl p-4 space-y-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.label === "Logistics"
                  ? "Transport & Logistics"
                  : link.label === "Coffee"
                  ? "Iconbuna Coffee"
                  : link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block text-center px-4 py-3 bg-primary text-white rounded-xl text-sm font-semibold mt-2"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}