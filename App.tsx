import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import MenuGrid from './components/MenuGrid';
import FranchiseForm from './components/FranchiseForm';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-coffee-500 selection:text-white">
      <Header />

      <main className="flex-grow">
        <Hero />

        <section id="galeri">
          <ImageCarousel />
        </section>

        {/* Story Section - Vizyonumuz */}
        <section id="story" className="bg-white">
          <div className="max-w-3xl mx-auto px-6 py-32">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-coffee-500 text-[10px] font-bold tracking-[0.5em] uppercase">{t('vision.label')}</h2>
                <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-coffee-900">
                  {t('vision.title1')} <br /> <span className="text-coffee-500 italic font-serif lowercase text-4xl md:text-5xl">{t('vision.title2')}</span>
                </h3>
              </div>

              <div className="space-y-6 text-coffee-800/80 text-lg leading-relaxed font-serif italic border-l-2 border-coffee-500/20 pl-6">
                <p>{t('vision.quote')}</p>
              </div>

              <p className="text-coffee-900/60 leading-loose text-sm">
                {t('vision.description')}
              </p>
            </div>
          </div>

          {/* Carousel tarzı başlık bandı */}
          <div className="bg-coffee-900 text-white py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-coffee-400 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-3">{t('vision.bannerLabel')}</p>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase">
                {t('vision.bannerTitle1')} <span className="text-coffee-500">{t('vision.bannerTitle2')}</span>
              </h2>
              <div className="w-12 h-[2px] bg-coffee-500 mx-auto mt-6 opacity-50"></div>
            </div>
          </div>
        </section>

        <MenuGrid />
        <FranchiseForm />
        <LocationSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;