import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, FolderOpen, Phone, Scissors } from 'lucide-react';

const Documents = () => {
  const { t } = useTranslation();

  const mainDocs = [
    t('documents.item_1'), t('documents.item_2'), t('documents.item_3'),
    t('documents.item_4'), t('documents.item_5'), t('documents.item_6'),
    t('documents.item_7')
  ];

  return (
    <div className="bg-[#eaeae8] min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Фоновые артефакты */}
      <div className="absolute top-40 -left-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#D4A259]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Заголовок */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 relative">
          <span className="text-[#D4A259] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] text-[10px] sm:text-[11px] md:text-[13px] mb-3 sm:mb-4 block">
            {t('documents.subtitle')}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-[#0E1A2B] leading-[1.1] sm:leading-[1] md:leading-none">
            {t('documents.title').split(' ')[0]} <br />
            <span className="text-[#D4A259] ml-0 sm:ml-10 md:ml-16 lg:ml-20 block sm:inline">
              {t('documents.title').split(' ').slice(1).join(' ')}
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">

          {/* ГЛАВНЫЙ СПИСОК ДОКУМЕНТОВ */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {mainDocs.map((text, i) => (
                <div key={i} className="group bg-white p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute -right-2 -bottom-2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <FileText size={70} sm={80} md={100} />
                  </div>
                  <div className="flex flex-col h-full justify-between">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0E1A2B] text-[#D4A259] flex items-center justify-center font-bold text-xs sm:text-sm mb-4 sm:mb-6">
                      0{i + 1}
                    </div>
                    <p className="text-base sm:text-lg md:text-xl font-medium text-[#0E1A2B] leading-snug">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ПРАВАЯ ПАНЕЛЬ */}
          <div className="lg:col-span-4 space-y-5 sm:space-y-6">

            {/* Дополнительные документы */}
            <div className="bg-[#D4A259] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 text-[#0E1A2B]">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Scissors size={20} sm={22} md={24} />
                <h3 className="font-black uppercase tracking-widest text-[10px] sm:text-[11px]">
                  {t('documents.additional_title')}
                </h3>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="p-4 sm:p-5 bg-white/20 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                  <p className="text-xl sm:text-2xl font-serif font-bold italic text-center sm:text-left">
                    {t('documents.folder')}
                  </p>
                </div>
                <div className="p-4 sm:p-5 bg-white/20 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                  <p className="text-xl sm:text-2xl font-serif font-bold italic text-center sm:text-left">
                    {t('documents.envelope')}
                  </p>
                </div>
              </div>
            </div>

            {/* Контакты */}
            <div className="bg-[#0E1A2B] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-gray-500 font-bold uppercase tracking-widest text-[10px] sm:text-[11px] mb-6 sm:mb-8">
                  {t('documents.contacts_title')}
                </h3>
                <div className="space-y-5 sm:space-y-6">
                  <a href="tel:+998712450556" className="flex flex-col group text-center sm:text-left">
                    <span className="text-gray-500 text-[10px] sm:text-xs mb-1 group-hover:text-[#D4A259] transition-colors uppercase tracking-widest">
                      Front Desk
                    </span>
                    <span className="text-xl sm:text-2xl font-bold font-serif leading-none">
                      (71) 245-05-56
                    </span>
                  </a>
                  <a href="tel:+998712450765" className="flex flex-col group text-center sm:text-left">
                    <span className="text-gray-500 text-[10px] sm:text-xs mb-1 group-hover:text-[#D4A259] transition-colors uppercase tracking-widest">
                      Office
                    </span>
                    <span className="text-xl sm:text-2xl font-bold font-serif leading-none">
                      (71) 245-07-65
                    </span>
                  </a>
                </div>
              </div>
              <Phone className="absolute -right-4 -bottom-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-white/5 rotate-12" />
            </div>

            {/* Напоминание */}
            <div className="flex items-center gap-4 px-5 sm:px-6 py-6 sm:py-8 border-2 border-dashed border-gray-200 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] text-gray-400">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                <FolderOpen size={16} sm={18} md={20} />
              </div>
              <p className="text-[11px] sm:text-[12px] md:text-[13px] leading-tight italic text-center sm:text-left">
                Не забудьте проверить наличие всех оригиналов при подаче копий.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Documents;