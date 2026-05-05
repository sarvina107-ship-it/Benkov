import React, { useEffect, useRef } from 'react';
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

  // 1. Инициализируем рефы
  const sectionsRef = useRef([]);

  // 1. Автоматически подтягиваем все изображения из новой папки в src
  const imageModules = import.meta.glob('/src/assets/gallery/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default'
  });

  // 2. Превращаем объект в массив прямых ссылок
  const allImages = Object.values(imageModules);

  // 3. Берем только первые 3 для превью (как в вашей сетке на 3 колонки)
  const galleryPreview = allImages.slice(0, 3);

  // 3. Эффект появления
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          // После того как секция появилась, можно прекратить за ней следить (для оптимизации)
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // Начнет анимацию чуть раньше, чем секция полностью войдет в экран
    });

    // Важно: фильтруем массив от пустых значений перед итерацией
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
        className="relative px-[50px] py-[150px] bg-[#FAF9F6] overflow-hidden opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        {/* Декоративный мазок краской на заднем плане */}
        <div className="absolute top-20 -left-10 w-[300px] h-[300px] bg-[#D4A259]/10 rounded-full blur-[100px] -z-0 rotate-12 pointer-events-none"></div>
        <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-[#D4A259]/5 rounded-full blur-[120px] -z-0 pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-[80px] relative z-10">

          {/* Текст с акцентами */}
          <div className="max-w-[560px] relative">
            {/* Маленькая деталь: номер основания школы как водяной знак */}
            <span className="absolute -top-10 -left-5 text-[120px] font-bold text-[#1B2A44]/5 select-none pointer-events-none">
              1918
            </span>

            <h2 className="text-[#1B2A44] text-[42px] font-bold leading-[1.1] relative z-10"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('home.history_preview.title')} <br />
              <span className="text-[#D4A259]">{t('home.history_preview.title_accent')}</span>
            </h2>

            <div className="w-[60px] h-[3px] bg-[#D4A259] mt-[20px]"></div>

            <div className="space-y-6 mt-[30px]">
              <p className="text-[#1B2A44]/80 text-[18px] leading-relaxed italic border-l-2 border-[#D4A259]/30 pl-6"
                style={{ fontFamily: "'Merriweather', serif" }}>
                {t('home.history_preview.quote')}
              </p>

              <p className="text-[#1B2A44] text-[17px] leading-relaxed opacity-90"
                style={{ fontFamily: "'Merriweather', serif" }}>
                {t('home.history_preview.description')}
              </p>
            </div>

            <Link to={ROUTES.ABOUT}>
              <button className="group relative mt-[40px] px-10 py-4 bg-[#D4A259] text-[#1B2A44] rounded-xl font-bold uppercase tracking-[0.2em] text-sm border border-[#D4A259]/30 transition-all duration-300 hover:border-[#1B2A44]">
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

          {/* Изображение с эффектом "Рамки" */}
          <div className="relative group">
            {/* Декоративная золотая рамка, смещенная назад */}
            <div className="absolute -top-4 -left-4 w-full h-full border-[1px] border-[#D4A259] rounded-[24px] group-hover:top-0 group-hover:left-0 transition-all duration-500"></div>

            <div className="relative overflow-hidden rounded-[24px]">
              <img
                className="h-[450px] w-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
                src={History}
                alt="История школы"
              />
              {/* Легкий градиент поверх фото для мягкости */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1B2A44]/20 to-transparent"></div>
            </div>

            {/* Подпись как в галерее */}
            <div className="absolute -bottom-6 -right-6 bg-white shadow-lg p-4 rounded-lg hidden md:block rotate-3">
              <p className="text-[14px] font-bold text-[#1B2A44]">{t('home.history_preview.image_label')}</p>
              <p className="text-[12px] text-gray-500 italic">{t('home.history_preview.image_sublabel')}</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- Направления --- */}
      <section
        className="py-[150px] bg-[#FAF9F6] relative overflow-hidden opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        ref={el => sectionsRef.current[1] = el}
      >
        {/* Декоративные пятна */}
        <div className="absolute top-0 left-10 w-72 h-72 bg-[#D4A259]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4A259]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

          {/* Заголовок */}
          <div className="relative inline-block mb-4">
            <span className="absolute -top-6 -right-8 text-[#D4A259]/20 text-6xl select-none italic font-serif pointer-events-none">Art</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1B2A44] relative z-10"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('home.directions.title')}
            </h2>
          </div>

          {/* Декоративная линия */}
          <div className="flex justify-center items-center gap-3 mb-16">
            <span className="block w-12 h-[2px] bg-[#D4A259]/40"></span>
            <span className="block w-24 h-[3px] bg-[#D4A259] rounded-full"></span>
            <span className="block w-12 h-[2px] bg-[#D4A259]/40"></span>
          </div>

          {/* Динамическая сетка карточек */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredKeys.map((key) => {
              const item = directionsData[key];
              return (
                <div key={key} className="relative group rounded-[32px] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700">
                  {/* Тонкая внутренняя рамка */}
                  <div className="absolute inset-0 border-[1px] border-[#D4A259]/20 rounded-[32px] pointer-events-none z-20 m-2"></div>

                  <img
                    src={item.image}
                    alt={t(`directions.items.${key}.title`)}
                    className="w-full h-80 object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A44] via-[#1B2A44]/60 to-transparent
                            flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-[#D4A259] mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                      {t(`directions.items.${key}.title`)}
                    </h3>
                    <p className="text-sm text-white/90 mb-6 italic line-clamp-2" style={{ fontFamily: "'Merriweather', serif" }}>
                      {t(`directions.items.${key}.desc`)}
                    </p>

                    {/* Ссылка теперь ведет на конкретное направление */}
                    <Link to={`/directions/${key}`}>
                      <button className="group relative py-2 px-1 text-white/70 hover:text-[#D4A259] font-bold uppercase tracking-[0.15em] text-xs transition-colors duration-300">
                        <span className="relative z-10 flex items-center gap-2">
                          {t('home.directions.btn_more')}
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                        <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#D4A259] group-hover:w-full group-hover:left-0 transition-all duration-300 ease-in-out"></span>
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Кнопка "Все направления" */}
          <div className="mt-20">
            <Link to={ROUTES.DIRECTIONS}>
              <button className="group relative px-10 py-4 bg-[#1B2A44] text-[#D4A259] rounded-xl font-bold uppercase tracking-[0.2em] text-sm border border-[#D4A259]/30 transition-all duration-300 hover:border-[#D4A259]">
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
        className="py-[180px] bg-white relative overflow-hidden opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        {/* WOW-ДЕТАЛЬ №1: Фон
         Добавляем текстуру легкого художественного холста и мазки кисти на задний план.
      */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/canvas-orange.png')` }}></div>

        {/* Декоративные пятна с блюром (сохраняем, но делаем мягче) */}
        <div className="absolute top-10 left-[-5%] w-80 h-80 bg-[#D4A259]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-[5%] w-96 h-96 bg-[#D4A259]/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* WOW-ДЕТАЛЬ №2: Заголовок
           Сделаем его более изящным, с подзаголовком.
        */}
          <div className="text-center mb-24">
            <span className="text-[#D4A259] font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              {t('home.gallery.subtitle')}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1B2A44] relative inline-block"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('home.gallery.title')}
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-[#D4A259]"></span>
            </h2>
          </div>

          {/* WOW-ДЕТАЛЬ №3: Сетка "Рваный Ритм"
           Центральная карточка выше остальных, создавая динамику (как у тебя и было, но докрутим).
        */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
            {galleryPreview.map((src, index) => (
              <div
                key={index}
                // Плавное появление при скролле и сдвиг центральной карточки (lg:mt-12)
                className={`relative group rounded-xl overflow-hidden bg-white 
                         shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(212,162,89,0.15)] 
                         transition-all duration-1000 ease-in-out cursor-pointer 
                         ${index === 1 ? 'lg:mt-12' : ''}`}
              >
                {/* WOW-ДЕТАЛЬ №4: Внутренний бордюр (эффект паспарту)
                 При наведении появляется белая рамка, сужая изображение.
              */}
                <div className="absolute inset-0 border-[0px] group-hover:border-[12px] border-white/20 transition-all duration-500 z-20 pointer-events-none"></div>

                <img
                  src={src}
                  alt={`Лучшая работа ${index + 1}`}
                  className="w-full h-[450px] object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />

                {/* WOW-ДЕТАЛЬ №5: Overlay (Затемнение)
                 Не просто градиент, а с мягким появлением информации снизу.
              */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A44]/90 via-[#1B2A44]/10 to-transparent
                              opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col justify-end p-8">

                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs uppercase tracking-widest text-[#FAF9F6]/80 mb-2 font-semibold">
                      {t('home.gallery.card_badge')}
                    </span>
                    <h3 className="text-white text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {t('home.gallery.card_title')}
                    </h3>
                    {/* Линия, которая расширяется при ховере */}
                    <div className="w-6 h-[1px] bg-[#D4A259] group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>

                {/* Маленький декор — год или логотип в углу при ховере */}
                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white/40 text-xs font-medium italic">1934 / Best</span>
                </div>
              </div>
            ))}
          </div>

          {/* WOW-ДЕТАЛЬ №6: Кнопка
           Сделаем её такой же интерактивной, как в секции История.
        */}
          <div className="mt-24 text-center relative z-10">
            <Link to={ROUTES.GALLERY}>
              <button className="group relative px-10 py-4 bg-[#1B2A44] text-white rounded-xl font-bold uppercase tracking-[0.2em] text-sm border border-white/30 transition-all duration-300 hover:border-white">
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
        className="py-[180px] bg-[#0B1524] relative overflow-hidden opacity-0 translate-y-10 transition-all duration-[1.2s] ease-out"
        ref={el => sectionsRef.current[3] = el}
      >
        {/* Декоративный фон: легкая текстура герба или паттерна на заднем плане */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')` }}></div>

        {/* Золотистое свечение за текстом */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#D4A259]/10 rounded-full blur-[150px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">

            {/* ФОТО С ЭФФЕКТОМ "ИСТОРИИ" */}
            <div className="md:w-1/2 relative group">
              {/* Декоративная золотая рама, которая смещается при ховере */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#D4A259]/30 rounded-3xl transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img
                  src="/images/director.jpg" // Путь к фото
                  alt="Директор школы"
                  className="w-full h-[600px] object-cover transition-transform duration-[2s] group-hover:scale-110"
                />

                {/* Градиентный оверлей для глубины */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1524] via-transparent to-transparent opacity-60"></div>

                {/* Декор: подпись или печать поверх фото */}
                <div className="absolute bottom-6 right-6 border border-white/20 backdrop-blur-md bg-white/5 px-4 py-2 rounded-lg">
                  <p className="text-white/50 text-[10px] tracking-widest uppercase italic">P.P. Benkov School</p>
                </div>
              </div>

              {/* Дополнительная деталь: парящий элемент с цифрой */}
              <div className="absolute -bottom-8 -right-8 bg-[#D4A259] p-6 rounded-2xl shadow-xl hidden lg:block transform group-hover:rotate-6 transition-transform duration-500">
                <p className="text-[#0B1524] text-3xl font-bold leading-none">100+</p>
                <p className="text-[#0B1524] text-[10px] font-bold uppercase tracking-tighter">{t('home.director.years_tradition')}</p>
              </div>
            </div>

            {/* ТЕКСТОВАЯ ЧАСТЬ */}
            <div className="md:w-1/2 flex flex-col">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-[1px] bg-[#D4A259]"></span>
                  <span className="text-[#D4A259] uppercase tracking-[0.3em] text-xs font-semibold">{t('home.director.badge')}</span>
                </div>

                <h2
                  className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {t('home.director.title_part1')} <br />
                  <span className="text-[#D4A259]">{t('home.director.title_part2')}</span>
                </h2>

                <h3
                  className="text-2xl font-medium text-[#D4A259]/80 mb-8 italic"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  {t('home.director.name')}
                </h3>
              </div>

              {/* Цитата с большой кавычкой */}
              <div className="relative mb-10">
                <span className="absolute -top-10 -left-6 text-[120px] text-[#D4A259]/10 font-serif leading-none">“</span>
                <p
                  className="text-gray-400 text-lg leading-[1.8] relative z-10 italic"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  {t('home.director.quote')}
                </p>
              </div>

              {/* Кнопка с анимацией стрелки */}
              <Link to={ROUTES.MANAGEMENT}>
                <button className="group relative px-10 py-4 bg-[#D4A259] text-white rounded-xl font-bold uppercase tracking-[0.2em] text-sm border border-[#D4A259]/30 transition-all duration-300 hover:border-white">
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
      </section>

      {/* --- Почему выбирают нас --- */}
      <section
        className="py-[180px] bg-white relative overflow-hidden opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        ref={el => sectionsRef.current[4] = el}
      >
        {/* Декоративные элементы на фоне */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/cream-paper.png')` }}></div>

        <div className="absolute top-40 left-[-10%] w-[500px] h-[500px] bg-[#D4A259]/5 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Заголовок с акцентом */}
          <div className="text-center mb-28">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1B2A44] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('home.benefits.title_main')}
              {" "} {/* Добавляет гарантированный пробел */}
              <span className="text-[#D4A259]">{t('home.benefits.title_accent')}</span>
            </h2>
            <div className="flex justify-center items-center gap-4">
              <span className="w-12 h-[1px] bg-[#D4A259]/30"></span>
              <div className="w-2 h-2 rounded-full bg-[#D4A259]"></div>
              <span className="w-12 h-[1px] bg-[#D4A259]/30"></span>
            </div>
          </div>

          {/* Блоки в шахматном порядке */}
          <div className="space-y-32">

            {/* Блок 1: Текст слева, Фото справа */}
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <div className="lg:w-1/2 space-y-8 order-2 lg:order-1">
                <div className="flex items-start gap-6">
                  <span className="text-5xl font-serif text-[#D4A259]/20 font-bold leading-none">01</span>
                  <div>
                    <h3 className="text-3xl font-bold text-[#1B2A44] mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                      {t('home.benefits.items.one.title')}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-serif">
                      {t('home.benefits.items.one.desc')}
                    </p>
                  </div>
                </div>
                {/* Мини-список достижений */}
                <ul className="grid grid-cols-2 gap-4 pt-4">
                  <li className="flex items-center gap-2 text-sm text-[#1B2A44]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A259]"></span> {t('home.benefits.items.one.list_1')}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#1B2A44]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A259]"></span> {t('home.benefits.items.one.list_2')}
                  </li>
                </ul>
              </div>

              <div className="lg:w-1/2 order-1 lg:order-2 relative group">
                <div className="absolute inset-0 bg-[#D4A259] rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 -z-10"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                  <img src="/images/academic.jpg" alt="Обучение" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A44]/60 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Блок 2: Фото слева, Текст справа */}
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <div className="lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-[#1B2A44] rounded-2xl -translate-x-4 translate-y-4 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500 -z-10"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                  <img src="/images/creative.jpg" alt="Процесс" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A44]/60 to-transparent"></div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-start gap-6">
                  <span className="text-5xl font-serif text-[#D4A259]/20 font-bold leading-none">02</span>
                  <div>
                    <h3 className="text-3xl font-bold text-[#1B2A44] mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                      {t('home.benefits.items.two.title')}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-serif">
                      {t('home.benefits.items.two.desc')}
                    </p>
                  </div>
                </div>
                {/* Мини-метки */}
                <div className="flex gap-3 pt-4">
                  <span className="px-4 py-1.5 bg-[#FAF9F6] border border-[#D4A259]/20 rounded-full text-xs text-[#D4A259] font-bold tracking-widest uppercase">{t('home.benefits.items.two.tag_1')}</span>
                  <span className="px-4 py-1.5 bg-[#FAF9F6] border border-[#D4A259]/20 rounded-full text-xs text-[#D4A259] font-bold tracking-widest uppercase">{t('home.benefits.items.two.tag_2')}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Кнопка с эффектом "магнита" */}
          <div className="mt-32 text-center">
            <Link to={ROUTES.ACHIEVEMENTS}>
              <button className="group relative px-10 py-4 bg-[#D4A259] text-white rounded-xl font-bold uppercase tracking-[0.2em] text-sm border border-[#D4A259]/30 transition-all duration-300 hover:border-[#1B2A44]">
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