# Token Bucket Rate Limiter Simulator

一个基于React和TypeScript的Token Bucket算法可视化演示工具，帮助理解和学习速率限制算法的工作原理。

## 功能特性

- 🎯 **可视化演示**：直观展示Token Bucket算法的工作流程
- 🎨 **动画效果**：流畅的小球动画展示请求处理过程
- 📊 **实时统计**：显示总请求数、成功请求、拒绝请求等关键指标
- 🎮 **交互控制**：支持发送请求、暂停/恢复、重置等操作
- 📱 **响应式设计**：适配不同屏幕尺寸

## 技术栈

- **React 18** - 现代化的前端框架
- **TypeScript** - 类型安全的JavaScript
- **Vite** - 快速的构建工具
- **Tailwind CSS** - 实用优先的CSS框架
- **Framer Motion** - 流畅的动画库
- **Lucide React** - 现代化的图标库

## Token Bucket算法原理

Token Bucket（令牌桶）是一种常用的速率限制算法：

1. **令牌桶**：固定容量的桶，持续以固定速率添加令牌
2. **请求处理**：每个请求需要消耗一个令牌才能通过
3. **流量控制**：当令牌用完时，新请求将被拒绝
4. **突发允许**：当有足够令牌时，允许短时间的突发流量

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
src/
├── components/          # React组件
│   ├── AnimatedBalls.tsx    # 动画小球组件
│   ├── ControlPanel.tsx     # 控制面板组件
│   ├── ServerSection.tsx    # 服务器区域组件
│   ├── StatusPanel.tsx      # 状态显示面板
│   ├── TokenBucket.tsx      # Token Bucket可视化组件
│   └── UserSection.tsx      # 用户区域组件
├── hooks/               # 自定义Hooks
│   └── useTokenBucket.ts    # Token Bucket算法逻辑
├── App.tsx             # 主应用组件
├── main.tsx            # 应用入口
└── index.css           # 全局样式
```

## 使用说明

1. **Send Request**：点击发送一个请求（显示为动画小球）
2. **Pause**：暂停/恢复令牌填充过程
3. **Reset**：重置所有状态和统计数据

小球颜色含义：

- 🟡 **橙色**：等待处理的请求
- 🟢 **绿色**：成功通过的请求
- 🔴 **红色**：被拒绝的请求

## 配置参数

在 `src/App.tsx` 中可以调整Token Bucket的配置：

```typescript
const config = {
  capacity: 15,        // 桶容量（最大令牌数）
  refillRate: 1,       // 填充速率（每秒令牌数）
  refillPeriod: 1000,  // 填充周期（毫秒）
};
```

## License

MIT
