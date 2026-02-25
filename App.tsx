

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import MenuGrid from './components/MenuGrid';
import FranchiseForm from './components/FranchiseForm';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-coffee-500 selection:text-white">
      <Header />

      <main className="flex-grow">
        <Hero />

        <section id="galeri">
          <ImageCarousel />
        </section>

        {/* Story Section - Vizyonumuz */}
        <section id="story" className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-coffee-500 text-[10px] font-bold tracking-[0.5em] uppercase">Vizyonumuz</h2>
                <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-coffee-900">
                  KAHVENİN <br /> <span className="text-coffee-500 italic font-serif lowercase text-4xl md:text-5xl">geleceğini tasarlıyoruz</span>
                </h3>
              </div>

              <div className="space-y-6 text-coffee-800/80 text-lg leading-relaxed font-serif italic border-l-2 border-coffee-500/20 pl-6">
                <p>
                  "Gerçek kahve, çekirdeğin doğasından gelen notaları en saf haliyle fincana yansıtabilmektir."
                </p>
              </div>

              <p className="text-coffee-900/60 leading-loose text-sm">
                ProEspresso, en kaliteli çekirdeklerin bilimsel yöntemler ve modern teknolojiyle buluştuğu bir noktadır. Dünyanın en özel bölgelerinden seçilen hasatlarımızı, her birinin kendine özgü karakterini koruyarak kavuruyor ve profesyonel ekipmanlarla servis ediyoruz. Amacımız, kahveyi sadece bir içecek olarak değil, her yudumda hissedilen bir sanat formu olarak sunmaktır.
              </p>

              <div className="pt-6">
                <button className="group flex items-center gap-4 px-10 py-5 bg-coffee-900 text-white text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-coffee-600 transition-all duration-500 shadow-xl shadow-coffee-900/10">
                  <span>Detaylı Bilgi</span>
                  <i className="fas fa-chevron-right text-[8px] group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <MenuGrid />

        <FranchiseForm />

        <LocationSection />
      </main>

      <Footer />

      {/* Floating Action Button for Mobile / Quick Contact */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a
          href="#franchise"
          className="w-14 h-14 bg-coffee-900 rounded-full flex items-center justify-center text-white shadow-2xl border border-white/20"
        >
          <i className="fas fa-paper-plane text-lg"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
