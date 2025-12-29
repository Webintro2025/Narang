import ContactForm from '@/components/ContactForm';
import React from 'react';

import { locations } from '../../../marketplace';

// Dynamic SEO metadata for each location page
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const normalizedSlug = decodeURIComponent(slug || '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .trim();

  const rawLocation = normalizedSlug.replace(/-/g, ' ') || 'india';
  const locationName = rawLocation
    .replace(/\b\w/g, (c) => c.toUpperCase());
    const title = `MS Bright Square Bars in ${locationName} | Narang Steel`;
    const description = `If You   Need MS Bright Square Bars in ${locationName} Call Narang Steel, Brass Pipes Suppliers in ${locationName}, Brass Hex Bar Suppliers in ${locationName}, India.`;
    const keywords = [
      `MS Bright Square Bars in ${locationName}`,
      `MS Bright Square Bar Wholesaler in ${locationName}`,
      `MS Bright Square Bar Suppliers in ${locationName}`,
      `Mild Steel Bright Bars in ${locationName}`,
      `MS Bright Hex Bar in ${locationName}`,
      `Brass Sheets Suppliers in ${locationName}`,
      `Brass Flats Suppliers in ${locationName}`,
      `Brass Hex Bar Suppliers in ${locationName}`,
      `Brass Pipes Suppliers in ${locationName}`,
      `Brass Round Bars in ${locationName}`,
      `EN1A Leaded Free Cutting Bright Bars in ${locationName}`,
      `MS Wire Coils in ${locationName}`,
      `MS Wire Rods in ${locationName}`,
      `Narang Steel in ${locationName}`
    ].join(', ');

    return {
      title,
      description,
      keywords,
      alternates: {
        canonical: `https://narangsteel.in/location/${slug}`,
      },
     
      
    };
  };


