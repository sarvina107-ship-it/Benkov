import React from 'react';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-[#FBF9F7] text-[#1B2A44] min-h-screen overflow-hidden relative flex flex-col justify-center">

      {/* Декоративный фон: Абстрактная графика */}
      <div className="absolute top-[-5%] right-[-5%] opacity-10 pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40 160C40 160 100 40 160 40C220 40 140 160 140 160"
            stroke="#D4A259"
            strokeWidth="0.5"
          />
          <circle cx="100" cy="100" r="70" stroke="#D4A259" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">

        {/* Шапка страницы */}
        <div className="mb-20 md:mb-32">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#D4A259]"></div>
            <span className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold text-[#D4A259]">
              {t('contacts.badge')}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('contacts.title_main')} <br />
            <span className="italic ml-12 md:ml-24 text-[#D4A259]">{t('contacts.title_accent')}</span>
          </h1>

          <div className="flex justify-end">
            <p className="max-w-md text-base md:text-lg text-gray-500 leading-relaxed font-light border-r md:border-r-0 md:border-l border-[#D4A259] pr-6 md:pr-0 md:pl-8 text-right md:text-left">
              {t('contacts.description')}
            </p>
          </div>
        </div>

        {/* Сетка контактов */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-200 border-y border-gray-200">

          {/* Блок 1: Администрация */}
          <div className="bg-[#FBF9F7] py-16 md:py-24 pr-6 md:pr-16 group transition-all duration-500">
            <div className="flex flex-col h-full">
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-8 block">
                01 / {t('contacts.dept_label')}
              </span>

              <h3 className="text-4xl md:text-6xl font-serif mb-10 group-hover:italic transition-all duration-500 ease-in-out" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t('contacts.admin_title')}
              </h3>

              <a
                href="tel:+998712450765"
                className="text-2xl md:text-4xl font-light tracking-tighter hover:text-[#D4A259] transition-colors duration-300 w-fit"
              >
                +998 71 245 07 65
              </a>
            </div>
          </div>

          {/* Блок 2: Приемная */}
          <div className="bg-[#FBF9F7] py-16 md:py-24 md:pl-16 group transition-all duration-500 border-t md:border-t-0 md:border-l border-gray-200">
            <div className="flex flex-col h-full">
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-8 block">
                02 / {t('contacts.dept_label')}
              </span>

              <h3 className="text-4xl md:text-6xl font-serif mb-10 group-hover:italic transition-all duration-500 ease-in-out" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t('contacts.reception_title')}
              </h3>

              <a
                href="tel:+998712450556"
                className="text-2xl md:text-4xl font-light tracking-tighter hover:text-[#D4A259] transition-colors duration-300 w-fit"
              >
                +998 71 245 05 56
              </a>
            </div>
          </div>

        </div>

        {/* Нижняя подпись */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
          <span className="text-[9px] uppercase tracking-[0.3em] text-center md:text-left">
            {t('contacts.school_name')}
          </span>
          <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em]">
            <span>Tashkent</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contacts;