import { FaCogs, FaUsers, FaGraduationCap } from "react-icons/fa";

const Counters = () => {
  return (
    <section
      className="flex flex-wrap justify-around items-center py-10 px-5 text-center bg-yellow-50 text-black"
      role="region"
      aria-label="Company statistics"
    >
      <div className="flex-1 min-w-[200px] max-w-xs m-5 border-2 border-[#3F6165] rounded-xl bg-yellow-200">
        <FaCogs className="text-4xl mb-4 mx-auto text-[#3F6165]" aria-hidden="true" />
        <div className="text-5xl font-bold mb-2 text-black" aria-label="4700 products manufactured">4700</div>
        <div className="text-lg tracking-wide leading-snug text-black">Products Manufactured with 100% dedication</div>
      </div>
      <div className="flex-1 min-w-[200px] max-w-xs m-5 border-2 border-[#3F6165] rounded-xl bg-yellow-200">
        <FaUsers className="text-4xl mb-4 mx-auto text-[#3F6165]" aria-hidden="true" />
        <div className="text-5xl font-bold mb-2 text-black" aria-label="38 creative team members">38</div>
        <div className="text-lg tracking-wide leading-snug text-black">Creative Team Members</div>
      </div>
      <div className="flex-1 min-w-[200px] max-w-xs m-5 border-2 border-[#3F6165] rounded-xl bg-yellow-200">
        <FaGraduationCap className="text-4xl mb-4 mx-auto text-[#3F6165]" aria-hidden="true" />
        <div className="text-5xl font-bold mb-2 text-black" aria-label="8 years of experience">8</div>
        <div className="text-lg tracking-wide leading-snug text-black">Experience</div>
      </div>
    </section>
  );
};

export default Counters;