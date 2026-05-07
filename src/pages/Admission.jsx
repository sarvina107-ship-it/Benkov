import React, { useState, useMemo } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Admission = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', phone: '', direction: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Состояния для кастомного селекта
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = '1633967629';

  // Получаем массив направлений из переводов
  const directions = t('admission.directions', { returnObjects: true });

  const filteredDirections = useMemo(() => {
    if (!Array.isArray(directions)) return [];
    return directions.filter(d => d.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, directions]);

  const sendToTelegram = async (e) => {
    e.preventDefault();
    if (!formData.direction) {
      alert(t('admission.selectAlert'));
      return;
    }
    setLoading(true);

    const message = `
🌟 **НОВАЯ ЗАЯВКА** 🌟
👤 **Имя:** ${formData.name}
📞 **Телефон:** ${formData.phone}
🎨 **Направление:** ${formData.direction}
    `;

    try {
      await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: TELEGRAM_CHAT_ID,
        parse_mode: 'Markdown',
        text: message
      });
      setIsSubmitted(true);
    } catch (error) {
      alert(t('admission.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F6F9] py-20 px-6 flex items-center justify-center">
      {!isSubmitted ? (
        <div className="max-w-xl w-full bg-white rounded-[30px] shadow-2xl border border-gray-100 relative">
          <div className="bg-[#1B2A44] p-8 text-white text-center rounded-t-[30px]">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('admission.title')}
            </h2>
            <div className="w-16 h-1 bg-[#D4A259] mx-auto mt-3 rounded-full"></div>
          </div>

          <form onSubmit={sendToTelegram} className="p-10 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1B2A44] uppercase tracking-wider">
                {t('admission.labelName')}
              </label>
              <input
                required
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:border-[#D4A259] outline-none transition-all"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1B2A44] uppercase tracking-wider">
                {t('admission.labelPhone')}
              </label>
              <input
                required
                type="tel"
                placeholder="+998"
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:border-[#D4A259] outline-none transition-all"
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            {/* ВЫБОР НАПРАВЛЕНИЯ */}
            <div className="space-y-2 relative">
              <label className="text-sm font-bold text-[#1B2A44] uppercase tracking-wider">
                {t('admission.labelDirection')}
              </label>

              <div
                className={`w-full p-4 bg-gray-50 border rounded-2xl cursor-pointer transition-all flex justify-between items-center relative z-[45] ${isOpen ? 'border-[#D4A259] ring-1 ring-[#D4A259]' : 'border-gray-200'}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className={formData.direction ? 'text-[#1B2A44]' : 'text-gray-400'}>
                  {formData.direction || t('admission.placeholderDirection')}
                </span>
                <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {isOpen && (
                <>
                  <div className="fixed inset-0 z-[40]" onClick={() => setIsOpen(false)}></div>
                  <div className="absolute z-[50] left-0 right-0 mt-2 bg-white border border-gray-100 shadow-[0_15px_45px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden">
                    <div className="p-3 border-b bg-gray-50 sticky top-0 z-10">
                      <input
                        autoFocus
                        type="text"
                        placeholder={t('admission.searchPlaceholder')}
                        className="w-full p-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#D4A259]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    <div className="max-h-[250px] overflow-y-auto custom-scrollbar">
                      {filteredDirections.length > 0 ? (
                        filteredDirections.map((dir, idx) => (
                          <div
                            key={idx}
                            className="px-5 py-3 text-sm text-[#1B2A44] hover:bg-[#D4A259] hover:text-white cursor-pointer transition-colors"
                            onClick={() => {
                              setFormData({ ...formData, direction: dir });
                              setIsOpen(false);
                              setSearchTerm('');
                            }}
                          >
                            {dir}
                          </div>
                        ))
                      ) : (
                        <div className="p-5 text-center text-gray-400 text-sm italic">
                          {t('admission.notFound')}
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            <button disabled={loading} className="w-full group relative px-10 py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-sm bg-[#D4A259] text-[#1B2A44] border-2 border-[#D4A259] hover:bg-transparent hover:text-[#D4A259] transition-all duration-500 ease-in-out overflow-hidden">
              <span className="absolute top-0 left-0 w-2 h-[2px] bg-[#1B2A44] group-hover:bg-[#D4A259] group-hover:w-full transition-all duration-500"></span>
              <span className="absolute bottom-0 right-0 w-2 h-[2px] bg-[#1B2A44] group-hover:bg-[#D4A259] group-hover:w-full transition-all duration-500"></span>
              <span className="relative z-10">
                {loading ? t('admission.sending') : t('admission.submitBtn')}
              </span>
            </button>
          </form>
        </div>
      ) : (
        /* ЗАМЕТНЫЙ АЛЕРТ */
        <div className="max-w-2xl w-full bg-white rounded-[40px] p-12 text-center shadow-2xl border-4 border-[#D4A259] animate-in zoom-in duration-300">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-black text-[#1B2A44] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t('admission.successTitle')}
          </h2>
          <div className="bg-[#1B2A44] p-8 rounded-3xl shadow-inner">
            <p className="text-[#D4A259] text-2xl font-bold leading-relaxed">
              {t('admission.successAlert')}
            </p>
          </div>
          <button
            onClick={() => window.location.href = '/'}
            className="mt-10 text-[#1B2A44] font-bold border-b-2 border-[#1B2A44] hover:text-[#D4A259] hover:border-[#D4A259] transition-all"
          >
            {t('admission.backHome')}
          </button>
        </div>
      )}
    </div>
  );
};

export default Admission;