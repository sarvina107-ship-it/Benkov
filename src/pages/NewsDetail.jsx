import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
// Импортируем Swiper и его стили
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NewsDetail = () => {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language; // 'ru', 'uz' или 'en'
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    // УНИВЕРСАЛЬНАЯ ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ ТЕКСТА
    const getLocalizedField = (data, field) => {
        if (!data) return '';
        // Ищем поле типа title_ru, title_uz и т.д.
        const localizedValue = data[`${field}_${currentLang}`];
        // Если нашли — возвращаем, если нет — берем русский как запасной, если и его нет — просто field
        return localizedValue || data[`${field}_ru`] || data[field] || '';
    };

    useEffect(() => {
        setLoading(true);
        axios.get('https://sarvina-production.up.railway.app/api/news')
            .then(res => {
                const allNews = Array.isArray(res.data) ? res.data : (res.data.news || res.data.data || []);
                const foundItem = allNews.find(n => (n._id === id || n.id === id));
                if (foundItem) {
                    setItem(foundItem);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Ошибка API:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="py-20 text-center text-xl text-[#0E1A2B]">{t('newsDetail.loading')}</div>;
    if (!item) return <div className="py-20 text-center text-xl text-red-500">{t('newsDetail.not_found')}</div>;

    // Определяем локаль для даты
    const dateLocale = currentLang === 'uz' ? 'uz-UZ' : currentLang === 'en' ? 'en-US' : 'ru-RU';

    // ФОРМАТИРОВАНИЕ ДАТЫ (Без лишних переменных)
    const formattedDate = item?.date
        ? new Date(item.date).toLocaleDateString(dateLocale, {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
        : t('newsDetail.date_placeholder') || 'Дата не указана';

    // Разбивку картинок делаем только если они есть
    const images = item.image ? item.image.split(',').map(img => img.trim()) : [];

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-12">

                    <div className="prose prose-lg max-w-none">
                        {/* ЗАГОЛОВОК (Исправлено: используем item и нашу функцию локализации) */}
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0E1A2B] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {getLocalizedField(item, 'title')}
                        </h1>

                        {/* ДАТА */}
                        <div className="flex items-center gap-2 text-gray-500 mb-10 border-b border-gray-200 pb-6">
                            <svg className="w-5 h-5 text-[#D4A259]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-medium">{formattedDate}</span>
                        </div>

                        {/* КАРУСЕЛЬ КАРТИНОК */}
                        {images.length > 0 && (
                            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl bg-gray-50">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    navigation={images.length > 1}
                                    pagination={{ clickable: true }}
                                    className="h-auto"
                                >
                                    {images.map((imgUrl, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={imgUrl}
                                                alt={`Slide ${index}`}
                                                className="w-full h-full object-contain max-h-[600px] mx-auto"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}

                        {/* ОПИСАНИЕ (Локализованное и с разбивкой на абзацы) */}
                        <div className="text-gray-800 leading-relaxed space-y-6" style={{ fontFamily: "'Merriweather', serif", fontSize: '1.125rem' }}>
                            {getLocalizedField(item, 'description')?.split('\n').map((paragraph, i) => (
                                paragraph.trim() && <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    {/* Правая колонка (можно добавить похожие новости или баннер) */}
                    <div className="hidden lg:block">
                        <div className="sticky top-24 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <Link to="/news" className="text-[#D4A259] font-bold hover:underline">
                                ← {t('newsDetail.back_to_news') || 'Назад к новостям'}
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* СТИЛИ ДЛЯ КАРУСЕЛИ */}
            <style>{`
                .swiper-button-next, .swiper-button-prev { color: white !important; background: rgba(0,0,0,0.3); width: 45px; height: 45px; border-radius: 50%; backdrop-filter: blur(4px); }
                .swiper-button-next:after, .swiper-button-prev:after { font-size: 18px; font-weight: bold; }
                .swiper-pagination-bullet-active { background: #D4A259 !important; }
            `}</style>
        </div>
    );
};

export default NewsDetail;