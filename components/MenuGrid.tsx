
import React, { useState, useEffect } from 'react';

interface MenuImage {
  url: string;
  alt: string;
}

const menuImages: MenuImage[] = [
  {
    url: "/images/menu/menu-1.png",
    alt: "ProEspresso Menü"
  }
];

const MenuGrid: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Otomatik geçiş (5 saniyede bir) - sadece birden fazla görsel olduğunda
  useEffect(() => {
    if (menuImages.length <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Klavye navigasyonu
  useEffect(() => {
    if (menuImages.length <= 1) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % menuImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + menuImages.length) % menuImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section id="menu" className="relative w-full bg-cream-25 overflow-hidden">
      {/* Carousel Container */}
      <div
        className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Images */}
        <div className="relative w-full h-full">
          {menuImages.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${index === currentIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
                }`}
              style={{
                pointerEvents: index === currentIndex ? 'auto' : 'none'
              }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-contain bg-cream-25"
                loading={index === 0 ? 'eager' : 'lazy'}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows - sadece birden fazla görsel varsa göster */}
        {menuImages.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-coffee-900/10 backdrop-blur-sm border border-coffee-900/20 text-coffee-900 flex items-center justify-center hover:bg-coffee-900/20 transition-all duration-300 group"
              aria-label="Önceki Menü"
            >
              <i className="fas fa-chevron-left text-sm md:text-base group-hover:-translate-x-0.5 transition-transform"></i>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-coffee-900/10 backdrop-blur-sm border border-coffee-900/20 text-coffee-900 flex items-center justify-center hover:bg-coffee-900/20 transition-all duration-300 group"
              aria-label="Sonraki Menü"
            >
              <i className="fas fa-chevron-right text-sm md:text-base group-hover:translate-x-0.5 transition-transform"></i>
            </button>
          </>
        )}

        {/* Indicator Dots - sadece birden fazla görsel varsa göster */}
        {menuImages.length > 1 && (
          <div className="absolute bottom-6 md:bottom-8 left-0 right-0 z-10 flex justify-center items-center gap-2 md:gap-3">
            {menuImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${index === currentIndex
                    ? 'w-8 md:w-10 h-2 bg-coffee-900'
                    : 'w-2 h-2 bg-coffee-900/40 hover:bg-coffee-900/60'
                  }`}
                aria-label={`${index + 1}. menüye git`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom Section with Info */}
      <div className="bg-coffee-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-coffee-400 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-3">
            Menü
          </p>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase">
            ProEspresso <span className="text-coffee-500">Lezzetleri</span>
          </h2>
          <div className="w-12 h-[2px] bg-coffee-500 mx-auto mt-6 opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default MenuGrid;
