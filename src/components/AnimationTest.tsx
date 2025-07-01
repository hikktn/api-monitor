import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TestBall {
    id: number;
    color: string;
}

export const AnimationTest: FC = () => {
    const [balls, setBalls] = useState<TestBall[]>([]);
    const [ballId, setBallId] = useState(0);

    const addBall = () => {
        const newBall: TestBall = {
            id: ballId,
            color: Math.random() > 0.5 ? '#10b981' : '#ef4444', // 绿色或红色
        };
        setBalls(prev => [...prev, newBall]);
        setBallId(prev => prev + 1);

        // 2.5秒后移除小球
        setTimeout(() => {
            setBalls(prev => prev.filter(ball => ball.id !== newBall.id));
        }, 2500);
    };

    return (
        <div className="p-8 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">动画测试</h3>
            <button
                onClick={addBall}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
            >
                发射测试小球
            </button>

            {/* 动画区域 */}
            <div className="relative h-24 bg-gray-700 rounded border-2 border-gray-600 overflow-hidden">
                {/* 起点标记 */}
                <div className="absolute left-2 top-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-y-1/2"></div>
                {/* 终点标记 */}
                <div className="absolute right-2 top-1/2 w-2 h-2 bg-red-400 rounded-full transform -translate-y-1/2"></div>

                <AnimatePresence>
                    {balls.map((ball) => (
                        <motion.div
                            key={ball.id}
                            className="absolute w-4 h-4 rounded-full border-2 border-white/30"
                            style={{
                                backgroundColor: ball.color,
                                left: '0%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}
                            initial={{
                                left: '5%',
                                scale: 0.5,
                                opacity: 0,
                            }}
                            animate={{
                                left: '95%',
                                scale: 1,
                                opacity: 1,
                            }}
                            exit={{
                                scale: 0,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 2.0,
                                ease: "linear",
                            }}
                        />
                    ))}
                </AnimatePresence>
            </div>

            <p className="text-sm text-gray-400 mt-2">
                蓝点=起点，红点=终点。小球应该从左到右直线运动2秒。
            </p>
        </div>
    );
}; 