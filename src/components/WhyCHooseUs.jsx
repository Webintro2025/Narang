const WhyChooseUs = () => {
  const features = [
    { id: 1, title: 'Brass Sheets', description: 'High-quality brass sheets for industrial and decorative use.', color: '#3F6165' },
    { id: 2, title: 'Brass Flat', description: 'Durable brass flat bars for construction and fabrication.', color: '#D01364' },
    { id: 3, title: 'Brass Hexagonal', description: 'Precision brass hexagonal bars for fasteners and fittings.', color: '#3F6165' },
    { id: 4, title: 'Brass Pipe', description: 'Reliable brass pipes for plumbing and engineering applications.', color: '#D01364' },
    { id: 5, title: 'Brass Round', description: 'Versatile brass round bars for machining and ornamental work.', color: '#3F6165' },
    { id: 6, title: 'EN1A Leaded Freecutting Bright Bars', description: 'Superior machinability and finish for precision components.', color: '#D01364' },
    { id: 7, title: 'Mild Steel Bright Bars', description: 'Strong and accurate mild steel bright bars for shafts and axles.', color: '#3F6165' },
    { id: 8, title: 'MS Bright Hex Bar', description: 'Uniform MS bright hex bars for fasteners and bolts.', color: '#D01364' },
    { id: 9, title: 'MS Bright Round Bars', description: 'High-strength MS bright round bars for engineering needs.', color: '#3F6165' },
    { id: 10, title: 'MS Bright Square Bar', description: 'Straight and smooth MS bright square bars for fabrication.', color: '#D01364' },
    { id: 11, title: 'MS Wire Coils', description: 'Flexible and durable MS wire coils for binding and fencing.', color: '#3F6165' },
    { id: 12, title: 'MS Wire Rods', description: 'Consistent MS wire rods for fasteners and springs.', color: '#D01364' },
  ];

  return (
    <>
  <div className="py-10 md:py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-block mb-3 sm:mb-4">
              <div className="bg-yellow-200 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 border-2 border-[#3F6165]/30">
                <span className="text-[#3F6165] font-bold text-xs sm:text-sm uppercase tracking-wide">
                  Why Choose Us
                </span>
              </div>
            </div>
            <h2 className="text-lg sm:text-2xl md:text-4xl font-black text-[#3F6165] mb-2 sm:mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Why Choose <span className="text-[#FFD600]">Narang Steel</span>?
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-[#3F6165] max-w-3xl mx-auto leading-relaxed">
              Discover what makes us the <span className="text-[#FFD600] font-semibold">preferred choice</span> for businesses seeking premium Steel solutions
            </p>
            <div className="flex justify-center items-center gap-2 mt-4 sm:mt-6">
              <div className="w-6 sm:w-8 h-0.5 bg-[#3F6165]"></div>
              <div className="w-2 h-2 bg-[#FFD600] rounded-full"></div>
              <div className="w-8 sm:w-12 h-0.5 bg-[#3F6165]"></div>
              <div className="w-2 h-2 bg-[#FFD600] rounded-full"></div>
              <div className="w-6 sm:w-8 h-0.5 bg-[#3F6165]"></div>
            </div>
          </div>
          {/* Features Grid - Mobile: 2 per row, Tablet: 2 per row, Desktop: 3 per row */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-xl border-2 border-black p-3 sm:p-6 flex flex-col items-center"
                style={{ boxShadow: '0 2px 8px 0 #e0e0e0' }}
              >
                <h4 className="text-xs sm:text-base md:text-lg font-bold text-[#3F6165] mb-1 sm:mb-2 text-center">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-[#3F6165] text-center leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-2 sm:mt-3 h-1 w-8 sm:w-12 rounded-full" style={{backgroundColor: 'black'}}></div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-yellow-100 rounded-xl p-4 sm:p-8 text-black border-2 border-[#3F6165]">
              <h3 className="text-base sm:text-2xl font-bold mb-2 sm:mb-3">Ready to Experience Excellence?</h3>
              <p className="text-xs sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust us for their packaging needs
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="https://wa.me/9999081996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#3F6165] text-yellow-300 border-2 border-[#3F6165] font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-base hover:bg-yellow-400 hover:text-black transition-colors duration-200"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:9999081996"
                  className="inline-flex items-center gap-2 border-2 border-[#3F6165] text-black font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-base hover:bg-yellow-400 hover:text-black transition-colors duration-200"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;