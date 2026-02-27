import React, { useState, useRef, useEffect } from 'react';

const FORMSPREE_URL = "https://formspree.io/f/xbdawynl";

const SEHIRLER = [
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin",
  "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa",
  "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan",
  "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta",
  "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir",
  "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla",
  "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt",
  "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak",
  "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman",
  "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  budget: string;
  note: string;
}

// Özel Şehir Dropdown Bileşeni
const CityDropdown: React.FC<{
  value: string;
  onChange: (city: string) => void;
}> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = SEHIRLER.filter(s =>
    s.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full bg-cream-50 border p-4 text-sm text-left flex justify-between items-center transition-colors ${open ? 'border-coffee-500' : 'border-cream-200'
          } ${!value ? 'text-coffee-900/30' : 'text-coffee-900'}`}
      >
        <span>{value || 'Şehir seçin'}</span>
        <i className={`fas fa-chevron-down text-[10px] text-coffee-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}></i>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 z-50 bg-white border border-coffee-200 shadow-2xl shadow-coffee-900/10 mt-1">
          {/* Arama kutusu */}
          <div className="p-3 border-b border-cream-100">
            <div className="relative">
              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-[10px] text-coffee-900/30"></i>
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Şehir ara..."
                className="w-full pl-8 pr-4 py-2 text-sm bg-cream-50 border border-cream-200 text-coffee-900 placeholder:text-coffee-900/30 focus:outline-none focus:border-coffee-500"
              />
            </div>
          </div>

          {/* Liste */}
          <ul className="max-h-52 overflow-y-auto">
            {filtered.length === 0 ? (
              <li className="px-4 py-3 text-sm text-coffee-900/40 text-center font-serif italic">Şehir bulunamadı</li>
            ) : (
              filtered.map((sehir) => (
                <li
                  key={sehir}
                  onClick={() => { onChange(sehir); setOpen(false); setSearch(''); }}
                  className={`px-4 py-3 text-sm cursor-pointer transition-colors flex items-center justify-between group
                    ${value === sehir
                      ? 'bg-coffee-900 text-white font-bold'
                      : 'text-coffee-900 hover:bg-cream-50'
                    }`}
                >
                  <span className="tracking-wide">{sehir}</span>
                  {value === sehir && <i className="fas fa-check text-[10px]"></i>}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

// Özel Bütçe Dropdown Bileşeni
const BudgetDropdown: React.FC<{
  value: string;
  onChange: (budget: string) => void;
}> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const options = [
    { value: "1-2M TL", label: "1.000.000 – 2.000.000 TL" },
    { value: "2-5M TL", label: "2.000.000 – 5.000.000 TL" },
    { value: "5M+ TL", label: "5.000.000 TL ve üzeri" },
  ];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const selected = options.find(o => o.value === value);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full bg-cream-50 border p-4 text-sm text-left flex justify-between items-center transition-colors ${open ? 'border-coffee-500' : 'border-cream-200'
          } ${!value ? 'text-coffee-900/30' : 'text-coffee-900'}`}
      >
        <span>{selected ? selected.label : 'Bütçe aralığı seçin'}</span>
        <i className={`fas fa-chevron-down text-[10px] text-coffee-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}></i>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 z-50 bg-white border border-coffee-200 shadow-2xl shadow-coffee-900/10 mt-1">
          <ul>
            {options.map((opt) => (
              <li
                key={opt.value}
                onClick={() => { onChange(opt.value); setOpen(false); }}
                className={`px-4 py-4 text-sm cursor-pointer transition-colors flex items-center justify-between
                  ${value === opt.value
                    ? 'bg-coffee-900 text-white font-bold'
                    : 'text-coffee-900 hover:bg-cream-50'
                  }`}
              >
                <span>{opt.label}</span>
                {value === opt.value && <i className="fas fa-check text-[10px]"></i>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Ana Form Bileşeni
const FranchiseForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '', phone: '', email: '', city: '', budget: '', note: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [phoneError, setPhoneError] = useState('');

  const isValidPhone = (phone: string) =>
    /^(\+90|0)?[0-9]{10}$/.test(phone.replace(/\s/g, ''));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidPhone(formData.phone)) {
      setPhoneError('Geçerli bir numara girin (örn: 0532 XXX XX XX)');
      return;
    }
    setPhoneError('');
    setStatus('loading');

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setFormData({ name: '', phone: '', email: '', city: '', budget: '', note: '' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="franchise" className="py-32 bg-cream-100 text-coffee-900 relative overflow-hidden border-t border-cream-200/30">
        <div className="max-w-xl mx-auto px-6 text-center space-y-6">
          <div className="w-20 h-20 bg-coffee-900 rounded-full flex items-center justify-center mx-auto">
            <i className="fas fa-check text-white text-2xl"></i>
          </div>
          <h3 className="text-4xl font-black tracking-tighter text-coffee-900 uppercase">Başvurunuz Alındı</h3>
          <p className="text-coffee-800/60 font-serif italic text-lg">
            Ekibimiz en kısa sürede sizinle iletişime geçecektir.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 text-[11px] font-bold tracking-widest uppercase text-coffee-500 hover:text-coffee-900 transition-colors"
          >
            ← Yeni Başvuru Yap
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="franchise" className="py-32 bg-cream-100 text-coffee-900 relative overflow-hidden border-t border-cream-200/30">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-24 relative z-10">

        {/* Sol taraf — açıklama */}
        <div className="lg:w-1/2 space-y-10">
          <div>
            <h2 className="text-coffee-500 text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Ortaklık</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8">
              PROESPRESSO <br /> <span className="text-coffee-500">AİLESİNE KATIL</span>
            </h3>
            <p className="text-coffee-800/70 text-lg leading-relaxed font-serif">
              Tutkumuzu paylaşan, vizyon sahibi ortaklar arıyoruz. ProEspresso, yılların birikimi olan kavurma tecrübesiyle harmanlanmış, karlı ve sürdürülebilir bir iş modeli sunar.
            </p>
          </div>

        </div>

        {/* Sağ taraf — form */}
        <div className="lg:w-1/2">
          <div className="bg-white p-12 shadow-xl border border-cream-200">
            <h4 className="text-coffee-900 text-2xl font-black mb-8 tracking-tight uppercase">Başvuru Formu</h4>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Ad Soyad + Telefon */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-coffee-900/40 mb-3">Ad Soyad</label>
                  <input
                    required type="text"
                    value={formData.name}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[0-9]/g, '');
                      setFormData({ ...formData, name: val });
                    }}
                    placeholder="Ad Soyad"
                    className="w-full bg-cream-50 border border-cream-200 p-4 text-sm text-coffee-900 placeholder:text-coffee-900/30 focus:outline-none focus:border-coffee-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-coffee-900/40 mb-3">Telefon</label>
                  <input
                    required type="tel"
                    value={formData.phone}
                    onChange={(e) => { const val = e.target.value.replace(/[^0-9+\s]/g, ''); setFormData({ ...formData, phone: val }); setPhoneError(''); }}
                    placeholder="0532 XXX XX XX"
                    className={`w-full bg-cream-50 border p-4 text-sm text-coffee-900 placeholder:text-coffee-900/30 focus:outline-none transition-colors ${phoneError ? 'border-red-400' : 'border-cream-200 focus:border-coffee-500'}`}
                  />
                  {phoneError && <p className="text-red-400 text-[10px] mt-1.5">{phoneError}</p>}
                </div>
              </div>

              {/* E-posta */}
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-coffee-900/40 mb-3">E-posta</label>
                <input
                  required type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ornek@gmail.com"
                  className="w-full bg-cream-50 border border-cream-200 p-4 text-sm text-coffee-900 placeholder:text-coffee-900/30 focus:outline-none focus:border-coffee-500 transition-colors"
                />
              </div>

              {/* Şehir + Bütçe */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-coffee-900/40 mb-3">Hedef Şehir</label>
                  <CityDropdown
                    value={formData.city}
                    onChange={(city) => setFormData({ ...formData, city })}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-coffee-900/40 mb-3">Yatırım Bütçesi</label>
                  <BudgetDropdown
                    value={formData.budget}
                    onChange={(budget) => setFormData({ ...formData, budget })}
                  />
                </div>
              </div>

              {/* Not */}
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-coffee-900/40 mb-3">
                  Eklemek İstedikleriniz <span className="normal-case tracking-normal font-normal opacity-60">(isteğe bağlı)</span>
                </label>
                <textarea
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="Kendinizden, hedeflerinizden veya aklınızdaki lokasyondan bahsedebilirsiniz..."
                  rows={4}
                  className="w-full bg-cream-50 border border-cream-200 p-4 text-sm text-coffee-900 placeholder:text-coffee-900/30 focus:outline-none focus:border-coffee-500 transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-xs text-center py-2">
                  Bir hata oluştu. Lütfen tekrar deneyin.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || !formData.city || !formData.budget}
                className="w-full bg-coffee-900 hover:bg-coffee-600 disabled:opacity-40 disabled:cursor-not-allowed text-white py-5 text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-500 shadow-xl shadow-coffee-900/20 flex items-center justify-center gap-3"
              >
                {status === 'loading' ? (
                  <><i className="fas fa-circle-notch fa-spin"></i><span>Gönderiliyor...</span></>
                ) : (
                  <span>Hemen Başvur</span>
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseForm;