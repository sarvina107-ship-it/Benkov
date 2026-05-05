import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminNews = () => {
    const navigate = useNavigate();

    // ПРОВЕРКА ПРИ ЗАГРУЗКЕ
    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (token !== 'secret-key-777') {
            navigate('/login');
        }
        fetchNews();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/login');
    };

    const [formData, setFormData] = useState({
        title_ru: '',
        title_uz: '',
        title_en: '',
        description_ru: '',
        description_uz: '',
        description_en: '',
        image: '',
        date: ''
    });

    // --- НОВОЕ: ID редактируемой новости ---
    const [editId, setEditId] = useState(null);

    const [newsList, setNewsList] = useState([]);
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);

    const IMGBB_API_KEY = '24e129c25ed502eb69213676bb176822';

    const fetchNews = async () => {
        try {
            const res = await axios.get('https://sarvina-production.up.railway.app/api/news');
            const data = Array.isArray(res.data) ? res.data : (res.data.news || res.data.data || []);
            setNewsList(data);
        } catch (err) {
            console.error("Ошибка при загрузке списка:", err);
        }
    };

    const uploadToImgBB = async (file) => {
        const body = new FormData();
        body.append('image', file);
        try {
            const res = await axios.post(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, body);
            return res.data.data.url;
        } catch (err) {
            console.error("Ошибка ImgBB:", err);
            throw new Error("Не удалось загрузить фото");
        }
    };

    const handlePaste = async (e) => {
        const items = e.clipboardData.items;
        for (let i = 0; i < items.length; i++) {
            if (items[i].type.indexOf("image") !== -1) {
                const file = items[i].getAsFile();
                setUploading(true);
                try {
                    const url = await uploadToImgBB(file);
                    setFormData(prev => ({
                        ...prev,
                        image: prev.image ? `${prev.image}, ${url}` : url
                    }));
                    setStatus('✅ Фото добавлено!');
                } catch (err) {
                    setStatus('❌ Ошибка загрузки фото');
                } finally {
                    setUploading(false);
                }
            }
        }
    };

    const handleEdit = (news) => {
        setEditId(news._id || news.id);
        setFormData({
            title_ru: news.title_ru || '',
            title_uz: news.title_uz || '',
            title_en: news.title_en || '',
            description_ru: news.description_ru || '',
            description_uz: news.description_uz || '',
            description_en: news.description_en || '',
            date: news.date ? news.date.split('T')[0] : '',
            image: news.image || ''
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const resetForm = () => {
        setEditId(null);
        setFormData({
            title_ru: '', title_uz: '', title_en: '',
            description_ru: '', description_uz: '', description_en: '',
            date: '', image: ''
        });
        setStatus('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(editId ? 'Обновление...' : 'Отправка...');

        try {
            if (editId) {
                // РЕДАКТИРОВАНИЕ (PUT)
                await axios.put(`https://sarvina-production.up.railway.app/api/news/${editId}`, formData);
                setStatus('✅ Новость успешно обновлена!');
            } else {
                // СОЗДАНИЕ (POST)
                await axios.post('https://sarvina-production.up.railway.app/api/news', formData);
                setStatus('✅ Новость успешно добавлена!');
            }
            resetForm();
            fetchNews();
        } catch (err) {
            setStatus('❌ Ошибка: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (e, id) => {
        e.stopPropagation(); // Чтобы не сработал клик на редактирование
        if (window.confirm('Вы уверены, что хотите удалить эту новость?')) {
            try {
                await axios.delete(`https://sarvina-production.up.railway.app/api/news/${id}`);
                fetchNews();
                if (editId === id) resetForm();
            } catch (err) {
                alert('Ошибка при удалении.');
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4" onPaste={handlePaste}>
            <div className="max-w-6xl mx-auto mb-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-400">Панель управления</h2>
                <button onClick={handleLogout} className="text-red-500 font-medium hover:underline">
                    Выйти из системы
                </button>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-8">

                {/* ФОРМА */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                        <h1 className="text-2xl font-bold text-[#0E1A2B]">
                            {editId ? 'Редактирование новости' : 'Новая публикация'}
                        </h1>
                        {editId && (
                            <button onClick={resetForm} className="text-sm text-blue-500 hover:underline">
                                Отменить / Создать новую
                            </button>
                        )}
                    </div>
                    <p className="text-sm text-gray-500 mb-6 italic">Подсказка: скопируй картинку и нажми Ctrl+V</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* ПОЛЕ ДЛЯ ДАТЫ */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Дата публикации</label>
                            <input
                                type="date"
                                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#D4A259] outline-none transition"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                required
                            />
                        </div>

                        {/* БЛОК НА РУССКОМ */}
                        <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100 space-y-4">
                            <h3 className="text-blue-600 font-bold text-sm uppercase tracking-wider">Русская версия (RU)</h3>
                            <input
                                type="text"
                                placeholder="Заголовок на русском"
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-400"
                                value={formData.title_ru}
                                onChange={(e) => setFormData({ ...formData, title_ru: e.target.value })}
                                required
                            />
                            <textarea
                                placeholder="Текст новости на русском"
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl h-32 outline-none focus:border-blue-400"
                                value={formData.description_ru}
                                onChange={(e) => setFormData({ ...formData, description_ru: e.target.value })}
                                required
                            />
                        </div>

                        {/* БЛОК НА УЗБЕКСКОМ */}
                        <div className="p-5 bg-green-50/50 rounded-2xl border border-green-100 space-y-4">
                            <h3 className="text-green-600 font-bold text-sm uppercase tracking-wider">O'zbekcha versiyasi (UZ)</h3>
                            <input
                                type="text"
                                placeholder="Sarlavha (O'zbekcha)"
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl outline-none focus:border-green-400"
                                value={formData.title_uz}
                                onChange={(e) => setFormData({ ...formData, title_uz: e.target.value })}
                                required
                            />
                            <textarea
                                placeholder="Matn (O'zbekcha)"
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl h-32 outline-none focus:border-green-400"
                                value={formData.description_uz}
                                onChange={(e) => setFormData({ ...formData, description_uz: e.target.value })}
                                required
                            />
                        </div>

                        {/* БЛОК НА АНГЛИЙСКОМ */}
                        <div className="p-5 bg-green-50/50 rounded-2xl border border-green-100 space-y-4">
                            <h3 className="text-red-600 font-bold text-sm uppercase tracking-wider">English version (EN)</h3>
                            <input
                                type="text"
                                placeholder="Sarlavha (O'zbekcha)"
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl outline-none focus:border-green-400"
                                value={formData.title_en}
                                onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
                                required
                            />
                            <textarea
                                placeholder="About (English)"
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl h-32 outline-none focus:border-green-400"
                                value={formData.description_en}
                                onChange={(e) => setFormData({ ...formData, description_en: e.target.value })}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Ссылки на фото</label>
                            <textarea
                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-400 h-20 outline-none"
                                value={formData.image}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                placeholder="Ссылки добавятся автоматически..."
                            />
                        </div>

                        {/* ПРЕДПРОСМОТР */}
                        <div className="flex gap-3 flex-wrap">
                            {formData.image && formData.image.split(',').map((url, i) => (
                                <div key={i} className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-[#D4A259] group">
                                    <img src={url.trim()} className="w-full h-full object-cover" alt="preview" />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const images = formData.image.split(',').filter((_, index) => index !== i);
                                            setFormData({ ...formData, image: images.join(',') });
                                        }}
                                        className="absolute inset-0 bg-black/40 text-white opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-xs"
                                    >
                                        Удалить
                                    </button>
                                </div>
                            ))}
                            {uploading && (
                                <div className="w-20 h-20 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-[10px] text-gray-400 animate-pulse">
                                    Загрузка...
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={loading || uploading}
                            className={`w-full py-4 rounded-2xl font-bold text-white shadow-lg transition-all ${loading || uploading ? 'bg-gray-400' : 'bg-[#0E1A2B] hover:bg-[#D4A259] active:scale-95'}`}
                        >
                            {loading ? 'Обработка...' : (editId ? 'Сохранить изменения' : 'Опубликовать новость')}
                        </button>

                        {status && (
                            <div className={`p-3 rounded-xl text-center text-sm font-medium ${status.includes('❌') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                                {status}
                            </div>
                        )}
                    </form>
                </div>

                {/* СПИСОК НОВОСТЕЙ */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 h-fit">
                    <h2 className="text-xl font-bold text-[#0E1A2B] mb-6">Список всех новостей</h2>
                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                        {newsList.map((news) => (
                            <div
                                key={news._id || news.id}
                                onClick={() => handleEdit(news)} // КЛИК ДЛЯ РЕДАКТИРОВАНИЯ
                                className={`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-all ${editId === (news._id || news.id) ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-100 hover:bg-gray-100'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={news.image?.split(',')[0]}
                                        className="w-12 h-12 rounded-lg object-cover bg-gray-200"
                                        alt=""
                                    />
                                    <div>
                                        <p className="font-bold text-xs text-[#0E1A2B] line-clamp-1">{news.title_ru || news.title_uz}</p>
                                        <p className="text-[10px] text-blue-500 italic">Нажмите, чтобы изменить</p>
                                    </div>
                                </div>
                                <button
                                    onClick={(e) => handleDelete(e, news._id || news.id)}
                                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminNews;