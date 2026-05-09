import React from 'react'
import { Link } from 'react-router-dom';
import { ROUTES } from '../paths'
import { useTranslation } from 'react-i18next';
import Hall from '../assets/img/Hall.png'
import Sculpture from '../assets/img/Sculpture.png'
import Art from '../assets/img/Art.png'
import Computure1 from '../assets/img/Computure1.png'
import Computure2 from '../assets/img/Computure2.png'
import Library from '../assets/img/Library.png'
import Library1 from '../assets/img/Library1.png'
import Library2 from '../assets/img/Library2.png'
import Dining from '../assets/img/Dining.png'
import Math from '../assets/img/Math.png'
import Science from '../assets/img/Science.png'
import Chemistry from '../assets/img/Chemistry.png'
import Costume from '../assets/img/Costume.png'
import Paint1 from '../assets/img/Paint1.png'
import Paint2 from '../assets/img/Paint2.png'
import Paint3 from '../assets/img/Paint3.png'
import Paint4 from '../assets/img/Paint4.png'
import Paint5 from '../assets/img/Paint5.png'
import Paint6 from '../assets/img/Paint6.png'
import Facade from '../assets/img/Facade.png'
import Yard from '../assets/img/Yard.png'
import Entrance from '../assets/img/Entrance.png'

