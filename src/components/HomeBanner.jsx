"use client";
import React, { useEffect, useState } from 'react';

const desktopBanners = [
  "/banner1.jpg",
  "/banner2.jpg",
 
];
const mobileBanners = [
  "/banner1M.jpg",
  "/banner2M.jpg",

];

const HomeBanner = () => {
  const [index, setIndex] = useState(0);
  // Detect mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        const arr = isMobile ? mobileBanners : desktopBanners;
        return (prev + 1) % arr.length;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const banners = isMobile ? mobileBanners : desktopBanners;

  return (
    <div className="relative w-full mt-16 sm:mt-24 overflow-hidden" style={{ minHeight: '220px', maxHeight: '480px', height: '40vw', maxHeight: 480 }}>
      {banners.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Banner ${i + 1}`}
          className={`object-cover w-full h-full transition-opacity duration-700 absolute top-0 left-0 ${index === i ? 'opacity-100 z-10' : 'opacity-0 z-0'} ${isMobile ? 'block sm:hidden' : 'hidden sm:block'}`}
          style={{ height: '100%', minHeight: '220px', maxHeight: '480px' }}
        />
      ))}
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {banners.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full border border-yellow-400 bg-white transition-all duration-300 ${index === i ? 'bg-yellow-400 scale-125' : 'opacity-60'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;