import React, { useState, useEffect } from 'react';
import { ArrowUp, Home, Undo } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScrollToTopButtonProps {
    onNavigate: (page: string) => void;
    onGoBack: () => void;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ onNavigate, onGoBack }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
            setIsHovered(false); // Also hide menu when scrolled to top
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const goBack = () => {
        onGoBack();
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div
            className="fixed bottom-8 right-8 z-50"
            onMouseEnter={() => { if (isVisible) setIsHovered(true); }}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-col items-end space-y-2">
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col items-end space-y-2"
                        >
                            <button
                                onClick={() => onNavigate('home')}
                                className="flex items-center justify-center px-4 py-2 bg-white text-gray-700 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 text-sm font-medium"
                                aria-label="返回首页"
                            >
                                <Home className="w-4 h-4 mr-2" />
                                返回首页
                            </button>
                            <button
                                onClick={goBack}
                                className="flex items-center justify-center px-4 py-2 bg-white text-gray-700 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 text-sm font-medium"
                                aria-label="上一页"
                            >
                                <Undo className="w-4 h-4 mr-2" />
                                上一页
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isVisible && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            onClick={scrollToTop}
                            className="p-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 focus:outline-none"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className="w-6 h-6" />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}; 