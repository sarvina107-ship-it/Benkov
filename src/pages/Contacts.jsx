import React from 'react';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FBF9F7] text-[#1B2A44] min-h-screen overflow-hidden relative flex flex-col justify-center">

      {/* Декоративный фон - адаптив */}
      <div className="absolute top-[-5%] right-[-5%] opacity-10 pointer-events-none hidden sm:block">
        <svg width="300" height="300" sm="400" md="500" lg="600" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40 160C40 160 100 40 160 40C220 40 140 160 140 160"
            stroke="#D4A259"
            strokeWidth="0.5"
          />
          <circle cx="100" cy="100" r="70" stroke="#D4A259" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">

        {/* Шапка страницы */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-32">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-8 sm:w-12 h-[1px] bg-[#D4A259]"></div>
            <span className="uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[9px] sm:text-[10px] md:text-xs font-bold text-[#D4A259]">
              {t('contacts.badge')}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif leading-[1.1] sm:leading-[1] md:leading-[0.95] lg:leading-[0.9] mb-6 sm:mb-8 md:mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('contacts.title_main')} <br />
            <span className="italic ml-4 sm:ml-8 md:ml-12 lg:ml-24 text-[#D4A259]">{t('contacts.title_accent')}</span>
          </h1>

          <div className="flex justify-start md:justify-end">
            <p className="max-w-md text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed font-light border-l md:border-l-0 md:border-r border-[#D4A259] pl-4 sm:pl-6 md:pr-6 md:pl-0 text-left md:text-right">
              {t('contacts.description')}
            </p>
          </div>
        </div>

        {/* Сетка контактов - адаптивная */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-px bg-gray-200 border-t md:border-t-0 md:border-y border-gray-200 rounded-2xl md:rounded-none overflow-hidden">

          {/* Блок 1: Администрация */}
          <div className="bg-[#FBF9F7] py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:pr-6 lg:pr-16 group transition-all duration-500 rounded-2xl md:rounded-none">
            <div className="flex flex-col h-full text-center md:text-left">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em] text-gray-400 mb-6 sm:mb-8 block">
                01 / {t('contacts.dept_label')}
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 sm:mb-8 md:mb-10 group-hover:italic transition-all duration-500 ease-in-out" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t('contacts.admin_title')}
              </h3>

              <a
                href="tel:+998712450765"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tighter hover:text-[#D4A259] transition-colors duration-300 w-fit mx-auto md:mx-0"
              >
                +998 71 245 07 65
              </a>
            </div>
          </div>

          {/* Блок 2: Приемная */}
          <div className="bg-[#FBF9F7] py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:pl-6 lg:pl-16 group transition-all duration-500 rounded-2xl md:rounded-none md:border-l border-gray-200">
            <div className="flex flex-col h-full text-center md:text-left">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em] text-gray-400 mb-6 sm:mb-8 block">
                02 / {t('contacts.dept_label')}
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 sm:mb-8 md:mb-10 group-hover:italic transition-all duration-500 ease-in-out" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t('contacts.reception_title')}
              </h3>

              <a
                href="tel:+998712450556"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tighter hover:text-[#D4A259] transition-colors duration-300 w-fit mx-auto md:mx-0"
              >
                +998 71 245 05 56
              </a>
            </div>
          </div>

        </div>

        {/* Нижняя подпись */}
        <div className="mt-12 sm:mt-16 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 opacity-40">
          <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-center md:text-left">
            {t('contacts.school_name')}
          </span>
          <div className="flex gap-6 sm:gap-8 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.3em]">
            <span>Tashkent</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contacts;