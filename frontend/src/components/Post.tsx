import React from 'react';

interface PostProps {
    author: string;
    date: string;
    title: string;
    content: string;
    likes: number;
    comments: number;
}

const Post: React.FC<PostProps> = ({ author, date, title, content, likes, comments }) => {
    return (
        <div className="bg-white p-4 rounded shadow-md mb-4">
            <div className="flex justify-between text-gray-600 mb-2">
                <span>{author}</span>
                <span>{date}</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="mb-4">{content}</p>
            <div className="flex justify-between text-gray-500">
                <span>{likes} Likes</span>
                <span>{comments} Comments</span>
            </div>
        </div>
    );
};

export default Post;
