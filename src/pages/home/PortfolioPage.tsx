import React from 'react';
import { DesignCard, DesignWork } from '../../components/portfolio/DesignCard';
import { designWorks } from '../../data/mockData';

interface PortfolioPageProps {
    onDesignClick: (work: DesignWork) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onDesignClick }) => {
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
                            onClick={() => onDesignClick(work)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}; 