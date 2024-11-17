import React, { useState } from 'react';

const CreatePostPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь отправляем запрос на создание поста
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Создать пост</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2">
                        Заголовок
                        <input
                            type="text"
                            placeholder="Введите заголовок"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </label>
                    <label className="block mb-4">
                        Контент
                        <textarea
                            placeholder="Введите контент"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </label>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Опубликовать пост
                    </button>
                    <button type="button" onClick={onClose} className="w-full mt-2 bg-gray-300 text-black p-2 rounded hover:bg-gray-400">
                        Закрыть
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatePostPopup;
