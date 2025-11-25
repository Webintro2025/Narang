"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Thank you for your inquiry! We will contact you soon.");
        setFormData({ fullName: "", phoneNumber: "", email: "", message: "" });
      } else {
        setError("Failed to send your inquiry. Please try again later.");
      }
    } catch (err) {
      setError("Failed to send your inquiry. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Get A Free Consultation Form"
      className="relative z-10 bg-white/95 text-[#3F6165] rounded-3xl p-4 sm:p-6 md:p-8 mt-8 md:mt-12 lg:mt-0 lg:ml-8 md:ml-6 w-full max-w-md shadow-lg border border-white/60"
    >
      <h2 className="text-center text-base sm:text-lg mb-4 sm:mb-6 font-serif text-[#3F6165]">
        Send Your Enquiry
      </h2>
      <input
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
        className="w-full mb-3 sm:mb-4 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-[#3F6165]/60 text-xs sm:text-sm md:text-base text-[#3F6165] placeholder-[#3F6165]/60 focus:outline-none focus:ring-2 focus:ring-[#fee27a]"
        placeholder="Full Name"
        type="text"
        required
      />
      <input
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        className="w-full mb-3 sm:mb-4 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-[#3F6165]/60 text-xs sm:text-sm md:text-base text-[#3F6165] placeholder-[#3F6165]/60 focus:outline-none focus:ring-2 focus:ring-[#fee27a]"
        placeholder="Phone Number"
        type="tel"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className="w-full mb-3 sm:mb-4 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-[#3F6165]/60 text-xs sm:text-sm md:text-base text-[#3F6165] placeholder-[#3F6165]/60 focus:outline-none focus:ring-2 focus:ring-[#fee27a]"
        placeholder="sahilnarang111@gmail.com"
        type="email"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        className="w-full mb-4 sm:mb-6 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-[#3F6165]/60 text-xs sm:text-sm md:text-base text-[#3F6165] placeholder-[#3F6165]/60 resize-none focus:outline-none focus:ring-2 focus:ring-[#fee27a]"
        placeholder="Your Message"
        rows="4"
      />
      <button
        className="w-full bg-[#3F6165] hover:bg-yellow-400 text-white hover:text-black font-bold py-2.5 sm:py-3 rounded-full text-xs sm:text-base disabled:opacity-60"
        type="submit"
        disabled={loading}
      >
        {loading ? "Sending..." : "Get A Quote"}
      </button>
      {success && (
        <p className="text-green-600 text-center mt-3 sm:mt-4 text-xs sm:text-base">{success}</p>
      )}
      {error && (
        <p className="text-red-600 text-center mt-3 sm:mt-4 text-xs sm:text-base">{error}</p>
      )}
    </form>
  );
};

export default ContactForm;
