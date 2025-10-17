
const About = () => {
  return (
  <div className="w-full px-0  ">
      {/* Technology Section */}
  <section className="flex flex-col md:flex-row flex-wrap pt-10 bg-gradient-to-br from-[#567f85] via-[#fee27a] to-[#567f85] justify-between items-center pb-10 md:pb-10 w-full px-2 sm:px-5 md:px-12 text-white">
        <div className="flex-1 min-w-[220px] max-w-[700px] px-0 text-white">
          <h2 className="italic font-bold text-lg sm:text-xl md:text-3xl underline mb-3 sm:mb-5">
            <em>
              <u>ABOUT US...</u>
            </em>
          </h2>
         
          <div className="mb-7">
            <h2 className="text-base sm:text-lg md:text-2xl font-bold text-[#FDC700] mb-1 sm:mb-2">About Us – Narang Steel</h2>
            <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
              Established in the year 2015, Narang Steel has emerged as a trusted name in the field of wholesale trading and service solutions. With a strong foundation built on quality, precision, and customer satisfaction, we have established ourselves as a reliable partner for a wide range of metal products and machining services.
            </p>
            <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
              We specialize in trading and supplying premium-quality products such as MS Bars, Mild Steel Wire, Precision Turned Components, Brass Sheets, Brass Flats, Brass Hexagonal, Brass Pipes, Brass Rounds, EN1A Leaded Freecutting Bright Bars, Mild Steel Bright Bars, MS Bright Hex Bars, MS Bright Round Bars, MS Bright Square Bars, MS Wire Coils, and MS Wire Rods. Each product is sourced and delivered with strict quality assurance to meet industry standards.
            </p>
            
            <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed">
              With years of experience, commitment to excellence, and a customer-centric approach, we continue to expand our reach and provide durable, cost-effective, and high-performance solutions. At Narang Steel, we believe in building long-term relationships by delivering value, reliability, and trust.
            </p>
          </div>
          <button
            className="bg-[#3F6165] text-yellow-300 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium min-w-[140px] sm:min-w-[180px] hover:bg-yellow-400 hover:text-black transition-colors"
            type="button"
          >
          Read More...
          </button>
        </div>
        <div className="flex-1 min-w-[180px] max-w-[700px] px-0 mt-6 md:mt-0 flex justify-center md:justify-end w-full">
          <img
            src="/Brass sheets.jpg"
            alt="Large industrial packaging machine with white and blue parts on a light gradient background"
            className="w-[90vw] max-w-[350px] sm:max-w-[400px] md:max-w-full h-auto object-contain rounded-lg shadow-md"
            width={350}
            height={200}
          />
        </div>
      </section>

      {/* Sustainability Section */}
  <section className="flex flex-col-reverse md:flex-row flex-wrap justify-between items-center pb-10 pd:mb-10 w-full px-2 sm:px-5 md:px-12 bg-gradient-to-br from-[#fee27a] via-[#567f85] to-[#fee27a] rounded-xl py-6 sm:py-8 text-white">
        <div className="flex-1 min-w-[120px] max-w-[400px] px-0 mt-6 md:mt-0 flex justify-center md:justify-start w-full">
          <img
            src="/brassflat.jpg"
            alt="Hands holding small green plant seedling with soil and blurred green background"
            className="w-[80vw] max-w-[300px] sm:max-w-[350px] md:max-w-full object-contain rounded-lg shadow-md mx-auto"
            width={300}
            height={150}
          />
        </div>
        <div className="flex-1 min-w-[220px] max-w-[700px] px-0 text-center md:text-left text-white">
          <h2 className="italic font-bold text-lg sm:text-xl md:text-3xl underline mb-3 sm:mb-5">
            <em>
              <u>SUSTAINABILITY</u>
            </em>
          </h2>
          <div className="mb-5 sm:mb-7">
            <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
              At Narang Steel, we are dedicated to delivering not just products, but complete solutions that empower industries to achieve greater efficiency and reliability. Our commitment to quality, innovation, and customer satisfaction drives us to continuously improve and expand our offerings.
            </p>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#FDC700] mb-1 sm:mb-2 mt-3 sm:mt-4">Our Product Range</h3>
            <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
              We offer a comprehensive range of metal products including Brass Sheets, Brass Flats, Brass Hexagonal, Brass Pipes, Brass Rounds, EN1A Leaded Freecutting Bright Bars, Mild Steel Bright Bars, MS Bright Hex Bars, MS Bright Round Bars, MS Bright Square Bars, MS Wire Coils, and MS Wire Rods. Each product is carefully sourced and inspected to ensure it meets the highest standards of quality and performance.
            </p>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#FDC700] mb-1 sm:mb-2 mt-3 sm:mt-4">Industries We Serve</h3>
            <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed">
              Our products and services cater to a diverse range of industries including automotive, construction, electrical, manufacturing, and engineering. Our adaptability and focus on customer needs make Narang Steel a preferred partner for businesses seeking reliable and high-performance metal solutions.
            </p>
          </div>
          <button
            className="bg-[#3F6165] text-yellow-300 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium min-w-[140px] sm:min-w-[180px] hover:bg-yellow-400 hover:text-black transition-colors"
            type="button"
          >
            Learn About Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;