const Infrastructure = () => {
  const { t } = useTranslation();
  return (
    <main className="bg-[#FAF9F6] text-[#1B2A44] overflow-hidden">

      {/* --- Внешний вид школы --- */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
        <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#D4A259]/5 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 px-4 sm:px-6">
          <span className="text-[#D4A259] font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4 block">
            {t('infrastructure.span')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('infrastructure.title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1B2A44]/70 max-w-2xl mx-auto leading-relaxed font-serif italic px-4">
            {t('infrastructure.desc')}
          </p>
          <div className="w-12 sm:w-16 h-[1px] bg-[#D4A259] mx-auto mt-6 sm:mt-8"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 items-start">
          <div className="group relative">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/5] shadow-xl border-[8px] sm:border-[12px] border-white transition-transform duration-700 group-hover:-translate-y-2">
              <img src={Yard} alt="Двор" className="w-full h-full object-cover" />
            </div>
            <p className="mt-3 sm:mt-4 text-center font-medium tracking-wider uppercase text-[10px] sm:text-xs text-[#D4A259]">
              {t('infrastructure.yard')}
            </p>
          </div>

          <div className="group relative md:mt-12">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl aspect-[3/4] shadow-2xl border-[8px] sm:border-[12px] border-white transition-transform duration-700 group-hover:-translate-y-2">
              <img src={Facade} alt="Фасад" className="w-full h-full object-cover" />
            </div>
            <p className="mt-3 sm:mt-4 text-center font-medium tracking-wider uppercase text-[10px] sm:text-xs text-[#D4A259]">
              {t('infrastructure.facade')}
            </p>
          </div>

          <div className="group relative">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/5] shadow-xl border-[8px] sm:border-[12px] border-white transition-transform duration-700 group-hover:-translate-y-2">
              <img src={Entrance} alt="Вход" className="w-full h-full object-cover" />
            </div>
            <p className="mt-3 sm:mt-4 text-center font-medium tracking-wider uppercase text-[10px] sm:text-xs text-[#D4A259]">
              {t('infrastructure.entrance')}
            </p>
          </div>
        </div>
      </section>

      {/* 2. АКТОВЫЙ ЗАЛ - фото первым */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#1B2A44] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Текст - на десктопе слева, на мобилках под фото */}
            <div className="w-full md:w-2/5 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t('infrastructure.hall.title')}
              </h2>
              <p className="text-[#FAF9F6]/80 text-base sm:text-lg leading-relaxed">
                {t('infrastructure.hall.desc')}
              </p>
            </div>

            {/* Фото - на десктопе справа, на мобилках сверху */}
            <div className="w-full md:w-3/5">
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 border border-[#D4A259]/30 rounded-xl sm:rounded-2xl translate-x-2 sm:translate-x-3 md:translate-x-4 translate-y-2 sm:translate-y-3 md:translate-y-4"></div>
                <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] bg-gray-500 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                  <img src={Hall} className="w-full h-full object-cover" alt="Зал" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Художественные классы (Мастерские) --- */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('infrastructure.art.title')}
            </h2>
            <p className="text-[#1B2A44]/60 italic font-serif text-sm sm:text-base max-w-2xl mx-auto">
              {t('infrastructure.art.desc')}
            </p>
            <div className="w-32 h-[1px] bg-[#D4A259] mx-auto mt-4 hidden sm:block"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Кабинет Живописи */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl mb-4 sm:mb-6">
                <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-gray-200 transition-all duration-700 group-hover:scale-105">
                  <img src={Art} alt="Живопись" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-2 sm:inset-3 md:inset-4 border border-[#D4A259] transition-all duration-500 group-hover:inset-1 sm:group-hover:inset-2"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t('infrastructure.paint.title')}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2 text-center">{t('infrastructure.paint.desc')}</p>
            </div>

            {/* Кабинет по костюмам */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl mb-4 sm:mb-6">
                <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-gray-200 transition-all duration-700 group-hover:scale-105">
                  <img src={Costume} alt="Костюмы" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-2 sm:inset-3 md:inset-4 border border-[#D4A259] transition-all duration-500 group-hover:inset-1 sm:group-hover:inset-2"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t('infrastructure.costume.title')}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2 text-center">{t('infrastructure.costume.desc')}</p>
            </div>

            {/* Кабинет Скульптуры */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl mb-4 sm:mb-6">
                <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-gray-200 transition-all duration-700 group-hover:scale-105">
                  <img src={Sculpture} alt="Скульптура" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-2 sm:inset-3 md:inset-4 border border-[#D4A259] transition-all duration-500 group-hover:inset-1 sm:group-hover:inset-2"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t('infrastructure.sculpture.title')}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2 text-center">{t('infrastructure.sculpture.desc')}</p>
            </div>
          </div>

          <div className="text-center mt-10 sm:mt-12 md:mt-16">
            <Link to={ROUTES.DIRECTIONS}>
              <button className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#D4A259] text-[#1B2A44] rounded-xl font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm border border-[#D4A259]/30 transition-all duration-300 hover:border-[#1B2A44]">
                <span className="absolute inset-0 border border-[#1B2A44] rounded-xl opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></span>
                <span className="relative z-10 flex items-center gap-2">
                  {t('infrastructure.learnmore')}
                  <span className="relative w-3 h-3">
                    <span className="absolute top-1/2 left-0 w-full h-[1px] bg-[#1B2A44] transition-transform group-hover:rotate-90"></span>
                    <span className="absolute top-1/2 left-0 w-full h-[1px] bg-[#1B2A44]"></span>
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- Компьютерный класс --- */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[#F0EEEA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">

            {/* ЛЕВАЯ ЧАСТЬ — Два фото (одно выше, другое ниже) */}
            <div className="w-full md:w-1/2">
              <div className="flex items-start gap-6 lg:gap-10">
                {/* ПЕРВОЕ ФОТО (выше) */}
                <div className="w-1/2 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform md:-translate-y-12 border-4 border-white transition-transform duration-500 hover:md:-translate-y-16">
                  <img
                    src={Computure1}
                    alt="IT класс"
                    className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover"
                  />
                </div>

                {/* ВТОРОЕ ФОТО (ниже) */}
                <div className="w-1/2 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform md:translate-y-12 border-4 border-white transition-transform duration-500 hover:md:translate-y-16">
                  <img
                    src={Computure2}
                    alt="Ученики"
                    className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* ПРАВАЯ ЧАСТЬ — Текст */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t('infrastructure.science.title')}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#1B2A44]/70 leading-relaxed mb-6 sm:mb-8 font-serif italic">
                {t('infrastructure.science.desc')}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 text-[#D4A259] font-bold text-[10px] sm:text-sm tracking-widest">
                <span className="w-6 sm:w-8 h-[1px] bg-[#D4A259]"></span>
                {t('infrastructure.science.span')}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Библиотека --- */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#FAF9F6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#D4A259]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-[#1B2A44]" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('infrastructure.library.title')}
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-4">
              <span className="w-8 sm:w-12 h-[1px] bg-[#D4A259] hidden sm:block"></span>
              <p className="text-[#1B2A44]/60 italic font-serif text-sm sm:text-base">
                {t('infrastructure.library.desc')}
              </p>
              <span className="w-8 sm:w-12 h-[1px] bg-[#D4A259] hidden sm:block"></span>
            </div>
          </div>

          {/* Сетка с золотыми деталями */}
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6">
            {/* Большое центральное фото */}
            <div className="lg:col-span-7 relative group mb-6 lg:mb-0">
              <div className="absolute inset-0 border-2 border-[#D4A259] translate-x-2 sm:translate-x-3 translate-y-2 sm:translate-y-3 rounded-xl opacity-50 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] bg-gray-200 rounded-xl overflow-hidden shadow-2xl border border-[#D4A259]/20">
                <img src={Library} alt="Зал библиотеки" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-[#1B2A44] border-l-4 border-[#D4A259] px-3 py-1.5 sm:px-4 sm:py-2">
                  <span className="text-[#D4A259] text-[10px] sm:text-xs font-bold tracking-tighter uppercase">
                    {t('infrastructure.library.span')}
                  </span>
                </div>
              </div>
            </div>

            {/* Правая колонка с двумя фото */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="relative group">
                <div className="h-[200px] sm:h-[220px] lg:h-[230px] bg-gray-300 rounded-xl overflow-hidden border-b-4 border-[#D4A259] shadow-lg">
                  <img src={Library1} alt="Книжные полки" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="relative group lg:translate-y-8">
                <div className="h-[200px] sm:h-[220px] lg:h-[230px] bg-gray-400 rounded-xl overflow-hidden border-t-4 border-[#D4A259] shadow-lg">
                  <img src={Library2} alt="Учебная зона" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Столовая --- */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5EFE6] border-y border-[#D4A259]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Текст */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <span className="text-[#D4A259] font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4 block">
                {t('infrastructure.dining.span')}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t('infrastructure.dining.title')}
              </h2>
              <p className="text-base sm:text-lg text-[#1B2A44]/70 leading-relaxed mb-4 sm:mb-6">
                {t('infrastructure.dining.desc')}
              </p>
              <ul className="space-y-2 sm:space-y-3 text-[#1B2A44]/80 font-medium text-sm sm:text-base">
                <li className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                  <span className="text-[#D4A259] text-sm sm:text-base">✦</span>
                  {t('infrastructure.dining.span1')}
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                  <span className="text-[#D4A259] text-sm sm:text-base">✦</span>
                  {t('infrastructure.dining.span2')}
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                  <span className="text-[#D4A259] text-sm sm:text-base">✦</span>
                  {t('infrastructure.dining.span3')}
                </li>
              </ul>
            </div>
            {/* Фото */}
            <div className="order-1 lg:order-2 relative group w-full">
              <div className="absolute inset-0 border-2 border-[#D4A259] translate-x-2 sm:translate-x-3 translate-y-2 sm:translate-y-3 rounded-xl sm:rounded-2xl group-hover:translate-x-1 sm:group-hover:translate-x-2 group-hover:translate-y-1 sm:group-hover:translate-y-2 transition-all"></div>
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-gray-300 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <img src={Dining} alt="Столовая" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Выставка картин (Второй этаж) --- */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#FAF9F6] border-t border-[#D4A259]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#1B2A44]" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('infrastructure.exhibition.title')}
            </h2>
            <div className="flex justify-center items-center gap-2 sm:gap-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#D4A259] rotate-45"></div>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 font-serif italic">
                {t('infrastructure.exhibition.desc')}
              </p>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#D4A259] rotate-45"></div>
            </div>
          </div>

          {/* Сетка галереи */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-8 md:gap-10 space-y-6 sm:space-y-8 md:space-y-12">
            {/* Картина 1 */}
            <div className="break-inside-avoid group">
              <div className="bg-white p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t-4 border-[#D4A259] transition-all duration-500 group-hover:-translate-y-2">
                <div className="relative overflow-hidden bg-gray-200 aspect-[3/4] mb-3 sm:mb-4 outline outline-1 outline-offset-[10px] sm:outline-offset-[15px] outline-gray-100">
                  <img src={Paint1} alt="Работа 1" className="w-full h-full object-cover" />
                </div>
                <div className="pt-3 sm:pt-4 border-t border-gray-100 flex justify-between items-end">
                  <span className="text-[#D4A259] text-base sm:text-lg font-serif">01</span>
                </div>
              </div>
            </div>

            {/* Картина 2 */}
            <div className="break-inside-avoid group">
              <div className="bg-[#1B2A44] p-4 sm:p-5 shadow-2xl transition-all duration-500 group-hover:rotate-1">
                <div className="bg-gray-300 aspect-square mb-4 sm:mb-6 border border-[#D4A259]/30">
                  <img src={Paint4} alt="Работа 2" className="w-full h-full object-cover" />
                </div>
                <div className="pt-3 sm:pt-4 border-t border-gray-100 flex justify-between items-end">
                  <span className="text-[#D4A259] text-base sm:text-lg font-serif">02</span>
                </div>
              </div>
            </div>

            {/* Картина 3 */}
            <div className="break-inside-avoid group">
              <div className="bg-white p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100 transition-all duration-500 group-hover:scale-[1.02]">
                <div className="bg-gray-200 aspect-[4/5] shadow-inner relative">
                  <img src={Paint2} alt="Работа 3" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 border-[8px] sm:border-[12px] border-white/20"></div>
                </div>
                <div className="pt-3 sm:pt-4 border-t border-gray-100 flex justify-between items-end">
                  <span className="text-[#D4A259] text-base sm:text-lg font-serif">03</span>
                </div>
              </div>
            </div>

            {/* Картина 4 */}
            <div className="break-inside-avoid group">
              <div className="relative p-1 bg-gradient-to-br from-[#D4A259] to-[#1B2A44] shadow-2xl transition-all duration-700 group-hover:shadow-[#D4A259]/20">
                <div className="bg-white p-3 sm:p-4">
                  <div className="bg-gray-300 aspect-[3/2]">
                    <img src={Paint5} alt="Работа 4" className="w-full h-full object-cover" />
                  </div>
                  <div className="pt-3 sm:pt-4 border-t border-gray-100 flex justify-between items-end">
                    <span className="text-[#D4A259] text-base sm:text-lg font-serif">04</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Картина 5 */}
            <div className="break-inside-avoid group">
              <div className="bg-white p-4 sm:p-6 shadow-md border-b-2 border-[#D4A259]/50 transition-all duration-300 group-hover:shadow-orange-100">
                <div className="bg-gray-200 aspect-[3/4] mb-3 sm:mb-4">
                  <img src={Paint3} alt="Работа 5" className="w-full h-full object-cover" />
                </div>
                <div className="pt-3 sm:pt-4 border-t border-gray-100 flex justify-between items-end">
                  <span className="text-[#D4A259] text-base sm:text-lg font-serif">05</span>
                </div>
              </div>
            </div>

            {/* Картина 6 */}
            <div className="break-inside-avoid group">
              <div className="bg-white p-2 shadow-2xl border border-gray-200">
                <div className="border border-gray-100 p-4 sm:p-6 transition-colors duration-500 group-hover:bg-[#FAF9F6]">
                  <div className="bg-gray-400 aspect-video mb-3 sm:mb-4 transition-all duration-1000">
                    <img src={Paint6} alt="Работа 6" className="w-full h-full object-cover" />
                  </div>
                  <div className="pt-3 sm:pt-4 border-t border-gray-100 flex justify-between items-end">
                    <span className="text-[#D4A259] text-base sm:text-lg font-serif">06</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Общеобразовательные кабинеты --- */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('infrastructure.general.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { title: t('infrastructure.general.about1'), img: Math },
              { title: t('infrastructure.general.about2'), img: Science },
              { title: t('infrastructure.general.about3'), img: Chemistry }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FAF9F6] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all">
                <div className="h-40 sm:h-48 bg-gray-200 overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={item.title} />
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-[#1B2A44] group-hover:text-[#D4A259] transition-colors">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{t('infrastructure.general.desc')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Галерея учеников (Футер-секция) --- */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#FAF9F6] relative">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#D4A259]" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('infrastructure.gallery.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
            {t('infrastructure.gallery.desc')}
          </p>
          <Link to={ROUTES.GALLERY}>
            <button className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#1B2A44] text-white rounded-xl font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm border border-[#D4A259]/30 transition-all duration-300 hover:border-white">
              <span className="absolute inset-0 border border-white rounded-xl opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></span>
              <span className="relative z-10 flex items-center gap-2">
                {t('infrastructure.gallery.learnmore')}
                <span className="relative w-3 h-3">
                  <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white transition-transform group-hover:rotate-90"></span>
                  <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></span>
                </span>
              </span>
            </button>
          </Link>
        </div>
      </section>

    </main>
  )
}

export default Infrastructure