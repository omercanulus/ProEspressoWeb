
import React from 'react';

const LocationSection: React.FC = () => {
  const mapUrl = "https://www.google.com/maps/place//data=!4m2!3m1!1s0x14cadd75571ee583:0xa14e225f44604d1d";

  return (
    <section id="location" className="relative w-full bg-white overflow-hidden pt-32 border-t border-cream-100">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="max-w-2xl">
            <h2 className="text-coffee-500 text-[10px] font-bold tracking-[0.5em] uppercase mb-4">İletişim & Lokasyon</h2>
            <h3 className="text-5xl md:text-7xl font-black text-coffee-900 tracking-tighter leading-none mb-6 uppercase">
              BİZE <span className="text-coffee-500 italic font-serif lowercase text-4xl md:text-6xl">ulaşın</span>
            </h3>
            <p className="text-coffee-800/60 text-lg font-serif italic max-w-lg">
              Tuzla'nın kalbinde, Vema'da nitelikli kahve deneyiminin tek adresinde sizi bekliyoruz.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
            <div className="bg-cream-50 border border-cream-200 p-8 flex items-center gap-6 flex-grow lg:min-w-[350px]">
              <div className="w-12 h-12 rounded-full bg-coffee-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-coffee-500/20">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p className="text-coffee-900 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Merkez Mağaza</p>
                <p className="text-coffee-800/60 text-[13px] leading-relaxed">Vema Tuzla, İçmeler, Çağdaş Sk No: 1,<br />34947 Tuzla/İstanbul</p>
              </div>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-4 py-8 px-12 bg-coffee-900 text-white text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-500 hover:bg-coffee-600 shrink-0 shadow-xl shadow-coffee-900/10"
            >
              <span className="relative z-10">HARİTADA AÇ</span>
              <i className="fas fa-location-arrow text-[10px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Full Width Integrated Map - More readable version */}
      <div className="relative w-full h-[600px] mt-10">
        <div className="absolute inset-0 transition-all duration-[2s]">
          <iframe
            title="ProEspresso Location Map"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=100%25&height=600&hl=tr&q=Vema+Tuzla,+%C4%B0%C3%A7meler,+%C3%87a%C4%9Fda%C5%9F+Sk+No:1,+34947+Tuzla,+%C4%B0stanbul+(ProEspresso)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
            className="filter saturate-[0.8] opacity-80 hover:opacity-100 transition-opacity"
          ></iframe>
        </div>

        {/* Subtle Overlays */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-transparent h-48"></div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/40 to-transparent h-48 bottom-0"></div>
      </div>
    </section>
  );
};

export default LocationSection;