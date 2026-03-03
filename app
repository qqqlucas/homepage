@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --east-hope-red: #d32f2f;
  --east-hope-red-dark: #c8102e;
  --east-hope-red-light: #e63946;
  --background-light: #f8f9fa;
  --text-primary: #333333;
  --text-secondary: #666666;
}

body {
  font-family: 'Noto Sans SC', sans-serif;
  background-color: var(--background-light);
  color: var(--text-primary);
}

/* 自定义样式 */
.new-badge {
  @apply inline-block px-1.5 py-0.5 text-xs bg-green-100 text-green-800 rounded;
}

.card-hover {
  @apply transition-all duration-300 hover:shadow-md hover:-translate-y-1;
}

.progress-bar {
  @apply h-1.5 bg-red-500 rounded-full;
}

.news-item {
  @apply flex justify-between items-center py-2 border-b border-gray-100 hover:bg-gray-50;
}

.tab-active {
  @apply border-b-2 border-east-hope-red text-east-hope-red;
}
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '东方希望集团 - 信息门户',
  description: '东方希望集团信息门户/工作台',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
import Navbar from '@/components/Navbar';
import Carousel from '@/components/Carousel';
import MainContent from '@/components/MainContent';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light">
      <Navbar />
      <Carousel />
      <MainContent />
    </div>
  );
}
