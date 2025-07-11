import React from 'react';
import { ContactSection } from '../components/common/ContactSection';

export const ContactPage: React.FC = () => {
    return (
        <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        联系我
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        让我们一起创造令人惊叹的数字体验
                    </p>
                </div>
                <ContactSection />
            </div>
        </div>
    );
}; 