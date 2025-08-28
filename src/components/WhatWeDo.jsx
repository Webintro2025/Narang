"use client";
import React, { useState } from 'react';

const WhatWeDo = () => {
  const services = [
    {
      id: 1,
      title: 'Brass Sheets',
      description: 'Our Brass Sheets are manufactured with precision and care, offering excellent corrosion resistance, malleability, and a smooth finish. Ideal for a wide range of industrial and decorative applications, these sheets are available in various thicknesses and sizes to meet your specific requirements. Whether you need material for architectural projects, electrical components, or artistic creations, our brass sheets deliver unmatched quality and durability.'
    },
    {
      id: 2,
      title: 'Brass Flat',
      description: 'Brass Flat bars are known for their versatility and strength. Perfect for use in construction, fabrication, and engineering, our brass flats provide a reliable solution for structural frameworks, brackets, and supports. Their excellent machinability and attractive appearance make them a preferred choice for both functional and decorative purposes.'
    },
    {
      id: 3,
      title: 'Brass Hexagonal',
      description: 'Our Brass Hexagonal bars are crafted to precise dimensions, making them ideal for use in fasteners, valves, and fittings. The unique hex shape ensures easy handling and secure installation in mechanical assemblies. With superior resistance to wear and corrosion, these bars are suitable for demanding industrial environments.'
    },
    {
      id: 4,
      title: 'Brass Pipe',
      description: 'Brass Pipes from our collection are designed for efficient fluid transfer and long-lasting performance. Commonly used in plumbing, heating, and cooling systems, these pipes offer excellent thermal conductivity and resistance to dezincification. Their smooth interior surface ensures minimal friction and optimal flow.'
    },
    {
      id: 5,
      title: 'Brass Round',
      description: 'Our Brass Round bars are highly sought after for their strength, ductility, and ease of machining. Suitable for a variety of applications including gears, bearings, and ornamental work, these round bars maintain their integrity even under high-stress conditions. Their golden sheen adds a touch of elegance to any project.'
    },
    {
      id: 6,
      title: 'EN1A Leaded Freecutting Bright Bars',
      description: 'EN1A Leaded Freecutting Bright Bars are engineered for superior machinability and surface finish. Widely used in the manufacture of precision components, these bars are perfect for high-speed turning and intricate detailing. Their consistent quality ensures reliable performance in automotive, electrical, and general engineering sectors.'
    },
    {
      id: 7,
      title: 'Mild Steel Bright Bars',
      description: 'Our Mild Steel Bright Bars are produced using advanced cold drawing techniques, resulting in a smooth surface and tight dimensional tolerances. These bars are ideal for use in shafts, axles, and mechanical parts where strength and accuracy are paramount. Their versatility makes them a staple in manufacturing and construction.'
    },
    {
      id: 8,
      title: 'MS Bright Hex Bar',
      description: 'MS Bright Hex Bars combine the strength of mild steel with the convenience of a hexagonal profile. Commonly used in the production of fasteners, nuts, and bolts, these bars offer excellent machinability and uniformity. Their bright finish enhances both appearance and corrosion resistance.'
    },
    {
      id: 9,
      title: 'MS Bright Round Bars',
      description: 'MS Bright Round Bars are manufactured to deliver high strength and a flawless finish. Suitable for a wide range of engineering applications, these bars are used in the production of machine parts, tools, and automotive components. Their consistent quality ensures dependable performance every time.'
    },
    {
      id: 10,
      title: 'MS Bright Square Bar',
      description: 'Our MS Bright Square Bars are valued for their strength, straightness, and smooth surface. These bars are ideal for fabrication, construction, and general engineering purposes. Their square profile allows for easy welding and assembly in structural frameworks.'
    },
    {
      id: 11,
      title: 'MS Wire Coils',
      description: 'MS Wire Coils are produced from high-quality mild steel, offering flexibility, strength, and durability. Used extensively in binding, fencing, and reinforcement, these coils are available in various gauges to suit different industrial needs. Their uniformity and resilience make them a reliable choice for demanding applications.'
    },
    {
      id: 12,
      title: 'MS Wire Rods',
      description: 'Our MS Wire Rods are manufactured to meet stringent quality standards, ensuring excellent tensile strength and ductility. These rods are widely used in the production of fasteners, springs, and wire products. Their consistent diameter and surface finish make them suitable for further processing and fabrication.'
    }
  ];

  return (
  <div className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#3F6165] mb-1 sm:mb-2">What We Do</h2>
          <p className="text-xs sm:text-base md:text-lg text-[#3F6165] w-full mx-auto">
            At Narang Steel, we specialize in providing a wide range of premium metal products and machining solutions tailored for various industries. Our products are crafted to deliver precision, quality, and performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg border-2 border-black p-3 sm:p-4"
              style={{ boxShadow: '0 2px 8px 0 #e0e0e0' }}
            >
              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-[#3F6165] mb-1 sm:mb-2">
                {service.title}
              </h3>
              {/* Description */}
              <div className="text-[#3F6165] leading-relaxed">
                <p className="mb-1 sm:mb-2 text-xs sm:text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6 sm:mt-8">
          <div className="w-full bg-gradient-to-r from-[#3F6165] via-yellow-200 to-[#3F6165] rounded-lg shadow-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-2xl font-bold text-black mb-2 sm:mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-xs sm:text-base text-black mb-3 sm:mb-4">
              Contact us today to discuss your packaging needs. We're here to help you find the perfect solution for your business.
            </p>
            <button className="bg-[#3F6165] text-yellow-300 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-base border-2 border-[#3F6165] hover:bg-yellow-400 hover:text-black transition-colors duration-200">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
