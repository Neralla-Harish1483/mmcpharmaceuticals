import img from '../../../images/tablets.jpg';
import { productsData } from '../../../data/productData';
import { useNavigate } from 'react-router-dom';

export default function Products() {

  const navigate = useNavigate();

  const handleReadMore = (index) => {
    console.log(index);
    navigate(`/product/${index}`);
  };

  return (
    <>
      {/* Header Section */}
      <div className="w-full h-[160px] sm:h-[200px] relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-wide">
            PRODUCTS
          </h2>
        </div>
      </div>

      {/* Cards Section */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-6
        mt-8
        px-4
        sm:px-6
        justify-items-center
      ">
        {productsData.map((product, index) => (
          <div
            key={index}
            className="
              relative
              w-full
              max-w-[300px]
              h-[280px]
              sm:h-[320px]
              lg:h-[350px]
              rounded-2xl
              overflow-hidden
              shadow-lg
              group
            "
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />

            {/* Hover / Tap Overlay */}
            <div className="
              absolute inset-0
              bg-black/60
              flex flex-col
              items-center
              justify-center
              opacity-100
              sm:opacity-0
              sm:group-hover:opacity-100
              transition-opacity
              duration-300
              px-3
            ">
              <h3 className="text-white text-base sm:text-lg font-semibold mb-4 text-center">
                {product.name}
              </h3>

              <button
                className="
                  px-5 py-2
                  bg-white text-black
                  rounded-full
                  text-sm font-medium
                  hover:bg-gray-200
                  transition
                "
                onClick={() => handleReadMore(index)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
