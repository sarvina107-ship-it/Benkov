import React from 'react';
import { useTranslation } from 'react-i18next';
import { Brush, Palette, Phone, Heart, Sparkles, Pencil, ArrowUpRight } from 'lucide-react';

const Conditions = () => {
  const { t } = useTranslation();
  const steps = ['step_1', 'step_2', 'step_3'];

  return (
    <div className="bg-[#FDFCFB] min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#D4A259]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-[#0E1A2B]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Заголовок страницы */}
        <div className="max-w-4xl mb-24">
          <div className="flex items-center gap-4 text-[#D4A259] mb-8">
            <span className="w-12 h-[1px] bg-[#D4A259]"></span>
            <span className="uppercase tracking-[0.4em] text-[11px] font-black">
              {t('conditions.subtitle')}
            </span>
          </div>
          <h1 className="text-6xl md:text-[7.5rem] font-serif font-bold text-[#0E1A2B] leading-[0.85] tracking-tight">
            {t('conditions.title')}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Левая часть: Описание процесса */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_30px_100px_rgba(0,0,0,0.02)] border border-gray-50 relative group">
              <div className="absolute top-12 right-12 p-4 bg-[#FDFCFB] rounded-2xl border border-gray-100 group-hover:rotate-12 transition-transform duration-500">
                <Palette className="text-[#D4A259]" size={32} />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0E1A2B] mb-8 uppercase tracking-tight">
                {t('conditions.process_title')}
              </h2>

              <p className="text-xl md:text-2xl text-gray-700 font-serif leading-relaxed italic mb-12 opacity-90">
                «{t('conditions.process_text')}»
              </p>

              <div className="flex flex-wrap gap-3 mb-16">
                {steps.map((stepKey) => (
                  <div key={stepKey} className="flex items-center gap-3 bg-white border border-gray-200 px-6 py-3 rounded-2xl hover:border-[#D4A259] transition-colors cursor-default shadow-sm">
                    <Sparkles size={14} className="text-[#D4A259]" />
                    <span className="text-[11px] font-black uppercase text-[#0E1A2B] tracking-wider">
                      {t(`conditions.${stepKey}`)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Плашка с результатом */}
              <div className="relative overflow-hidden bg-[#0E1A2B] rounded-[2rem] p-8 text-white group/banner">
                <div className="relative z-10 flex items-start gap-6">
                  <div className="p-4 bg-[#D4A259] rounded-2xl text-[#0E1A2B] shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm md:text-base leading-relaxed text-gray-300 font-medium italic">
                      {t('conditions.result_text')}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="absolute bottom-4 right-4 text-white/10 size-20 group-hover/banner:translate-x-1 group-hover/banner:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Правая часть: Даты и визуал */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            {/* Карточка дат */}
            <div className="bg-[#D4A259] rounded-[3rem] p-12 text-[#0E1A2B] relative overflow-hidden group">
              <Pencil className="absolute -bottom-10 -right-10 size-48 opacity-10 -rotate-12 group-hover:rotate-0 transition-transform duration-1000 ease-out" />

              <div className="flex justify-between items-start mb-16">
                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] opacity-80 border-b border-[#0E1A2B]/20 pb-2">
                  {t('conditions.dates_title')}
                </h3>
              </div>

              <div className="space-y-12 relative z-10">
                {/* Блок 06 */}
                <div className="group cursor-default">
                  <div className="flex items-baseline gap-4">
                    <span className="text-6xl font-serif font-bold italic transition-transform duration-500 group-hover:translate-x-2">
                      06
                    </span>
                    {/* Линия теперь будет выезжать правильно */}
                    <div className="flex-grow h-[1px] bg-[#0E1A2B]/10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  <p className="text-sm font-black uppercase tracking-widest mt-4 leading-tight max-w-[200px] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#0E1A2B]">
                    {t('conditions.docs_period')}
                  </p>
                </div>

                {/* Блок 07 */}
                <div className="group cursor-default">
                  <div className="flex items-baseline gap-4">
                    <span className="text-6xl font-serif font-bold italic transition-transform duration-500 group-hover:translate-x-2">
                      07
                    </span>
                    <div className="flex-grow h-[1px] bg-[#0E1A2B]/10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  <p className="text-sm font-black uppercase tracking-widest mt-4 leading-tight max-w-[200px] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#0E1A2B]">
                    {t('conditions.exams_period')}
                  </p>
                </div>
              </div>
            </div>

            {/* Карточка Benkov */}
            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#FDFCFB] border border-gray-100 flex items-center justify-center text-[#D4A259] shadow-inner">
                  <Heart size={24} className="hover:scale-110 transition-transform cursor-pointer" fill="#D4A259" />
                </div>
                <div>
                  <span className="block font-serif text-xl font-bold text-[#0E1A2B]">Benkov Art</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Established 1918</span>
                </div>
              </div>
              <Brush size={28} className="text-[#0E1A2B]/10 group-hover:text-[#D4A259] transition-colors" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Conditions;