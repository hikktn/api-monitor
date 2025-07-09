import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

export interface PostData {
    id: string;
    user: {
        username: string;
        avatar: string;
        isVerified?: boolean;
    };
    images: string[];
    likes: number;
    caption: string;
    comments: {
        username: string;
        text: string;
    }[];
    timestamp: string;
    location?: string;
}

interface InstagramPostProps {
    post: PostData;
}

export const InstagramPost: React.FC<InstagramPostProps> = ({ post }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showFullCaption, setShowFullCaption] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    const handleSave = () => {
        setIsSaved(!isSaved);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % post.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + post.images.length) % post.images.length);
    };

    const truncatedCaption = post.caption.length > 100 ?
        post.caption.substring(0, 100) + '...' : post.caption;

    return (
        <div className="bg-white border border-gray-200 rounded-lg w-full max-w-lg mx-auto shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                    <img
                        src={post.user.avatar}
                        alt={post.user.username}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                        <div className="flex items-center space-x-1">
                            <span className="font-semibold text-sm">{post.user.username}</span>
                            {post.user.isVerified && (
                                <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            )}
                        </div>
                        {post.location && (
                            <span className="text-xs text-gray-500">{post.location}</span>
                        )}
                    </div>
                </div>
                <MoreHorizontal className="w-5 h-5 text-gray-700 cursor-pointer" />
            </div>

            {/* Image */}
            <div className="relative">
                <img
                    src={post.images[currentImageIndex]}
                    alt="Post content"
                    className="w-full h-96 object-cover"
                />

                {/* Image navigation */}
                {post.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center"
                        >
                            ←
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center"
                        >
                            →
                        </button>

                        {/* Image indicators */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                            {post.images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                                        }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                    <button onClick={handleLike} className="focus:outline-none">
                        <Heart
                            className={`w-6 h-6 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-700'
                                }`}
                        />
                    </button>
                    <MessageCircle className="w-6 h-6 text-gray-700 cursor-pointer" />
                    <Send className="w-6 h-6 text-gray-700 cursor-pointer" />
                </div>
                <button onClick={handleSave} className="focus:outline-none">
                    <Bookmark
                        className={`w-6 h-6 ${isSaved ? 'text-gray-700 fill-current' : 'text-gray-700'
                            }`}
                    />
                </button>
            </div>

            {/* Likes */}
            <div className="px-4">
                <span className="font-semibold text-sm">
                    {(post.likes + (isLiked ? 1 : 0)).toLocaleString()} likes
                </span>
            </div>

            {/* Caption */}
            <div className="px-4 py-2">
                <span className="text-sm">
                    <span className="font-semibold">{post.user.username}</span>{' '}
                    {showFullCaption ? post.caption : truncatedCaption}
                    {post.caption.length > 100 && (
                        <button
                            onClick={() => setShowFullCaption(!showFullCaption)}
                            className="text-gray-500 ml-1"
                        >
                            {showFullCaption ? 'less' : 'more'}
                        </button>
                    )}
                </span>
            </div>

            {/* Comments preview */}
            {post.comments.length > 0 && (
                <div className="px-4">
                    <button className="text-sm text-gray-500 mb-2">
                        View all {post.comments.length} comments
                    </button>
                    {post.comments.slice(0, 2).map((comment, index) => (
                        <div key={index} className="text-sm mb-1">
                            <span className="font-semibold">{comment.username}</span>{' '}
                            <span>{comment.text}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Timestamp */}
            <div className="px-4 py-2">
                <span className="text-xs text-gray-500 uppercase">{post.timestamp}</span>
            </div>
        </div>
    );
}; 