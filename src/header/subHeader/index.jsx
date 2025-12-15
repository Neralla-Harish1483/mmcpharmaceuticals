import { useNavigate } from "react-router-dom";

export default function SubHeader() {
  const navigate = useNavigate();

  const items = [
    { name: "Our Products", path: "/products" },
    { name: "Categories", path: "/categories"},
    { name: "Gallery", path: "/gallery" },
    { name: "Research & Development", path: "/explore" },
    { name: "Partners", path: "/partners" },
    { name: "Career", path: "/career"}
  ];

  return (
    <div className="w-full py-4 flex justify-center border-b border-gray-100 bg-white shadow-sm">
      <div className="flex gap-8 items-center">
        {items.map((item, index) => (
          <div key={index} className="relative group">
            <button
              onClick={() => navigate(item.path)}
              className="px-1 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm tracking-wide relative"
            >
              {item.name}

              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              {index === 0 && (
                <span className="absolute -top-2 -right-2 px-1.5 py-0.5 text-[10px] bg-red-500 text-white rounded-full animate-pulse">
                  New
                </span>
              )}
            </button>
          </div>
        ))}

        {/* CTA */}
        <div className="ml-8 pl-8 border-l border-gray-200">
          <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
          onClick={()=>navigate('/contactus')}
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
