import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* 左侧 Logo */}
          <div className="flex items-center">
            <div className="text-east-hope-red font-bold text-xl flex items-center">
              <span className="mr-2">🎯</span>
              东方希望 EAST HOPE
            </div>
          </div>

          {/* 中间导航菜单 */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-east-hope-red font-medium border-b-2 border-east-hope-red py-5">信息门户</a>
            <a href="#" className="text-gray-600 hover:text-east-hope-red py-5">工作台</a>
            <a href="#" className="text-gray-600 hover:text-east-hope-red py-5">数据门户</a>
            <a href="#" className="text-gray-600 hover:text-east-hope-red py-5">智能服务</a>
            <a href="#" className="text-gray-600 hover:text-east-hope-red py-5">业务谱</a>
            <a href="#" className="text-gray-600 hover:text-east-hope-red py-5">后台管理</a>
          </nav>

          {/* 右侧用户信息 */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-east-hope-red">
              <span className="sr-only">下载</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            <button className="text-gray-600 hover:text-east-hope-red relative">
              <span className="sr-only">消息</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <button className="text-gray-600 hover:text-east-hope-red">
              <span className="sr-only">应用</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Q</span>
              </div>
              <span className="text-gray-600 text-sm">qiuq039</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;