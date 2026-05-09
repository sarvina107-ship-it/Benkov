import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { directionsCategories, directionsData } from '../data/directionsData';
import { ROUTES } from '../paths';

const Directions = () => {
  const { t } = useTranslation();
  return (
    <section className="pt-16 sm:pt-20 md:pt-24 bg-[#F4F2EE] text-[#1A1A1A]" id="art-directions">

      {/* Заголовок */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16 md:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 sm:mb-6 text-[#0E1A2B]">
          {t('directions.data.title')}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          {t('directions.data.desc')}
        </p>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#D4A259] mx-auto mt-6 sm:mt-8 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 md:pb-32">
        {directionsCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-16 sm:mb-20 md:mb-24 last:mb-0">
            {/* Заголовок категории */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#0E1A2B] uppercase text-center sm:text-left">
                {t(`directions.categories.${category.category}`)}
              </h3>
              <div className="flex-1 h-[2px] bg-[#D4A259]/20 hidden sm:block"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              {category.items.map((itemId) => {
                const staticData = directionsData[itemId];
                if (!staticData) return null;

                return (
                  <Link
                    to={`${ROUTES.DIRECTIONS}/${itemId}`}
                    key={itemId}
                    className="group flex flex-col md:flex-row bg-white rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-white hover:border-[#D4A259]/30"
                  >
                    {/* Фото */}
                    <div className="md:w-2/5 lg:w-1/2 h-56 sm:h-64 md:h-auto overflow-hidden">
                      <img
                        src={staticData.image}
                        alt={t(`directions.items.${itemId}.title`)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Текст */}
                    <div className="md:w-3/5 lg:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col justify-center">
                      <h4 className="text-xl sm:text-2xl font-bold font-serif mb-3 sm:mb-4 text-[#0E1A2B] group-hover:text-[#D4A259] transition-colors duration-300 leading-tight">
                        {t(`directions.items.${itemId}.title`)}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                        {t(`directions.items.${itemId}.desc`)}
                      </p>

                      <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D4A259]">
                        <span>{t('directions.about.btn')}</span>
                        <svg width="16" height="16" sm="20" smHeight="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-2">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Блок призыва к действию */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#F4F2EE] border-t border-[#D4A259]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-[24px] sm:rounded-[28px] md:rounded-[30px] p-6 sm:p-8 md:p-12 shadow-inner border border-[#D4A259]/10 relative overflow-hidden">

            {/* Декоративный элемент */}
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 md:-bottom-10 md:-right-10 text-[100px] sm:text-[140px] md:text-[180px] font-serif font-bold text-[#D4A259]/5 select-none pointer-events-none">
              Art
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
              {/* Иконка */}
              <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#F4F2EE] flex items-center justify-center border-4 border-white shadow-lg">
                <svg width="30" height="30" sm="35" md="40" viewBox="0 0 24 24" fill="none" stroke="#D4A259" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="12" y1="18" x2="12" y2="12"></line>
                  <line x1="9" y1="15" x2="15" y2="15"></line>
                </svg>
              </div>

              {/* Текст */}
              <div className="flex-1 text-center md:text-left space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0E1A2B]">
                    {t('directions.about.apply')}
                  </h2>
                </div>
                <div className="h-[2px] w-16 sm:w-20 bg-[#D4A259] mx-auto md:mx-0"></div>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                  {t('directions.about.desc')}
                </p>
              </div>

              {/* Кнопка */}
              <div className="flex-shrink-0">
                <Link to={ROUTES.CONDITIONS}>
                  <button className="group relative px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 bg-[#1B2A44] text-white rounded-xl font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm border border-[#D4A259]/30 transition-all duration-300 hover:border-white">
                    <span className="absolute inset-0 border border-white rounded-xl opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      {t('directions.about.btn')}
                      <span className="relative w-3 h-3">
                        <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white transition-transform group-hover:rotate-90"></span>
                        <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></span>
                      </span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Нижняя разделительная линия */}
            <div className="absolute inset-x-0 bottom-0 h-1 sm:h-2 bg-gradient-to-r from-transparent via-[#D4A259]/40 to-transparent"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Directions;