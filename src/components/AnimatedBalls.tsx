import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RequestBall } from '../hooks/useTokenBucket';

interface AnimatedBallsProps {
    balls: RequestBall[];
}

export const AnimatedBalls: FC<AnimatedBallsProps> = ({ balls }) => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <AnimatePresence mode="popLayout">
                {balls.map((ball) => (
                    <motion.div
                        key={ball.id}
                        className="absolute w-6 h-6 rounded-full shadow-lg border-2 border-white/20"
                        style={{
                            backgroundColor: ball.color,
                            zIndex: 10,
                            left: '0%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}
                        initial={{
                            left: '5%',
                            scale: 0.8,
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
                            transition: { duration: 0.2 }
                        }}
                        transition={{
                            duration: 2.0,
                            ease: "linear",
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}; 