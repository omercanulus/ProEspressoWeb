import React from 'react';
import { useTranslation } from 'react-i18next';
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
  const [modal, setModal] = React.useState<'kvkk' | 'gizlilik' | null>(null);
  const { t } = useTranslation();

  return (
    <>
      <LegalModal type={modal} onClose={() => setModal(null)} />
      <footer id="iletisim" className="bg-white pt-24 pb-12 text-coffee-900 border-t border-cream-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 lg:col-span-1">
              <div className="mb-10">
                <img
                  src="/logo.png"
                  alt="ProEspresso Logo"
                  className="h-20 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const target = e.currentTarget.parentElement;
                    if (target) {
                      target.innerHTML = `<span class="text-3xl font-black text-coffee-900 tracking-tighter uppercase">PRO<span class="text-coffee-500">.</span></span>`;
                    }
                  }}
                />
              </div>
              <p className="text-coffee-800/50 text-xs leading-relaxed mb-8 font-serif italic">
                {t('footer.tagline')}
              </p>
              <div className="flex space-x-6">
                <a href="https://www.instagram.com/proespressocoffee?igsh=YnRsdHo3emhweHNq" target="_blank" rel="noopener noreferrer" className="text-coffee-900/40 hover:text-coffee-500 transition-colors">
                  <i className="fab fa-instagram text-lg"></i>
                </a>
              </div>
            </div>

            <div>
              <h6 className="text-coffee-900 font-black text-[10px] tracking-[0.3em] uppercase mb-10">{t('footer.corporate')}</h6>
              <ul className="space-y-4 text-coffee-900/60 text-[11px] font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-coffee-500 transition-colors">{t('footer.about')}</a></li>
                <li><a href="#menu" className="hover:text-coffee-500 transition-colors">{t('footer.menu')}</a></li>
                <li><a href="#franchise" className="hover:text-coffee-500 transition-colors">{t('footer.franchise')}</a></li>
                <li><a href="#" className="hover:text-coffee-500 transition-colors">{t('footer.contact')}</a></li>
              </ul>
            </div>

            <div>
              <h6 className="text-coffee-900 font-black text-[10px] tracking-[0.3em] uppercase mb-10">{t('footer.hours')}</h6>
              <ul className="space-y-4 text-coffee-900/60 text-[11px] uppercase tracking-widest">
                <li className="flex justify-between border-b border-cream-100 pb-2"><span>{t('footer.weekdays')}</span><span className="font-bold text-coffee-900">{t('footer.weekdaysHours')}</span></li>
                <li className="flex justify-between border-b border-cream-100 pb-2"><span>{t('footer.saturday')}</span><span className="font-bold text-coffee-900">{t('footer.saturdayHours')}</span></li>
                <li className="flex justify-between"><span>{t('footer.sunday')}</span><span className="font-bold text-coffee-900">{t('footer.sundayHours')}</span></li>
              </ul>
            </div>

            <div>
              <h6 className="text-coffee-900 font-black text-[10px] tracking-[0.3em] uppercase mb-10">{t('footer.contact')}</h6>
              <address className="not-italic text-coffee-800/60 text-xs leading-relaxed mb-8 font-serif italic">
                Vema Tuzla, İçmeler, Çağdaş Sk No: 1<br />
                34947 Tuzla / İstanbul, Türkiye
              </address>
              <div className="space-y-3">
                <p className="text-coffee-900 text-[12px] font-bold">
                  <i className="fas fa-phone mr-3 text-coffee-500 opacity-50"></i> ----
                </p>
                <a href="mailto:info@proespressocoffee.com" className="text-coffee-900 text-[12px] font-bold hover:text-coffee-500 transition-colors flex items-center">
                  <i className="fas fa-envelope mr-3 text-coffee-500 opacity-50"></i> info@proespressocoffee.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-cream-100">
            <p className="text-coffee-900/30 text-[9px] font-bold tracking-[0.3em] uppercase mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PROESPRESSO. {t('footer.rights')}
            </p>
            <div className="flex gap-8">
              <button onClick={() => setModal("gizlilik")} className="text-coffee-900/30 text-[9px] font-bold tracking-[0.3em] uppercase hover:text-coffee-500 transition-colors">{t('footer.privacy')}</button>
              <button onClick={() => setModal("kvkk")} className="text-coffee-900/30 text-[9px] font-bold tracking-[0.3em] uppercase hover:text-coffee-500 transition-colors">{t('footer.kvkk')}</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;