import React, { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../paths';
import { useLocation, Link } from 'react-router-dom';
import Logo from '../assets/icon/Logo.png';
import NavbarVideo from '../assets/video/NavbarVideo.mp4';
import BenkovImg from '../assets/img/BenkovImg.png';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const { t, i18n } = useTranslation();
  const titles = {
    [ROUTES.ABOUT]: t('titles.about'),
    [ROUTES.ACHIEVEMENTS]: t('titles.achievements'),
    [ROUTES.CONTACTS]: t('titles.contacts'),
    [ROUTES.CONDITIONS]: t('titles.conditions'),
    [ROUTES.DOCUMENTS]: t('titles.documents'),
    [ROUTES.INFRASTRUCTURE]: t('titles.infrastructure'),
    [ROUTES.STUDYPLAN]: t('titles.studyplan'),
    [ROUTES.STUDYDETAIL]: t('titles.studydetail'),
    [ROUTES.SCHEDULE]: t('titles.schedule'),
    [ROUTES.MANAGEMENT]: t('titles.management'),
    [ROUTES.NEWSSECTION]: t('titles.newssection'),
    [ROUTES.NEWSLIST]: t('titles.newslist'),
    [ROUTES.ADMINNEWS]: t('titles.adminnews'),
    [ROUTES.NEWSDETAIL]: t('titles.newsdetail'),
    [ROUTES.LOGIN]: t('titles.login'),
    [ROUTES.GALLERY]: t('titles.gallery'),
    [ROUTES.DIRECTIONS]: t('titles.directions'),
    [ROUTES.DIRECTOR]: t('titles.director'),
    [ROUTES.DEPUTY]: t('titles.deputy'),
    [ROUTES.DIRECTIONSDETAIL]: t('titles.directionsdetail'),
  };

  const searchData = [
    { title: 'История школы', path: ROUTES.ABOUT, content: 'Основание, традиции Павла Бенькова, академическая живопись' },
    { title: 'Направления', path: ROUTES.DIRECTIONS, content: 'Дизайн, скульптура, графика, прикладное искусство' },
    { title: 'Документы', path: ROUTES.DOCUMENTS, content: 'Устав, лицензия, свидетельство, приемная комиссия' },
    { title: 'Контакты', path: ROUTES.CONTACTS, content: 'Адрес, телефон, почта, локация школы' },
    { title: 'Руководство', path: ROUTES.MANAGEMENT, content: 'Директор, заместители, администрация школы Бенькова' },
  ];

  // Состояния
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  // Refs
  const mobileMenuRef = useRef(null);
  const langRef = useRef(null);

  // Настройка Fuse
  const fuse = new Fuse(searchData, {
    keys: [
      { name: 'title', weight: 0.7 },
      { name: 'content', weight: 0.3 }
    ],
    threshold: 0.3
  });

  // Функция поиска
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 1) {
      const results = fuse.search(query);
      setSearchResults(results.map(r => r.item).slice(0, 5));
    } else {
      setSearchResults([]);
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangDropdownOpen(false);
  };

  // Закрытие меню при клике вне
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setActiveMobileDropdown(null);
      }
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Блокировка скролла
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  let pageTitle = titles[location.pathname];

  if (!pageTitle) {
    if (location.pathname.includes('/management/deputy/')) {
      pageTitle = 'Заместитель';
    } else if (location.pathname.includes('/news/')) {
      pageTitle = 'Новости';
    } else if (location.pathname.includes('/directions/')) {
      pageTitle = 'Направления';
    } else {
      pageTitle = "Страница";
    }
  }

  const toggleMobileDropdown = (name) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  return (
    <header className="mt-[20px]">
      {/* Верхняя часть с логотипом и кнопкой */}
      <div className="flex items-center justify-between mx-[60px] mb-5 max-lg:mx-6 max-md:mx-4 max-sm:flex-col max-sm:gap-4">
        <div className="flex items-center gap-[30px] max-sm:flex-col max-sm:text-center">
          <img className="w-[100px] h-[100px] max-sm:w-[70px] max-sm:h-[70px]" src={Logo} alt="Logo" />
          <h2
            className="text-[#1B2A44] font-bold text-[20px] w-[500px] leading-tight max-lg:w-auto max-lg:text-base"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            PAVEL BENKOV NOMIDAGI RESPUBLIKA IXTISOSLASHTIRILGAN RASSOMLIK MAKTABI
          </h2>
        </div>

        <Link to={ROUTES.CONDITIONS}>
          <button className="group relative px-10 py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-sm bg-[#D4A259] text-[#1B2A44] border-2 border-[#D4A259] hover:bg-transparent hover:text-[#D4A259] transition-all duration-500 ease-in-out overflow-hidden max-sm:px-6 max-sm:py-2">
            <span className="absolute top-0 left-0 w-2 h-[2px] bg-[#1B2A44] group-hover:bg-[#D4A259] group-hover:w-full transition-all duration-500"></span>
            <span className="absolute bottom-0 right-0 w-2 h-[2px] bg-[#1B2A44] group-hover:bg-[#D4A259] group-hover:w-full transition-all duration-500"></span>
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span className="h-[1px] w-0 bg-[#D4A259] group-hover:w-4 transition-all duration-500"></span>
              {t('btn_apply')}
              <span className="h-[1px] w-0 bg-[#D4A259] group-hover:w-4 transition-all duration-500"></span>
            </span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 shadow-[inside_0_0_15px_rgba(212,162,89,0.2)] transition-opacity duration-500"></span>
          </button>
        </Link>
      </div>

      {/* Меню навигации */}
      <div className="bg-[#1B2A44] relative z-50">
        {/* ДЕСКТОПНАЯ НАВИГАЦИЯ - показывается на lg и выше */}
        <div className="hidden lg:block">
          <nav className="max-w-7xl h-[70px] mx-auto flex items-center px-6 text-white">
            <div className="flex items-center gap-10">
              <Link to={ROUTES.HOME} className="text-[16px] font-semibold hover:text-[#D4A259] transition whitespace-nowrap">{t('nav.home')}</Link>

              <div className="relative group">
                <button className="text-[16px] font-semibold hover:text-[#D4A259] transition flex items-center gap-1 whitespace-nowrap">
                  {t('nav.about')} <span className="text-sm">▾</span>
                </button>
                <div className="absolute top-full left-0 mt-0 pt-3 w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-white text-[#1B2A44] rounded-[14px] shadow-xl overflow-hidden">
                    <Link to={ROUTES.ABOUT} className="block px-5 py-3 hover:bg-[#F5EFE6] whitespace-nowrap">{t('nav.history')}</Link>
                    <Link to={ROUTES.MANAGEMENT} className="block px-5 py-3 hover:bg-[#F5EFE6] whitespace-nowrap">{t('nav.management')}</Link>
                    <Link to={ROUTES.INFRASTRUCTURE} className="block px-5 py-3 hover:bg-[#F5EFE6] whitespace-nowrap">{t('nav.infrastructure')}</Link>
                    <Link to={ROUTES.CONTACTS} className="block px-5 py-3 hover:bg-[#F5EFE6] whitespace-nowrap">{t('nav.contacts')}</Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="text-[16px] font-semibold hover:text-[#D4A259] transition flex items-center gap-1 whitespace-nowrap">
                  {t('nav.education')} <span className="text-sm">▾</span>
                </button>
                <div className="absolute top-full left-0 mt-0 pt-3 w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-white text-[#1B2A44] rounded-[14px] shadow-xl overflow-hidden">
                    <Link to={ROUTES.DIRECTIONS} className="block px-5 py-3 hover:bg-[#F5EFE6] whitespace-nowrap">{t('nav.directions')}</Link>
                    <Link to={ROUTES.STUDYPLAN} className="block px-5 py-3 hover:bg-[#F5EFE6] whitespace-nowrap">{t('nav.study_plan')}</Link>
                    <Link to={ROUTES.SCHEDULE} className="block px-5 py-3 hover:bg-[#F5EFE6] whitespace-nowrap">{t('nav.schedule')}</Link>
                    <Link to={ROUTES.ACHIEVEMENTS} className="block px-5 py-3 hover:bg-[#F5EFE6] whitespace-nowrap">{t('nav.achievements')}</Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="text-[16px] font-semibold hover:text-[#D4A259] transition flex items-center gap-1 whitespace-nowrap">
                  {t('nav.admission')} <span className="text-sm">▾</span>
                </button>
                <div className="absolute top-full left-0 mt-0 pt-3 w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-white text-[#1B2A44] rounded-[14px] shadow-xl overflow-hidden">
                    <Link to={ROUTES.CONDITIONS} className="block px-5 py-3 hover:bg-[#F5EFE6] whitespace-nowrap">{t('nav.conditions')}</Link>
                    <Link to={ROUTES.DOCUMENTS} className="block px-5 py-3 hover:bg-[#F5EFE6] whitespace-nowrap">{t('nav.documents')}</Link>
                    <Link to={ROUTES.CONTACTS} className="block px-5 py-3 hover:bg-[#F5EFE6] whitespace-nowrap">{t('nav.contacts')}</Link>
                  </div>
                </div>
              </div>

              <Link to={ROUTES.NEWSLIST} className="text-[16px] font-semibold hover:text-[#D4A259] transition whitespace-nowrap">{t('nav.news')}</Link>
              <Link to={ROUTES.GALLERY} className="text-[16px] font-semibold hover:text-[#D4A259] transition whitespace-nowrap">{t('nav.gallery')}</Link>
            </div>

            {/* Правая часть: поиск и языки */}
            <div className="ml-auto flex items-center gap-8">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder={t('search_placeholder')}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-1.5 text-sm focus:outline-none focus:border-[#D4A259] w-[140px] transition-all duration-300 focus:w-[250px] placeholder:text-white/40"
                />
                {searchResults.length > 0 && (
                  <div className="absolute top-full right-0 mt-2 w-[280px] bg-white text-[#1B2A44] rounded-[14px] shadow-2xl overflow-hidden z-[100] border border-[#D4A259]/20">
                    <div className="text-[10px] text-gray-400 px-4 py-2 uppercase font-bold tracking-widest bg-gray-50 border-b">
                      {t('search.found')}:
                    </div>
                    {searchResults.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => {
                          setSearchQuery('');
                          setSearchResults([]);
                        }}
                        className="block px-5 py-3 hover:bg-[#F5EFE6] transition-colors border-b border-gray-100 last:border-none group/item"
                      >
                        <div className="text-sm font-bold text-[#1B2A44] group-hover/item:text-[#D4A259] transition-colors">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-gray-500 line-clamp-1 italic">
                          {item.content}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                <span className="absolute right-3 text-white/30 pointer-events-none">🔍</span>
              </div>

              {/* Переключатель языков - десктоп */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="text-[15px] font-bold hover:text-[#D4A259] transition flex items-center gap-1 uppercase tracking-wider"
                >
                  {i18n.language.substring(0, 2)} <span className="text-[10px] opacity-50">▼</span>
                </button>
                {langDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-[120px] bg-white text-[#1B2A44] rounded-[14px] shadow-xl overflow-hidden border border-[#D4A259]/20 z-50">
                    <button onClick={() => changeLanguage('ru')} className="w-full text-left px-5 py-2.5 hover:bg-[#F5EFE6] text-sm font-bold transition-colors border-b border-gray-100">Русский</button>
                    <button onClick={() => changeLanguage('uz')} className="w-full text-left px-5 py-2.5 hover:bg-[#F5EFE6] text-sm font-bold transition-colors border-b border-gray-100">O'zbek</button>
                    <button onClick={() => changeLanguage('en')} className="w-full text-left px-5 py-2.5 hover:bg-[#F5EFE6] text-sm font-bold transition-colors">English</button>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>

        {/* МОБИЛЬНАЯ НАВИГАЦИЯ - показывается на lg и меньше */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3">
          <div></div>
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)} className="text-white text-lg">🔍</button>
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="text-white text-sm font-bold uppercase hover:text-[#D4A259] transition"
              >
                {i18n.language.substring(0, 2)} ▼
              </button>
              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-[100px] bg-white rounded-xl shadow-xl overflow-hidden z-50">
                  <button onClick={() => changeLanguage('ru')} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Русский</button>
                  <button onClick={() => changeLanguage('uz')} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">O'zbek</button>
                  <button onClick={() => changeLanguage('en')} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">English</button>
                </div>
              )}
            </div>
            <button onClick={() => setMobileMenuOpen(true)} className="text-white focus:outline-none">
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Мобильный поиск */}
        {mobileSearchOpen && (
          <div className="lg:hidden px-4 py-3 bg-[#1B2A44] border-t border-white/10">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder={t('search_placeholder')}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-[#D4A259] placeholder:text-white/40 text-white"
                autoFocus
              />
              <button onClick={() => setMobileSearchOpen(false)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50">✕</button>
            </div>
            {searchResults.length > 0 && (
              <div className="mt-3 bg-white text-[#1B2A44] rounded-xl shadow-xl overflow-hidden">
                {searchResults.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      setSearchQuery('');
                      setSearchResults([]);
                      setMobileSearchOpen(false);
                    }}
                    className="block px-4 py-3 hover:bg-[#F5EFE6] border-b border-gray-100 last:border-none"
                  >
                    <div className="text-sm font-bold">{item.title}</div>
                    <div className="text-[11px] text-gray-500">{item.content}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Мобильное меню - выезжает справа */}
        {mobileMenuOpen && (
          <>
            <div className="fixed inset-0 bg-black/50 z-[100] lg:hidden" onClick={() => setMobileMenuOpen(false)} />
            <div ref={mobileMenuRef} className="fixed top-0 right-0 h-full w-[300px] bg-[#1B2A44] shadow-2xl z-[101] lg:hidden overflow-y-auto">
              <div className="p-5">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/20">
                  <img className="w-[50px] h-[50px]" src={Logo} alt="Logo" />
                  <button onClick={() => setMobileMenuOpen(false)} className="text-white text-2xl">✕</button>
                </div>

                <div className="flex flex-col space-y-2">
                  <Link to={ROUTES.HOME} onClick={() => setMobileMenuOpen(false)} className="text-white py-3 px-4 hover:bg-white/10 rounded-xl transition">{t('nav.home')}</Link>

                  {/* О школе - мобильный dropdown */}
                  <div>
                    <button onClick={() => toggleMobileDropdown('about')} className="text-white py-3 px-4 hover:bg-white/10 rounded-xl transition flex items-center justify-between w-full">
                      {t('nav.about')} <span className={`transition-transform duration-300 ${activeMobileDropdown === 'about' ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    {activeMobileDropdown === 'about' && (
                      <div className="pl-6 pb-2 space-y-1">
                        <Link to={ROUTES.ABOUT} onClick={() => { setMobileMenuOpen(false); setActiveMobileDropdown(null); }} className="block text-white/80 py-2 px-4 text-sm hover:text-[#D4A259] transition rounded-lg">{t('nav.history')}</Link>
                        <Link to={ROUTES.MANAGEMENT} onClick={() => { setMobileMenuOpen(false); setActiveMobileDropdown(null); }} className="block text-white/80 py-2 px-4 text-sm hover:text-[#D4A259] transition rounded-lg">{t('nav.management')}</Link>
                        <Link to={ROUTES.INFRASTRUCTURE} onClick={() => { setMobileMenuOpen(false); setActiveMobileDropdown(null); }} className="block text-white/80 py-2 px-4 text-sm hover:text-[#D4A259] transition rounded-lg">{t('nav.infrastructure')}</Link>
                        <Link to={ROUTES.CONTACTS} onClick={() => { setMobileMenuOpen(false); setActiveMobileDropdown(null); }} className="block text-white/80 py-2 px-4 text-sm hover:text-[#D4A259] transition rounded-lg">{t('nav.contacts')}</Link>
                      </div>
                    )}
                  </div>

                  {/* Обучение - мобильный dropdown */}
                  <div>
                    <button onClick={() => toggleMobileDropdown('education')} className="text-white py-3 px-4 hover:bg-white/10 rounded-xl transition flex items-center justify-between w-full">
                      {t('nav.education')} <span className={`transition-transform duration-300 ${activeMobileDropdown === 'education' ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    {activeMobileDropdown === 'education' && (
                      <div className="pl-6 pb-2 space-y-1">
                        <Link to={ROUTES.DIRECTIONS} onClick={() => { setMobileMenuOpen(false); setActiveMobileDropdown(null); }} className="block text-white/80 py-2 px-4 text-sm hover:text-[#D4A259] transition rounded-lg">{t('nav.directions')}</Link>
                        <Link to={ROUTES.STUDYPLAN} onClick={() => { setMobileMenuOpen(false); setActiveMobileDropdown(null); }} className="block text-white/80 py-2 px-4 text-sm hover:text-[#D4A259] transition rounded-lg">{t('nav.study_plan')}</Link>
                        <Link to={ROUTES.SCHEDULE} onClick={() => { setMobileMenuOpen(false); setActiveMobileDropdown(null); }} className="block text-white/80 py-2 px-4 text-sm hover:text-[#D4A259] transition rounded-lg">{t('nav.schedule')}</Link>
                        <Link to={ROUTES.ACHIEVEMENTS} onClick={() => { setMobileMenuOpen(false); setActiveMobileDropdown(null); }} className="block text-white/80 py-2 px-4 text-sm hover:text-[#D4A259] transition rounded-lg">{t('nav.achievements')}</Link>
                      </div>
                    )}
                  </div>

                  {/* Поступление - мобильный dropdown */}
                  <div>
                    <button onClick={() => toggleMobileDropdown('admission')} className="text-white py-3 px-4 hover:bg-white/10 rounded-xl transition flex items-center justify-between w-full">
                      {t('nav.admission')} <span className={`transition-transform duration-300 ${activeMobileDropdown === 'admission' ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    {activeMobileDropdown === 'admission' && (
                      <div className="pl-6 pb-2 space-y-1">
                        <Link to={ROUTES.CONDITIONS} onClick={() => { setMobileMenuOpen(false); setActiveMobileDropdown(null); }} className="block text-white/80 py-2 px-4 text-sm hover:text-[#D4A259] transition rounded-lg">{t('nav.conditions')}</Link>
                        <Link to={ROUTES.DOCUMENTS} onClick={() => { setMobileMenuOpen(false); setActiveMobileDropdown(null); }} className="block text-white/80 py-2 px-4 text-sm hover:text-[#D4A259] transition rounded-lg">{t('nav.documents')}</Link>
                        <Link to={ROUTES.CONTACTS} onClick={() => { setMobileMenuOpen(false); setActiveMobileDropdown(null); }} className="block text-white/80 py-2 px-4 text-sm hover:text-[#D4A259] transition rounded-lg">{t('nav.contacts')}</Link>
                      </div>
                    )}
                  </div>

                  <Link to={ROUTES.NEWSLIST} onClick={() => setMobileMenuOpen(false)} className="text-white py-3 px-4 hover:bg-white/10 rounded-xl transition">{t('nav.news')}</Link>
                  <Link to={ROUTES.GALLERY} onClick={() => setMobileMenuOpen(false)} className="text-white py-3 px-4 hover:bg-white/10 rounded-xl transition">{t('nav.gallery')}</Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Hero секция */}
      <section className={`relative ${isHome ? 'h-[85vh] max-lg:h-[70vh] max-md:h-[60vh]' : 'h-[40vh]'} overflow-hidden`}>
        <div className="absolute inset-0 z-0">
          {isHome ? (
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={NavbarVideo} type="video/mp4" />
            </video>
          ) : (
            <img src={BenkovImg} className="w-full h-full object-cover" alt="background" />
          )}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A44] via-transparent to-transparent opacity-80"></div>
        </div>

        <div className={`relative z-10 h-full flex items-center px-[80px] max-lg:px-8 max-md:px-4 ${!isHome ? 'justify-center' : ''}`}>
          {isHome ? (
            <div className="relative z-10 h-full flex items-center px-[30px] max-lg:px-4">
              <div className="max-w-[750px] max-lg:text-center">
                <h1
                  className="text-[55px] md:text-[70px] max-lg:text-[45px] max-md:text-[32px] font-bold text-white leading-tight drop-shadow-2xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  {t('hero.welcome')}<br />
                  <span className="text-[#D4A259]">{t('hero.school_name')}</span>
                </h1>
                <p className="mt-6 text-xl md:text-2xl max-lg:text-lg max-md:text-base text-white/90 font-light leading-relaxed max-w-[600px] drop-shadow-md">
                  {t('hero.description')} <br /> {t('hero.descriptionname')}
                </p>
                <div className="mt-10 flex gap-5 max-md:flex-col max-md:items-center">
                  <Link to={ROUTES.ABOUT} className="max-md:w-full">
                    <button className="group relative px-10 py-4 max-md:px-6 max-md:py-3 bg-[#1B2A44] text-white rounded-xl font-bold uppercase tracking-[0.2em] text-sm border border-[#D4A259]/30 transition-all duration-300 hover:border-white w-full">
                      <span className="absolute inset-0 border border-white rounded-xl opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></span>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {t('btn.more')}
                        <span className="relative w-3 h-3">
                          <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white transition-transform group-hover:rotate-90"></span>
                          <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></span>
                        </span>
                      </span>
                    </button>
                  </Link>
                  <Link to={ROUTES.CONDITIONS} className="max-md:w-full">
                    <button className="group relative px-10 py-4 max-md:px-6 max-md:py-3 rounded-xl font-bold uppercase tracking-[0.2em] text-sm bg-[#D4A259] text-[#1B2A44] border-2 border-[#D4A259] hover:bg-transparent hover:text-[#D4A259] transition-all duration-500 ease-in-out overflow-hidden w-full">
                      <span className="absolute top-0 left-0 w-2 h-[2px] bg-[#1B2A44] group-hover:bg-[#D4A259] group-hover:w-full transition-all duration-500"></span>
                      <span className="absolute bottom-0 right-0 w-2 h-[2px] bg-[#1B2A44] group-hover:bg-[#D4A259] group-hover:w-full transition-all duration-500"></span>
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <span className="h-[1px] w-0 bg-[#D4A259] group-hover:w-4 transition-all duration-500"></span>
                        {t('btn.apply_short')}
                        <span className="h-[1px] w-0 bg-[#D4A259] group-hover:w-4 transition-all duration-500"></span>
                      </span>
                      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 shadow-[inside_0_0_15px_rgba(212,162,89,0.2)] transition-opacity duration-500"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <h1 className="text-[50px] font-bold text-white uppercase tracking-wider max-lg:text-4xl max-md:text-2xl text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              {pageTitle}
            </h1>
          )}
        </div>
      </section>
    </header>
  );
};

export default Navbar;