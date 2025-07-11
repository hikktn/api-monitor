import { useState } from 'react';
import { StagewiseToolbar } from '@stagewise/toolbar-react';
import { ReactPlugin } from '@stagewise-plugins/react';
import { AppleNavbar } from './components/navigation/AppleNavbar';
import { HeroSection } from './components/common/HeroSection';
import { BlogPost } from './components/blog/BlogCard';
import { DesignWork } from './components/portfolio/DesignCard';
import { ScrollToTopButton } from './components/common/ScrollToTopButton';
import MonopolyGame from './features/monopoly-game/components/MonopolyGame';
import { BlogPage, PortfolioPage, InstagramPage, AboutPage, ContactPage } from './pages';

type Page =
    | 'Home'
    | 'Blog'
    | 'Portfolio'
    | 'Instagram'
    | 'About'
    | 'Contact'
    | 'Monopoly Game';

const pageMap: { [key: string]: Page } = {
    home: 'Home',
    blog: 'Blog',
    portfolio: 'Portfolio',
    instagram: 'Instagram',
    about: 'About',
    contact: 'Contact',
    'monopoly game': 'Monopoly Game',
};

function App() {
    const [activePage, setActivePage] = useState<Page>('Home');
    const [pageHistory, setPageHistory] = useState<Page[]>(['Home']);

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
                return <BlogPage onBlogClick={handleBlogClick} />;
            case 'Portfolio':
                return <PortfolioPage onDesignClick={handleDesignClick} />;
            case 'Instagram':
                return <InstagramPage onNavigate={handleNavigate} />;
            case 'About':
                return <AboutPage />;
            case 'Contact':
                return <ContactPage />;
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