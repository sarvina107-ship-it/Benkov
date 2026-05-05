import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DIRECTIONS } from '../data/studyPlan';
import { ROUTES } from '../paths';

const StudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Умный поиск направления
  const currentDir = DIRECTIONS.find(
    (d) => String(d.id).toLowerCase() === String(id).toLowerCase()
  );

  if (!currentDir) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFCFB]">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-[#0E1A2B] mb-4">{t('study_detail.not_found', 'Направление не найдено')}</h2>
          <button
            onClick={() => navigate(ROUTES.STUDYPLAN)}
            className="text-[#D4A259] hover:underline font-bold uppercase tracking-widest text-sm"
          >
            {t('study_detail.back_to_list', '← Вернуться к списку')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFCFB] min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Кнопка назад в стиле минимализма */}
        <button
          onClick={() => navigate(-1)}
          className="group mb-12 flex items-center gap-3 text-[#0E1A2B]/60 hover:text-[#D4A259] transition-all duration-300 uppercase tracking-[0.2em] text-xs font-bold"
        >
          <span className="transform group-hover:-translate-x-2 transition-transform duration-300">←</span>
          {t('study_detail.back', 'Назад')}
        </button>

        {/* Заголовок направления */}
        <header className="mb-16 relative">
          <div className="absolute -left-8 top-0 w-1.5 h-full bg-[#D4A259] hidden md:block"></div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0E1A2B] mb-4 leading-tight">
            {/* Ключ для названия направления */}
            {t(`directions.items.${currentDir.id}.title`, currentDir.title)}
          </h1>
          <p className="text-[#D4A259] font-serif italic text-lg">
            {t('study_detail.curriculum_label', 'Программа обучения по классам')}
          </p>
        </header>

        {/* Сетка классов */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Object.entries(currentDir.grades).map(([grade, subjects]) => (
            <div
              key={grade}
              className="group bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-[#D4A259]/10 hover:border-[#D4A259]/40 transition-all duration-500 relative overflow-hidden"
            >
              {/* Фоновый номер класса для красоты */}
              <span className="absolute -right-4 -top-6 text-9xl font-serif font-bold text-[#D4A259]/5 select-none pointer-events-none group-hover:text-[#D4A259]/10 transition-colors duration-500">
                {grade}
              </span>

              <h3 className="text-2xl font-bold text-[#0E1A2B] mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#D4A259]"></span>
                {grade} {t('study_detail.grade_suffix', 'КЛАСС')}
              </h3>

              <ul className="space-y-4 relative z-10">
                {subjects.map((subject, idx) => (
                  <li key={idx} className="flex items-start gap-4 group/item">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D4A259] group-hover/item:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-700 font-medium leading-relaxed group-hover/item:text-[#0E1A2B] transition-colors">
                      {/* Ключ для перевода предмета. subject — это то, что сейчас в массиве (на англ) */}
                      {t(`subjects.${subject.toLowerCase().replace(/\s+/g, '_')}`, subject)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyDetail;