import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ROUTES } from '../paths';
import History from '../assets/img/HistoryImg.png'
import NewsSection from '../components/NewsSection';
import { directionsData } from '../data/directionsData';

const Home = () => {
  const { t } = useTranslation();

  const featuredKeys = [
    "costume-designer",
    "graphic-artist",
    "easel-painting",
    "sculpture",
    "cinema-artist",
    "theatrical-props"
  ];

  // 1. Refs
  const sectionsRef = useRef([]);

  // 2. useState (ДОБАВЛЕНО!)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 3. Переменные и константы
  const imageModules = import.meta.glob('/src/assets/gallery/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default'
  });
  const allImages = Object.values(imageModules);
  const galleryPreview = allImages.slice(0, 3);

  // 4. useEffect для отслеживания ширины окна (ДОБАВЛЕНО!)
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 5. useEffect для анимации появления при скролле
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const currentSections = sectionsRef.current.filter(Boolean);
    currentSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      currentSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  return (
    <div>
      {/* --- История школы --- */}
      <section
        ref={el => sectionsRef.current[0] = el}
        className="relative px-4 sm:px-8 md:px-[50px] py-[60px] sm:py-[100px] md:py-[150px] bg-[#FAF9F6] overflow-x-hidden opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        {/* Декоративные элементы скрываем на мобилках */}
        <div className="absolute top-20 -left-10 w-[300px] h-[300px] bg-[#D4A259]/10 rounded-full blur-[100px] -z-0 rotate-12 pointer-events-none hidden md:block"></div>
        <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-[#D4A259]/5 rounded-full blur-[120px] -z-0 pointer-events-none hidden lg:block"></div>

        {/* Убираем justify-between, добавляем w-full */}
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-[40px] md:gap-[60px] lg:gap-[80px] relative z-10">

          {/* Изображение - ПЕРВОЕ на мобилках (order-1), НО на десктопе будет ВТОРЫМ (lg:order-2) */}
          <div className="relative group w-full lg:w-auto lg:order-2 order-1 max-w-[540px] mx-auto lg:mx-0">
            {/* Ограничиваем максимальную ширину, чтобы фото не "плыло" */}
            <div className="max-w-[540px] mx-auto lg:mx-0">
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full border-[1px] border-[#D4A259] rounded-[20px] sm:rounded-[24px] group-hover:top-0 group-hover:left-0 transition-all duration-500"></div>

              <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px]">
                <img
                  className="h-[300px] sm:h-[380px] md:h-[450px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={History}
                  alt="История школы"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1B2A44]/20 to-transparent"></div>
              </div>

              {/* Подпись */}
              <div className="hidden sm:block absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white shadow-lg p-3 md:p-4 rounded-lg rotate-3 z-20">
                <p className="text-[12px] md:text-[14px] font-bold text-[#1B2A44]">{t('home.history_preview.image_label')}</p>
                <p className="text-[10px] md:text-[12px] text-gray-500 italic">{t('home.history_preview.image_sublabel')}</p>
              </div>
            </div>
          </div>

          {/* Текстовая часть - ВТОРАЯ на мобилках (order-2), НО на десктопе будет ПЕРВОЙ (lg:order-1) */}
          <div className="max-w-[560px] w-full relative lg:order-1 order-2">
            <span className="absolute -top-10 -left-5 text-[80px] sm:text-[100px] md:text-[120px] font-bold text-[#1B2A44]/5 select-none pointer-events-none">
              1918
            </span>

            <h2
              className="text-[#1B2A44] text-[32px] sm:text-[38px] md:text-[42px] font-bold leading-[1.2] sm:leading-[1.1] relative z-10 text-center lg:text-left"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('home.history_preview.title')} <br />
              <span className="text-[#D4A259]">{t('home.history_preview.title_accent')}</span>
            </h2>

            <div className="w-[60px] h-[3px] bg-[#D4A259] mt-[20px] mx-auto lg:mx-0"></div>

            <div className="space-y-6 mt-[30px]">
              <p
                className="text-[#1B2A44]/80 text-[16px] sm:text-[18px] leading-relaxed italic border-l-2 border-[#D4A259]/30 pl-6 text-center lg:text-left"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                {t('home.history_preview.quote')}
              </p>

              <p
                className="text-[#1B2A44] text-[15px] sm:text-[17px] leading-relaxed opacity-90 text-center lg:text-left"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                {t('home.history_preview.description')}
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link to={ROUTES.ABOUT}>
                <button className="group relative mt-[40px] px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#D4A259] text-[#1B2A44] rounded-xl font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm border border-[#D4A259]/30 transition-all duration-300 hover:border-[#1B2A44]">
                  <span className="absolute inset-0 border border-[#1B2A44] rounded-xl opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    {t('home.history_preview.btn_history')}
                    <span className="relative w-3 h-3">
                      <span className="absolute top-1/2 left-0 w-full h-[1px] bg-[#1B2A44] transition-transform group-hover:rotate-90"></span>
                      <span className="absolute top-1/2 left-0 w-full h-[1px] bg-[#1B2A44]"></span>
                    </span>
                  </span>
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* --- Направления --- */}
      <section
        className="py-[60px] sm:py-[100px] md:py-[150px] bg-[#FAF9F6] relative overflow-hidden opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        ref={el => sectionsRef.current[1] = el}
      >
        {/* Декоративные пятна */}
        <div className="absolute top-0 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#D4A259]/10 rounded-full blur-[100px] pointer-events-none hidden sm:block"></div>
        <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#D4A259]/5 rounded-full blur-[120px] pointer-events-none hidden md:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">

          {/* Заголовок */}
          <div className="relative inline-block mb-4">
            <span className="absolute -top-4 -right-4 sm:-top-6 sm:-right-8 text-[#D4A259]/20 text-4xl sm:text-6xl select-none italic font-serif pointer-events-none hidden sm:block">Art</span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2A44] relative z-10"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('home.directions.title')}
            </h2>
          </div>

          {/* Декоративная линия */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 mb-12 sm:mb-16">
            <span className="block w-8 sm:w-12 h-[2px] bg-[#D4A259]/40"></span>
            <span className="block w-16 sm:w-24 h-[2px] sm:h-[3px] bg-[#D4A259] rounded-full"></span>
            <span className="block w-8 sm:w-12 h-[2px] bg-[#D4A259]/40"></span>
          </div>

          {/* Динамическая сетка карточек */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {featuredKeys.map((key) => {
              const item = directionsData[key];
              return (
                <div
                  key={key}
                  className="relative group rounded-[24px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700"
                >
                  {/* Тонкая внутренняя рамка */}
                  <div className="absolute inset-0 border-[1px] border-[#D4A259]/20 rounded-[24px] sm:rounded-[28px] md:rounded-[32px] pointer-events-none z-20 m-1.5 sm:m-2"></div>

                  <img
                    src={item.image}
                    alt={t(`directions.items.${key}.title`)}
                    className="w-full h-56 sm:h-72 md:h-80 object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Затемнение снизу */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A44] via-[#1B2A44]/40 to-transparent"></div>

                  {/* Контент - всегда виден */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 z-10">
                    <h3
                      className="text-lg sm:text-xl md:text-2xl font-bold text-[#D4A259] mb-2 sm:mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {t(`directions.items.${key}.title`)}
                    </h3>

                    <p
                      className="text-xs sm:text-sm text-white/90 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      {t(`directions.items.${key}.desc`)}
                    </p>

                    {/* Кнопка всегда видна, меняется при ховере на карточке */}
                    <Link to={`/directions/${key}`}>
                      <button className="group/btn relative py-2 px-1 text-white/70 hover:text-[#D4A259] font-bold uppercase tracking-[0.12em] sm:tracking-[0.15em] text-[10px] sm:text-xs transition-all duration-300">
                        <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                          {t('home.directions.btn_more')}
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                        <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#D4A259] group-hover/btn:w-full group-hover/btn:left-0 transition-all duration-300 ease-in-out"></span>
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Кнопка "Все направления" */}
          <div className="mt-12 sm:mt-16 md:mt-20">
            <Link to={ROUTES.DIRECTIONS}>
              <button className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#1B2A44] text-[#D4A259] rounded-xl font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm border border-[#D4A259]/30 transition-all duration-300 hover:border-[#D4A259]">
                <span className="absolute inset-0 border border-[#D4A259] rounded-xl opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></span>
                <span className="relative z-10 flex items-center gap-2">
                  {t('home.directions.btn_all')}
                  <span className="relative w-3 h-3">
                    <span className="absolute top-1/2 left-0 w-full h-[1px] bg-[#D4A259] transition-transform group-hover:rotate-90"></span>
                    <span className="absolute top-1/2 left-0 w-full h-[1px] bg-[#D4A259]"></span>
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- Галерея учеников --- */}
      <section
        ref={el => sectionsRef.current[2] = el}
        className="py-[60px] sm:py-[100px] md:py-[150px] lg:py-[180px] bg-white relative overflow-hidden opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        {/* Текстура фона */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/canvas-orange.png')` }}>
        </div>

        {/* Декоративные пятна */}
        <div className="absolute top-10 left-[-5%] w-64 sm:w-80 h-64 sm:h-80 bg-[#D4A259]/5 rounded-full blur-[120px] pointer-events-none hidden sm:block"></div>
        <div className="absolute bottom-10 right-[5%] w-72 sm:w-96 h-72 sm:h-96 bg-[#D4A259]/10 rounded-full blur-[150px] pointer-events-none hidden md:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

          {/* Заголовок */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <span className="text-[#D4A259] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">
              {t('home.gallery.subtitle')}
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B2A44] relative inline-block"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('home.gallery.title')}
              <span className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-[2px] sm:h-[3px] bg-[#D4A259]"></span>
            </h2>
          </div>

          {/* Сетка галереи */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-start">
            {galleryPreview.map((src, index) => (
              <div
                key={index}
                className={`relative group rounded-xl overflow-hidden bg-white 
            shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(212,162,89,0.15)] 
            transition-all duration-700 sm:duration-1000 ease-in-out cursor-pointer 
            ${index === 1 ? 'lg:mt-6 xl:mt-12' : ''}`}
              >
                {/* Внутренний бордюр */}
                <div className="absolute inset-0 border-[0px] group-hover:border-[8px] sm:group-hover:border-[12px] border-white/20 transition-all duration-500 z-20 pointer-events-none"></div>

                <img
                  src={src}
                  alt={`Лучшая работа ${index + 1}`}
                  className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover transition-transform duration-700 sm:duration-[1.2s] group-hover:scale-105"
                />

                {/* Overlay с информацией - ВСЕГДА ВИДЕН на мобилках и планшетах */}
                {/* На десктопе - появляется при ховере */}
                <div className={`
            absolute inset-0 bg-gradient-to-t from-[#1B2A44]/90 via-[#1B2A44]/40 to-transparent
            transition-all duration-500 z-10 flex flex-col justify-end p-5 sm:p-6 md:p-8
            ${index === 1 ? 'lg:opacity-0 lg:group-hover:opacity-100' : 'lg:opacity-0 lg:group-hover:opacity-100'}
            opacity-100
          `}>

                  <div className={`
              transform transition-transform duration-500
              ${index === 1 ? 'lg:translate-y-6 lg:group-hover:translate-y-0' : 'lg:translate-y-6 lg:group-hover:translate-y-0'}
              translate-y-0
            `}>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#FAF9F6]/80 mb-1 sm:mb-2 font-semibold block">
                      {t('home.gallery.card_badge')}
                    </span>
                    <h3
                      className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-2 sm:mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {t('home.gallery.card_title')}
                    </h3>
                    {/* Линия */}
                    <div className="w-6 h-[1px] bg-[#D4A259] lg:group-hover:w-full transition-all duration-500 sm:duration-700"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Кнопка "Вся галерея" */}
          <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 text-center relative z-10">
            <Link to={ROUTES.GALLERY}>
              <button className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#1B2A44] text-white rounded-xl font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm border border-white/30 transition-all duration-300 hover:border-white">
                <span className="absolute inset-0 border border-[#1B2A44] rounded-xl opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></span>
                <span className="relative z-10 flex items-center gap-2">
                  {t('home.gallery.btn_all')}
                  <span className="relative w-3 h-3">
                    <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white transition-transform group-hover:rotate-90"></span>
                    <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></span>
                  </span>
                </span>
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* --- Руководство --- */}
      <section
        className="py-[60px] sm:py-[100px] md:py-[140px] lg:py-[180px] bg-[#0B1524] relative overflow-hidden opacity-0 translate-y-10 transition-all duration-[1.2s] ease-out"
        ref={el => sectionsRef.current[3] = el}
      >
        {/* Декоративный фон */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')` }}>
        </div>

        {/* Золотистое свечение за текстом */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#D4A259]/10 rounded-full blur-[150px] hidden md:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24">

            {/* ФОТО С ЭФФЕКТОМ */}
            <div className="w-full lg:w-1/2 relative group max-w-[500px] lg:max-w-none mx-auto">
              {/* Декоративная золотая рама */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full border border-[#D4A259]/30 rounded-2xl sm:rounded-3xl transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>

              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img
                  src="/images/director.jpg"
                  alt="Директор школы"
                  className="w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover object-top transition-transform duration-[2s] group-hover:scale-110"
                />

                {/* Градиентный оверлей */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1524] via-transparent to-transparent opacity-60"></div>

                {/* Декор: подпись */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 border border-white/20 backdrop-blur-md bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg">
                  <p className="text-white/50 text-[8px] sm:text-[10px] tracking-widest uppercase italic">P.P. Benkov School</p>
                </div>
              </div>

              {/* Парящий элемент с цифрой - только на десктопе */}
              <div className="hidden xl:block absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-[#D4A259] p-4 lg:p-6 rounded-2xl shadow-xl transform group-hover:rotate-6 transition-transform duration-500">
                <p className="text-[#0B1524] text-2xl lg:text-3xl font-bold leading-none">100+</p>
                <p className="text-[#0B1524] text-[8px] lg:text-[10px] font-bold uppercase tracking-tighter">{t('home.director.years_tradition')}</p>
              </div>
            </div>

            {/* ТЕКСТОВАЯ ЧАСТЬ */}
            <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                  <span className="w-8 sm:w-12 h-[1px] bg-[#D4A259]"></span>
                  <span className="text-[#D4A259] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold">
                    {t('home.director.badge')}
                  </span>
                </div>

                <h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {t('home.director.title_part1')} <br />
                  <span className="text-[#D4A259]">{t('home.director.title_part2')}</span>
                </h2>

                <h3
                  className="text-xl sm:text-2xl font-medium text-[#D4A259]/80 mb-6 sm:mb-8 italic"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  {t('home.director.name')}
                </h3>
              </div>

              {/* Цитата */}
              <div className="relative mb-8 sm:mb-10">
                <span className="absolute -top-8 -left-4 sm:-top-10 sm:-left-6 text-[80px] sm:text-[120px] text-[#D4A259]/10 font-serif leading-none">“</span>
                <p
                  className="text-gray-400 text-base sm:text-lg leading-[1.6] sm:leading-[1.8] relative z-10 italic px-4 sm:px-0"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  {t('home.director.quote')}
                </p>
              </div>

              {/* Кнопка */}
              <div className="flex justify-center lg:justify-start">
                <Link to={ROUTES.MANAGEMENT}>
                  <button className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#D4A259] text-white rounded-xl font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm border border-[#D4A259]/30 transition-all duration-300 hover:border-white">
                    <span className="absolute inset-0 border border-white rounded-xl opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      {t('home.director.btn_more')}
                      <span className="relative w-3 h-3">
                        <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white transition-transform group-hover:rotate-90"></span>
                        <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></span>
                      </span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Почему выбирают нас --- */}
      {/* --- Почему выбирают нас --- */}
      <section
        className="py-[60px] sm:py-[100px] md:py-[140px] lg:py-[180px] bg-white relative overflow-hidden opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        ref={el => sectionsRef.current[4] = el}
      >
        {/* Декоративные элементы на фоне */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/cream-paper.png')` }}>
        </div>

        <div className="absolute top-40 left-[-10%] w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#D4A259]/5 rounded-full blur-[120px] hidden sm:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

          {/* Заголовок */}
          <div className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B2A44] mb-4 sm:mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('home.benefits.title_main')}
              <span className="text-[#D4A259]"> {t('home.benefits.title_accent')}</span>
            </h2>
            <div className="flex justify-center items-center gap-3 sm:gap-4">
              <span className="w-8 sm:w-12 h-[1px] bg-[#D4A259]/30"></span>
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#D4A259]"></div>
              <span className="w-8 sm:w-12 h-[1px] bg-[#D4A259]/30"></span>
            </div>
          </div>

          {/* Блоки в шахматном порядке */}
          <div className="space-y-20 sm:space-y-24 md:space-y-28 lg:space-y-32">

            {/* Блок 1: Текст */}
            <div className="flex flex-col items-center gap-16 lg:gap-24">
              <div className="w-full max-w-3xl mx-auto">
                <div className="flex items-start gap-4 sm:gap-6 flex-col sm:flex-row text-center sm:text-left">
                  <span className="text-4xl sm:text-5xl font-serif text-[#D4A259]/20 font-bold leading-none mx-auto sm:mx-0">
                    01
                  </span>
                  <div>
                    <h3
                      className="text-2xl sm:text-3xl font-bold text-[#1B2A44] mb-3 sm:mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {t('home.benefits.items.one.title')}
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-serif">
                      {t('home.benefits.items.one.desc')}
                    </p>
                  </div>
                </div>

                {/* Список достижений */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-6 sm:pt-8 mt-4 sm:mt-6 border-t border-[#D4A259]/10">
                  <li className="flex items-center gap-2 text-sm text-[#1B2A44]/70 justify-center sm:justify-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A259] flex-shrink-0"></span>
                    {t('home.benefits.items.one.list_1')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#1B2A44]/70 justify-center sm:justify-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A259] flex-shrink-0"></span>
                    {t('home.benefits.items.one.list_2')}
                  </li>
                </ul>
              </div>

              {/* Декоративная разделительная линия между блоками */}
              <div className="hidden lg:block w-px h-16 bg-[#D4A259]/20"></div>
            </div>

            {/* Блок 2: Текст */}
            <div className="flex flex-col items-center gap-16 lg:gap-24">
              <div className="w-full max-w-3xl mx-auto">
                <div className="flex items-start gap-4 sm:gap-6 flex-col sm:flex-row text-center sm:text-left">
                  <span className="text-4xl sm:text-5xl font-serif text-[#D4A259]/20 font-bold leading-none mx-auto sm:mx-0">
                    02
                  </span>
                  <div>
                    <h3
                      className="text-2xl sm:text-3xl font-bold text-[#1B2A44] mb-3 sm:mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {t('home.benefits.items.two.title')}
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-serif">
                      {t('home.benefits.items.two.desc')}
                    </p>
                  </div>
                </div>

                {/* Теги/метки */}
                <div className="flex flex-wrap gap-3 pt-6 sm:pt-8 mt-4 sm:mt-6 justify-center sm:justify-start border-t border-[#D4A259]/10">
                  <span className="px-3 sm:px-4 py-1.5 bg-[#FAF9F6] border border-[#D4A259]/20 rounded-full text-[11px] sm:text-xs text-[#D4A259] font-bold tracking-widest uppercase">
                    {t('home.benefits.items.two.tag_1')}
                  </span>
                  <span className="px-3 sm:px-4 py-1.5 bg-[#FAF9F6] border border-[#D4A259]/20 rounded-full text-[11px] sm:text-xs text-[#D4A259] font-bold tracking-widest uppercase">
                    {t('home.benefits.items.two.tag_2')}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Кнопка */}
          <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 text-center">
            <Link to={ROUTES.ACHIEVEMENTS}>
              <button className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#D4A259] text-white rounded-xl font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm border border-[#D4A259]/30 transition-all duration-300 hover:border-[#1B2A44]">
                <span className="absolute inset-0 border-[1px] border-[#1B2A44] rounded-xl opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></span>
                <span className="relative z-10 flex items-center gap-2">
                  {t('home.benefits.btn_achievements')}
                  <span className="relative w-3 h-3">
                    <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white transition-transform group-hover:rotate-90"></span>
                    <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></span>
                  </span>
                </span>
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* --- Новости --- */}
      <NewsSection />
    </div>
  )
}

export default Home;