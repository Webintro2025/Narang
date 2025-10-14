'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Maps = () => {
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const mapInstance = useRef(null);

  // New address coordinates for: Ground Floor, Wz-18, Khyala Village, Khayala Village, New Delhi-110018, Delhi, India
  const destinationLatLng = [28.65681, 77.0991];
  const destinationAddress = 'Ground Floor, Wz-18, Khyala Village, Khayala Village, New Delhi-110018, Delhi, India';
    
  

  useEffect(() => {
    // Load Leaflet CSS
    const leafletCSS = document.createElement('link');
    leafletCSS.rel = 'stylesheet';
    leafletCSS.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
    document.head.appendChild(leafletCSS);

    // Load Leaflet JS
    const leafletScript = document.createElement('script');
    leafletScript.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
    leafletScript.async = true;

    leafletScript.onload = () => {
      if (window.L && mapRef.current && !mapInstance.current) {
        const L = window.L;

        const map = L.map(mapRef.current).setView(destinationLatLng, 13);
        mapInstance.current = map;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        const destMarker = L.marker(destinationLatLng).addTo(map);
        destMarker.bindPopup(destinationAddress).openPopup();

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setUserLocation([latitude, longitude]);

              L.marker([latitude, longitude])
                .addTo(map)
                .bindPopup('You are here');
            },
            (error) => {
              console.warn('Geolocation error:', error);
            },
            { enableHighAccuracy: true }
          );
        }
      }
    };

    document.body.appendChild(leafletScript);

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
      document.head.removeChild(leafletCSS);
      document.body.removeChild(leafletScript);
    };
  }, []);

  const handleGetDirections = () => {
    let url = `https://www.google.com/maps/dir/?api=1&destination=${destinationLatLng.join(',')}`;
    if (userLocation) {
      url += `&origin=${userLocation.join(',')}`;
    }
    window.open(url, '_blank');
  };

  return (
    <motion.div
      className="w-full mb-1.5 bg-green-50"
      style={{ minHeight: 400 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="mb-2 text-center font-semibold text-[#3F6165] text-xs sm:text-base md:text-lg"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut', delay: 0.05 } }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Destination: {destinationAddress}
      </motion.div>
      <motion.div
        ref={mapRef}
        style={{
          width: '100%',
          height: 400,
          borderRadius: 12,
          overflow: 'hidden',
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'easeOut', delay: 0.08 } }}
        viewport={{ once: true, amount: 0.25 }}
      />
      <div className="text-center mt-4">
        <motion.button
          onClick={handleGetDirections}
          className="bg-[#3F6165] hover:bg-yellow-400 text-white hover:text-black px-4 py-2 rounded shadow text-xs sm:text-base"
          whileTap={{ scale: 0.95 }}
          whileHover={{ y: -2 }}
        >
          Get Directions
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Maps;