export default async function LocationPage({ params }) {
  const { slug } = await params;

  const normalizedSlug = decodeURIComponent(slug || '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .trim();

  const rawLocation = normalizedSlug.replace(/-/g, ' ') || 'india';

  const locationName = rawLocation
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="w-full ">
     



<div className="relative bg-[#3F6165] w-full h-[180px] xs:h-[220px] sm:h-[260px] md:h-[320px] lg:h-[480px] xl:h-[520px]">

  <div className="absolute inset-0 flex flex-col justify-center items-center text-center pt-10 px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10">
    <h1 className="text-white font-serif text-sm xs:text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-5xl leading-tight drop-shadow-md">
      MS Bright Square Bar Suppliers in {locationName}
    </h1>
    <p className="text-white font-medium text-[10px] xs:text-xs sm:text-sm md:text-base mt-2 sm:mt-4 max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl drop-shadow">
     Welcome To <a href="https://narangsteel.in">Narang Steel</a>, If You Are Looking For MS Bright Square Bar Suppliers in {locationName}, We Are The Best Option For You. We Manufacture Best MS Bright Square Bar Suppliers in {locationName}, Brass Sheets Suppliers in {locationName}, MS Wire Rods Suppliers in {locationName}, India.
    </p>
    <button
      className="mt-4 sm:mt-6 bg-[#F0B100] text-black text-[10px] xs:text-xs sm:text-sm md:text-base font-normal py-1.5 xs:py-2 px-4 xs:px-6 rounded-full flex items-center space-x-2 shadow"
      type="button"
    >
      <span><a href="https://narangsteel.in/contact">Contact Now</a></span>
      <i className="fas fa-arrow-right"></i>
    </button>
  </div>
</div>







<div className="bg-white px-10">
  <main className="w-full px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-10">
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
      <section className="w-full md:w-1/2 text-black">
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] font-semibold mb-3 sm:mb-4 md:mb-6 max-w-[600px]">
          MS Bright Square Bar Suppliers in {locationName} – Narang Steel
        </h2>
        <p className="mb-4 sm:mb-6 max-w-[600px] text-xs xs:text-sm sm:text-base leading-relaxed font-normal">
          Established in 2015, Narang Steel has built a strong reputation as one of the most reliable <strong>MS Bright Square Bar Suppliers in {locationName}</strong>, known for quality, precision machining, and ethical business values. Over the years, we have become a trusted partner for wholesalers, manufacturers, fabricators, and engineering companies across the nation. We combine technical expertise, advanced stock management, and customer-focused service to consistently deliver premium metal products and machining solutions that meet rigorous industry demands.

          As one of the leading <strong>MS Bright Square Bar Suppliers in {locationName}</strong>, we provide materials that are known for superior finish, dimensional accuracy, and exceptional mechanical strength. Whether the requirement is for bulk industrial consumption or regular supply, Narang Steel ensures timely delivery, competitive pricing, and unmatched customer satisfaction.
        </p>
      </section>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          alt={` MS Bright Square Bar Suppliers in ${locationName}`}
          className="object-cover rounded-lg w-full max-w-[350px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-auto shadow"
          height={500}
          src="/MS Bright Square Bar.png"
          width={500}
        />
      </div>
    </div>
  </main>
</div>



<hr />




<div className="bg-white w-full px-16 xs:px-16 sm:px-16 py-6 sm:py-10 flex flex-col md:flex-row md:space-x-10 lg:space-x-20 ">
  <div className="w-full md:w-1/2 flex flex-col justify-center">
    <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] mb-3 sm:mb-6 font-semibold">
    </h2>
      <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] mb-3 sm:mb-6 font-semibold">
        Applications of Our Products Across Industries
      </h2>
      <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-xl">
        These products are widely used across multiple industrial and manufacturing sectors due to their strength, durability, and precision-friendly properties. <strong>MS Bright Square Bar Suppliers in {locationName}</strong>, hex bars, and round bars are commonly utilized in the fabrication of machine components, fasteners, shafts, tools, automotive parts, construction fittings, and industrial structures, thanks to their smooth finish and dimensional accuracy.
        <br />
        <br />
        <a href="https://en.wikipedia.org/wiki/Bar_stock">Brass</a> products such as sheets, rounds, flats, hex bars, and pipes are extensively used in electrical components, plumbing systems, hardware manufacturing, nameplates, decorative elements, precision engineering, and CNC machining due to their corrosion resistance, excellent workability, and attractive appearance.
        <br />
        <br />
        Additionally, MS wire coils and wire rods play an important role in reinforcement, welding, fastener production, hardware manufacturing, and general fabrication applications. <strong>Brass Hexagonal Suppliers in {locationName}</strong> Together, these materials support industries like automotive, construction, electrical engineering, industrial machinery, fabrication workshops, and large-scale manufacturing units, ensuring reliable performance and long-lasting results.
      </p>
  </div>
  <div className="w-full md:w-1/3  p-4 sm:p-6 md:p-8 mt-8 md:mt-0 flex flex-col justify-center ">
    <h2 className="text-base xs:text-lg sm:text-xl mb-4 sm:mb-6 text-center font-semibold">Get A Consultation</h2>
   <ContactForm />
  </div>
</div>














