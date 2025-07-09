import React from 'react';
import { ArrowRight, Github, Heart } from 'lucide-react';
import siteData from '../../data/siteData.json';

const CsdnIcon = () => (
    <svg viewBox="0 0 1024 1024" width="24" height="24" fill="currentColor">
        <path d="M946.432 142.336c-22.528-11.264-51.2-3.072-62.464 18.944L512 851.968 139.52 161.28c-11.264-22.528-39.936-30.208-62.464-18.944-22.528 11.264-30.208 39.936-18.944 62.464l409.6 742.4c6.144 11.264 17.408 18.432 30.208 18.432s24.064-7.168 30.208-18.432l409.6-742.4c11.264-22.528 3.584-51.2-18.944-62.464z" />
    </svg>
);

const ZhihuIcon = () => (
    <svg viewBox="0 0 1024 1024" width="24" height="24" fill="currentColor">
        <path d="M989.4 441.1h-85.3v-272c0-22.1-17.9-40-40-40H159.9c-22.1 0-40 17.9-40 40v272H34.6c-22.1 0-40 17.9-40 40v400.8c0 22.1 17.9 40 40 40h954.9c22.1 0 40-17.9 40-40V481.1c-.1-22.1-18-40-40.1-40zM200 169.1h624.1v232H200v-232zM804.8 521.1H602.3v110.8c0 22.1-17.9 40-40 40H461.7c-22.1 0-40-17.9-40-40V521.1H219.2v-40h585.6v40z m144.7 320.8H602.3v-120h247.2v120z" />
    </svg>
);

interface HeroSectionProps {
    onNavigate: (page: string) => void;
}

const iconComponents: { [key: string]: React.ReactNode } = {
    Github: <Github className="w-6 h-6" />,
    Csdn: <CsdnIcon />,
    Zhihu: <ZhihuIcon />,
    Heart: <Heart className="w-6 h-6" />
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Main Content */}
                <div className="max-w-4xl mx-auto">
                    {/* Avatar */}
                    <div className="mb-8">
                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                <span className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent">
                                    JD
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                        <span className="block">创意设计师</span>
                        <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            & 前端开发者
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        专注于创造美观、实用的数字体验。通过设计与技术的完美融合，
                        <br className="hidden md:block" />
                        为每一个项目注入生命力。
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <button
                            onClick={() => onNavigate('portfolio')}
                            className="group flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            查看作品集
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={() => onNavigate('blog')}
                            className="group flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105"
                        >
                            阅读博客
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6">
                        {siteData.socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 hover:text-gray-900"
                            >
                                {iconComponents[link.icon]}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse" />
                <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-20 animate-pulse" />
                <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse" />
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
                </div>
            </div>
        </section>
    );
}; 