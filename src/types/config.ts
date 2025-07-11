// 导航配置类型
export interface NavConfig {
    logo: {
        text: string;
        title: string;
    };
    navItems: {
        id: string;
        label: string;
        icon: string;
    }[];
}

// 页脚配置类型
export interface FooterConfig {
    sections: {
        title: string;
        links: {
            name: string;
            href: string;
        }[];
    }[];
    socialLinks: {
        name: string;
        icon: string;
        href: string;
        color: string;
    }[];
    contactInfo: {
        icon: string;
        text: string;
        href: string;
    }[];
    legalLinks: {
        name: string;
        href: string;
    }[];
    footerText: {
        copyright: string;
        location: string;
        slogan: string;
        quote: string;
        quoteAuthor: string;
        techStack: string;
    };
}

// 联系方式配置类型
export interface ContactConfig {
    title: string;
    description: string;
    contactMethods: {
        icon: string;
        title: string;
        description: string;
        value: string;
        href: string;
        color: string;
        bgColor: string;
    }[];
    workingHours: {
        day: string;
        hours: string;
    }[];
    timezone: {
        text: string;
        code: string;
    };
    responseTime: {
        title: string;
        commitments: {
            type: string;
            time: string;
            color: string;
        }[];
    };
}

// 网站基本信息配置类型
export interface SiteConfig {
    site: {
        name: string;
        description: string;
        language: string;
        baseUrl: string;
    };
    seo: {
        title: string;
        description: string;
        keywords: string[];
    };
    theme: {
        colors: {
            primary: {
                light: string;
                DEFAULT: string;
                dark: string;
            };
            secondary: {
                light: string;
                DEFAULT: string;
                dark: string;
            };
        };
        fonts: {
            sans: string;
            serif: string;
            mono: string;
        };
    };
    contact: {
        email: string;
        phone: string;
        address: string;
        social: {
            github: string;
            twitter: string;
            linkedin: string;
        };
    };
} 