<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
    Our Complete Product Range in {locationName}
  </h2>
  <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6] list-none">
    <li>
      <span className="font-bold">1. Brass Sheets Suppliers in {locationName}</span>
      <br />
      We supply high-quality brass sheets widely used in electrical components, architecture, nameplates, decorative hardware, and industrial machine parts. <strong>Brass Sheets Suppliers in {locationName}</strong> These sheets are appreciated for their corrosion resistance, easy workability, and smooth surface finish. Available in various thicknesses and sizes, our brass sheets provide the reliability needed for both precision engineering and aesthetic applications.
    </li>
  
    <li>
      <span className="font-bold">2. Brass Hexagonal Suppliers in {locationName}</span>
      <br />
      Brass hex bars are popular in industries that require superior machinability, such as precision components, valve bodies, bolts, and fittings. Their uniformity and perfect hexagonal dimensions make them ideal for high-speed machining. <strong>Brass Hexagonal Suppliers in {locationName}</strong> We supply these in multiple grades and custom sizes to suit varied industry needs.
    </li>
    <li>
      <span className="font-bold">3. Brass Pipe Suppliers in {locationName}</span>
      <br />
      Our brass pipes are known for high tensile strength, durability, and excellent corrosion resistance. They are widely used in plumbing systems, industrial piping, heat exchangers, gas lines, and architectural applications. At <strong>Brass Pipe Suppliers in {locationName}</strong> quality and performance of our pipes make Narang Steel a trusted partner across industries.
    </li>
    <li>
      <span className="font-bold">4. Brass Round Suppliers in {locationName}</span>
      <br />
      Brass round bars are widely used in CNC machining, precision components, valves, gears, and ornamental hardware. Their superior machinability, polish, and consistency help industries achieve accurate results without surface defects. <strong>Brass Round Suppliers in {locationName}</strong> As one of the known MS Bright Square Bar Suppliers in India, we ensure all products adhere to industry performance standards.
    </li>
    <li>
      <span className="font-bold">5. EN1A Leaded Free-Cutting Bright Bars Suppliers in {locationName}</span>
      <br />
      These bars are engineered to offer exceptional machining performance and smooth finish. EN1A is widely used for automatic and high-speed machining operations where excellent surface results and minimal tool wear are expected. <strong>EN1A Leaded Free-Cutting Bright Bars Suppliers in {locationName}</strong> Common applications include pins, bolts, studs, screws, and precision engineering components. Our strict quality checks ensure consistent properties in every batch.
    </li>
    <li>
      <span className="font-bold">6. Mild Steel Bright Bars Suppliers in {locationName}</span>
      <br />
      We supply MS bright bars that undergo precision drawing and processing to deliver high strength and tight dimensional tolerances.<strong>Mild Steel Bright Bars Suppliers in {locationName}</strong>. These are used in construction, machinery manufacturing, fasteners, shafting, and automotive applications. Their versatility and strength make them a preferred raw material across industries.
    </li>
    <li>
      <span className="font-bold">7. MS Bright Hex Bar Suppliers in {locationName}</span>
      <br />
      Our MS bright hex bars are widely used for fasteners, nuts, bolts, motor parts, conveyors, and general engineering components. Their perfect hexagonal profile, clean finish, and strong mechanical properties ensure hassle-free machining and high productivity. <strong>MS Bright Hex Bar Suppliers in {locationName}</strong> This complements our position as a trusted MS Bright Square Bar Suppliers in {locationName}.
    </li>
    <li>
      <span className="font-bold">8. MS Bright Square Bar Suppliers in {locationName}</span>
      <br />
      Our flagship product – MS Bright Square Bars – are manufactured for applications where high precision and superior surface finish are essential. Being one of the leading <strong>MS Bright Square Bar Suppliers in {locationName}</strong>, we supply square bars that deliver perfect dimensional accuracy, high tensile strength, smooth surface finish, uniformity across length, improved machinability, and long service life. These bars are widely used in manufacturing grills, furniture, industrial tools, construction components, machine parts, and fabrication applications. We offer MS bright square bars in multiple sizes and can supply bulk or custom orders based on requirements.
    </li>
    <li>
      <span className="font-bold">9. MS Wire Coils Suppliers in {locationName}</span>
      <br />
      Our MS wire coils are produced from high-grade mild steel and used in reinforcement, welding industry, machine components, nails, binding work, construction frameworks, and industrial fastening applications. <strong>MS Wire Coils Suppliers in {locationName}.</strong>The coils have uniform thickness, flexibility, and excellent tensile strength.
    </li>
    <li>
      <span className="font-bold">10. MS Wire Rods Suppliers in {locationName}</span>
      <br />
      MS wire rods supplied by Narang Steel are widely used for fasteners, wire drawing, hardware components, and construction materials. <strong>MS Wire Rods Suppliers in {locationName}</strong>. With controlled chemical composition and strong mechanical performance, our wire rods support demanding production environments.
    </li>
  </ul>

  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6 mt-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
  <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-blue-800 mb-2 text-center">📞 Contact Narang Steel today to discuss your material requirements, request a quote, or place an order.</h3>
<p className="text-xs xs:text-sm sm:text-base text-gray-800 mb-2 text-center">
  If you are looking for reliable <strong>MS Bright Square Bar Suppliers in {locationName}</strong> and premium metal products in {locationName}, <strong>Narang Steel</strong> is your trusted partner.
</p>
<ul className="list-disc pl-4 sm:pl-6 text-xs xs:text-sm sm:text-base text-gray-700 mb-2">
  <li>👉 <strong>Call Now:</strong> 9999601996, 9999081996</li>
  <li>👉 <strong>Email:</strong> sahilnarang111@gmail.com</li>
</ul>
  </div>
</div>

``




