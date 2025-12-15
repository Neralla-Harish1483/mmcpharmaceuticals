import { useState } from "react";
import ferticare from "../../../images/fericareLogo.jpg";
import urocare from "../../../images/UroCareLogo.jpg";
import { productsData } from "../../../data/productData";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const navigate = useNavigate()

  const productShow = (category) => {
    setActiveCategory(category);
    const result = productsData.filter(
      (product) => product.category === category
    );
    setFilteredProducts(result);
  };

  const ViewDescription = (productId)=>{
    navigate(`/product/${productId}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
        
      {/* Category Section */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Product Categories
      </h2>

      <div className="flex justify-center gap-8 mb-14 flex-wrap">
        
        {/* Ferticare */}
        <div
          onClick={() => productShow("Ferticare")}
          className={`cursor-pointer bg-white rounded-2xl shadow-md p-6 
            transition-all duration-300 hover:scale-105 hover:shadow-xl
            ${activeCategory === "Ferticare" ? "ring-1 ring-red-600" : ""}
          `}
        >
          <img
            src={ferticare}
            alt="Ferticare"
            className="h-24 mx-auto object-contain"
          />
          <p className="text-center mt-4 font-semibold text-gray-700">
            Ferticare
          </p>
        </div>

        {/* Urocare */}
        <div
          onClick={() => productShow("Urocare")}
          className={`cursor-pointer bg-white rounded-2xl shadow-md p-6 
            transition-all duration-300 hover:scale-105 hover:shadow-xl
            ${activeCategory === "Urocare" ? "ring-1 ring-red-600" : ""}
          `}
        >
          <img
            src={urocare}
            alt="Urocare"
            className="h-24 mx-auto object-contain"
          />
          <p className="text-center mt-4 font-semibold text-gray-700">
            Urocare
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Select a category to view products
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {product.category}
                  </p>

                  <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-xl 
                    hover:bg-white transition hover:text-red-600 hover:ring-1 ring-red-600" onClick={()=>ViewDescription(product.id)}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
