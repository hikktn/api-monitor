import React from 'react';
import { InstagramPost } from '../../components/instagram/InstagramPost';
import { instagramPosts } from '../../data/mockData';
import { ArrowLeft } from 'lucide-react';

interface InstagramPageProps {
    onNavigate: (pageId: string) => void;
}

export const InstagramPage: React.FC<InstagramPageProps> = ({ onNavigate }) => {
    return (
        <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Instagram UI 重设计
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        现代化的Instagram界面设计演示
                    </p>
                    <button
                        onClick={() => onNavigate('Portfolio')}
                        className="group inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        返回作品集
                    </button>
                </div>
                <div className="space-y-8">
                    {instagramPosts.map((post) => (
                        <InstagramPost key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}; 