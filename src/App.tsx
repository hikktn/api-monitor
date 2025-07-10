import React, { useState } from 'react';
import { StagewiseToolbar } from '@stagewise/toolbar-react';
import { ReactPlugin } from '@stagewise-plugins/react';
import { AppleNavbar } from './components/navigation/AppleNavbar';
import { HeroSection } from './components/common/HeroSection';
import { BlogCard, BlogPost } from './components/blog/BlogCard';
import { DesignCard, DesignWork } from './components/portfolio/DesignCard';
import { InstagramPost, PostData } from './components/instagram/InstagramPost';
import { StoryData } from './components/instagram/InstagramStory';
import siteData from './data/siteData.json';
import { Mail, MessageSquare, Twitter, ArrowLeft } from 'lucide-react';
import { ScrollToTopButton } from './components/common/ScrollToTopButton';
import MonopolyGame from './features/monopoly-game/components/MonopolyGame';

type Page =
    | 'Home'
    | 'Blog'
    | 'Portfolio'
    | 'Instagram'
    | 'About'
    | 'Contact'
    | 'Monopoly Game'; // Add new page type

const pageMap: { [key: string]: Page } = {
    home: 'Home',
    blog: 'Blog',
    portfolio: 'Portfolio',
    instagram: 'Instagram',
    about: 'About',
    contact: 'Contact',
    'monopoly game': 'Monopoly Game',
};

const contactIcons: { [key: string]: React.ReactNode } = {
    Mail: <Mail className="w-5 h-5 text-blue-500" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-green-500" />,
    Twitter: <Twitter className="w-5 h-5 text-purple-500" />
};

