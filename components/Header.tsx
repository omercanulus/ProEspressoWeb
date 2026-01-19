
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === 'top' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-cream-100' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => scrollToSection(e, 'top')}
          className="block transition-transform duration-300 hover:scale-105"
        >
          <img
            src="logo.png"
            alt="ProEspresso"
            className={`${isScrolled ? 'h-10' : 'h-14'} w-auto transition-all duration-500 object-contain`}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const target = e.currentTarget.parentElement;
              if (target) {
                target.innerHTML = `<span class="text-2xl font-black tracking-tighter text-coffee-900 uppercase">PR<span class="text-coffee-500">.</span></span>`;
              }
            }}
          />
        </a>

        <nav className="hidden md:flex items-center space-x-10 text-[11px] font-bold tracking-widest uppercase text-coffee-900">
          <a href="#menu" onClick={(e) => scrollToSection(e, 'menu')} className="hover:text-coffee-600 transition-colors">Menü</a>
          <a href="#story" onClick={(e) => scrollToSection(e, 'story')} className="hover:text-coffee-600 transition-colors">Vizyonumuz</a>
          <a href="#location" onClick={(e) => scrollToSection(e, 'location')} className="hover:text-coffee-600 transition-colors">Lokasyon</a>
        </nav>

        <a
          href="#franchise"
          onClick={(e) => scrollToSection(e, 'franchise')}
          className="px-8 py-3 bg-coffee-900 text-white rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-coffee-600 transition-all shadow-lg shadow-coffee-900/10"
        >
          Franchise
        </a>
      </div>
    </header>
  );
};

export default Header;
