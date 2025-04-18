import { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { ChevronRight, ChevronLeft, X } from "lucide-react";

const ShopTab = () => {
  const { products } = useGlobalContext();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const carouselRef = useRef(null);

  // Generate subimages based on products length
  const generateSubImages = (productId) => {
    // Ensure productId is a valid number between 10-1000 (picsum.photos has more images in this range)
    const safeId = Math.max(10, Math.min(Number(productId) || 10, 1000));

    return [1, 2, 3].map(
      (num) => `https://picsum.photos/id/${safeId + num}/300/300?${Date.now()}`
    );
  };

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextSlide(); // Swipe left
    if (touchStart - touchEnd < -50) prevSlide(); // Swipe right
  };

  const nextSlide = () => {
    if (!selectedProduct) return;
    const images = [
      selectedProduct.image,
      ...generateSubImages(selectedProduct.id),
    ];
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (!selectedProduct) return;
    const images = [
      selectedProduct.image,
      ...generateSubImages(selectedProduct.id),
    ];
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (loading) {
    return (
      <div className="h-[71vh] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-gray-300 rounded-full mb-4"></div>
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  if (selectedProduct) {
    const images = [
      selectedProduct.image,
      ...generateSubImages(selectedProduct.id),
    ];

    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4">
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-4 right-4 text-white p-2"
        >
          <X className="w-6 h-6" />
        </button>

        <div
          className="relative w-full max-w-2xl mb-18 -mt-18 h-96 "
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[currentIndex]}
            alt={`Product view ${currentIndex + 1}`}
            className={`w-full h-full object-contain ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/600x600?text=Image+Not+Found";
              setImageLoaded(true);
            }}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="animate-pulse">Loading...</div>
            </div>
          )}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[var(--link-color)] p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[var(--link-color)] p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex gap-2 max-w-1/2  overflow-x-auto py-2">
          {images.map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img}
                alt={`Product view ${index + 1}`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/300x300?text=Image+Not+Found";
                }}
              />
              {currentIndex === index && (
                <div className="absolute inset-0 border-2 rounded-md border-orange-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-[71vh] overflow-y-auto -mt-18">
      <h2 className="text-2xl font-bold text-center my-6">Our Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => {
              setSelectedProduct(product);
              setCurrentIndex(0);
            }}
            className="cursor-pointer  hover:scale-105 duration-300"
          >
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
            <p className="mt-2 text-center font-medium">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopTab;
