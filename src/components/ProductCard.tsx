import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Eye, X, ArrowRight } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  details?: string;
  origin?: string;
}

export default function ProductCard({
  image,
  title,
  category,
  description,
  details,
  origin,
}: ProductCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg uppercase tracking-wider">
              {category}
            </span>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium text-sm group/btn transition-all"
          >
            <Eye size={16} />
            <span>Explore More</span>
            <ArrowRight
              size={14}
              className="transition-transform group-hover/btn:translate-x-1"
            />
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          >
            <div
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-up shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-2xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-lg uppercase tracking-wider">
                    {category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h2 className="text-white text-3xl font-serif font-bold">
                    {title}
                  </h2>
                  {origin && (
                    <p className="text-white/80 text-sm mt-1">📍 {origin}</p>
                  )}
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all cursor-pointer z-10"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {description}
                </p>
                {details && (
                  <>
                    <div className="w-16 h-1 bg-primary rounded-full mb-4" />
                    <p className="text-gray-600 leading-relaxed">{details}</p>
                  </>
                )}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/251915018916?text=${encodeURIComponent(`Hello, I am interested in your product: ${title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all hover:shadow-lg"
                  >
                    Inquire on WhatsApp
                  </a>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-all font-medium cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
