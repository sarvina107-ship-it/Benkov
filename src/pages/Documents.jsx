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
    <div className="bg-[#eaeae8] min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Фоновые "артефакты" */}
      <div className="absolute top-40 -left-20 w-96 h-96 bg-[#D4A259]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Заголовок с характером */}
        <div className="mb-24 relative">
          <span className="text-[#D4A259] font-black uppercase tracking-[0.4em] text-[13px] mb-4 block">
            {t('documents.subtitle')}
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#0E1A2B] leading-none">
            {t('documents.title').split(' ')[0]} <br />
            <span className="text-[#D4A259] ml-0 md:ml-20">{t('documents.title').split(' ')[1]}</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* ГЛАВНЫЙ СПИСОК (как стопка листов) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mainDocs.map((text, i) => (
                <div key={i} className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute -right-2 -bottom-2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <FileText size={100} />
                  </div>
                  <div className="flex flex-col h-full justify-between">
                    <div className="w-10 h-10 rounded-full bg-[#0E1A2B] text-[#D4A259] flex items-center justify-center font-bold text-sm mb-6">
                      0{i + 1}
                    </div>
                    <p className="text-xl font-medium text-[#0E1A2B] leading-snug">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ПРАВАЯ ПАНЕЛЬ (акценты) */}
          <div className="lg:col-span-4 space-y-6">

            {/* Дополнительно (Креативный блок) */}
            <div className="bg-[#D4A259] rounded-[2.5rem] p-10 text-[#0E1A2B]">
              <div className="flex items-center gap-3 mb-8">
                <Scissors size={24} />
                <h3 className="font-black uppercase tracking-widest text-[11px]">{t('documents.additional_title')}</h3>
              </div>
              <div className="space-y-6">
                <div className="p-5 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <p className="text-2xl font-serif font-bold italic">{t('documents.folder')}</p>
                </div>
                <div className="p-5 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <p className="text-2xl font-serif font-bold italic">{t('documents.envelope')}</p>
                </div>
              </div>
            </div>

            {/* Контакты (Минимализм) */}
            <div className="bg-[#0E1A2B] rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-gray-500 font-bold uppercase tracking-widest text-[11px] mb-8">
                  {t('documents.contacts_title')}
                </h3>
                <div className="space-y-6">
                  <a href="tel:+998712450556" className="flex flex-col group">
                    <span className="text-gray-500 text-xs mb-1 group-hover:text-[#D4A259] transition-colors uppercase tracking-widest">Front Desk</span>
                    <span className="text-2xl font-bold font-serif leading-none">(71) 245-05-56</span>
                  </a>
                  <a href="tel:+998712450765" className="flex flex-col group">
                    <span className="text-gray-500 text-xs mb-1 group-hover:text-[#D4A259] transition-colors uppercase tracking-widest">Office</span>
                    <span className="text-2xl font-bold font-serif leading-none">(71) 245-07-65</span>
                  </a>
                </div>
              </div>
              <Phone className="absolute -right-4 -bottom-4 size-32 text-white/5 rotate-12" />
            </div>

            {/* Кнопка или напоминание */}
            <div className="flex items-center gap-4 px-6 py-8 border-2 border-dashed border-gray-200 rounded-[2.5rem] text-gray-400">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                <FolderOpen size={20} />
              </div>
              <p className="text-[13px] leading-tight italic">
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