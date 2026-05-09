import React from 'react'
import { useTranslation } from 'react-i18next'

const Achievements = () => {
  const { t } = useTranslation()

  // Достаем массив достижений из конфига i18n
  const achievementsData = t('achievements.items', { returnObjects: true }) || []

  return (
    <main className="bg-[#FAF9F6] text-[#1B2A44] min-h-screen pb-16 sm:pb-20 md:pb-24">

      {/* --- HEADER СЕКЦИЯ --- */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#D4A259] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[11px] sm:text-sm mb-3 sm:mb-4 block">
            {t('achievements.subtitle')}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 whitespace-pre-line" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('achievements.title')}
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-[2px] bg-[#D4A259] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-serif italic px-4">
            {t('achievements.description')}
          </p>
        </div>
      </section>

      {/* --- ТАЙМЛАЙН ДОСТИЖЕНИЙ --- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Центральная линия таймлайна - только на десктопе */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-[#D4A259] via-[#D4A259]/50 to-transparent hidden md:block"></div>

        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {achievementsData.map((item, index) => (
            <AchievementItem
              key={index}
              year={item.year}
              title={item.title}
              desc={item.desc}
              align={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </section>

      {/* --- ЦИТАТА В ФУТЕРЕ --- */}
      <section className="mt-20 sm:mt-24 md:mt-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-[#1B2A44] p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#D4A259]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h3 className="text-[#D4A259] text-2xl sm:text-3xl font-serif italic mb-4 sm:mb-6 px-4">
            {t('achievements.footer_quote')}
          </h3>
          <p className="text-white/50 tracking-widest uppercase text-[10px] sm:text-xs">
            {t('achievements.admin')}
          </p>
        </div>
      </section>
    </main>
  )
}

// Вспомогательный компонент для карточки достижения
const AchievementItem = ({ year, title, desc, align }) => {
  const isLeft = align === 'left';

  return (
    // ВАЖНО: сохраняем md:flex-row-reverse для чередования!
    <div className={`flex flex-col md:flex-row items-center w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>

      {/* Пустой блок для правильного позиционирования */}
      <div className="hidden md:block w-1/2"></div>

      {/* Линия и анимированная точка */}
      <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center my-4 md:my-0">
        {/* Декоративные линии для мобилок */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#D4A259]/30 to-transparent md:hidden absolute left-0 right-0"></div>

        <div className="relative flex items-center justify-center">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-[#D4A259] rotate-45 shadow-[0_0_20px_rgba(212,162,89,0.5)]"></div>
          <div className="absolute inset-0 border border-[#D4A259]/20 rounded-full animate-ping opacity-20"></div>
        </div>
      </div>

      {/* Карточка с контентом */}
      <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12 lg:pr-16 md:text-right' : 'md:pl-12 lg:pl-16 md:text-left'} mt-4 md:mt-0`}>
        <div className="group bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-[#D4A259]/50 transition-all duration-700 relative overflow-hidden">

          {/* Декоративный паттерн */}
          <div className="absolute top-0 right-0 p-3 sm:p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" fill="#D4A259" />
            </svg>
          </div>

          {/* Год */}
          <div className={`flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 ${isLeft ? 'justify-start md:justify-end' : 'justify-start'}`}>
            <div className="w-8 sm:w-12 h-[1px] bg-[#D4A259]/30 hidden sm:block"></div>
            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B2A44]/5 group-hover:text-[#D4A259]/10 transition-colors duration-500" style={{ fontFamily: "'Playfair Display', serif" }}>
              {year}
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-[#D4A259]/30 hidden sm:block"></div>
          </div>

          {/* Иконка */}
          <div className={`mb-4 sm:mb-6 flex ${isLeft ? 'justify-start md:justify-end' : 'justify-start'}`}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-[#F5EFE6] flex items-center justify-center group-hover:bg-[#D4A259] transition-colors duration-500 shadow-inner">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#D4A259] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
              </svg>
            </div>
          </div>

          {/* Заголовок */}
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-[#1B2A44] leading-tight group-hover:text-[#D4A259] transition-colors">
            {title}
          </h4>

          {/* Описание */}
          <p className="text-gray-500 leading-relaxed text-xs sm:text-sm relative z-10">
            {desc}
          </p>

          {/* Золотая деталь в углу */}
          <div className={`absolute bottom-0 ${isLeft ? 'left-0' : 'right-0'} w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-[#D4A259]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
        </div>
      </div>
    </div>
  )
}

export default Achievements