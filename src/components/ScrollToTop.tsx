import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageTitles: Record<string, string> = {
  "/": "BAIM Family Group | Bedhaso Abdella Import & Export",
  "/about": "About Us | BAIM Family Group",
  "/real-estate": "Sunrise Real Estate Dire Dawa | BAIM Family Group",
  "/import": "Construction & Vehicle Import | BAIM Family Group",
  "/export": "Agricultural & Coffee Export | BAIM Family Group",
  "/transport": "Heavy Cargo Transport & Logistics | BAIM Family Group",
  "/coffee": "Iconbuna Coffee Export — Premium Ethiopian Arabica",
  "/contact": "Contact Us | BAIM Family Group",
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Update document title dynamically for Google SEO
    const title = pageTitles[pathname] || "BAIM Family Group | Import & Export";
    document.title = title;
  }, [pathname]);

  return null;
}