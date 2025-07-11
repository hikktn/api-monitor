import React from 'react';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: '产品与服务',
            links: [
                { name: 'UI/UX 设计', href: '#' },
                { name: '前端开发', href: '#' },
                { name: '品牌设计', href: '#' },
                { name: '产品策略', href: '#' },
                { name: '用户体验咨询', href: '#' }
            ]
        },
        {
            title: '资源',
            links: [
                { name: '设计博客', href: '#' },
                { name: '作品集', href: '#' },
                { name: '设计资源', href: '#' },
                { name: '开发工具', href: '#' },
                { name: '学习指南', href: '#' }
            ]
        },
        {
            title: '关于',
            links: [
                { name: '个人简介', href: '#' },
                { name: '工作经历', href: '#' },
                { name: '技能专长', href: '#' },
                { name: '合作伙伴', href: '#' },
                { name: '媒体报道', href: '#' }
            ]
        },
        {
            title: '联系方式',
            links: [
                { name: '项目咨询', href: '#' },
                { name: '技术支持', href: '#' },
                { name: '商务合作', href: '#' },
                { name: '媒体采访', href: '#' },
                { name: '演讲邀请', href: '#' }
            ]
        }
    ];

    const socialLinks = [
        { name: 'GitHub', icon: Github, href: 'https://github.com', color: 'hover:text-gray-900' },
        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-blue-400' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-600' },
        { name: 'Email', icon: Mail, href: 'mailto:hello@designer.com', color: 'hover:text-red-500' }
    ];

    const contactInfo = [
        { icon: Mail, text: 'hello@designer.com', href: 'mailto:hello@designer.com' },
        { icon: Phone, text: '+86 138 0013 8000', href: 'tel:+8613800138000' },
        { icon: MapPin, text: '上海市，中国', href: '#' }
    ];

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            {/* 主要内容区域 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {footerSections.map((section) => (
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
                                {contactInfo.map((item) => (
                                    <a
                                        key={item.text}
                                        href={item.href}
                                        className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                                    >
                                        <item.icon className="w-4 h-4 mr-3" />
                                        {item.text}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                                关注我们
                            </h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 ${social.color}`}
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
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
                                © {currentYear} Killian Designer. 保留所有权利。
                            </p>
                            <div className="flex items-center space-x-4 text-xs text-gray-400">
                                <span>设计与开发于上海</span>
                                <span>•</span>
                                <span>用心创造每一个像素</span>
                            </div>
                        </div>

                        <div className="mt-4 md:mt-0">
                            <div className="flex items-center space-x-6 text-xs text-gray-400">
                                <a href="#" className="hover:text-gray-600 transition-colors">隐私政策</a>
                                <a href="#" className="hover:text-gray-600 transition-colors">使用条款</a>
                                <a href="#" className="hover:text-gray-600 transition-colors">Cookie 政策</a>
                            </div>
                        </div>
                    </div>

                    {/* 灵感标语 */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="text-center">
                            <p className="text-sm text-gray-500 italic">
                                "设计不仅仅是外观和感觉，设计是如何工作的。" — Steve Jobs
                            </p>
                            <div className="mt-2 flex items-center justify-center space-x-2 text-xs text-gray-400">
                                <span>Made with</span>
                                <span className="text-red-500">♥</span>
                                <span>using React & TypeScript</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}; 