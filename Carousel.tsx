'use client';
import React, { useState } from 'react';

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=meeting%20scene%20in%20industrial%20company%2C%20Chinese%20business%20leaders%20discussing%20in%20conference%20room%2C%20professional%20setting&image_size=landscape_16_9",
      title: "丰都县委书记张继军一行到丰都水泥、丰都新材料调研"
    },
    {
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=leadership%20inspection%20in%20factory%2C%20Chinese%20officials%20visiting%20industrial%20facility%2C%20wearing%20safety%20helmets&image_size=landscape_16_9",
      title: "集团领导到基层单位视察指导工作"
    },
    {
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=construction%20site%20of%20industrial%20plant%2C%20modern%20factory%20under%20construction%2C%20Chinese%20industrial%20development&image_size=landscape_16_9",
      title: "新项目工地建设进展顺利"
    }
  ];

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* 左侧轮播图 */}
          <div className="w-full md:w-2/3">
            <div className="relative overflow-hidden rounded-lg h-64 md:h-80">
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-lg font-medium">{slides[currentSlide].title}</h3>
              </div>
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {slides.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 右侧安全生产天数统计 */}
          <div className="w-full md:w-1/3 bg-gray-50 rounded-lg p-4">
            <div className="border-b border-gray-200 pb-2 mb-4">
              <h3 className="text-lg font-medium">安全工时(天)</h3>
              <p className="text-sm text-gray-600">热烈祝贺"准电、灵电"单位无损安全工时，突破一百万</p>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>台重工</span>
                  <span>1033(68天)</span>
                </div>
                <div className="progress-bar w-full"></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>准电</span>
                  <span>492(33天)</span>
                </div>
                <div className="progress-bar w-3/4"></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>万化</span>
                  <span>249.1(1328天)</span>
                </div>
                <div className="progress-bar w-1/2"></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>铝业</span>
                  <span>412(72天)</span>
                </div>
                <div className="progress-bar w-2/3"></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>煤化</span>
                  <span>217.7(54天)</span>
                </div>
                <div className="progress-bar w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;