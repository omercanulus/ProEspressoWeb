import React from 'react';

const LocationSection: React.FC = () => {
  const mapUrl = "https://www.google.com/maps/place/Pro+Espresso+Coffee+Co./@40.8494117,29.2979696,733m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14caddfcf4ca30d7:0x4701a2273ce9329b!8m2!3d40.8494117!4d29.3005445!16s%2Fg%2F11n3kgf_pd";

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
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAkGgzRGoqU-9ZxCpUZet9en0mxhd5_Mm0&q=Pro+Espresso+Coffee+Co.&center=40.8494117,29.3005445&zoom=16&language=tr"
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