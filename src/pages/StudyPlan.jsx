import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../paths';
import { DIRECTIONS } from '../data/studyPlan';

const StudyPlan = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="bg-[#FDFCFB] min-h-screen pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Заголовок */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 relative">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0E1A2B] mb-4 sm:mb-6 relative z-10">
            {t('study_plan.title', 'Учебный план')}
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-[#D4A259] mx-auto rounded-full"></div>
          {/* Декоративная подложка */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-serif font-bold text-[#D4A259]/5 select-none pointer-events-none z-0 whitespace-nowrap">
            Study
          </span>
        </div>

        {/* Сетка карточек - адаптивная */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
          {DIRECTIONS.map((dir) => (
            <div
              key={dir.id}
              className="group bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(14,26,43,0.08)] transition-all duration-500 border border-[#D4A259]/10 hover:border-[#D4A259]/40 relative overflow-hidden"
            >
              {/* Декоративный элемент */}
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-bl from-[#D4A259]/5 to-transparent rounded-bl-full pointer-events-none"></div>

              <div className="relative z-10">
                <div className="text-[#D4A259] font-serif italic text-[11px] sm:text-xs md:text-sm mb-2 sm:mb-3 md:mb-4 tracking-widest uppercase opacity-60 text-center sm:text-left">
                  {t('study_plan.department', 'Специальность')}
                </div>
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0E1A2B] mb-6 sm:mb-7 md:mb-8 lg:mb-10 leading-tight group-hover:text-[#D4A259] transition-colors duration-300 min-h-[3rem] text-center sm:text-left">
                  {t(`directions.items.${dir.id}.title`, dir.title)}
                </h2>
              </div>

              {/* Кнопка */}
              <button
                onClick={() => navigate(`${ROUTES.STUDYPLAN}/${dir.id}`)}
                className="group/btn relative w-full py-3 sm:py-3.5 md:py-4 bg-[#D4A259] text-white hover:text-[#D4A259] rounded-xl font-bold uppercase tracking-[0.12em] sm:tracking-[0.15em] text-[10px] sm:text-xs border border-[#D4A259]/50 transition-all duration-500 hover:border-[#D4A259] hover:bg-[#D4A259]/5 overflow-hidden"
              >
                {/* Анимированные уголки */}
                <span className="absolute top-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t-2 border-l-2 border-[#D4A259] opacity-0 group-hover/btn:opacity-100 transition-all duration-300 rounded-tl-lg"></span>
                <span className="absolute bottom-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-b-2 border-r-2 border-[#D4A259] opacity-0 group-hover/btn:opacity-100 transition-all duration-300 rounded-br-lg"></span>

                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  {t('home.news.read_more', 'Подробнее')}
                  <span className="relative flex items-center justify-center">
                    <span className="w-3 sm:w-4 h-[1px] bg-white group-hover/btn:bg-[#D4A259] transform origin-right transition-transform duration-300 group-hover/btn:scale-x-125"></span>
                    <span className="absolute right-0 w-1 h-1 sm:w-1.5 sm:h-1.5 border-t border-r border-white group-hover/btn:border-[#D4A259] rotate-45 transition-transform duration-300 group-hover/btn:translate-x-1"></span>
                  </span>
                </span>

                {/* Мягкое свечение */}
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:opacity-100 shadow-[0_0_20px_rgba(212,162,89,0.2)] transition-opacity duration-500"></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyPlan;