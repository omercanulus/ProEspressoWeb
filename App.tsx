
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
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
        
        {/* Story Section - Lightened and Refined */}
        <section id="story" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] bg-cream-50 overflow-hidden shadow-2xl rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Nitelikli Kahve Sanatı" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s] scale-105 hover:scale-100"
                />
              </div>
              {/* Badge lightened to Coffee-500 for better aesthetic fit */}
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-coffee-500 flex items-center justify-center p-8 text-center hidden xl:flex shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <span className="text-white text-[10px] font-bold tracking-[0.4em] uppercase">
                  Est. 2024 <br/> Kusursuz <br/> Kavurma
                </span>
              </div>
            </div>
            
            <div className="space-y-10 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-coffee-500 text-[10px] font-bold tracking-[0.5em] uppercase">Vizyonumuz</h2>
                <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-coffee-900">
                  KAHVENİN <br/> <span className="text-coffee-500 italic font-serif lowercase text-4xl md:text-5xl">geleceğini tasarlıyoruz</span>
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
