import navConfig from '../data/navConfig.json';
import footerConfig from '../data/footerConfig.json';
import contactConfig from '../data/contactConfig.json';
import siteConfig from '../data/siteConfig.json';
import type { NavConfig, FooterConfig, ContactConfig, SiteConfig } from '../types/config';

// 导航配置
export const getNavConfig = (): NavConfig => {
    return navConfig;
};

// 页脚配置
export const getFooterConfig = (): FooterConfig => {
    return footerConfig;
};

// 联系方式配置
export const getContactConfig = (): ContactConfig => {
    return contactConfig;
};

// 网站基本信息配置
export const getSiteConfig = (): SiteConfig => {
    return siteConfig;
};

// 获取所有配置
export const getAllConfig = () => {
    return {
        nav: getNavConfig(),
        footer: getFooterConfig(),
        contact: getContactConfig(),
        site: getSiteConfig(),
    };
}; 