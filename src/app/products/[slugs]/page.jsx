"use client";
import { bagsContent } from "@/content";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import GetInTouch from "@/components/GetInTouch";
import Maps from "@/components/Maps";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.32, ease: "easeOut", delay: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.32, ease: "easeOut", delay: 0.08 } },
};


function slugify(title) {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function ProductPage() {
  const { slugs } = useParams();
  const product = bagsContent.find(
    (item) => slugify(item.title) === slugs
  );
  if (!product) {
    return (
      <div className=" flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-gray-100 via-yellow-100 to-emerald-100">
        <h1 className="text-3xl font-bold text-[#3F6165] mb-4 animate-bounce">Product Not Found</h1>
        <Link href="/" className="text-yellow-500 underline hover:text-yellow-700 transition">Go Home</Link>
      </div>
    );
  }
  return (
    <>
    <motion.section
      className="w-full bg-gradient-to-br from-gray-100 via-yellow-50 to-emerald-100 py-6 sm:py-8 md:py-10 px-0 mt-20 sm:mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="w-full px-2 sm:px-4 md:px-8">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-6xl font-extrabold text-[#3F6165] mb-3 sm:mb-4 text-center tracking-tight leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut", delay: 0.05 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {product.title}
        </motion.h1>
        <motion.p
          className="text-sm sm:text-base md:text-xl text-black mb-5 sm:mb-8 text-center w-full leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.32, ease: "easeOut", delay: 0.08 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {product.description}
        </motion.p>
        <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
          <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 md:gap-8">
            <motion.div
              className="flex-1 flex justify-center mb-3 md:mb-0"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              <motion.img
                src={product.image}
                alt={product.title + ' image'}
                className="w-[70vw] max-w-[220px] sm:max-w-[320px] md:w-[500px] md:h-[500px] md:max-w-none md:max-h-none h-auto object-contain rounded-2xl bg-white"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut", delay: 0.1 } }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </motion.div>
            <motion.div
              className="flex-1 bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-6 shadow-sm flex flex-col min-h-[180px] sm:min-h-[220px] md:min-h-[260px] border border-white/60"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#3F6165] mb-1 sm:mb-2 border-b-2 border-yellow-300 pb-1">Key Features</h2>
              <ul className="list-disc pl-4 sm:pl-5 text-black space-y-1 flex-1 text-xs sm:text-sm md:text-base">
                {product.features?.map((f, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut", delay: i * 0.03 } }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {f}
                  </motion.li>
                ))}
              </ul>
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#3F6165] mt-4 mb-1 sm:mb-2 border-b-2 border-yellow-300 pb-1">Technical Specifications</h2>
              <ul className="list-disc pl-4 sm:pl-5 text-black space-y-1 flex-1 text-xs sm:text-sm md:text-base">
                {product.technicalSpecifications?.map((s, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut", delay: i * 0.03 } }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {s}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="mt-8 sm:mt-14 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut", delay: 0.05 } }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="/contact" className="bg-[#3F6165] text-yellow-300 px-6 sm:px-10 py-2 sm:py-4 rounded-full font-bold text-base sm:text-xl shadow-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 ring-2 ring-[#3F6165] hover:ring-yellow-400">
              Enquire Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
    <GetInTouch/>
    <Maps/>
    </>
  );
}