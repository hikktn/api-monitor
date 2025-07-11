import React from 'react';
import { BlogCard, BlogPost } from '../../components/blog/BlogCard';
import { blogPosts } from '../../data/mockData';

interface BlogPageProps {
    onBlogClick: (post: BlogPost) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onBlogClick }) => {
    return (
        <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        设计与开发博客
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        分享设计思考、技术心得和行业洞察
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <BlogCard
                            key={post.id}
                            post={post}
                            onClick={() => onBlogClick(post)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}; 