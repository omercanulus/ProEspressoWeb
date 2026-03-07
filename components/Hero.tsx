import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-cream-25">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[2000ms] scale-105"
        style={{ backgroundImage: `url('/images/hero.jpg')` }}
      />
      <div className="absolute inset-0 z-10 bg-white/50 backdrop-blur-[1px]" />

      <div className="relative z-20 text-center max-w-5xl px-6 flex flex-col items-center">
        <div className="mb-12">
          <img
            src="/logo.png"
            alt="ProEspresso Logo"
            className="w-full h-auto max-w-[280px] md:max-w-[450px] object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const target = e.currentTarget.parentElement;
              if (target) {
                target.innerHTML = `<h1 class="text-7xl md:text-9xl font-black text-coffee-900 tracking-tighter uppercase">PRO<span class="text-coffee-500">.</span></h1>`;
              }
            }}
          />
        </div>

        <p className="text-lg md:text-2xl text-coffee-800/80 font-light max-w-2xl mx-auto leading-relaxed mb-12 font-serif italic">
          "{t('hero.tagline')}"
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-64 px-12 py-5 bg-coffee-900 text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-coffee-600 transition-all duration-500 rounded-sm shadow-xl shadow-coffee-900/20"
          >
            {t('hero.exploreMenu')}
          </a>
          <a
            href="#story"
            className="w-full sm:w-64 px-12 py-5 border border-coffee-900/20 text-coffee-900 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-coffee-900 hover:text-white transition-all duration-500 rounded-sm"
          >
            {t('hero.ourVision')}
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