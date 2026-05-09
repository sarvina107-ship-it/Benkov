import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NewsDetail = () => {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const getLocalizedField = (data, field) => {
        if (!data) return '';
        const localizedValue = data[`${field}_${currentLang}`];
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

    if (loading) return <div className="py-20 text-center text-xl text-[#0E1A2B] px-4">{t('newsDetail.loading')}</div>;
    if (!item) return <div className="py-20 text-center text-xl text-red-500 px-4">{t('newsDetail.not_found')}</div>;

    const dateLocale = currentLang === 'uz' ? 'uz-UZ' : currentLang === 'en' ? 'en-US' : 'ru-RU';

    const formattedDate = item?.date
        ? new Date(item.date).toLocaleDateString(dateLocale, {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
        : t('newsDetail.date_placeholder') || 'Дата не указана';

    const images = item.image ? item.image.split(',').map(img => img.trim()) : [];

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
                
                {/* Кнопка назад - для мобилок сверху */}
                <div className="mb-6 lg:hidden">
                    <Link to="/news" className="inline-flex items-center gap-2 text-[#D4A259] font-bold hover:underline">
                        <span>←</span> {t('newsDetail.back_to_news') || 'Назад к новостям'}
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8 sm:gap-10 md:gap-12">

                    {/* ЛЕВАЯ КОЛОНКА - ОСНОВНОЙ КОНТЕНТ */}
                    <div className="prose prose-lg max-w-none">
                        
                        {/* ЗАГОЛОВОК */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0E1A2B] mb-4 sm:mb-6 leading-tight text-center sm:text-left" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {getLocalizedField(item, 'title')}
                        </h1>

                        {/* ДАТА */}
                        <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-500 mb-8 sm:mb-10 border-b border-gray-200 pb-5 sm:pb-6">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A259]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm sm:text-base font-medium">{formattedDate}</span>
                        </div>

                        {/* КАРУСЕЛЬ КАРТИНОК - АДАПТИВНАЯ */}
                        {images.length > 0 && (
                            <div className="mb-8 sm:mb-10 md:mb-12 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    navigation={images.length > 1}
                                    pagination={{ clickable: true }}
                                    loop={images.length > 1}
                                    className="news-swiper"
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        768: {
                                            slidesPerView: 1,
                                            spaceBetween: 15,
                                        },
                                        1024: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                    }}
                                >
                                    {images.map((imgUrl, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="flex justify-center items-center bg-gray-100 min-h-[250px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[500px]">
                                                <img
                                                    src={imgUrl}
                                                    alt={`Изображение ${index + 1}`}
                                                    className="w-full h-auto max-h-[250px] sm:max-h-[350px] md:max-h-[450px] lg:max-h-[500px] object-contain"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}

                        {/* ОПИСАНИЕ */}
                        <div className="text-gray-800 leading-relaxed space-y-4 sm:space-y-5 md:space-y-6" style={{ fontFamily: "'Merriweather', serif", fontSize: '1rem' }}>
                            {getLocalizedField(item, 'description')?.split('\n').map((paragraph, i) => (
                                paragraph.trim() && <p key={i} className="text-sm sm:text-base md:text-lg">{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    {/* ПРАВАЯ КОЛОНКА */}
                    <div className="hidden lg:block">
                        <div className="sticky top-24 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <Link to="/news" className="text-[#D4A259] font-bold hover:underline flex items-center gap-2">
                                <span>←</span> {t('newsDetail.back_to_news') || 'Назад к новостям'}
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* СТИЛИ ДЛЯ КАРУСЕЛИ - УЛУЧШЕННЫЕ */}
            <style>{`
                .news-swiper {
                    width: 100%;
                    height: auto;
                }
                
                .news-swiper .swiper-button-next,
                .news-swiper .swiper-button-prev {
                    color: white !important;
                    background: rgba(0, 0, 0, 0.4);
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    backdrop-filter: blur(4px);
                    transition: all 0.3s ease;
                }
                
                .news-swiper .swiper-button-next:hover,
                .news-swiper .swiper-button-prev:hover {
                    background: #D4A259;
                    transform: scale(1.1);
                }
                
                .news-swiper .swiper-button-next:after,
                .news-swiper .swiper-button-prev:after {
                    font-size: 14px;
                    font-weight: bold;
                }
                
                .news-swiper .swiper-pagination-bullet {
                    background: white;
                    opacity: 0.6;
                    width: 8px;
                    height: 8px;
                }
                
                .news-swiper .swiper-pagination-bullet-active {
                    background: #D4A259 !important;
                    opacity: 1;
                    width: 20px;
                    border-radius: 4px;
                }
                
                /* Адаптивные стили для кнопок навигации */
                @media (min-width: 640px) {
                    .news-swiper .swiper-button-next,
                    .news-swiper .swiper-button-prev {
                        width: 40px;
                        height: 40px;
                    }
                    .news-swiper .swiper-button-next:after,
                    .news-swiper .swiper-button-prev:after {
                        font-size: 16px;
                    }
                }
                
                @media (min-width: 1024px) {
                    .news-swiper .swiper-button-next,
                    .news-swiper .swiper-button-prev {
                        width: 45px;
                        height: 45px;
                    }
                    .news-swiper .swiper-button-next:after,
                    .news-swiper .swiper-button-prev:after {
                        font-size: 18px;
                    }
                }
                
                /* На мобилках кнопки меньше и ближе к краям */
                @media (max-width: 640px) {
                    .news-swiper .swiper-button-next {
                        right: 5px;
                    }
                    .news-swiper .swiper-button-prev {
                        left: 5px;
                    }
                }
            `}</style>
        </div>
    );
};

export default NewsDetail;