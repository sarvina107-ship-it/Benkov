import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getDirectorContent } from '../data/deputiesContent';

const Director = () => {
    const { t, i18n } = useTranslation();
    const data = useMemo(() => getDirectorContent(t), [t, i18n.language]);

    return (
        <main className="bg-[#F8F6F2] min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-[#1B2A44]">
            <div className="max-w-5xl mx-auto">

                {/* Кнопка назад */}
                <Link
                    to="/management"
                    className="inline-flex items-center gap-2 text-[#D4A259] font-bold uppercase tracking-widest text-xs sm:text-sm mb-8 sm:mb-10 md:mb-12 hover:gap-4 transition-all"
                >
                    <span>←</span> {t('director.back')}
                </Link>

                {/* Основная карточка - адаптив */}
                <div className="bg-white rounded-[24px] sm:rounded-[32px] md:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden mb-12 sm:mb-16 border border-gray-100">
                    <div className="flex flex-col md:flex-row">

                        {/* Фото */}
                        <div className="md:w-2/5 aspect-square bg-gray-100 overflow-hidden">
                            <img
                                src={data.photo}
                                alt={data.name}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                        {/* Информация */}
                        <div className="md:w-3/5 p-6 sm:p-8 md:p-10 lg:p-16 flex flex-col justify-center">
                            <span className="text-[#D4A259] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-sm mb-3 sm:mb-4 block text-center md:text-left">
                                {data.role}
                            </span>

                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-center md:text-left" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {data.name.split(' ')[0]} <br /> {data.name.split(' ').slice(1).join(' ')}
                            </h1>

                            <div className="space-y-3 sm:space-y-4 text-[#1B2A44]/80 text-base sm:text-lg">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                    <strong className="text-[#1B2A44] min-w-[100px]">{t('director.birth')}:</strong>
                                    <span>{data.birthDate}</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                    <strong className="text-[#1B2A44] min-w-[100px]">{t('director.nat_label')}:</strong>
                                    <span>{data.nationality}</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                    <strong className="text-[#1B2A44] min-w-[100px]">{t('director.lang_label')}:</strong>
                                    <span>{data.languages}</span>
                                </div>
                                <p className="text-sm sm:text-base italic pt-3 sm:pt-4 text-[#D4A259] leading-relaxed border-t mt-3 sm:mt-4 text-center md:text-left">
                                    {data.additionalRole}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Director;