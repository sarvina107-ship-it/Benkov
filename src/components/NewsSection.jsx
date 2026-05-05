import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ROUTES } from '../paths';

const NewsSection = () => {
    const { t, i18n } = useTranslation();
    const [news, setNews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const getLocalizedField = (item, field) => {
        const lang = i18n.language; // 'ru', 'uz' или 'en'
        return item[`${field}_${lang}`] || item[field];
    };

    useEffect(() => {
        axios.get('https://sarvina-production.up.railway.app/api/news')
            .then(res => {
                // Извлекаем чистые данные
                const data = Array.isArray(res.data)
                    ? res.data
                    : (res.data.news || res.data.data || []);

                // ВАЖНО: Передаем data напрямую, без дополнительных скобок []
                setNews(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Ошибка API:", err);
                setLoading(false);
            });
    }, []);

    const itemsPerSlide = 4;
    const totalSlides = Math.ceil(news.length / itemsPerSlide);

    // --- ДОБАВЛЕННЫЕ ФУНКЦИИ ЛОГИКИ СЛАЙДЕРА ---
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    if (loading) return <div className="py-20 text-center font-bold text-[#0E1A2B]">{t('home.news.loading')}</div>;
    if (news.length === 0) return null;

    // Выбираем новости для текущего слайда
    const currentNews = news.slice(
        currentIndex * itemsPerSlide,
        currentIndex * itemsPerSlide + itemsPerSlide
    );

    return (
        <section className="py-[150px] bg-[#F4F6F9] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Заголовок */}
                <div className="flex justify-between items-center mb-16">
                    <div>
                        <h2 className="text-4xl font-bold text-[#0E1A2B]" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {t('home.news.title')}
                        </h2>
                        <div className="w-20 h-[3px] bg-[#D4A259] mt-4 rounded-full"></div>
                    </div>
                </div>

                <div className="relative">
                    {/* Кнопки управления (показываем только если новостей много) */}
                    {totalSlides > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#D4A259] text-[#D4A259] text-2xl hover:bg-[#D4A259] hover:text-[#0E1A2B] transition-all duration-300 z-20 hidden xl:flex items-center justify-center"
                            >
                                ‹
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#D4A259] text-[#D4A259] text-2xl hover:bg-[#D4A259] hover:text-[#0E1A2B] transition-all duration-300 z-20 hidden xl:flex items-center justify-center"
                            >
                                ›
                            </button>
                        </>
                    )}

                    {/* Сетка новостей */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {currentNews.map((item, index) => (
                            <div
                                // Используем item.id, если его нет — индекс. Это уберет ошибку key.
                                key={item._id || index}
                                className="bg-white relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                            >
                                <div className="overflow-hidden h-[200px]">
                                    <img
                                        // Если ссылки нет, ставим null, чтобы браузер не ругался
                                        src={item.image || null}
                                        alt={item.title || "Новость"}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-[#0E1A2B] mb-2 line-clamp-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        {getLocalizedField(item, 'title')}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-6 line-clamp-2 flex-grow" style={{ fontFamily: "'Merriweather', serif" }}>
                                        {getLocalizedField(item, 'description') || t('home.news.placeholder_desc')}
                                    </p>

                                    <Link to={`/news/${item._id}`} className="mt-auto">
                                        <button className="group relative px-10 py-4 bg-[#D4A259] text-white hover:text-[#D4A259] rounded-xl font-bold uppercase tracking-[0.2em] text-sm border border-[#D4A259]/50 transition-all duration-500 hover:border-[#D4A259] hover:bg-[#D4A259]/5">
                                            {/* Анимированные уголки в стиле ваших кнопок */}
                                            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#D4A259] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-tl-lg"></span>
                                            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#D4A259] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-br-lg"></span>

                                            <span className="relative z-10 flex items-center gap-3">
                                                {t('home.news.read_more')}
                                                <span className="relative flex items-center justify-center">
                                                    {/* Иконка стрелочки, которая выезжает вправо */}
                                                    <span className="w-4 h-[1px] bg-white hover:bg-[#D4A259] transform origin-right transition-transform duration-300 group-hover:scale-x-125"></span>
                                                    <span className="absolute right-0 w-1.5 h-1.5 border-t border-r border-[#D4A259] rotate-45 transition-transform duration-300 group-hover:translate-x-1"></span>
                                                </span>
                                            </span>

                                            {/* Мягкое свечение при наведении */}
                                            <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 shadow-[0_0_20px_rgba(212,162,89,0.1)] transition-opacity duration-500"></span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Кнопка */}
            <div className="mt-16 text-center">
                <Link to={ROUTES.NEWSLIST}>
                    <button className="group relative px-10 py-4 bg-[#1B2A44] text-white rounded-xl font-bold uppercase tracking-[0.2em] text-sm border border-white/30 transition-all duration-300 hover:border-white">
                        <span className="absolute inset-0 border border-[#1B2A44] rounded-xl opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></span>
                        <span className="relative z-10 flex items-center gap-2">
                            {t('home.news.all_news')}
                            <span className="relative w-3 h-3">
                                <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white transition-transform group-hover:rotate-90"></span>
                                <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></span>
                            </span>
                        </span>
                    </button>
                </Link>
            </div>

        </section>
    );
};

export default NewsSection;