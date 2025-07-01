import { useTokenBucket } from './hooks/useTokenBucket';
import { ControlPanel } from './components/ControlPanel';
import { UserSection } from './components/UserSection';
import { TokenBucket } from './components/TokenBucket';
import { ServerSection } from './components/ServerSection';
import { AnimatedBalls } from './components/AnimatedBalls';
import { StatusPanel } from './components/StatusPanel';
import { AnimationTest } from './components/AnimationTest';
import { StagewiseToolbar } from '@stagewise/toolbar-react';
import { ReactPlugin } from '@stagewise-plugins/react';

function App() {
    // Token Bucket 配置
    const config = {
        capacity: 15,        // 桶容量15个令牌
        refillRate: 1,       // 每秒1个令牌
        refillPeriod: 1000,  // 1000ms填充一次
    };

    const {
        state,
        requestBalls,
        sendRequest,
        startRefilling,
        stopRefilling,
        reset,
    } = useTokenBucket(config);

    const handlePause = () => {
        if (state.isRunning) {
            stopRefilling();
        } else {
            startRefilling();
        }
    };

    return (
        <>
            <StagewiseToolbar config={{ plugins: [ReactPlugin] }} />
            <div className="min-h-screen bg-gray-900 text-white p-8">
                <div className="max-w-6xl mx-auto">
                    {/* 标题 */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2">
                            Token Bucket Rate Limiter Simulator
                        </h1>
                        <p className="text-gray-400">
                            演示Token Bucket算法的可视化工具
                        </p>
                    </div>

                    {/* 控制面板 */}
                    <div className="mb-8">
                        <ControlPanel
                            onSendRequest={sendRequest}
                            onPause={handlePause}
                            onReset={reset}
                            isRunning={state.isRunning}
                        />
                    </div>

                    {/* 主要演示区域 */}
                    <div className="relative mb-8">
                        <div className="grid grid-cols-3 gap-8 items-center">
                            {/* 用户区域 */}
                            <UserSection className="h-48 w-32" />

                            {/* Token Bucket区域 */}
                            <TokenBucket
                                tokens={state.tokens}
                                capacity={config.capacity}
                                className="h-64"
                            />

                            {/* 服务器区域 */}
                            <ServerSection className="h-48 w-32" />
                        </div>

                        {/* 动画小球 */}
                        <AnimatedBalls balls={requestBalls} />
                    </div>

                    {/* 状态面板 */}
                    <StatusPanel state={state} />

                    {/* 动画测试区域 */}
                    <div className="mt-8">
                        <AnimationTest />
                    </div>

                    {/* 说明文档 */}
                    <div className="mt-8 card">
                        <h3 className="text-xl font-semibold mb-4 text-green-400">Token Bucket工作原理</h3>
                        <div className="space-y-2 text-gray-300">
                            <p>• <strong>令牌桶</strong>：固定容量的桶，持续以固定速率添加令牌</p>
                            <p>• <strong>请求处理</strong>：每个请求需要消耗一个令牌才能通过</p>
                            <p>• <strong>流量控制</strong>：当令牌用完时，新请求将被拒绝</p>
                            <p>• <strong>突发允许</strong>：当有足够令牌时，允许短时间的突发流量</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App; 