function App() {
    const [activePage, setActivePage] = useState<Page>('Home');
    const [pageHistory, setPageHistory] = useState<Page[]>(['Home']);

    // Sample blog posts data
    const blogPosts: BlogPost[] = [
        {
            id: '1',
            title: '2024年UI设计趋势：从扁平到新拟物化的回归',
            excerpt: '探索最新的UI设计趋势，了解如何在现代产品中平衡美观与功能性。从色彩搭配到交互设计，一起看看今年最值得关注的设计方向。',
            coverImage: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
            publishDate: '2024年1月15日',
            readTime: '8分钟阅读',
            tags: ['UI设计', '趋势', '新拟物化'],
            author: {
                name: 'Killian Designer',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
            }
        },
        {
            id: '2',
            title: 'React + TypeScript 最佳实践：构建可维护的前端应用',
            excerpt: '分享在实际项目中使用React和TypeScript的经验，包括组件设计模式、状态管理、性能优化等关键技术点。',
            coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
            publishDate: '2024年1月10日',
            readTime: '12分钟阅读',
            tags: ['React', 'TypeScript', '前端开发'],
            author: {
                name: 'Killian Designer',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
            }
        },
        {
            id: '3',
            title: 'Figma到代码：设计师与开发者的协作新模式',
            excerpt: '如何通过Figma建立高效的设计开发流程，减少沟通成本，提升产品质量。分享实用的工具和方法论。',
            coverImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
            publishDate: '2024年1月5日',
            readTime: '10分钟阅读',
            tags: ['Figma', '协作', '工作流'],
            author: {
                name: 'Killian Designer',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
            }
        }
    ];

    // Sample design works data
    const designWorks: DesignWork[] = [
        {
            id: 'monopoly-game',
            title: '大富翁游戏（Monopoly）',
            description: '一个基于React和TypeScript开发的互动式大富翁游戏，采用了等距视角和流畅的动画效果，实现了经典的游戏逻辑。',
            image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop', // A placeholder image of a board game
            category: 'Web 应用',
            tools: ['React', 'TypeScript', 'Zustand', 'Framer Motion'],
            likes: 500,
            views: 3250,
            projectUrl: '#monopoly-game',
            createdDate: '2024年7月'
        },
        {
            id: '1',
            title: 'Instagram UI Kit 重设计',
            description: '重新设计Instagram的用户界面，注重现代化的视觉体验和更直观的用户交互。采用新的配色方案和组件系统。',
            image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop',
            category: 'UI设计',
            tools: ['Figma', 'Sketch', 'Principle', 'Adobe XD'],
            likes: 234,
            views: 1520,
            projectUrl: '#instagram',
            createdDate: '2024年1月'
        },
        {
            id: '2',
            title: '电商平台移动端设计',
            description: '为新兴电商平台设计的移动端应用界面，专注于提升用户购物体验和转化率。包含完整的购物流程设计。',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
            category: '移动设计',
            tools: ['Figma', 'Protopie', 'After Effects'],
            likes: 189,
            views: 987,
            createdDate: '2023年12月'
        },
        {
            id: '3',
            title: '企业级仪表板界面',
            description: '为B2B企业设计的数据仪表板，通过清晰的信息架构和可视化设计帮助用户快速理解复杂数据。',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
            category: '仪表板',
            tools: ['Figma', 'D3.js', 'Chart.js'],
            likes: 156,
            views: 743,
            createdDate: '2023年11月'
        },
        {
            id: '4',
            title: '品牌视觉识别系统',
            description: '为科技初创公司设计的完整品牌识别系统，包括Logo、配色、字体和应用规范。',
            image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop',
            category: '品牌设计',
            tools: ['Illustrator', 'Photoshop', 'InDesign'],
            likes: 298,
            views: 1456,
            createdDate: '2023年10月'
        }
    ];

    // Sample Instagram posts data
    const instagramPosts: PostData[] = [
        {
            id: '1',
            user: {
                username: 'john_designer',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
                isVerified: true
            },
            images: [
                'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=600&fit=crop',
                'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=600&fit=crop'
            ],
            likes: 1234,
            caption: '🎨 正在重新设计Instagram的用户界面！新的设计更加注重用户体验和视觉层次。你们觉得怎么样？ #UIDesign #Instagram #DesignChallenge',
            comments: [
                { username: 'design_lover', text: '太棒了！新的布局看起来更清爽' },
                { username: 'frontend_dev', text: '能分享一下设计思路吗？' },
                { username: 'ui_inspiration', text: '配色方案很棒！' }
            ],
            timestamp: '2小时前',
            location: '上海，中国'
        },
        {
            id: '2',
            user: {
                username: 'john_designer',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
                isVerified: true
            },
            images: [
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop'
            ],
            likes: 856,
            caption: '📊 企业级仪表板设计完成！通过数据可视化帮助用户更好地理解业务指标。设计的核心是简化复杂性。',
            comments: [
                { username: 'data_analyst', text: '这个仪表板看起来很专业' },
                { username: 'product_manager', text: '我们公司需要这样的设计！' }
            ],
            timestamp: '1天前'
        }
    ];

    const handleNavigate = (pageId: string) => {
        const normalizedPageId = pageId.toLowerCase();
        const targetPage = pageMap[normalizedPageId];

        if (targetPage && targetPage !== activePage) {
            setPageHistory(prevHistory => [...prevHistory, targetPage]);
            setActivePage(targetPage);
        } else if (!targetPage) {
            console.warn(`Invalid page navigation attempt: ${pageId}`);
        }
    };

    const handleGoBack = () => {
        if (pageHistory.length > 1) {
            const newHistory = [...pageHistory];
            newHistory.pop();
            const previousPage = newHistory[newHistory.length - 1];
            setPageHistory(newHistory);
            setActivePage(previousPage);
        }
    };

    const handleBlogClick = (post: BlogPost) => {
        console.log('Opening blog post:', post.title);
        // 这里可以实现博客详情页面
    };

    const handleDesignClick = (work: DesignWork) => {
        if (work.projectUrl === '#instagram') {
            handleNavigate('Instagram');
        } else if (work.projectUrl === '#monopoly-game') {
            handleNavigate('Monopoly Game');
        } else {
            console.log('Opening design work:', work.title);
            // 这里可以实现作品详情页面
        }
    };

    const renderContent = () => {
        switch (activePage) {
            case 'Home':
                return <HeroSection onNavigate={handleNavigate} />;

            case 'Blog':
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
                                        onClick={() => handleBlogClick(post)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 'Portfolio':
                return (
                    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                    设计作品集
                                </h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    精选的设计项目，展示创意与技术的完美结合
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {designWorks.map((work) => (
                                    <DesignCard
                                        key={work.id}
                                        work={work}
                                        onClick={() => handleDesignClick(work)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 'Instagram':
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
                                    onClick={() => handleNavigate('Portfolio')}
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

            case 'About':
                return (
                    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                    {siteData.aboutPage.title}
                                </h1>
                                <p className="text-xl text-gray-600">
                                    {siteData.aboutPage.subtitle}
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <img
                                            src={siteData.aboutPage.imageUrl}
                                            alt="John Designer"
                                            className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                            {siteData.aboutPage.greeting}
                                        </h2>
                                        <div className="space-y-4 text-gray-600 leading-relaxed">
                                            {siteData.aboutPage.paragraphs.map((text, index) => (
                                                <p key={index}>{text}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'Contact':
                return (
                    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                    联系我
                                </h1>
                                <p className="text-xl text-gray-600">
                                    让我们一起创造些什么吧
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                            开始对话
                                        </h2>
                                        <div className="space-y-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    姓名
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="你的姓名"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    邮箱
                                                </label>
                                                <input
                                                    type="email"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    消息
                                                </label>
                                                <textarea
                                                    rows={4}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="告诉我你的项目想法..."
                                                />
                                            </div>
                                            <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                                                发送消息
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-6">
                                            其他联系方式
                                        </h3>
                                        <div className="space-y-4">
                                            {siteData.contactInfo.map((contact) => (
                                                <div key={contact.type} className="flex items-center space-x-3">
                                                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                                        {contactIcons[contact.icon]}
                                                    </div>
                                                    <span className="text-gray-600">
                                                        {contact.type === 'wechat' ? `微信: ${contact.value}` : contact.value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'Monopoly Game':
                return <MonopolyGame />;

            default:
                return null;
        }
    };

    return (
        <>
            <StagewiseToolbar config={{ plugins: [ReactPlugin] }} />
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <AppleNavbar currentPage={activePage} onNavigate={handleNavigate} />
                <main className="pt-16">
                    {renderContent()}
                </main>
                <ScrollToTopButton onNavigate={handleNavigate} onGoBack={handleGoBack} />
            </div>
        </>
    );
}

export default App; 