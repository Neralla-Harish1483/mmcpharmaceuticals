import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SubHeader() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const items = [
    { name: "Our Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "Gallery", path: "/gallery" },
    { name: "Research & Development", path: "/explore" },
    { name: "Partners", path: "/partners" },
    { name: "Career", path: "/career" }
  ];

  const primaryItems = items.slice(0, 3);
  const moreItems = items.slice(3);

  return (
    <div className="w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== MOBILE ===== */}
        <div className="md:hidden py-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-6">
              {primaryItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setShowMore(false);
                  }}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 relative group"
                >
                  {item.name}

                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
              ))}
            </div>

            {/* MORE BUTTON */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-sm font-medium text-gray-700 flex items-center gap-1"
            >
              More
              <span
                className={`transition-transform duration-200 ${
                  showMore ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </button>
          </div>

          {/* MORE DROPDOWN */}
          {showMore && (
            <div className="mt-3 rounded-xl border border-gray-100 bg-white shadow-lg divide-y">
              {moreItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setShowMore(false);
                  }}
                  className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}

          {/* MOBILE CTA */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button
              onClick={() => navigate("/contactus")}
              className="w-full px-4 py-2 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition"
            >
              Contact Sales
            </button>
          </div>
        </div>

        {/* ===== DESKTOP (UNCHANGED LOOK) ===== */}
        <div className="hidden md:flex py-4 justify-center">
          <div className="flex gap-8 items-center">
            {items.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  onClick={() => navigate(item.path)}
                  className="px-1 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm tracking-wide relative"
                >
                  {item.name}

                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                  {index === 0 && (
                    <span className="absolute -top-2 -right-2 px-1.5 py-0.5 text-[10px] bg-red-500 text-white rounded-full animate-pulse">
                      New
                    </span>
                  )}
                </button>
              </div>
            ))}

            {/* DESKTOP CTA */}
            <div className="ml-8 pl-8 border-l border-gray-200">
              <button
                className="px-4 py-2 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
                onClick={() => navigate("/contactus")}
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
