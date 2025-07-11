import { BlogPost } from '../components/blog/BlogCard';
import { DesignWork } from '../components/portfolio/DesignCard';
import { PostData } from '../components/instagram/InstagramPost';

export const blogPosts: BlogPost[] = [
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

export const designWorks: DesignWork[] = [
    {
        id: 'monopoly-game',
        title: '大富翁游戏（Monopoly）',
        description: '一个基于React和TypeScript开发的互动式大富翁游戏，采用了等距视角和流畅的动画效果，实现了经典的游戏逻辑。',
        image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop',
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

export const instagramPosts: PostData[] = [
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