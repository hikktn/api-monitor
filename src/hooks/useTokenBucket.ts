    import { useState, useRef, useCallback, useEffect } from 'react';

export interface TokenBucketConfig {
    capacity: number;      // 桶容量
    refillRate: number;    // 令牌填充速率 (tokens/second)
    refillPeriod: number;  // 填充周期 (milliseconds)
}

export interface TokenBucketState {
    tokens: number;
    totalRequests: number;
    acceptedRequests: number;
    rejectedRequests: number;
    isRunning: boolean;
}

export interface RequestBall {
    id: string;
    status: 'waiting' | 'processing' | 'accepted' | 'rejected';
    timestamp: number;
    color: string;
}

export const useTokenBucket = (config: TokenBucketConfig) => {
    const [state, setState] = useState<TokenBucketState>({
        tokens: config.capacity,
        totalRequests: 0,
        acceptedRequests: 0,
        rejectedRequests: 0,
        isRunning: false,
    });

    const [requestBalls, setRequestBalls] = useState<RequestBall[]>([]);
    const intervalRef = useRef<number | null>(null);
    const requestIdCounter = useRef(0);

    // 令牌填充逻辑
    const refillTokens = useCallback(() => {
        setState(prev => ({
            ...prev,
            tokens: Math.min(prev.tokens + 1, config.capacity)
        }));
    }, [config.capacity]);

    // 开始令牌填充
    const startRefilling = useCallback(() => {
        if (intervalRef.current) return;

        setState(prev => ({ ...prev, isRunning: true }));
        intervalRef.current = window.setInterval(refillTokens, config.refillPeriod);
    }, [refillTokens, config.refillPeriod]);

    // 停止令牌填充
    const stopRefilling = useCallback(() => {
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setState(prev => ({ ...prev, isRunning: false }));
    }, []);

    // 发送请求
    const sendRequest = useCallback(() => {
        const requestId = `req-${++requestIdCounter.current}`;
        const newBall: RequestBall = {
            id: requestId,
            status: 'waiting',
            timestamp: Date.now(),
            color: '#fbbf24' // 橙色，等待状态
        };

        setRequestBalls(prev => [...prev, newBall]);

        // 简化处理：直接处理令牌逻辑
        setState(prevState => {
            const hasToken = prevState.tokens > 0;
            const newState = {
                ...prevState,
                totalRequests: prevState.totalRequests + 1,
                tokens: hasToken ? prevState.tokens - 1 : prevState.tokens,
                acceptedRequests: hasToken ? prevState.acceptedRequests + 1 : prevState.acceptedRequests,
                // 平衡机制：绿色小球增加时，红色小球减少
                rejectedRequests: hasToken
                    ? Math.max(0, prevState.rejectedRequests - 1) // 成功时减少拒绝数（不低于0）
                    : prevState.rejectedRequests + 1, // 失败时增加拒绝数
            };

            // 更新小球颜色
            setRequestBalls(prevBalls =>
                prevBalls.map(ball =>
                    ball.id === requestId
                        ? { ...ball, color: hasToken ? '#22c55e' : '#ef4444' } // 绿色通过/红色拒绝
                        : ball
                )
            );

            return newState;
        });

        // 2.5秒后移除小球（动画完成后）
        setTimeout(() => {
            setRequestBalls(prevBalls => prevBalls.filter(ball => ball.id !== requestId));
        }, 2500);
    }, []);

    // 重置状态
    const reset = useCallback(() => {
        stopRefilling();
        setState({
            tokens: config.capacity,
            totalRequests: 0,
            acceptedRequests: 0,
            rejectedRequests: 0,
            isRunning: false,
        });
        setRequestBalls([]);
    }, [config.capacity, stopRefilling]);

    // 组件卸载时清理
    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                window.clearInterval(intervalRef.current);
            }
        };
    }, []);

    // 自动开始填充
    useEffect(() => {
        startRefilling();
        return () => stopRefilling();
    }, [startRefilling, stopRefilling]);

    return {
        state,
        requestBalls,
        sendRequest,
        startRefilling,
        stopRefilling,
        reset,
    };
}; 