import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NewsList = () => {
    const { t, i18n } = useTranslation();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    // АДАПТИВНАЯ ПАГИНАЦИЯ - меняем количество новостей на странице
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    // Отслеживаем ширину экрана для адаптивной пагинации
    useEffect(() => {
        const updateItemsPerPage = () => {
            const width = window.innerWidth;
            if (width < 640) setItemsPerPage(3);      // Мобилки: 3 новости
            else if (width < 1024) setItemsPerPage(4); // Планшеты: 4 новости
            else setItemsPerPage(6);                   // Десктоп: 6 новостей
        };

        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    // Сброс страницы при изменении количества новостей
    useEffect(() => {
        setCurrentPage(1);
    }, [itemsPerPage]);

    const getLocalizedField = (item, field) => {
        const lang = i18n.language;
        return item[`${field}_${lang}`] || item[field];
    };

    useEffect(() => {
        axios.get('https://sarvina-production.up.railway.app/api/news')
            .then(res => {
                const data = Array.isArray(res.data) ? res.data : (res.data.news || res.data.data || []);
                setNews(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Ошибка API:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="py-20 text-center font-bold text-[#0E1A2B] px-4">{t('newsList.loading')}</div>;

    // Логика расчета страниц
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(news.length / itemsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Функция для отображения номеров страниц (с обрезкой на мобилках)
    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = window.innerWidth < 640 ? 3 : 5;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= maxVisible - 1; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - (maxVisible - 2); i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            }
        }
        return pages;
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Хедер страницы */}
            <div className="bg-[#F4F6F9] py-12 sm:py-16 md:py-20 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E1A2B] mb-3 sm:mb-4 text-center sm:text-left" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {t('newsList.header_title')}
                    </h1>
                    <div className="w-16 sm:w-20 md:w-24 h-[2px] sm:h-[3px] bg-[#D4A259] rounded-full mx-auto sm:mx-0"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                {/* Сетка новостей - адаптивная */}
                <div className={`
                    grid gap-6 sm:gap-8 md:gap-10
                    ${itemsPerPage === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : ''}
                    ${itemsPerPage === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : ''}
                    ${itemsPerPage === 6 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : ''}
                `}>
                    {currentNews.map((item, index) => (
                        <div
                            key={item._id || index}
                            className="bg-white group rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100"
                        >
                            <div className="overflow-hidden h-[200px] sm:h-[220px] md:h-[250px] relative">
                                <img
                                    src={item.image ? item.image.split(',')[0].trim() : null}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {item.createdAt && (
                                    <div className="absolute bottom-3 left-3 bg-[#0E1A2B]/80 backdrop-blur-md text-white text-[9px] sm:text-[10px] px-2 sm:px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                                        {new Date(item.createdAt).toLocaleDateString(i18n.language === 'ru' ? 'ru-RU' : i18n.language === 'uz' ? 'uz-UZ' : 'en-US')}
                                    </div>
                                )}
                            </div>

                            <div className="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col flex-grow">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0E1A2B] mb-2 sm:mb-3 md:mb-4 line-clamp-2 group-hover:text-[#D4A259] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {getLocalizedField(item, 'title')}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5 md:mb-6 lg:mb-8 line-clamp-3 flex-grow leading-relaxed" style={{ fontFamily: "'Merriweather', serif" }}>
                                    {getLocalizedField(item, 'description') || t('newsList.placeholder_desc')}
                                </p>

                                <Link to={`/news/${item._id}`} className="mt-auto">
                                    <button className="flex items-center justify-center sm:justify-start gap-2 text-[#D4A259] font-bold uppercase text-[10px] sm:text-xs tracking-widest group/btn w-full sm:w-auto">
                                        {t('newsList.read_full')}
                                        <span className="w-4 sm:w-6 h-[1px] bg-[#D4A259] group-hover/btn:w-6 sm:group-hover/btn:w-10 transition-all duration-300"></span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ПАГИНАЦИЯ - адаптивная */}
                {totalPages > 1 && (
                    <div className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap justify-center items-center gap-2 sm:gap-3">
                        <button
                            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all text-sm sm:text-base ${currentPage === 1
                                    ? 'border-gray-100 text-gray-300 cursor-not-allowed'
                                    : 'border-[#D4A259] text-[#D4A259] hover:bg-[#D4A259] hover:text-white'
                                }`}
                        >
                            ‹
                        </button>

                        {getPageNumbers().map((page, idx) => (
                            <button
                                key={idx}
                                onClick={() => typeof page === 'number' && paginate(page)}
                                className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 ${currentPage === page
                                        ? 'bg-[#0E1A2B] text-white'
                                        : page === '...'
                                            ? 'cursor-default hover:bg-transparent'
                                            : 'text-[#0E1A2B] hover:bg-[#F4F6F9]'
                                    }`}
                                disabled={page === '...'}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all text-sm sm:text-base ${currentPage === totalPages
                                    ? 'border-gray-100 text-gray-300 cursor-not-allowed'
                                    : 'border-[#D4A259] text-[#D4A259] hover:bg-[#D4A259] hover:text-white'
                                }`}
                        >
                            ›
                        </button>
                    </div>
                )}

                {/* Информация о количестве новостей */}
                <div className="mt-8 text-center">
                    <p className="text-xs sm:text-sm text-gray-400">
                        {t('newsList.showing')} {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, news.length)} {t('newsList.of')} {news.length} {t('newsList.news')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsList;