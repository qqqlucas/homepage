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