import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      const offset = 100;
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

    // Mobil menüyü kapat
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuLinks = [
    { label: 'Galeri', href: '#galeri', id: 'galeri' },
    { label: 'Vizyonumuz', href: '#story', id: 'story' },
    { label: 'Menü', href: '#menu', id: 'menu' },
    { label: 'Franchise', href: '#franchise', id: 'franchise' },
    { label: 'Lokasyon', href: '#location', id: 'location' },
    { label: 'İletişim', href: '#iletisim', id: 'iletisim' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm border-b border-cream-100' : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, 'top')}
            className="block transition-transform duration-300 hover:scale-105 z-50"
          >
            <img
              src="/logo.png"
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-[11px] font-bold tracking-widest uppercase text-coffee-900">
            {menuLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.id)}
                className="hover:text-coffee-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Hamburger Icon (Mobile) */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center text-coffee-900 hover:text-coffee-500 transition-colors z-50"
            aria-label="Menü"
          >
            {isMobileMenuOpen ? (
              <i className="fas fa-times text-xl"></i>
            ) : (
              <i className="fas fa-bars text-xl"></i>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 bg-coffee-900/95 backdrop-blur-lg z-40 md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 h-full w-[85%] max-w-sm bg-cream-25 shadow-2xl transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full pt-24 px-8">
            {/* Mobile Menu Links */}
            <nav className="flex flex-col space-y-6">
              {menuLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-coffee-900 text-lg font-black tracking-wider uppercase hover:text-coffee-500 transition-all duration-300 border-b border-cream-200 pb-4 transform hover:translate-x-2"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                    transition: `all 0.3s ease ${index * 50}ms`
                  }}
                >
                  <i className="fas fa-chevron-right text-coffee-500 text-xs mr-3 opacity-50"></i>
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Footer */}
            <div className="mt-auto mb-8 pt-8 border-t border-cream-200">
              <p className="text-coffee-800/50 text-xs font-serif italic leading-relaxed">
                ProEspresso - Kahvenin geleceğini tasarlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;