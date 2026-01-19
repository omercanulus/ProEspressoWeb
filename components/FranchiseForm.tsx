
import React, { useState } from 'react';
import { FranchiseFormData } from '../types';

const FranchiseForm: React.FC = () => {
  const [formData, setFormData] = useState<FranchiseFormData>({
    name: '',
    phone: '',
    city: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Başvurunuz başarıyla alındı. Ekibimiz sizinle en kısa sürede iletişime geçecektir.");
    setFormData({ name: '', phone: '', city: '', budget: '' });
  };

  return (
    <section id="franchise" className="py-32 bg-cream-100 text-coffee-900 relative overflow-hidden border-t border-cream-200/30">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-24 relative z-10">
        <div className="lg:w-1/2 space-y-10">
          <div>
            <h2 className="text-coffee-500 text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Ortaklık</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8">
              PROESPRESSO <br/> <span className="text-coffee-500">AİLESİNE KATIL</span>
            </h3>
            <p className="text-coffee-800/70 text-lg leading-relaxed font-serif">
              Tutkumuzu paylaşan, vizyon sahibi ortaklar arıyoruz. ProEspresso, yılların birikimi olan kavurma tecrübesiyle harmanlanmış, karlı ve sürdürülebilir bir iş modeli sunar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 border border-coffee-900/10 bg-white shadow-sm hover:shadow-md transition-shadow">
              <i className="fas fa-star text-coffee-500 mb-4 block text-xl"></i>
              <h5 className="font-bold text-sm tracking-widest uppercase mb-2">Marka Gücü</h5>
              <p className="text-xs text-coffee-800/60 leading-relaxed">Uluslararası standartlarda marka kimliği ve yüksek müşteri memnuniyeti.</p>
            </div>
            <div className="p-8 border border-coffee-900/10 bg-white shadow-sm hover:shadow-md transition-shadow">
              <i className="fas fa-microchip text-coffee-500 mb-4 block text-xl"></i>
              <h5 className="font-bold text-sm tracking-widest uppercase mb-2">Teknoloji & Altyapı</h5>
              <p className="text-xs text-coffee-800/60 leading-relaxed">En son nesil ekipmanlar ve profesyonel operasyonel sistemler.</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-white p-12 shadow-xl border border-cream-200">
            <h4 className="text-coffee-900 text-2xl font-black mb-8 tracking-tight uppercase">Başvuru Formu</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-coffee-900/40 mb-3">Adınız Soyadınız</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ad Soyad"
                    className="w-full bg-cream-50 border border-cream-200 p-4 text-sm text-coffee-900 coffee-focus placeholder:text-coffee-900/30"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-coffee-900/40 mb-3">Telefon</label>
                  <input 
                    required
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+90 5xx"
                    className="w-full bg-cream-50 border border-cream-200 p-4 text-sm text-coffee-900 coffee-focus placeholder:text-coffee-900/30"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-coffee-900/40 mb-3">Lokasyon Hedefi</label>
                <input 
                  required
                  type="text" 
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  placeholder="Şehir / İlçe"
                  className="w-full bg-cream-50 border border-cream-200 p-4 text-sm text-coffee-900 coffee-focus placeholder:text-coffee-900/30"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-coffee-900/40 mb-3">Yatırım Bütçesi</label>
                <select 
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full bg-cream-50 border border-cream-200 p-4 text-sm text-coffee-900 coffee-focus"
                >
                  <option value="" disabled>Seçiniz</option>
                  <option value="50-100k">1.000.000 - 2.000.000 TL</option>
                  <option value="100-250k">2.000.000 - 5.000.000 TL</option>
                  <option value="250k+">5.000.000 TL +</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="w-full bg-coffee-900 hover:bg-coffee-600 text-white py-5 text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-500 shadow-xl shadow-coffee-900/20"
              >
                Hemen Başvur
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseForm;