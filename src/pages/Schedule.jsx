import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, Calendar, BookOpen, GraduationCap, Sparkles } from 'lucide-react';

const Schedule = () => {
    const { t } = useTranslation();

    // Массив для рендера пар, время оставляем здесь, так как оно не меняется от языка
    const pairConfig = [
        { id: 'p1', num: '01', time: '08:30 – 09:50' },
        { id: 'p2', num: '02', time: '10:00 – 11:20', highlight: true },
        { id: 'p3', num: '03', time: '12:00 – 13:20' },
        { id: 'p4', num: '04', time: '13:30 – 14:50' },
    ];

    return (
        <div className="bg-[#FDFCFB] min-h-screen pt-28 pb-20 px-6 relative overflow-hidden">
            {/* Декор */}
            <div className="absolute top-20 -right-20 w-96 h-96 bg-[#D4A259]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 -left-20 w-72 h-72 bg-[#0E1A2B]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Заголовок */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 text-[#D4A259] mb-2 uppercase tracking-[0.3em] text-xs font-bold">
                        <Sparkles size={16} />
                        <span>{t('schedule.routine_label')}</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#0E1A2B] leading-none">
                        {t('schedule.title')}
                    </h1>
                    <div className="w-32 h-2 bg-[#D4A259] mt-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Таймлайн занятий */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {pairConfig.map((item) => (
                                <div
                                    key={item.id}
                                    className={`relative group overflow-hidden rounded-2xl p-8 transition-all duration-500 border ${item.highlight
                                            ? 'bg-[#0E1A2B] text-white border-[#0E1A2B]'
                                            : 'bg-white text-[#0E1A2B] border-[#D4A259]/20 hover:border-[#D4A259]'
                                        }`}
                                >
                                    <span className={`absolute -right-4 -top-8 text-9xl font-serif font-black opacity-[0.03] transition-all duration-700 group-hover:opacity-[0.08] group-hover:scale-110 ${item.highlight ? 'text-white' : 'text-[#0E1A2B]'}`}>
                                        {item.num}
                                    </span>

                                    <div className="relative z-10">
                                        <div className="text-sm font-bold tracking-widest mb-1 text-[#D4A259]">
                                            {item.time}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">
                                            {t(`schedule.pairs.${item.id}.title`)}
                                        </h3>
                                        <p className={`text-sm leading-relaxed ${item.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                                            {t(`schedule.pairs.${item.id}.desc`)}
                                        </p>
                                        <div className={`mt-6 inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${item.highlight ? 'bg-[#D4A259] text-[#0E1A2B]' : 'bg-[#F7F2ED] text-[#D4A259]'
                                            }`}>
                                            {t(`schedule.pairs.${item.id}.note`)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Инфо-карточка снизу */}
                        <div className="bg-[#D4A259]/10 rounded-2xl p-6 border border-[#D4A259]/20 flex items-center gap-6">
                            <div className="hidden sm:flex w-16 h-16 rounded-full bg-white items-center justify-center text-[#D4A259] shadow-sm shrink-0">
                                <Clock size={32} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0E1A2B] mb-1">{t('schedule.punctuality_title')}</h4>
                                <p className="text-sm text-gray-600">{t('schedule.punctuality_text')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Боковая панель */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Спец предметы */}
                        <div className="relative bg-white rounded-3xl p-8 border border-[#D4A259]/30 shadow-[20px_20px_60px_rgba(0,0,0,0.05)] overflow-hidden">
                            <div className="absolute top-0 right-0 w-2 h-full bg-[#D4A259]"></div>

                            <div className="flex items-center gap-3 mb-8">
                                <GraduationCap className="text-[#D4A259]" size={24} />
                                <h3 className="text-xl font-bold text-[#0E1A2B] uppercase tracking-tight">
                                    {t('schedule.special_title')}
                                </h3>
                            </div>

                            <div className="space-y-8">
                                <div className="relative pl-6 border-l border-gray-100">
                                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#D4A259]"></div>
                                    <p className="text-[10px] font-black text-[#D4A259] uppercase tracking-widest mb-1">{t('schedule.mon_wed')}</p>
                                    <p className="text-lg font-serif font-bold text-[#0E1A2B]">{t('schedule.grades_8_11')}</p>
                                </div>

                                <div className="relative pl-6 border-l border-gray-100">
                                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#D4A259]"></div>
                                    <p className="text-[10px] font-black text-[#D4A259] uppercase tracking-widest mb-1">{t('schedule.thu_sat')}</p>
                                    <p className="text-lg font-serif font-bold text-[#0E1A2B]">{t('schedule.grades_9_10')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Общеобразовательная карточка */}
                        <div className="bg-[#0E1A2B] rounded-3xl p-8 text-white group hover:bg-[#1a2b42] transition-colors duration-500">
                            <div className="w-12 h-12 bg-[#D4A259] rounded-xl flex items-center justify-center mb-6 rotate-3 group-hover:rotate-12 transition-transform">
                                <BookOpen size={24} className="text-[#0E1A2B]" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 uppercase">{t('schedule.theory_title')}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed italic">
                                {t('schedule.theory_text')}
                            </p>
                            <div className="mt-8 flex justify-between items-end">
                                <span className="text-3xl font-serif opacity-20 italic">Benkov</span>
                                <Calendar size={40} className="opacity-10" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;