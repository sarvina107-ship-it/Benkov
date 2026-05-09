import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getDeputiesContent } from '../data/deputiesContent';

const Deputy = () => {
    const { id } = useParams();
    const { t, i18n } = useTranslation();

    // Получаем данные
    const person = useMemo(() => {
        const data = getDeputiesContent(t, i18n.language);
        return data[id];
    }, [id, t, i18n.language]);

    // Если зам не найден
    if (!person) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8F6F2] px-4">
                <div className="text-center">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">{t('deputy_page.base.not_found')}</h2>
                    <Link to="/management" className="text-[#D4A259] underline">
                        {t('deputy_page.base.return_list')}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-[#F8F6F2] min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 text-[#1B2A44]">
            <div className="max-w-5xl mx-auto">
                {/* Кнопка назад */}
                <Link
                    to="/management"
                    className="inline-flex items-center gap-2 text-[#D4A259] font-bold uppercase tracking-widest text-xs sm:text-sm mb-8 sm:mb-10 md:mb-12 hover:gap-4 transition-all"
                >
                    <span>←</span> {t('deputy_page.base.back')}
                </Link>

                {/* Основная карточка */}
                <div className="bg-white rounded-[24px] sm:rounded-[32px] md:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden mb-12 sm:mb-16 border border-gray-100">
                    <div className="flex flex-col md:flex-row">

                        {/* Фото */}
                        <div className="md:w-2/5 aspect-square bg-gray-100 overflow-hidden">
                            {person.photo ? (
                                <img
                                    src={person.photo}
                                    alt={person.name}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">
                                    No Photo
                                </div>
                            )}
                        </div>

                        {/* Информация */}
                        <div className="md:w-3/5 p-6 sm:p-8 md:p-10 lg:p-16 flex flex-col justify-center">
                            <span className="text-[#D4A259] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-sm mb-3 sm:mb-4 block">
                                {person.role}
                            </span>

                            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight text-center md:text-left" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {person.name}
                            </h1>

                            <div className="space-y-3 sm:space-y-4 text-[#1B2A44]/80 text-base sm:text-lg">
                                {/* Дата рождения */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                    <strong className="text-[#1B2A44] min-w-[120px]">{t('deputy_page.base.birth_date')}:</strong>
                                    <span>{person.birthDate}</span>
                                </div>

                                {/* Языки */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                    <strong className="text-[#1B2A44] min-w-[120px]">{t('deputy_page.base.languages')}:</strong>
                                    <span>{person.languages}</span>
                                </div>

                                {/* Награды */}
                                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                                    <strong className="text-[#1B2A44] min-w-[120px]">{t('deputy_page.base.awards')}:</strong>
                                    {person.awards ? (
                                        <span className="text-[#D4A259] font-medium leading-tight">{person.awards}</span>
                                    ) : (
                                        <span className="text-[#D4A259] font-bold text-xl leading-none">—</span>
                                    )}
                                </div>

                                {/* Департамент */}
                                <p className="text-sm sm:text-base italic pt-3 sm:pt-4 text-[#D4A259] leading-relaxed uppercase tracking-wider font-semibold">
                                    {person.dept}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Deputy;