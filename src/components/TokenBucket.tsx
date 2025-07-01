import React from 'react';
import { motion } from 'framer-motion';

interface TokenBucketProps {
    tokens: number;
    capacity: number;
    className?: string;
}

export const TokenBucket: React.FC<TokenBucketProps> = ({ tokens, capacity, className = '' }) => {
    // 创建网格布局，4x4的格子
    const gridSize = 4;
    const totalCells = gridSize * gridSize;

    // 根据令牌数量显示绿点
    const cells = Array.from({ length: totalCells }, (_, index) => {
        const isActive = index < tokens;
        return (
            <motion.div
                key={index}
                className={`w-4 h-4 rounded-full border-2 border-green-400 ${isActive ? 'bg-green-400 shadow-lg shadow-green-400/50' : 'bg-transparent'
                    }`}
                animate={{
                    scale: isActive ? [1, 1.2, 1] : 1,
                    opacity: isActive ? 1 : 0.3,
                }}
                transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                }}
            />
        );
    });

    return (
        <div className={`card flex flex-col items-center justify-center ${className}`}>
            <div className="text-lg font-semibold text-green-400 mb-4">Token Bucket</div>
            <div
                className="grid gap-2 p-4 border-2 border-green-400 rounded-lg bg-green-900/20"
                style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
            >
                {cells}
            </div>
            <div className="mt-4 text-sm text-gray-400">
                {tokens}/{capacity} tokens
            </div>
        </div>
    );
}; 