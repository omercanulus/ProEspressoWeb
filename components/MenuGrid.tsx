
import React from 'react';
import { MenuItem } from '../types';

const menuData: MenuItem[] = [
  {
    title: "Espresso Bar",
    description: "Zanaatımızın kalbi. Bilimsel hassasiyet ve nitelikli çekirdekler.",
    icon: "fa-bolt",
    items: ["Signature Espresso", "Ristretto", "Americano", "Cortado", "Macchiato"]
  },
  {
    title: "Sütlü Kahveler",
    description: "İpeksi doku ve dengeli tatlılık. Her fincanda mükemmel oranlar.",
    icon: "fa-droplet",
    items: ["Flat White", "Caffe Latte", "Cappuccino", "Mocha", "Spanish Latte"]
  },
  {
    title: "Demleme Barı",
    description: "Kahve gurmeleri için alternatif yöntemler. Yavaş ve nitelikli.",
    icon: "fa-flask-vial",
    items: ["V60 Pour Over", "Chemex", "Aeropress", "Syphon", "Cold Brew (24h)"]
  }
];

const MenuGrid: React.FC = () => {
  return (
    <section id="menu" className="py-32 bg-cream-25 text-coffee-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-coffee-500 text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Seçki</h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-coffee-900 uppercase">DENEYİMİN <span className="text-coffee-500">TADI</span></h3>
          <div className="w-16 h-[2px] bg-coffee-500 mx-auto mt-8 opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {menuData.map((section, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-cream-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-700 relative overflow-hidden rounded-sm"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity duration-700">
                <i className={`fas ${section.icon} text-9xl -rotate-12`}></i>
              </div>
              
              <div className="w-14 h-14 bg-coffee-900 text-white flex items-center justify-center mb-10 group-hover:bg-coffee-500 transition-colors duration-500 shadow-lg shadow-coffee-900/10">
                <i className={`fas ${section.icon} text-xl`}></i>
              </div>
              
              <h4 className="text-2xl font-black mb-6 tracking-tight uppercase text-coffee-900">{section.title}</h4>
              <p className="text-coffee-800/60 text-[13px] leading-relaxed mb-10 font-serif italic">
                {section.description}
              </p>
              
              <ul className="space-y-5 w-full">
                {section.items.map((item, i) => (
                  <li key={i} className="text-[12px] font-bold border-b border-cream-50 pb-4 flex justify-between items-center group/item hover:text-coffee-500 transition-colors cursor-pointer">
                    <span className="tracking-widest uppercase">{item}</span>
                    <i className="fas fa-plus text-[7px] opacity-0 group-hover/item:opacity-100 transition-all transform group-hover/item:rotate-90"></i>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuGrid;
