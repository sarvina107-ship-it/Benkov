import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, Calendar, BookOpen, GraduationCap, Sparkles } from 'lucide-react';

const Schedule = () => {
    const { t } = useTranslation();

    const pairConfig = [
        { id: 'p1', num: '01', time: '08:30 – 09:50' },
        { id: 'p2', num: '02', time: '10:00 – 11:20', highlight: true },
        { id: 'p3', num: '03', time: '12:00 – 13:20' },
        { id: 'p4', num: '04', time: '13:30 – 14:50' },
    ];

    return (
        <div className="bg-[#FDFCFB] min-h-screen pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 relative overflow-hidden">
            {/* Декор - адаптив */}
            <div className="absolute top-20 -right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#D4A259]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 -left-20 w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 bg-[#0E1A2B]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Заголовок */}
                <div className="mb-12 sm:mb-16 md:mb-20 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-[#D4A259] mb-2 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-bold">
                        <Sparkles size={14} sm={16} />
                        <span>{t('schedule.routine_label')}</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#0E1A2B] leading-[1.1] sm:leading-none">
                        {t('schedule.title')}
                    </h1>
                    <div className="w-20 sm:w-24 md:w-32 h-1 sm:h-1.5 md:h-2 bg-[#D4A259] mt-4 sm:mt-5 md:mt-6 mx-auto sm:mx-0"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12">

                    {/* Таймлайн занятий */}
                    <div className="lg:col-span-8 space-y-6 sm:space-y-7 md:space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                            {pairConfig.map((item) => (
                                <div
                                    key={item.id}
                                    className={`relative group overflow-hidden rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 transition-all duration-500 border ${item.highlight
                                            ? 'bg-[#0E1A2B] text-white border-[#0E1A2B]'
                                            : 'bg-white text-[#0E1A2B] border-[#D4A259]/20 hover:border-[#D4A259]'
                                        }`}
                                >
                                    <span className={`absolute -right-3 -top-6 sm:-right-4 sm:-top-8 text-7xl sm:text-8xl md:text-9xl font-serif font-black opacity-[0.03] transition-all duration-700 group-hover:opacity-[0.08] group-hover:scale-110 ${item.highlight ? 'text-white' : 'text-[#0E1A2B]'
                                        }`}>
                                        {item.num}
                                    </span>

                                    <div className="relative z-10">
                                        <div className="text-[11px] sm:text-xs md:text-sm font-bold tracking-widest mb-1 text-[#D4A259]">
                                            {item.time}
                                        </div>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 uppercase tracking-tighter">
                                            {t(`schedule.pairs.${item.id}.title`)}
                                        </h3>
                                        <p className={`text-xs sm:text-sm leading-relaxed ${item.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                                            {t(`schedule.pairs.${item.id}.desc`)}
                                        </p>
                                        <div className={`mt-3 sm:mt-4 md:mt-5 lg:mt-6 inline-block px-3 sm:px-4 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest ${item.highlight
                                                ? 'bg-[#D4A259] text-[#0E1A2B]'
                                                : 'bg-[#F7F2ED] text-[#D4A259]'
                                            }`}>
                                            {t(`schedule.pairs.${item.id}.note`)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Инфо-карточка */}
                        <div className="bg-[#D4A259]/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#D4A259]/20 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                            <div className="flex w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white items-center justify-center text-[#D4A259] shadow-sm shrink-0">
                                <Clock size={24} sm={28} md={32} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0E1A2B] mb-1 text-sm sm:text-base">{t('schedule.punctuality_title')}</h4>
                                <p className="text-xs sm:text-sm text-gray-600">{t('schedule.punctuality_text')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Боковая панель */}
                    <div className="lg:col-span-4 space-y-5 sm:space-y-6">

                        {/* Спец предметы */}
                        <div className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 border border-[#D4A259]/30 shadow-[20px_20px_60px_rgba(0,0,0,0.05)] overflow-hidden">
                            <div className="absolute top-0 right-0 w-1 sm:w-2 h-full bg-[#D4A259]"></div>

                            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-5 sm:mb-6 md:mb-7 lg:mb-8">
                                <GraduationCap className="text-[#D4A259]" size={20} sm={22} md={24} />
                                <h3 className="text-lg sm:text-xl font-bold text-[#0E1A2B] uppercase tracking-tight">
                                    {t('schedule.special_title')}
                                </h3>
                            </div>

                            <div className="space-y-6 sm:space-y-7 md:space-y-8">
                                <div className="relative pl-5 sm:pl-6 border-l border-gray-100">
                                    <div className="absolute -left-[5px] top-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D4A259]"></div>
                                    <p className="text-[9px] sm:text-[10px] font-black text-[#D4A259] uppercase tracking-widest mb-1">
                                        {t('schedule.mon_wed')}
                                    </p>
                                    <p className="text-base sm:text-lg font-serif font-bold text-[#0E1A2B]">
                                        {t('schedule.grades_8_11')}
                                    </p>
                                </div>

                                <div className="relative pl-5 sm:pl-6 border-l border-gray-100">
                                    <div className="absolute -left-[5px] top-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D4A259]"></div>
                                    <p className="text-[9px] sm:text-[10px] font-black text-[#D4A259] uppercase tracking-widest mb-1">
                                        {t('schedule.thu_sat')}
                                    </p>
                                    <p className="text-base sm:text-lg font-serif font-bold text-[#0E1A2B]">
                                        {t('schedule.grades_9_10')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Общеобразовательная карточка */}
                        <div className="bg-[#0E1A2B] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 text-white group hover:bg-[#1a2b42] transition-colors duration-500">
                            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#D4A259] rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 rotate-3 group-hover:rotate-12 transition-transform mx-auto sm:mx-0">
                                <BookOpen size={18} sm={20} md={24} className="text-[#0E1A2B]" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 md:mb-4 uppercase text-center sm:text-left">
                                {t('schedule.theory_title')}
                            </h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed italic text-center sm:text-left">
                                {t('schedule.theory_text')}
                            </p>
                            <div className="mt-6 sm:mt-7 md:mt-8 flex justify-between items-end">
                                <span className="text-2xl sm:text-3xl font-serif opacity-20 italic">Benkov</span>
                                <Calendar size={28} sm={32} md={40} className="opacity-10" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;