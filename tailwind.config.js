/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'bounce-slow': 'bounce 2s infinite',
                'pulse-slow': 'pulse 3s infinite',
            },
            colors: {
                'token-green': '#22c55e',
                'token-blue': '#3b82f6',
                'token-red': '#ef4444',
            }
        },
    },
    plugins: [],
} 