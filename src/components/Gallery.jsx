
"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.26, ease: 'easeOut' } },
};

const images = [
  { src: '/Brass sheets.jpg', alt: 'Brass Sheets', slug: 'brass-sheets', title: 'Brass Sheets' },
  { src: '/brassflat.jpg', alt: 'Brass Flat', slug: 'brass-flat', title: 'Brass Flat' },
  { src: '/brasshexagonal.jpg', alt: 'Brass Hexagonal', slug: 'brass-hexagonal', title: 'Brass Hexagonal' },
  { src: '/brasspipe.png', alt: 'Brass Pipe', slug: 'brass-pipe', title: 'Brass Pipe' },
  { src: '/Brass Round.png', alt: 'Brass Round', slug: 'brass-round', title: 'Brass Round' },
  { src: '/EN1A Leaded Freecutting bright bars.jpg', alt: 'EN1A Leaded Freecutting Bright Bars', slug: 'en1a-leaded-freecutting-bright-bars', title: 'EN1A Leaded Freecutting Bright Bars' },
  
  { src: '/Mild steel bright bars.jpg', alt: 'Mild Steel Bright Bars', slug: 'mild-steel-bright-bars', title: 'Mild Steel Bright Bars' },
  { src: '/Ms bright hex bar.jpg', alt: 'MS Bright Hex Bar', slug: 'ms-bright-hex-bar', title: 'MS Bright Hex Bar' },
  { src: '/MS Bright Round Bars.png', alt: 'MS Bright Round Bars', slug: 'ms-bright-round-bars', title: 'MS Bright Round Bars' },
  { src: '/MS Bright Square Bar.png', alt: 'MS Bright Square Bar', slug: 'ms-bright-square-bar', title: 'MS Bright Square Bar' },
  { src: '/MS Wire Coils.png', alt: 'MS Wire Coils', slug: 'ms-wire-coils', title: 'MS Wire Coils' },
{ src: '/Ms wire rods.png', alt: 'MS Wire Rods', slug: 'ms-wire-rods', title: 'MS Wire Rods' },
];

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(images);
  const router = useRouter();

  useEffect(() => {
    const updateImages = () => {
      setVisibleImages(images);
    };
    updateImages();
    window.addEventListener('resize', updateImages);
    return () => window.removeEventListener('resize', updateImages);
  }, []);

  return (
    <motion.section
      className="bg-yellow-50 py-10 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionVariants}
    >
      <motion.h2
        className="text-3xl font-bold text-[#3F6165] text-center mb-10 tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }}
        viewport={{ once: true, amount: 0.35 }}
      >
        Our Gallery
      </motion.h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        variants={gridVariants}
      >
        {visibleImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="bg-yellow-200 rounded-lg shadow-md overflow-hidden flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg border-2 border-[#3F6165] focus:outline-none cursor-pointer"
            tabIndex={0}
            onClick={() => img.slug && router.push(`/products/${img.slug}`)}
            onKeyDown={e => {
              if (e.key === 'Enter' && img.slug) router.push(`/products/${img.slug}`);
            }}
            role="button"
            aria-label={`Go to ${img.alt} page`}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.img
              src={img.src}
              alt={img.alt}
              className="w-full object-contain bg-yellow-50"
              initial={{ scale: 1.02 }}
              whileInView={{ scale: 1, transition: { duration: 0.34, ease: 'easeOut' } }}
              viewport={{ once: true, amount: 0.4 }}
            />
            <motion.div
              className="py-2 text-black font-semibold text-sm text-center w-full border-t border-[#3F6165] bg-yellow-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.18, ease: 'easeOut', delay: 0.05 } }}
              viewport={{ once: true, amount: 0.4 }}
            >
              {img.alt}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Gallery;