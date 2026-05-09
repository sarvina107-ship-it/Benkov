import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../paths';
import Deputy1 from '../assets/img/Deputy1.jpg'
import Deputy3 from '../assets/img/Deputy3.jpg'

const Management = () => {

  const { t } = useTranslation();

  const deputies = useMemo(() => [
    {
      id: 1,
      name: t('management.names.egamov'),
      role: t('management.deputy_role'),
      dept: t('management.depts.spiritual'),
      photo: Deputy1
    },
    {
      id: 2,
      name: t('management.names.radjabov'),
      role: t('management.deputy_role'),
      dept: t('management.depts.academic'),
      photo: ""
    },
    {
      id: 3,
      name: t('management.names.shakarimov'),
      role: t('management.deputy_role'),
      dept: t('management.depts.fields'),
      photo: Deputy3
    },
    {
      id: 4,
      name: t('management.names.tagaev'),
      role: t('management.deputy_role'),
      dept: t('management.depts.economic'),
      photo: ""
    },
  ], [t]);

  return (
    <main className="bg-[#F8F6F2] min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 text-[#1B2A44] font-sans">
      <div className="max-w-7xl mx-auto">

        {/* ===== ЗАГОЛОВОК СЕКЦИИ ===== */}
        <div className="flex flex-col items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 sm:mb-6 md:mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('management.title')}
          </h2>
          <div className="w-12 sm:w-16 md:w-20 h-[1px] bg-[#D4A259]"></div>
        </div>

        {/* ===== ДИРЕКТОР ===== */}
        <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <Link to={ROUTES.DIRECTOR} className="group block">
            <div className="relative max-w-5xl mx-auto bg-white rounded-[24px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_rgba(212,162,89,0.1)] border border-transparent hover:border-[#D4A259]/10">

              <div className="flex flex-col md:flex-row items-stretch">
                {/* Фото директора */}
                <div className="md:w-2/5 lg:w-[45%] h-[320px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden bg-gray-100">
                  <img
                    src="URL_ФОТО_ДИРЕКТОРА"
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    alt="Director"
                  />
                </div>

                {/* Информация о директоре */}
                <div className="md:w-3/5 lg:w-[55%] p-6 sm:p-8 md:p-10 lg:p-16 xl:p-20 flex flex-col justify-center bg-white">
                  <h4 className="text-[#D4A259] font-semibold tracking-widest uppercase text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-4 md:mb-5 lg:mb-6 underline decoration-1 underline-offset-8">
                    {t('management.director_label')}
                  </h4>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 leading-[1.2] text-[#1B2A44] text-center md:text-left" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {t('management.director_name')}<br />
                  </h3>
                  <p className="text-gray-600/90 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10 max-w-md mx-auto md:mx-0 text-center md:text-left font-light italic">
                    {t('management.director_quote')}
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 text-[#1B2A44] font-bold group-hover:text-[#D4A259] transition-colors">
                    <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest">{t('management.profile_link')}</span>
                    <span className="text-lg sm:text-xl md:text-2xl transition-transform group-hover:translate-x-2">→</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* ===== ЗАМЕСТИТЕЛИ - КАРТОЧКИ БОЛЬШИЕ ===== */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-[#1B2A44] uppercase tracking-[0.15em] sm:tracking-[0.2em]" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('management.deputies_title')}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {deputies.map((dep) => (
              <Link key={dep.id} to={`/management/deputy/${dep.id}`} className="group h-full">
                <div className="relative bg-white rounded-[24px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[40px] p-5 sm:p-6 md:p-8 lg:p-10 h-full shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-gray-100/50 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(212,162,89,0.12)] hover:-translate-y-2 flex flex-col">

                  {/* Декоративная линия */}
                  <div className="w-8 sm:w-10 md:w-12 h-[1px] bg-[#D4A259] mb-4 sm:mb-5 md:mb-6 lg:mb-8 group-hover:w-full transition-all duration-700"></div>

                  <div className="relative z-10 flex flex-col flex-grow">
                    {/* Имя заместителя */}
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1B2A44] mb-2 sm:mb-2 md:mb-3 leading-snug group-hover:text-[#D4A259] transition-colors text-center sm:text-left" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {dep.name}
                    </h4>

                    <p className="text-[#D4A259] font-semibold text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6 lg:mb-8 uppercase tracking-wider text-center sm:text-left">
                      {dep.role}
                    </p>

                    {/* Фото заместителя - БОЛЬШОЕ */}
                    <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] xl:h-[420px] bg-gray-50 rounded-[20px] sm:rounded-[24px] mb-5 sm:mb-6 md:mb-7 lg:mb-8 overflow-hidden border border-gray-100">
                      {dep.photo ? (
                        <img
                          src={dep.photo}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                          alt={dep.name}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-200 bg-[#FDFCFB]">
                          <svg width="50" height="50" sm="60" md="70" lg="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Отдел и стрелка */}
                    <div className="mt-auto flex flex-col sm:flex-row justify-between items-center sm:items-end gap-3 sm:gap-0">
                      <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] leading-relaxed text-center sm:text-left">
                        {dep.dept}
                      </p>
                      <span className="text-[#D4A259] text-lg sm:text-xl md:text-2xl opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default Management;