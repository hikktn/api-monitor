import React from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    coverImage: string;
    publishDate: string;
    readTime: string;
    tags: string[];
    author: {
        name: string;
        avatar: string;
    };
}

interface BlogCardProps {
    post: BlogPost;
    onClick: () => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
    return (
        <article
            onClick={onClick}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
        >
            {/* Cover Image */}
            <div className="relative overflow-hidden h-48">
                <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                        >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {post.publishDate}
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-6 h-6 rounded-full"
                        />
                        <span className="font-medium">{post.author.name}</span>
                    </div>
                </div>
            </div>
        </article>
    );
}; 