import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-coffee-900">
      {/* Placeholder rengi — fotoğraf yüklenene kadar görünür */}
      <div className="absolute inset-0 z-0 bg-coffee-900" />

      {/* Hero fotoğrafı — yüklenince fade-in */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url('/images/hero.jpg')`,
          opacity: imgLoaded ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      >
        {/* Yükleme tetikleyici (invisible img) */}
        <img
          src="/images/hero.jpg"
          alt=""
          aria-hidden="true"
          className="absolute w-0 h-0 opacity-0"
          onLoad={() => setImgLoaded(true)}
        />
      </div>

      <div className="absolute inset-0 z-10 bg-white/50 backdrop-blur-[1px]" />

      <div className="relative z-20 text-center max-w-5xl px-6 flex flex-col items-center">
        <div className="mb-12">
          {/* Logo placeholder (yüklenene kadar boyutu tutan boş alan) */}
          {!logoLoaded && (
            <div className="w-[280px] md:w-[450px] h-[80px] md:h-[130px] rounded bg-coffee-400/20 animate-pulse mx-auto" />
          )}
          <img
            src="/logo.png"
            alt="ProEspresso Logo"
            className="w-full h-auto max-w-[280px] md:max-w-[450px] object-contain"
            style={{
              opacity: logoLoaded ? 1 : 0,
              transition: 'opacity 0.6s ease',
              display: logoLoaded ? 'block' : 'block',
            }}
            onLoad={() => setLogoLoaded(true)}
            onError={(e) => {
              setLogoLoaded(true);
              e.currentTarget.style.display = 'none';
              const target = e.currentTarget.parentElement;
              if (target) {
                target.innerHTML = `<h1 class="text-7xl md:text-9xl font-black text-coffee-900 tracking-tighter uppercase">PRO<span class="text-coffee-500">.</span></h1>`;
              }
            }}
          />
        </div>

        <p className="text-lg md:text-2xl text-coffee-800/80 font-light max-w-2xl mx-auto leading-relaxed mb-12 tracking-wide">
          "The Power of Coffee. The Art of Taste ."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-64 px-12 py-5 bg-coffee-900 text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-coffee-600 transition-all duration-500 rounded-sm shadow-xl shadow-coffee-900/20"
          >
            Menüyü Keşfet
          </a>
          <a
            href="#story"
            className="w-full sm:w-64 px-12 py-5 border border-coffee-900/20 text-coffee-900 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-coffee-900 hover:text-white transition-all duration-500 rounded-sm"
          >
            Vizyonumuz
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-20">
        <div className="w-[1px] h-16 bg-coffee-900"></div>
      </div>
    </section>
  );
};

export default Hero;