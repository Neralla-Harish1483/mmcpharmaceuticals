import { useState } from "react";
import { Titles } from "../../../data/galleryData";
import bgImage from '../../subHeader/gallery/galleryImages/memories.jpg'

export default function Gallery() {
  const [selectedGallery, setSelectedGallery] = useState(Titles[0]);

  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px"
      }}
    >
      {/* Heading */}
      <div className="gallery-heading text-center mb-6">
        <h2 className="text-3xl font-bold text-white">GALLERY</h2>
      </div>

      {/* Title Selection */}
      <div className="select-event flex flex-wrap gap-4 justify-center mb-10">
        {Titles.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedGallery(item)}
            className={`px-4 py-2 rounded-lg font-medium transition
              ${
                selectedGallery.title === item.title
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-800 hover:bg-blue-100"
              }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {selectedGallery.images.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={img}
              alt={selectedGallery.title}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
