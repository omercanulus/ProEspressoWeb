import React, { useEffect } from 'react';

interface LegalModalProps {
  type: 'kvkk' | 'gizlilik' | null;
  onClose: () => void;
}

const kvkkContent = {
  title: 'KVKK Aydınlatma Metni',
  content: `
    <h3>1. Veri Sorumlusu</h3>
    <p>Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında <strong>Pro Espresso Coffee Co.</strong> ("Şirket") tarafından hazırlanmıştır.</p>
    <p>Veri Sorumlusu:<br/>
    Pro Espresso Coffee Co.<br/>
    Vema Tuzla, İçmeler, Çağdaş Sk No: 1, 34947 Tuzla/İstanbul<br/>
    E-posta: info@proespressocoffee.com</p>

    <h3>2. Hangi Kişisel Veriler İşlenmektedir?</h3>
    <p>Franchise başvuru formu aracılığıyla aşağıdaki kişisel verileriniz toplanmaktadır:</p>
    <ul>
      <li>Ad ve soyad</li>
      <li>Telefon numarası</li>
      <li>E-posta adresi</li>
      <li>Hedef şehir / ilçe bilgisi</li>
      <li>Yatırım bütçesi bilgisi</li>
      <li>Tarafınızca paylaşılan ek notlar</li>
    </ul>

    <h3>3. Kişisel Verilerin İşlenme Amaçları</h3>
    <p>Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
    <ul>
      <li>Franchise başvurunuzun değerlendirilmesi</li>
      <li>Başvurunuz hakkında sizinle iletişime geçilmesi</li>
      <li>Yasal yükümlülüklerin yerine getirilmesi</li>
    </ul>

    <h3>4. Kişisel Verilerin Aktarılması</h3>
    <p>Kişisel verileriniz; hukuki zorunluluklar dışında üçüncü kişilerle paylaşılmamaktadır. Başvuru süreçlerinin yürütülmesi amacıyla yalnızca Şirket yetkilileriyle paylaşılmaktadır.</p>

    <h3>5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h3>
    <p>Kişisel verileriniz, web sitemizde yer alan franchise başvuru formu aracılığıyla elektronik ortamda toplanmaktadır. İşlemenin hukuki sebebi; KVKK madde 5/2-f kapsamında Şirketimizin meşru menfaatlerinin korunmasıdır.</p>

    <h3>6. Haklarınız</h3>
    <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
    <ul>
      <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
      <li>İşlenmişse buna ilişkin bilgi talep etme</li>
      <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
      <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
      <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
      <li>Silinmesini veya yok edilmesini isteme</li>
      <li>İşlemenin otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize sonuç doğurmasına itiraz etme</li>
      <li>Kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
    </ul>
    <p>Bu haklarınızı kullanmak için <strong>info@proespressocoffee.com</strong> adresine e-posta gönderebilirsiniz.</p>
  `
};

