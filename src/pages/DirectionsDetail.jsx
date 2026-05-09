import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { directionsData } from '../data/directionsData';
import { ROUTES } from '../paths';

const DirectionsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const data = directionsData[id];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Все изображения (основное + дополнительные)
    const allImages = data ? [data.images[0], ...data.images.slice(1, 5)] : [];

    // Автопрокрутка каждые 5 секунд
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, allImages.length]);

    // Если данных нет, показываем заглушку
    if (!data) return <div className="pt-24 text-center font-serif text-[#0E1A2B] px-4">{t('directions.data.undefined')}</div>;

    const nextImage = () => {
        setIsAutoPlaying(false);
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
        // Возобновляем автопрокрутку через 10 секунд бездействия
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prevImage = () => {
        setIsAutoPlaying(false);
        setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToImage = (index) => {
        setIsAutoPlaying(false);
        setCurrentImageIndex(index);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <div className="min-h-screen bg-[#F8F6F2] pb-16 sm:pb-20 md:pb-24 text-[#0E1A2B]">

            {/* Навигация */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 py-4 sm:py-5 md:py-6">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-[#0E1A2B]/70 hover:text-[#D4A259] transition-all font-medium uppercase tracking-widest text-[10px] sm:text-xs group"
                >
                    <span className="text-base sm:text-lg transition-transform group-hover:-translate-x-1">←</span>
                    {t('directions.data.back')}
                </button>
            </div>

            {/* КАРУСЕЛЬ ИЗОБРАЖЕНИЙ */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
                <div className="relative group">
                    {/* Основное изображение карусели */}
                    <div className="rounded-[20px] sm:rounded-[24px] md:rounded-[30px] overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[16/10] relative">
                        <img
                            src={allImages[currentImageIndex]}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            alt={`Изображение ${currentImageIndex + 1}`}
                        />

                        {/* Затемнение для лучшей видимости кнопок */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>

                    {/* Кнопка "Назад" */}
                    <button
                        onClick={prevImage}
                        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#D4A259] hover:text-white group/btn"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Кнопка "Вперед" */}
                    <button
                        onClick={nextImage}
                        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#D4A259] hover:text-white group/btn"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Индикаторы (точки) */}
                    <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                        {allImages.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToImage(idx)}
                                className={`transition-all duration-300 rounded-full ${currentImageIndex === idx
                                        ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-[#D4A259]'
                                        : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/60 hover:bg-white/90'
                                    }`}
                                aria-label={`Перейти к слайду ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Миниатюры для быстрой навигации (на планшетах и выше) */}
                <div className="hidden sm:flex gap-2 sm:gap-3 mt-4 sm:mt-5 justify-center">
                    {allImages.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToImage(idx)}
                            className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-[12px] sm:rounded-[16px] overflow-hidden transition-all duration-300 ${currentImageIndex === idx
                                    ? 'ring-2 ring-[#D4A259] shadow-lg scale-105'
                                    : 'opacity-60 hover:opacity-100'
                                }`}
                        >
                            <img src={img} className="w-full h-full object-cover" alt={`Миниатюра ${idx + 1}`} />
                        </button>
                    ))}
                </div>
            </section>

            {/* Контентная часть (без изменений) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-start">
                    <div className="lg:w-1/3 lg:sticky lg:top-24 w-full">
                        <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                                <div className="w-8 sm:w-12 h-[1px] bg-[#D4A259]"></div>
                                <h3 className="text-[#D4A259] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                                    {t('directions.about.deric')}
                                </h3>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.2] sm:leading-[1.1] text-[#0E1A2B]">
                                {t(`directions.items.${id}.title`)}
                            </h1>
                        </div>
                    </div>

                    <div className="lg:w-2/3 w-full">
                        <div className="relative">
                            <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-6 md:-top-10 md:-left-10 text-[80px] sm:text-[100px] md:text-[120px] lg:text-[160px] font-serif text-[#D4A259]/5 select-none pointer-events-none">
                                Art
                            </div>
                            <p className="relative z-10 text-base sm:text-lg md:text-xl lg:text-2xl text-[#0E1A2B]/90 leading-[1.6] sm:leading-[1.7] font-light 
                                first-letter:text-4xl sm:first-letter:text-5xl md:first-letter:text-6xl first-letter:font-serif first-letter:font-bold 
                                first-letter:text-[#D4A259] first-letter:mr-2 first-letter:float-left 
                                first-letter:leading-[0.8] first-letter:mt-1 sm:first-letter:mt-2">
                                {t(`directions.items.${id}.desc`)}
                                <br />
                                <br />
                                {t(`directions.items.${id}.desc1`)}
                            </p>
                            <div className="mt-12 sm:mt-16 w-full h-[1px] bg-gradient-to-r from-[#D4A259]/30 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Секция поступления (без изменений) */}
            <section className="py-16 sm:py-20 md:py-24 bg-[#F4F2EE] border-t border-[#D4A259]/10 mt-12 sm:mt-16 md:mt-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="bg-white rounded-[20px] sm:rounded-[24px] md:rounded-[30px] p-6 sm:p-8 md:p-12 shadow-inner border border-[#D4A259]/10 relative overflow-hidden">
                        <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 md:-bottom-10 md:-right-10 text-[100px] sm:text-[140px] md:text-[180px] font-serif font-bold text-[#D4A259]/5 select-none pointer-events-none">
                            Art
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
                            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#F4F2EE] flex items-center justify-center border-4 border-white shadow-lg">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A259" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="12" y1="18" x2="12" y2="12"></line>
                                    <line x1="9" y1="15" x2="15" y2="15"></line>
                                </svg>
                            </div>

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
                        <div className="absolute inset-x-0 bottom-0 h-1 sm:h-2 bg-gradient-to-r from-transparent via-[#D4A259]/40 to-transparent"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DirectionsDetail;