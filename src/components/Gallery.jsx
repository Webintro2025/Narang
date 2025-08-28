
"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const images = [
  { src: '/Brass sheets.jpg', alt: 'Brass Sheets', slug: 'brass-sheets', title: 'Brass Sheets' },
  { src: '/brassflat.jpg', alt: 'Brass Flat', slug: 'brass-flat', title: 'Brass Flat' },
  { src: '/brasshexagonal.jpg', alt: 'Brass Hexagonal', slug: 'brass-hexagonal', title: 'Brass Hexagonal' },
  { src: '/brasspipe.png', alt: 'Brass Pipe', slug: 'brass-pipe', title: 'Brass Pipe' },
  { src: '/Brass Round.png', alt: 'Brass Round', slug: 'brass-round', title: 'Brass Round' },
  { src: '/EN1A Leaded Freecutting bright bars.jpg', alt: 'EN1A Leaded Freecutting Bright Bars', slug: 'en1a-leaded-freecutting-bright-bars', title: 'EN1A Leaded Freecutting Bright Bars' },
  
  { src: '/Mild steel bright bars.jpg', alt: 'Mild Steel Bright Bars', slug: 'mild-steel-bright-bars', title: 'Mild Steel Bright Bars' },
  { src: '/Ms bright hex bar.jpg', alt: 'MS Bright Hex Bar', slug: 'ms-bright-hex-bar', title: 'MS Bright Hex Bar' },
  { src: '/Ms Bright Round Bars.png', alt: 'MS Bright Round Bars', slug: 'ms-bright-round-bars', title: 'MS Bright Round Bars' },
  { src: '/Ms Bright Square Bar.png', alt: 'MS Bright Square Bar', slug: 'ms-bright-square-bar', title: 'MS Bright Square Bar' },
  { src: '/Ms Wire Coils.png', alt: 'MS Wire Coils', slug: 'ms-wire-coils', title: 'MS Wire Coils' },
{ src: '/Ms wire rods.png', alt: 'MS Wire Rods', slug: 'ms-wire-rods', title: 'MS Wire Rods' },
];

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(images);
  const router = useRouter();

  useEffect(() => {
    const updateImages = () => {
      if (window.innerWidth >= 1024) {
        setVisibleImages(images);
      } else {
        setVisibleImages(images.slice(0, images.length - 1));
      }
    };
    updateImages();
    window.addEventListener('resize', updateImages);
    return () => window.removeEventListener('resize', updateImages);
  }, []);

  return (
    <div className="bg-yellow-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-[#3F6165] text-center mb-10 tracking-wide">Our Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {visibleImages.map((img, idx) => (
          <div
            key={idx}
            className="bg-yellow-200 rounded-lg shadow-md overflow-hidden flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg border-2 border-[#3F6165] focus:outline-none cursor-pointer"
            tabIndex={0}
            onClick={() => img.slug && router.push(`/products/${img.slug}`)}
            onKeyDown={e => {
              if (e.key === 'Enter' && img.slug) router.push(`/products/${img.slug}`);
            }}
            role="button"
            aria-label={`Go to ${img.alt} page`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full object-contain bg-yellow-50"
            />
            <div className="py-2 text-black font-semibold text-sm text-center w-full border-t border-[#3F6165] bg-yellow-300">
              {img.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;