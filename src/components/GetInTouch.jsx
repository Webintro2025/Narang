"use client";
import { useState } from 'react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess('Thank you for your inquiry! We will contact you soon.');
        setFormData({ fullName: '', phoneNumber: '', email: '', message: '' });
      } else {
        setError('Failed to send your inquiry. Please try again later.');
      }
    } catch (err) {
      setError('Failed to send your inquiry. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-center px-2 sm:px-6 md:px-10 pt-8 md:pt-14 lg:pb-0.5 md:pb-1.5 pb-3.5 bg-white relative overflow-hidden">
      <div className="relative max-w-xl md:max-w-lg lg:max-w-xl z-10 w-full">
        <h1 className="text-lg sm:text-xl md:text-2xl font-serif mb-4 md:mb-6 leading-snug">
          <span className="text-[#3F6165]">
            Narang Steel
          </span>
          <span className="text-[#3F6165]">
            - Premium Steel Solutions
          </span>
        </h1>
        <div className="mt-6 md:mt-12 space-y-4 md:space-y-6 max-w-xl">
          <div className="bg-yellow-100 p-3 sm:p-4 md:p-6 rounded-2xl border-l-4 border-[#3F6165] shadow-lg">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#3F6165] rounded-full flex items-center justify-center">
                {/* Location icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-4.556 0-8.25 3.694-8.25 8.25 0 5.25 7.5 11.25 7.5 11.25s7.5-6 7.5-11.25c0-4.556-3.694-8.25-8.25-8.25zm0 10.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#3F6165] font-semibold text-xs sm:text-sm mb-0.5">Our Location</h3>
                <p className="text-[#3F6165] text-xs sm:text-sm leading-relaxed">
                  Ground Floor, Wz-18, Khyala Village, Khayala Village, New Delhi-110018, Delhi, India
                </p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-100 p-3 sm:p-4 md:p-6 rounded-2xl border-l-4 border-[#3F6165] shadow-lg">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#3F6165] rounded-full flex items-center justify-center">
                {/* Phone icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75v2.25a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 008.25 4.5h-1.5A2.25 2.25 0 004.5 6.75zm0 0v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75m-19.5 0A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#3F6165] font-semibold text-xs sm:text-sm mb-0.5">Mobile Number</h3>
                <a href="tel:9999081996" className="text-[#3F6165] text-xs sm:text-sm font-medium">
                  9999081996
                </a>
              </div>
            </div>
          </div>
          <div className="bg-yellow-100 p-3 sm:p-4 md:p-6 rounded-2xl border-l-4 border-[#3F6165] shadow-lg">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#3F6165] rounded-full flex items-center justify-center">
                {/* GST icon (use a document icon) */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25A2.25 2.25 0 009 7.5h6a2.25 2.25 0 002.25-2.25V3m-10.5 0A2.25 2.25 0 016.75 3h10.5A2.25 2.25 0 0120 5.25v13.5A2.25 2.25 0 0117.25 21H6.75A2.25 2.25 0 014.5 18.75V5.25A2.25 2.25 0 016.75 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#3F6165] font-semibold text-xs sm:text-sm mb-0.5">GST Number</h3>
                <span className="text-[#3F6165] text-xs sm:text-sm font-medium">07AKKPN9650P1Z8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form 
        onSubmit={handleSubmit}
        aria-label="Get A Free Consultation Form" 
  className="relative z-10 bg-yellow-100 rounded-3xl p-4 sm:p-6 md:p-8 mt-8 md:mt-12 lg:mt-0 lg:ml-8 md:ml-6 w-full max-w-md shadow-lg border border-[#3F6165]"
      >
        <h2 className="text-center text-base sm:text-lg mb-4 sm:mb-6 font-serif text-black">
          Send Your Enquiry
        </h2>
        <input 
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="w-full mb-3 sm:mb-4 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-[#3F6165] text-xs sm:text-sm md:text-base text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-400" 
          placeholder="Full Name" 
          type="text"
          required
        />
        <input 
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className="w-full mb-3 sm:mb-4 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-[#3F6165] text-xs sm:text-sm md:text-base text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-400" 
          placeholder="Phone Number" 
          type="tel"
          required
        />
        <input 
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full mb-3 sm:mb-4 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-[#3F6165] text-xs sm:text-sm md:text-base text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-400" 
          placeholder="sahilnarang111@gmail.com" 
          type="email"
          required
        />
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full mb-4 sm:mb-6 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-[#3F6165] text-xs sm:text-sm md:text-base text-black placeholder-black resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400" 
          placeholder="Your Message" 
          rows="4"
        />
        <button 
          className="w-full bg-[#3F6165] hover:bg-yellow-400 text-black font-bold py-2.5 sm:py-3 rounded-full text-xs sm:text-base disabled:opacity-60" 
          type="submit"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Get A Quote'}
        </button>
        {success && <p className="text-green-600 text-center mt-3 sm:mt-4 text-xs sm:text-base">{success}</p>}
        {error && <p className="text-red-600 text-center mt-3 sm:mt-4 text-xs sm:text-base">{error}</p>}
      </form>
    </div>
  );
};

export default GetInTouch;