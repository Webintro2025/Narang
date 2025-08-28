"use client";
import { bagsContent } from "@/content";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import GetInTouch from "@/components/GetInTouch";
import Maps from "@/components/Maps";


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
      <div className=" flex flex-col items-center justify-center bg-yellow-50">
        <h1 className="text-3xl font-bold text-[#3F6165] mb-4 animate-bounce">Product Not Found</h1>
        <Link href="/" className="text-yellow-500 underline hover:text-yellow-700 transition">Go Home</Link>
      </div>
    );
  }
  return (
    <>
    <div className="w-full bg-white py-6 sm:py-8 md:py-10 px-0 mt-20 sm:mt-24 animate-fade-in">
      <div className="w-full px-2 sm:px-4 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-extrabold text-[#3F6165] mb-3 sm:mb-4 text-center animate-slide-in tracking-tight leading-tight drop-shadow-lg">{product.title}</h1>
        <p className="text-sm sm:text-base md:text-xl text-black mb-5 sm:mb-8 text-center w-full animate-fade-in delay-100 leading-relaxed">{product.description}</p>
        <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
          <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 md:gap-8">
            <div className="flex-1 flex justify-center mb-3 md:mb-0">
              <img src={product.image} alt={product.title + ' image'} className="w-[70vw] max-w-[220px] sm:max-w-[320px] md:w-[500px] md:h-[500px] md:max-w-none md:max-h-none h-auto object-contain rounded-2xl bg-white" />
            </div>
            <div className="flex-1 bg-yellow-50 rounded-xl p-3 sm:p-6 shadow-sm animate-fade-in flex flex-col min-h-[180px] sm:min-h-[220px] md:min-h-[260px]">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#3F6165] mb-1 sm:mb-2 border-b-2 border-yellow-300 pb-1">Key Features</h2>
              <ul className="list-disc pl-4 sm:pl-5 text-black space-y-1 flex-1 text-xs sm:text-sm md:text-base">
                {product.features?.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#3F6165] mt-4 mb-1 sm:mb-2 border-b-2 border-yellow-300 pb-1">Technical Specifications</h2>
              <ul className="list-disc pl-4 sm:pl-5 text-black space-y-1 flex-1 text-xs sm:text-sm md:text-base">
                {product.technicalSpecifications?.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-14 flex justify-center">
          <Link href="/contact" className="bg-[#3F6165] text-yellow-300 px-6 sm:px-10 py-2 sm:py-4 rounded-full font-bold text-base sm:text-xl shadow-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 animate-bounce ring-2 ring-[#3F6165] hover:ring-yellow-400">Enquire Now</Link>
        </div>
      </div>
    </div>
    <GetInTouch/>
    <Maps/>
    </>
  );
}