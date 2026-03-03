'use client';
import React, { useState } from 'react';

const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('group');

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* 左侧主要区域 */}
        <div className="w-full md:w-2/3 space-y-6">
          {/* 集团新闻 */}
          <div className="bg-white rounded-lg shadow-sm p-4 card-hover">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">集团新闻</h3>
              <a href="#" className="text-sm text-gray-500 hover:text-east-hope-red">更多 &gt;</a>
            </div>
            <div className="space-y-2">
              <div className="news-item">
                <span>集团党委召开2026年工作会议，部署全年重点工作任务</span>
                <div className="flex items-center space-x-2">
                  <span className="new-badge">NEW</span>
                  <span className="text-xs text-gray-500">2026-03-03</span>
                </div>
              </div>
              <div className="news-item">
                <span>东方希望集团入选2026年中国企业500强</span>
                <div className="flex items-center space-x-2">
                  <span className="new-badge">NEW</span>
                  <span className="text-xs text-gray-500">2026-03-02</span>
                </div>
              </div>
              <div className="news-item">
                <span>集团领导到基层单位调研指导工作</span>
                <div className="flex items-center space-x-2">
                  <span className="new-badge">NEW</span>
                  <span className="text-xs text-gray-500">2026-03-01</span>
                </div>
              </div>
              <div className="news-item">
                <span>集团举办2026年安全生产培训会议</span>
                <div className="flex items-center space-x-2">
                  <span className="new-badge">NEW</span>
                  <span className="text-xs text-gray-500">2026-02-29</span>
                </div>
              </div>
              <div className="news-item">
                <span>东方希望集团与某大型企业签署战略合作协议</span>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">2026-02-28</span>
                </div>
              </div>
            </div>
          </div>

          {/* 公告区域 */}
          <div className="bg-white rounded-lg shadow-sm p-4 card-hover">
            <div className="border-b border-gray-200 mb-4">
              <div className="flex space-x-6">
                <button 
                  className={`py-2 px-1 ${activeTab === 'group' ? 'tab-active' : 'text-gray-600 hover:text-east-hope-red'}`}
                  onClick={() => setActiveTab('group')}
                >
                  集团公告
                </button>
                <button 
                  className={`py-2 px-1 ${activeTab === 'unit' ? 'tab-active' : 'text-gray-600 hover:text-east-hope-red'}`}
                  onClick={() => setActiveTab('unit')}
                >
                  单位公告
                </button>
                <button 
                  className={`py-2 px-1 ${activeTab === 'dept' ? 'tab-active' : 'text-gray-600 hover:text-east-hope-red'}`}
                  onClick={() => setActiveTab('dept')}
                >
                  部门公告
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="news-item">
                <span>人文-TY [2026] 90号关于开展2026年春季团建活动的通知</span>
                <div className="flex items-center space-x-2">
                  <span className="new-badge">NEW</span>
                  <span className="text-xs text-gray-500">2026-03-03</span>
                </div>
              </div>
              <div className="news-item">
                <span>行政-WL [2026] 89号关于2026年清明节放假安排的通知</span>
                <div className="flex items-center space-x-2">
                  <span className="new-badge">NEW</span>
                  <span className="text-xs text-gray-500">2026-03-02</span>
                </div>
              </div>
              <div className="news-item">
                <span>财务-SJ [2026] 88号关于2026年第一季度财务报表报送的通知</span>
                <div className="flex items-center space-x-2">
                  <span className="new-badge">NEW</span>
                  <span className="text-xs text-gray-500">2026-03-01</span>
                </div>
              </div>
              <div className="news-item">
                <span>人力-RL [2026] 87号关于2026年员工培训计划的通知</span>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">2026-02-29</span>
                </div>
              </div>
              <div className="news-item">
                <span>安全-AQ [2026] 86号关于开展安全生产大检查的通知</span>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">2026-02-28</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧栏 */}
        <div className="w-full md:w-1/3 space-y-6">
          {/* 安全文化 */}
          <div className="bg-red-50 rounded-lg shadow-sm p-4 card-hover">
            <div className="border-b border-red-100 mb-4">
              <h3 className="text-lg font-medium text-east-hope-red">安全文化</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <span className="mr-2">四、</span>
                <span>未经许可严禁动火作业</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">五、</span>
                <span>严禁酒后上岗</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">六、</span>
                <span>严禁违章指挥、违章作业</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">七、</span>
                <span>严禁超速行驶</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">八、</span>
                <span>严禁未经培训上岗</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-red-100">
              <h4 className="font-medium text-east-hope-red mb-2">集团安全原则</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <span className="mr-2">一、</span>
                  <span>安全第一，预防为主</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">二、</span>
                  <span>全员参与，综合治理</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">三、</span>
                  <span>严格管理，持续改进</span>
                </div>
              </div>
            </div>
          </div>

          {/* 集团讨论 */}
          <div className="bg-white rounded-lg shadow-sm p-4 card-hover">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">集团讨论</h3>
              <a href="#" className="text-sm text-gray-500 hover:text-east-hope-red">更多 &gt;</a>
            </div>
            <div className="space-y-3">
              <div className="border-b border-gray-100 pb-2">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>员工动员</span>
                  <span>2026/03/03</span>
                </div>
                <p className="text-sm">关于2026年第二季度工作目标的讨论</p>
              </div>
              <div className="border-b border-gray-100 pb-2">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>业务天地</span>
                  <span>2026/03/03</span>
                </div>
                <p className="text-sm">如何提高生产效率的经验分享</p>
              </div>
              <div className="border-b border-gray-100 pb-2">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>技术交流</span>
                  <span>2026/03/02</span>
                </div>
                <p className="text-sm">新型设备操作技术培训讨论</p>
              </div>
              <div className="border-b border-gray-100 pb-2">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>企业文化</span>
                  <span>2026/03/01</span>
                </div>
                <p className="text-sm">集团企业文化建设建议征集</p>
              </div>
              <div>
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>员工生活</span>
                  <span>2026/02/29</span>
                </div>
                <p className="text-sm">员工福利改善建议讨论</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;