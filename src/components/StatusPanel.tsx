import React from 'react';
import { TokenBucketState } from '../hooks/useTokenBucket';

interface StatusPanelProps {
    state: TokenBucketState;
}

export const StatusPanel: React.FC<StatusPanelProps> = ({ state }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {/* 总请求数 */}
            <div className="card text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">
                    {state.totalRequests}
                </div>
                <div className="text-sm text-gray-400">Total Requests</div>
            </div>

            {/* 当前令牌数 */}
            <div className="card text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">
                    {state.tokens}
                </div>
                <div className="text-sm text-gray-400">Available Tokens</div>
            </div>

            {/* 被拒绝的请求 */}
            <div className="card text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">
                    {state.rejectedRequests}
                </div>
                <div className="text-sm text-gray-400">Rejected</div>
            </div>

            {/* 成功的请求 */}
            <div className="card text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">
                    {state.acceptedRequests}
                </div>
                <div className="text-sm text-gray-400">Accepted</div>
            </div>
        </div>
    );
}; 