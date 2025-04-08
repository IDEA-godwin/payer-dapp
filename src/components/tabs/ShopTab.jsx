import { useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";

const ShopTab = () => {
  const { products } = useGlobalContext();
  const [current, setCurrent] = useState(0);

  return (
    <div className=" h-[71vh] ">
      {/* Carousel */}
      <div className="overflow-hidden flex-grow mb-2">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-full flex flex-col items-center justify-center px-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 mb-4"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 ">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full ${
              current === index ? "bg-orange-500" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopTab;
