import React, { useState } from 'react';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:3000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Ошибка входа. Проверьте свои учетные данные.');
            }

            const data = await response.json();
            console.log(data);
            // Обработайте успешный вход, например, сохраните токен
            // localStorage.setItem('token', data.token); // Если у вас есть токен
        } catch (err) {
            // Указываем, что err может быть любого типа
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Произошла неизвестная ошибка.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4">Войти</h1>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2">
                        Почта
                        <input
                            type="email"
                            placeholder="Введите почту"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </label>
                    <label className="block mb-4">
                        Пароль
                        <input
                            type="password"
                            placeholder="Введите пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </label>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        disabled={loading}
                    >
                        {loading ? 'Загрузка...' : 'Войти'}
                    </button>
                </form>
                {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
                <p className="mt-4 text-center">
                    Нет аккаунта? <a href="/register" className="text-blue-500">Создать аккаунт</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
