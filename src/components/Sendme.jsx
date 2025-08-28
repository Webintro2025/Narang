
'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

const Sendme = () => {
  const pathname = usePathname();
  const handleScrollToEnquiry = () => {
    let el = document.getElementById('get-in-touch-section');
    if (!el) {
      // fallback: try to scroll to the first form on the page
      el = document.querySelector('form');
    }
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      console.log('No enquiry section or form found to scroll to.');
    }
  };
  if (pathname === '/about') return null;
  return (
    <button
      onClick={handleScrollToEnquiry}
      aria-label="Send Me Enquiry"
      className="fixed bottom-20 right-5 z-50 bg-[#3F6165] hover:bg-yellow-400 text-black rounded-full shadow-lg p-2 sm:p-3 flex items-center justify-center transition-colors"
      style={{ zIndex: 9999 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-7 sm:h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.38V6.62a2 2 0 00-2.7-1.87l-12.5 5.38a2 2 0 000 3.74l12.5 5.38A2 2 0 0021 17.38v-5.76z" />
      </svg>
    </button>
  );
};

export default Sendme;