const gizlilikContent = {
  title: 'Gizlilik Politikası',
  content: `
    <h3>1. Genel Bilgiler</h3>
    <p>Bu Gizlilik Politikası, <strong>Pro Espresso Coffee Co.</strong> olarak proespressocoffee.com web sitesini ziyaret ettiğinizde ve franchise başvuru formunu kullandığınızda kişisel verilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklamaktadır.</p>

    <h3>2. Toplanan Veriler</h3>
    <p>Web sitemizi ziyaret ettiğinizde veya franchise başvuru formunu doldurduğunuzda aşağıdaki bilgiler toplanabilir:</p>
    <ul>
      <li><strong>Doğrudan verdiğiniz bilgiler:</strong> Ad soyad, telefon, e-posta, şehir ve bütçe bilgisi</li>
      <li><strong>Otomatik toplanan veriler:</strong> Tarayıcı türü, IP adresi, ziyaret süresi gibi teknik veriler</li>
    </ul>

    <h3>3. Verilerin Kullanımı</h3>
    <p>Toplanan veriler yalnızca şu amaçlarla kullanılmaktadır:</p>
    <ul>
      <li>Franchise başvurunuzun işleme alınması ve sizinle iletişime geçilmesi</li>
      <li>Web sitemizin performansının iyileştirilmesi</li>
      <li>Yasal yükümlülüklerin yerine getirilmesi</li>
    </ul>

    <h3>4. Çerezler (Cookies)</h3>
    <p>Web sitemiz, temel işlevsellik için zorunlu çerezler kullanabilir. Bu çerezler kişisel veri içermez ve yalnızca site deneyiminizi iyileştirmek amacıyla kullanılır.</p>

    <h3>5. Üçüncü Taraf Hizmetler</h3>
    <p>Web sitemiz aşağıdaki üçüncü taraf hizmetlerden yararlanmaktadır:</p>
    <ul>
      <li><strong>Google Maps:</strong> Konum bilgisi gösterimi için</li>
      <li><strong>Formspree:</strong> Franchise başvuru formunun iletilmesi için</li>
    </ul>
    <p>Bu hizmetlerin kendi gizlilik politikaları geçerlidir.</p>

    <h3>6. Veri Güvenliği</h3>
    <p>Kişisel verileriniz yetkisiz erişime, değiştirilmeye veya ifşa edilmeye karşı uygun teknik ve idari tedbirlerle korunmaktadır.</p>

    <h3>7. Veri Saklama Süresi</h3>
    <p>Kişisel verileriniz, başvurunuzun değerlendirilme süreci tamamlandıktan sonra yasal saklama yükümlülükleri çerçevesinde muhafaza edilmekte; akabinde güvenli biçimde silinmektedir.</p>

    <h3>8. İletişim</h3>
    <p>Gizlilik politikamıza ilişkin sorularınız için:<br/>
    <strong>info@proespressocoffee.com</strong></p>

    <h3>9. Politika Güncellemeleri</h3>
    <p>Bu politika zaman zaman güncellenebilir. Önemli değişiklikler yapılması halinde web sitemiz üzerinden bilgilendirme yapılacaktır.</p>

    <p style="margin-top: 2rem; font-style: italic; opacity: 0.6;">Son güncelleme: Şubat 2026</p>
  `
};

const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const content = type === 'kvkk' ? kvkkContent : type === 'gizlilik' ? gizlilikContent : null;

  useEffect(() => {
    if (type) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [type]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!type || !content) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-coffee-900/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-cream-100 shrink-0">
          <h2 className="text-lg font-black tracking-tight uppercase text-coffee-900">
            {content.title}
          </h2>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center text-coffee-900/40 hover:text-coffee-900 hover:bg-cream-50 transition-colors"
            aria-label="Kapat"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Content */}
        <div
          className="overflow-y-auto px-8 py-6 text-coffee-900/80 text-sm leading-relaxed legal-content"
          dangerouslySetInnerHTML={{ __html: content.content }}
        />

        {/* Footer */}
        <div className="px-8 py-5 border-t border-cream-100 shrink-0">
          <button
            onClick={onClose}
            className="w-full bg-coffee-900 hover:bg-coffee-600 text-white py-4 text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-300"
          >
            Anladım, Kapat
          </button>
        </div>
      </div>

      <style>{`
        .legal-content h3 {
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #2C1B14;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .legal-content h3:first-child {
          margin-top: 0;
        }
        .legal-content p {
          margin-bottom: 0.75rem;
          color: rgba(44, 27, 20, 0.7);
          line-height: 1.8;
        }
        .legal-content ul {
          margin: 0.5rem 0 0.75rem 1.2rem;
          list-style: disc;
        }
        .legal-content ul li {
          margin-bottom: 0.3rem;
          color: rgba(44, 27, 20, 0.7);
        }
        .legal-content strong {
          color: #2C1B14;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default LegalModal;