<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
    Why Choose Us ?
  </h2>
  <p className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]">
    Choosing the right supplier is critical for maintaining quality, reducing production costs, and ensuring a smooth supply chain. At Narang Steel <strong>MS Bright Square Bar Suppliers in {locationName}</strong>, we understand the diverse requirements of modern industries and have built our systems, quality standards, and service commitments to deliver unmatched value. Here are the key reasons why customers across India rely on us:
  </p>
  <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6] list-none">
    <li>
      <span className="font-bold">1. Proven Industry Experience</span>
      <br />
      With nearly a decade of expertise, Narang Steel has firmly established itself as a reputable supplier in the metal and machining sector. Our long-standing presence has helped us develop strong supply channels, deep product understanding, and the ability to anticipate industry challenges and deliver the right solutions.
    </li>
    <li>
      <span className="font-bold">2. Uncompromised Product Quality</span>
      <br />
      Quality is the foundation of our business. Every product—whether MS bright bars, brass materials, wire rods, or other metal products—is sourced and processed under strict quality standards. We ensure accurate dimensions, smooth surface finish, high machinability, and strong durability so that customers receive products that meet industry specifications and guarantee reliable long-term performance.
    </li>
    <li>
      <span className="font-bold">3. High-Quality Materials and Manufacturing Standards</span>
      <br />
      We source superior-grade raw materials and maintain strict quality checks at every stage. Each batch is tested for consistency in chemical composition, mechanical strength, and surface properties, ensuring dependable performance in machining, fabrication, and structural applications.
    </li>
    <li>
      <span className="font-bold">4. Wide and Diverse Product Portfolio</span>
      <br />
      One of our biggest strengths is the ability to supply a broad range of material solutions under one roof. Whether a client requires <strong>MS Bright Square Bar Suppliers in {locationName}</strong>, hex bars, brass components, lead-free machining materials, wire products, or special sizes, we ensure consistent availability and streamlined sourcing.
    </li>
    <li>
      <span className="font-bold">5. Ready Stock and Fast Delivery</span>
      <br />
      We maintain substantial inventory to ensure our customers never face delays or stock shortages. Thanks to our systematic warehousing, demand forecasting, and efficient logistics, we ensure quick dispatch, on-time deliveries, and nationwide supply coverage.
    </li>
    <li>
      <span className="font-bold">6. Competitive Pricing</span>
      <br />
      We believe that top-quality materials should not come at inflated prices. Through efficient sourcing, optimized storage, and strategic vendor partnerships, we offer highly competitive rates without compromising quality, helping our customers improve cost efficiency and profitability.
    </li>
    <li>
      <span className="font-bold">7. Customized Solutions</span>
      <br />
      Different industries require different sizes, grades, finishes, and tolerances. We understand this and provide personalized supply options, including custom cutting, specific dimensions, varied material grades, and bulk or repeat supply agreements to match exact project needs.
    </li>
    <li>
      <span className="font-bold">8. Strong Technical Knowledge</span>
      <br />
      Backed by years of hands-on experience, our team understands metals, their applications, machining standards, and industrial requirements. We support customers in selecting the right material based on application, load-bearing needs, machining standards, and environmental conditions.
    </li>
    <li>
      <span className="font-bold">9. Transparent and Professional Business Approach</span>
      <br />
      We value long-term customer relationships and operate with honesty, clarity, and reliability. <strong>MS Bright Square Bar Suppliers in {locationName}</strong> From pricing and delivery schedules to documentation and technical assistance, every interaction is handled professionally, ensuring a smooth and satisfying experience for our clients.
    </li>
    <li>
      <span className="font-bold">10. Growing Pan-India Presence</span>
      <br />
      We proudly serve industries across multiple cities and states, and our distribution is continuously expanding. Our growing network is proof of the trust we have earned in the marketplace and the consistent value we deliver to every customer.
    </li>
  </ul>
</div>

<hr />
<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-4">Conclusion:-</h2>
  <p className="text-xs xs:text-sm sm:text-base font-sans text-black leading-relaxed">
  Narang Steel continues to strengthen its position as one of the most reliable <strong>MS Bright Square Bar Suppliers in {locationName}</strong>, offering a wide range of metal products, machining solutions, and premium-quality materials that meet industry standards. Our focus on accuracy, durability, customer service, and continuous improvement makes us a preferred partner for manufacturers, fabricators, wholesalers, and engineering industries across the nation.

If you are looking for the best source of MS Bright Square Bars and premium metal stock, Narang Steel ensures unmatched performance, long-term reliability, and exceptional service.
  </p>
</div>

    </main>
  );
}