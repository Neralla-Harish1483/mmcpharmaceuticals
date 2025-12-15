import { useState } from "react";
import { PartnersData } from "../../../data/partnersData";

export default function Partners() {
  const [activePartner, setActivePartner] = useState(PartnersData[0]);

  return (
    <div
      className="min-h-screen bg-cover bg-center transition-all duration-700 object-cover"
      style={{
        backgroundImage: activePartner.backgroundImage
          ? `url(${activePartner.backgroundImage})`
          : "none",
      }}
    >

      <div className="min-h-screen bg-black/60 px-6 py-16">
        
     
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {PartnersData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActivePartner(item)}
              className={`px-6 py-2 rounded-full border text-sm transition-all duration-300
                ${
                  activePartner.title === item.title
                    ? "bg-white text-black font-semibold"
                    : "border-white/70 text-white hover:bg-white hover:text-black"
                }`}
            >
              {item.title}
            </button>
          ))}
        </div>

       {activePartner.images && (
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {activePartner.images.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center
                        shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={img}
                alt={`partner-${index}`}
                className="max-h-20 object-contain mb-4"
              />

              {/* Show text ONLY for Collaborations */}
              {activePartner.title === "Collabrations" && (
                <div className="text-center">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {activePartner.heading}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {activePartner.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
)}


      </div>
    </div>
  );
}
