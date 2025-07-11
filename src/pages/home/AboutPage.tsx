import React from 'react';
import siteData from '../../data/siteData.json';

export const AboutPage: React.FC = () => {
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
}; 