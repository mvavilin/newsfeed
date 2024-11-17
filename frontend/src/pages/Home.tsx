import React, { useState } from 'react';
import CreatePostPopup from '../components/CreatePostPopup';
import Post from '../components/Post';

const Home: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const posts = [
        { author: 'user1@example.com', date: '31 октября', title: 'Заголовок поста', content: 'Содержимое поста', likes: 10, comments: 5 },
        // Добавь другие посты
    ];

    return (
        <div className="flex flex-col items-center p-4 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Главная страница</h1>
            <button
                onClick={() => setIsPopupOpen(true)}
                className="mb-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Создать пост
            </button>
            {isPopupOpen && <CreatePostPopup onClose={() => setIsPopupOpen(false)} />}
            <div className="w-full max-w-2xl">
                {posts.map((post, index) => (
                    <Post key={index} {...post} />
                ))}
            </div>
        </div>
    );
};

export default Home;
