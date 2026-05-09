import React from 'react';
import { useTranslation } from 'react-i18next';
import { Brush, Palette, Phone, Heart, Sparkles, Pencil, ArrowUpRight } from 'lucide-react';

const Conditions = () => {
  const { t } = useTranslation();
  const steps = ['step_1', 'step_2', 'step_3'];

  return (
    <div className="bg-[#FDFCFB] min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Фоновые элементы - адаптив */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[#D4A259]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-[-10%] w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-[#0E1A2B]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Заголовок страницы */}
        <div className="max-w-4xl mb-12 sm:mb-16 md:mb-20 lg:mb-24 px-4 sm:px-0">
          <div className="flex items-center gap-3 sm:gap-4 text-[#D4A259] mb-6 sm:mb-8">
            <span className="w-8 sm:w-12 h-[1px] bg-[#D4A259]"></span>
            <span className="uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[9px] sm:text-[11px] font-black">
              {t('conditions.subtitle')}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[7.5rem] font-serif font-bold text-[#0E1A2B] leading-[1.1] sm:leading-[1] md:leading-[0.95] lg:leading-[0.85] tracking-tight">
            {t('conditions.title')}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">

          {/* Левая часть: Описание процесса */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-14 shadow-[0_30px_100px_rgba(0,0,0,0.02)] border border-gray-50 relative group">
              {/* Декоративный элемент - адаптив */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-10 md:right-10 lg:top-12 lg:right-12 p-2 sm:p-3 md:p-4 bg-[#FDFCFB] rounded-xl sm:rounded-2xl border border-gray-100 group-hover:rotate-12 transition-transform duration-500">
                <Palette className="text-[#D4A259]" size={24} sm={28} md={32} />
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0E1A2B] mb-4 sm:mb-6 md:mb-8 uppercase tracking-tight">
                {t('conditions.process_title')}
              </h2>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-serif leading-relaxed italic mb-8 sm:mb-10 md:mb-12 opacity-90">
                «{t('conditions.process_text')}»
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12 md:mb-16">
                {steps.map((stepKey) => (
                  <div key={stepKey} className="flex items-center gap-2 sm:gap-3 bg-white border border-gray-200 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl hover:border-[#D4A259] transition-colors cursor-default shadow-sm">
                    <Sparkles size={12} sm={14} className="text-[#D4A259]" />
                    <span className="text-[9px] sm:text-[11px] font-black uppercase text-[#0E1A2B] tracking-wider">
                      {t(`conditions.${stepKey}`)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Плашка с результатом */}
              <div className="relative overflow-hidden bg-[#0E1A2B] rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 text-white group/banner">
                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="p-3 sm:p-4 bg-[#D4A259] rounded-xl sm:rounded-2xl text-[#0E1A2B] shrink-0">
                    <Phone size={20} sm={24} />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-300 font-medium italic">
                      {t('conditions.result_text')}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-white/10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 group-hover/banner:translate-x-1 group-hover/banner:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Правая часть: Даты и визуал */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8 order-1 lg:order-2">

            {/* Карточка дат */}
            <div className="bg-[#D4A259] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-12 text-[#0E1A2B] relative overflow-hidden group">
              <Pencil className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 md:-bottom-10 md:-right-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-10 -rotate-12 group-hover:rotate-0 transition-transform duration-1000 ease-out" />

              <div className="flex justify-between items-start mb-10 sm:mb-12 md:mb-16">
                <h3 className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-80 border-b border-[#0E1A2B]/20 pb-2">
                  {t('conditions.dates_title')}
                </h3>
              </div>

              <div className="space-y-8 sm:space-y-10 md:space-y-12 relative z-10">
                {/* Блок 06 */}
                <div className="group cursor-default">
                  <div className="flex items-baseline gap-3 sm:gap-4">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold italic transition-transform duration-500 group-hover:translate-x-2">
                      06
                    </span>
                    <div className="flex-grow h-[1px] bg-[#0E1A2B]/10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  <p className="text-xs sm:text-sm font-black uppercase tracking-widest mt-3 sm:mt-4 leading-tight max-w-[180px] sm:max-w-[200px] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#0E1A2B]">
                    {t('conditions.docs_period')}
                  </p>
                </div>

                {/* Блок 07 */}
                <div className="group cursor-default">
                  <div className="flex items-baseline gap-3 sm:gap-4">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold italic transition-transform duration-500 group-hover:translate-x-2">
                      07
                    </span>
                    <div className="flex-grow h-[1px] bg-[#0E1A2B]/10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  <p className="text-xs sm:text-sm font-black uppercase tracking-widest mt-3 sm:mt-4 leading-tight max-w-[180px] sm:max-w-[200px] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#0E1A2B]">
                    {t('conditions.exams_period')}
                  </p>
                </div>
              </div>
            </div>

            {/* Карточка Benkov */}
            <div className="bg-white border border-gray-100 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-5 sm:p-6 md:p-8 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-[#FDFCFB] border border-gray-100 flex items-center justify-center text-[#D4A259] shadow-inner">
                  <Heart size={18} sm={20} md={24} className="hover:scale-110 transition-transform cursor-pointer" fill="#D4A259" />
                </div>
                <div>
                  <span className="block font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#0E1A2B]">Benkov Art</span>
                  <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-gray-400">Established 1918</span>
                </div>
              </div>
              <Brush size={20} sm={24} md={28} className="text-[#0E1A2B]/10 group-hover:text-[#D4A259] transition-colors" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Conditions;