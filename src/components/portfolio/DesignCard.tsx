import React from 'react';
import { ExternalLink, Heart, Eye } from 'lucide-react';

export interface DesignWork {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    tools: string[];
    likes: number;
    views: number;
    projectUrl?: string;
    createdDate: string;
}

interface DesignCardProps {
    work: DesignWork;
    onClick: () => void;
}

export const DesignCard: React.FC<DesignCardProps> = ({ work, onClick }) => {
    const handleProjectLinkClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (work.projectUrl) {
            window.open(work.projectUrl, '_blank');
        }
    };

    return (
        <div
            onClick={onClick}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
        >
            {/* Image */}
            <div className="relative overflow-hidden h-64">
                <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                    <Heart className="w-4 h-4" />
                                    <span className="text-sm">{work.likes}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Eye className="w-4 h-4" />
                                    <span className="text-sm">{work.views}</span>
                                </div>
                            </div>

                            {work.projectUrl && (
                                <button
                                    onClick={handleProjectLinkClick}
                                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {work.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {work.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {work.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {work.tools.slice(0, 4).map((tool) => (
                        <span
                            key={tool}
                            className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg"
                        >
                            {tool}
                        </span>
                    ))}
                    {work.tools.length > 4 && (
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-500 rounded-lg">
                            +{work.tools.length - 4}
                        </span>
                    )}
                </div>

                {/* Date */}
                <div className="text-xs text-gray-500">
                    {work.createdDate}
                </div>
            </div>
        </div>
    );
}; 