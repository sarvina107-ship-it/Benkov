import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from '../assets/icon/Logo.png';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative overflow-hidden font-serif">

      {/* ===== СЕКЦИЯ 1: КОНТАКТЫ И КАРТА ===== */}
      <div className="bg-[#1B2A44] text-white py-12 sm:py-16 md:py-20 relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/canvas-orange.png')` }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">

          {/* Текстовый блок контактов */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 text-center lg:text-left">
            <div>
              <span className="text-[#D4A259] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-4 block font-sans font-semibold">
                {t('footer.connect')}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t('footer.visit_us')} <span className="text-[#D4A259]">{t('footer.visit_us_highlight')}</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Адрес */}
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#D4A259]/30 flex items-center justify-center text-[#D4A259] group-hover:bg-[#D4A259] group-hover:text-[#1B2A44] transition-all text-sm sm:text-base">
                  📍
                </div>
                <div>
                  <h3 className="text-[#D4A259] font-bold text-[11px] sm:text-sm uppercase tracking-wider mb-0.5 sm:mb-1">
                    {t('footer.address_title')}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">{t('footer.address_value')}</p>
                </div>
              </div>

              {/* Телефон */}
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#D4A259]/30 flex items-center justify-center text-[#D4A259] group-hover:bg-[#D4A259] group-hover:text-[#1B2A44] transition-all text-sm sm:text-base">
                  📞
                </div>
                <div>
                  <h3 className="text-[#D4A259] font-bold text-[11px] sm:text-sm uppercase tracking-wider mb-0.5 sm:mb-1">
                    {t('footer.reception')}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">+998 71 245 05 56</p>
                </div>
              </div>
            </div>
          </div>

          {/* КАРТА */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-[#D4A259]/10 blur-xl rounded-3xl opacity-50 group-hover:opacity-100 transition"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/5 h-[250px] sm:h-[280px] md:h-[300px]">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.243542287823!2d69.255!3d41.285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzA2LjAiTiA2OcKwMTUnMTguMCJF!5e0!3m2!1sru!2suz!4v1620000000000!5m2!1sru!2suz"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* ===== СЕКЦИЯ 2: ИНФО, МЕНЮ И ЛОГО ===== */}
      <div className="bg-[#0B1524] text-white py-12 sm:py-16 md:py-20 relative border-t border-white/5">

        {/* Арт-декор */}
        <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#D4A259]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 relative z-10">

          {/* ЛОГОТИП - центрируется на мобилках */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col items-center sm:items-start gap-3 sm:gap-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#D4A259]/20 rounded-full blur-md group-hover:blur-xl transition-all"></div>
              <div className="bg-white rounded-full p-2 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] flex items-center justify-center shadow-2xl relative">
                <img className="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] md:w-[100px] md:h-[100px] object-contain" src={Logo} alt="School Logo" />
              </div>
            </div>
            <p className="text-[#D4A259] font-bold tracking-[0.3em] sm:tracking-[0.5em] text-[8px] sm:text-[10px] mt-1 sm:mt-2 uppercase text-center sm:text-left">
              Benkov School
            </p>
          </div>

          {/* МИССИЯ */}
          <div className="sm:col-span-2 lg:col-span-4 lg:pr-4 xl:pr-10">
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center justify-center sm:justify-start gap-3">
              <span className="w-6 sm:w-8 h-[1px] bg-[#D4A259]"></span>
              {t('footer.mission_title')}
            </h3>
            <p className="text-gray-400 leading-relaxed text-[13px] sm:text-[15px] italic font-serif text-center sm:text-left">
              {t('footer.mission_text')}
            </p>
          </div>

          {/* НАВИГАЦИЯ */}
          <div className="sm:col-span-1 lg:col-span-3">
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center justify-center sm:justify-start gap-3">
              <span className="w-6 sm:w-8 h-[1px] bg-[#D4A259]"></span>
              {t('footer.navigation')}
            </h3>
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-4 text-gray-400 text-xs sm:text-sm">
              <Link to="/" className="hover:text-[#D4A259] transition-all text-center sm:text-left">{t('nav.home')}</Link>
              <Link to="/news" className="hover:text-[#D4A259] transition-all text-center sm:text-left">{t('nav.news')}</Link>
              <Link to="/contacts" className="hover:text-[#D4A259] transition-all text-center sm:text-left">{t('nav.contacts')}</Link>
              <Link to="/gallery" className="hover:text-[#D4A259] transition-all text-center sm:text-left">{t('nav.gallery')}</Link>
            </div>
          </div>

          {/* СОЦСЕТИ */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 flex items-center justify-center sm:justify-start gap-3">
              <span className="w-6 sm:w-8 h-[1px] bg-[#D4A259]"></span>
              {t('footer.socials')}
            </h3>

            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              {[
                { label: 'F', link: 'https://www.facebook.com/people/Pavel-Benkov-nomidagi-Respublika-ixtisoslashtirilgan-rassomlik-maktabi/61553361282120/?mibextid=ZbWKwL' },
                { label: 'I', link: 'https://www.instagram.com/benkov_maktabi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
                { label: 'T', link: 'https://t.me/benkovmaktabi' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-[#D4A259]/30 flex items-center justify-center text-[#D4A259] hover:bg-[#D4A259] hover:text-[#0B1524] hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* НИЖНЯЯ ЛИНИЯ */}
        <div className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-[9px] sm:text-[11px] text-gray-500 uppercase tracking-widest">
            <p className="text-center md:text-left">{t('footer.rights')}</p>
            <div className="flex items-center gap-2 group">
              <span>Design & Dev:</span>
              <a href="https://t.me/suuun_o" className="text-[#D4A259] font-bold hover:text-white transition-colors">SARA</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;