
import About from '../../components/About';
import WhatWeDo from '../../components/WhatWeDo';
import WhyChooseUs from '../../components/WhyCHooseUs';

const AboutPage = () => {
  return (
    <main className="min-h-screen mt-20 bg-yellow-50">
      <div className="py-12 text-center bg-gradient-to-r from-[#3F6165] via-yellow-300 to-[#3F6165]">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#3F6165]" style={{fontFamily: 'Montserrat, sans-serif'}}>
          About Us
        </h1>
      </div>
    
        <About />
  
        <WhatWeDo />
       
        <WhyChooseUs />
     
    </main> 
  );
};

export default AboutPage;
