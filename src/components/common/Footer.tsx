import React from 'react';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import { getFooterConfig } from '../../utils/config';
import type { FooterConfig } from '../../types/config';

// 图标映射
const iconMap = {
    Mail,
    Phone,
    MapPin,
    Github,
    Twitter,
    Linkedin,
};

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const config: FooterConfig = getFooterConfig();

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            {/* 主要内容区域 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {config.sections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* 联系信息 */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                                联系信息
                            </h3>
                            <div className="space-y-3">
                                {config.contactInfo.map((item) => {
                                    const Icon = iconMap[item.icon as keyof typeof iconMap];
                                    return (
                                        <a
                                            key={item.text}
                                            href={item.href}
                                            className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                                        >
                                            <Icon className="w-4 h-4 mr-3" />
                                            {item.text}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                                关注我们
                            </h3>
                            <div className="flex space-x-4">
                                {config.socialLinks.map((social) => {
                                    const Icon = iconMap[social.icon as keyof typeof iconMap];
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 ${social.color}`}
                                            aria-label={social.name}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 底部版权信息 */}
            <div className="border-t border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
                            <p className="text-sm text-gray-500">
                                © {currentYear} {config.footerText.copyright}
                            </p>
                            <div className="flex items-center space-x-4 text-xs text-gray-400">
                                <span>{config.footerText.location}</span>
                                <span>•</span>
                                <span>{config.footerText.slogan}</span>
                            </div>
                        </div>

                        <div className="mt-4 md:mt-0">
                            <div className="flex items-center space-x-6 text-xs text-gray-400">
                                {config.legalLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="hover:text-gray-600 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 灵感标语 */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="text-center">
                            <p className="text-sm text-gray-500 italic">
                                "{config.footerText.quote}" — {config.footerText.quoteAuthor}
                            </p>
                            <div className="mt-2 flex items-center justify-center space-x-2 text-xs text-gray-400">
                                {config.footerText.techStack}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}; 