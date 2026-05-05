import React from 'react';
import Fuse from 'fuse.js';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../paths';
import { useLocation, Link } from 'react-router-dom';
import Logo from '../assets/icon/Logo.png';
import NavbarVideo from '../assets/video/NavbarVideo.mp4';
import BenkovImg from '../assets/img/BenkovImg.png'

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const titles = {
    [ROUTES.ABOUT]: 'История школы',
    [ROUTES.ACHIEVEMENTS]: 'Достижения школы',
    [ROUTES.ADMISSION]: 'Подать заяку',
    [ROUTES.CONTACTS]: 'Контакты',
    [ROUTES.CONDITIONS]: 'Условия',
    [ROUTES.DOCUMENTS]: 'Документы',
    [ROUTES.INFRASTRUCTURE]: 'Инфраструктура',
    [ROUTES.STUDYPLAN]: 'Учебный план',
    [ROUTES.SCHEDULE]: 'Расписание',
    [ROUTES.MANAGEMENT]: 'Руководство',
    [ROUTES.NEWSSECTION]: 'Новости',
    [ROUTES.NEWSLIST]: 'Лента новостей',
    [ROUTES.ADMINNEWS]: 'Админ',
    [ROUTES.NEWSDETAIL]: 'Детали новостей',
    [ROUTES.LOGIN]: 'Логин',
    [ROUTES.GALLERY]: 'Галерея учеников',
    [ROUTES.DIRECTIONS]: 'Направления',
    [ROUTES.DIRECTOR]: 'Директор',
    [ROUTES.DEPUTY]: 'Заместитель',
    [ROUTES.DIRECTIONSDETAIL]: 'Направления',
  };

  const searchData = [
    { title: 'История школы', path: ROUTES.ABOUT, content: 'Основание, традиции Павла Бенькова, академическая живопись' },
    { title: 'Направления', path: ROUTES.DIRECTIONS, content: 'Дизайн, скульптура, графика, прикладное искусство' },
    { title: 'Документы', path: ROUTES.DOCUMENTS, content: 'Устав, лицензия, свидетельство, приемная комиссия' },
    { title: 'Контакты', path: ROUTES.CONTACTS, content: 'Адрес, телефон, почта, локация школы' },
    { title: 'Руководство', path: ROUTES.MANAGEMENT, content: 'Директор, заместители, администрация школы Бенькова' },
    // Сюда добавь остальные ключевые страницы, по которым хочешь искать
  ];


  // 3. Состояния (States)
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  // 4. Настройка Fuse (создаем экземпляр один раз)
  const fuse = new Fuse(searchData, {
    keys: [
      { name: 'title', weight: 0.7 },
      { name: 'content', weight: 0.3 }
    ],
    threshold: 0.3
  });

  // 5. Обновленная функция поиска
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

  const { t, i18n } = useTranslation(); // 2. Берем функцию 't' (translate) и сам 'i18n'

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // 3. Функция для смены
    console.log("Меняю язык на:", lng);
    i18n.changeLanguage(lng);
    console.log("Текущий язык в i18n:", i18n.language);
  };


  // В JSX вместо "Главная" пишем {t('nav_home')}
  // Вместо "О школе" пишем {t('nav_about')} и так далее.

  let pageTitle = titles[location.pathname];

  if (!pageTitle) {
    if (location.pathname.includes('/management/deputy/')) {
      pageTitle = 'Заместитель';
    } else if (location.pathname.includes('/news/')) {
      pageTitle = 'Новости';
    } else if (location.pathname.includes('/directions/')) { // Добавь вот это
      pageTitle = 'Направления';
    } else {
      pageTitle = "Страница";
    }
  }
  return (
    <header className="mt-[20px]">
      <div className="flex items-center justify-between mx-[60px] mb-5">
        <div className="flex items-center gap-[30px]">
          <img className="w-[100px] h-[100px]" src={Logo} alt="Logo" />
          <h2
            className="text-[#1B2A44] font-bold text-[20px] w-[500px] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            PAVEL BENKOV NOMIDAGI RESPUBLIKA IXTISOSLASHTIRILGAN RASSOMLIK MAKTABI
          </h2>
        </div>

        <Link to={ROUTES.ADMISSION}>
          <button className="group relative px-10 py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-sm bg-[#D4A259] text-[#1B2A44] border-2 border-[#D4A259] hover:bg-transparent hover:text-[#D4A259] transition-all duration-500 ease-in-out overflow-hidden">
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
        <nav className="max-w-7xl h-[70px] mx-auto flex items-center px-6 text-white">
          {/* Основные ссылки */}
          <div className="flex items-center gap-10">
            <Link to={ROUTES.HOME} className="text-[16px] font-semibold hover:text-[#D4A259] transition">{t('nav.home')}</Link>

            {/* Dropdown: О школе */}
            <div className="relative group">
              <button className="text-[16px] font-semibold hover:text-[#D4A259] transition flex items-center gap-1">
                {t('nav.about')} <span className="text-sm">▾</span>
              </button>
              <div className="absolute top-full left-0 mt-0 pt-3 w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white text-[#1B2A44] rounded-[14px] shadow-xl overflow-hidden">
                  <Link to={ROUTES.ABOUT} className="block px-5 py-3 hover:bg-[#F5EFE6]">{t('nav.history')}</Link>
                  <Link to={ROUTES.MANAGEMENT} className="block px-5 py-3 hover:bg-[#F5EFE6]">{t('nav.management')}</Link>
                  <Link to={ROUTES.INFRASTRUCTURE} className="block px-5 py-3 hover:bg-[#F5EFE6]">{t('nav.infrastructure')}</Link>
                  <Link to={ROUTES.CONTACTS} className="block px-5 py-3 hover:bg-[#F5EFE6]">{t('nav.contacts')}</Link>
                </div>
              </div>
            </div>

            {/* Dropdown: Обучение */}
            <div className="relative group">
              <button className="text-[16px] font-semibold hover:text-[#D4A259] transition flex items-center gap-1">
                {t('nav.education')} <span className="text-sm">▾</span>
              </button>
              <div className="absolute top-full left-0 mt-0 pt-3 w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white text-[#1B2A44] rounded-[14px] shadow-xl overflow-hidden">
                  <Link to={ROUTES.DIRECTIONS} className="block px-5 py-3 hover:bg-[#F5EFE6]">{t('nav.directions')}</Link>
                  <Link to={ROUTES.STUDYPLAN} className="block px-5 py-3 hover:bg-[#F5EFE6]">{t('nav.study_plan')}</Link>
                  <Link to={ROUTES.SCHEDULE} className="block px-5 py-3 hover:bg-[#F5EFE6]">{t('nav.schedule')}</Link>
                  <Link to={ROUTES.ACHIEVEMENTS} className="block px-5 py-3 hover:bg-[#F5EFE6]">{t('nav.achievements')}</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-[16px] font-semibold hover:text-[#D4A259] transition flex items-center gap-1">
                {t('nav.admission')} <span className="text-sm">▾</span>
              </button>
              <div className="absolute top-full left-0 mt-0 pt-3 w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white text-[#1B2A44] rounded-[14px] shadow-xl overflow-hidden">
                  <Link to={ROUTES.CONDITIONS} className="block px-5 py-3 hover:bg-[#F5EFE6]">{t('nav.conditions')}</Link>
                  <Link to={ROUTES.DOCUMENTS} className="block px-5 py-3 hover:bg-[#F5EFE6]">{t('nav.documents')}</Link>
                  <Link to={ROUTES.CONTACTS} className="block px-5 py-3 hover:bg-[#F5EFE6]">{t('nav.contacts')}</Link>
                </div>
              </div>
            </div>



            {/* Остальные ссылки */}
            <Link to={ROUTES.NEWSLIST} className="text-[16px] font-semibold hover:text-[#D4A259] transition">{t('nav.news')}</Link>
            <Link to={ROUTES.GALLERY} className="text-[16px] font-semibold hover:text-[#D4A259] transition">{t('nav.gallery')}</Link>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: ПОИСК И ЯЗЫКИ */}
          <div className="ml-auto flex items-center gap-8">

            {/* Поисковик */}
            {/* Поисковик с логикой */}
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder={t('search_placeholder')}
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-1.5 text-sm focus:outline-none focus:border-[#D4A259] w-[140px] transition-all duration-300 focus:w-[250px] placeholder:text-white/40"
              />

              {/* Результаты поиска */}
              {searchResults.length > 0 && (
                <div className="absolute top-full right-0 mt-2 w-[280px] bg-white text-[#1B2A44] rounded-[14px] shadow-2xl overflow-hidden z-[100] border border-[#D4A259]/20 animate-in fade-in zoom-in duration-200">
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

              <span className="absolute right-3 text-white/30 pointer-events-none">
                🔍
              </span>
            </div>

            {/* Переключатель языков */}
            <div className="relative group/lang ml-6">
              <button className="text-[15px] font-bold hover:text-[#D4A259] transition flex items-center gap-1 uppercase tracking-wider">
                {i18n.language.substring(0, 2)} <span className="text-[10px] opacity-50">▼</span>
              </button>

              <div className="absolute top-full right-0 mt-0 pt-3 w-[120px] opacity-0 invisible group-hover/lang:opacity-100 group-hover/lang:visible transition-all duration-300 z-50">
                <div className="bg-white text-[#1B2A44] rounded-[14px] shadow-xl overflow-hidden border border-[#D4A259]/20">
                  <button onClick={() => changeLanguage('ru')} className="w-full text-left px-5 py-2.5 hover:bg-[#F5EFE6] text-sm font-bold transition-colors border-b border-gray-100">Русский</button>
                  <button onClick={() => changeLanguage('uz')} className="w-full text-left px-5 py-2.5 hover:bg-[#F5EFE6] text-sm font-bold transition-colors border-b border-gray-100">O'zbek</button>
                  <button onClick={() => changeLanguage('en')} className="w-full text-left px-5 py-2.5 hover:bg-[#F5EFE6] text-sm font-bold transition-colors border border-gray-100">English</button>
                </div>
              </div>
            </div>

          </div>
        </nav>
      </div >

      <section className={`relative ${isHome ? 'h-[85vh]' : 'h-[40vh]'} overflow-hidden`}>
        <div className="absolute inset-0 z-0">
          {isHome ? (
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={NavbarVideo} type="video/mp4" />
            </video>
          ) : (
            <img
              src={BenkovImg}
              className="w-full h-full object-cover"
              alt="background"
            />
          )}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A44] via-transparent to-transparent opacity-80"></div>
        </div>

        <div className={`relative z-10 h-full flex items-center px-[80px] ${!isHome ? 'justify-center' : ''}`}>
          {isHome ? (
            <div className="relative z-10 h-full flex items-center px-[30px]">
              <div className="max-w-[750px]">
                <h1
                  className="text-[55px] md:text-[70px] font-bold text-white leading-tight drop-shadow-2xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  {t('hero.welcome')}<br />
                  <span className="text-[#D4A259]">{t('hero.school_name')}</span>
                </h1>
                <p className="mt-6 text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-[600px] drop-shadow-md">
                  {t('hero.description')} <br /> {t('hero.descriptionname')}
                </p>
                <div className="mt-10 flex gap-5">
                  <Link to={ROUTES.ABOUT}>
                    <button className="group relative px-10 py-4 bg-[#1B2A44] text-white rounded-xl font-bold uppercase tracking-[0.2em] text-sm border border-[#D4A259]/30 transition-all duration-300 hover:border-white">
                      <span className="absolute inset-0 border border-white rounded-xl opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></span>
                      <span className="relative z-10 flex items-center gap-2">
                        {t('btn.more')}
                        <span className="relative w-3 h-3">
                          <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white transition-transform group-hover:rotate-90"></span>
                          <span className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></span>
                        </span>
                      </span>
                    </button>
                  </Link>
                  <Link to={ROUTES.ADMISSION}>
                    <button className="group relative px-10 py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-sm bg-[#D4A259] text-[#1B2A44] border-2 border-[#D4A259] hover:bg-transparent hover:text-[#D4A259] transition-all duration-500 ease-in-out overflow-hidden">
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
            <h1 className="text-[50px] font-bold text-white uppercase tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
              {pageTitle}
            </h1>
          )}
        </div>
      </section>
    </header >
  );
};

export default Navbar;