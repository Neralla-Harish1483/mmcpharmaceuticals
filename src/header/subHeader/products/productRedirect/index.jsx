import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productsData } from "../../../../data/productData";

export default function ProductRedirect() {
  const { id } = useParams();
  const product = productsData[id];

  const navigate = useNavigate()
  const [randomProducts, setRandomProducts] = useState([]);

  const handleProductClick = (productId)=>{
    navigate(`/product/${productId}`)
  }

  useEffect(() => {
    const randomSet = new Set();

    while (randomSet.size < 4) {
      const randomIndex = Math.floor(
        Math.random() * productsData.length
      );
      if (randomIndex !== Number(id)) {
        randomSet.add(randomIndex);
      }
    }

    const selectedProducts = [...randomSet].map(
      (index) => productsData[index]
    );
    
    setRandomProducts(selectedProducts);

  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      
      {/* Main Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-xl p-5">
        {/* Image */}
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm rounded-xl object-contain shadow-md cursor-pointer"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">
            {product.name}
          </h1>

          <p className="text-gray-600">
            <span className="font-semibold">Pack Size:</span> {product.pack}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold">Description:</span>{" "}
            {product.Description}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold">Indication:</span>{" "}
            {product.Indications}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold">Category:</span>{" "}
            {product.category}
          </p>
        
       <div className="action-buttons flex justify-between align-middle">
         {/* Enquiry Button */}
           <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Enquire Now
            </button>
        {/* Back to products Button */}
        <button 
              onClick={() => navigate("/products")}
              className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Products
            </button>
       </div>

        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Related Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {randomProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-contain mb-4 cursor-pointer"
                onClick={()=>handleProductClick(index)}
              />
              <h3 className="text-center font-semibold text-gray-700 text-sm">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
