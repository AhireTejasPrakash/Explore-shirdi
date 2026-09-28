import React from "react";
import { Metadata } from "next";
import PortalHeader from "@/components/portal/PortalHeader";
import PortalFooter from "@/components/portal/PortalFooter";
import { Utensils, Clock, ArrowRight, ShieldCheck, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Prasadam & Dining - Explore Shirdi",
  description: "Book authentic satvik Prasadam, sacred Sansthan Bhojanalaya meals and traditional Maharashtrian dining near Shirdi temple.",
};

const diningOptions = [
  {
    id: "sansthan-prasadalaya",
    title: "Shri Sai Baba Sansthan Prasadalaya",
    category: "Official Sansthan Kitchen",
    categoryColor: "bg-amber-100 text-amber-900 border-amber-200",
    description: "Asia's largest solar-powered community kitchen serving over 50,000 pilgrims daily. Pure satvik meals at zero cost for general devotees. Book a sponsored meal tray for merit.",
    price: "Free / Donation",
    timings: "6:00 AM – 10:00 PM",
    serves: "50,000+ daily",
    highlight: true,
    tags: ["Satvik Only", "Solar Powered", "Sansthan Certified"],
  },
  {
    id: "prasad-laddu",
    title: "Sansthan Sacred Laddu Prasad",
    category: "Temple Prasad Counter",
    categoryColor: "bg-orange-100 text-orange-900 border-orange-200",
    description: "Book the official Sai Baba laddu prasad in advance. Available in 250g, 500g and 1kg boxes with Sansthan seal. Home delivery pan-India.",
    price: "₹55 – ₹220 / box",
    timings: "7:00 AM – 9:00 PM",
    serves: "Available at Gate 2",
    highlight: false,
    tags: ["Pre-Order Available", "Home Delivery", "Official Seal"],
  },
  {
    id: "maharashtrian-thali",
    title: "Gupte's Maharashtrian Bhojanalaya",
    category: "Traditional Dining",
    categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
    description: "Authentic Maharashtrian thali with jowar bhakri, zunka, pithla, and fresh sugarcane juice. Located 200m from Dwarkamai. Family-run since 1965.",
    price: "₹120 / thali",
    timings: "11:00 AM – 3:00 PM, 7:00 PM – 10:00 PM",
    serves: "300 covers daily",
    highlight: false,
    tags: ["No Onion No Garlic", "Traditional Recipe", "Family Run"],
  },
  {
    id: "sai-veg-restaurant",
    title: "Sai Arogya Pure Veg Restaurant",
    category: "Premium Satvik Dining",
    categoryColor: "bg-blue-100 text-blue-900 border-blue-200",
    description: "Upscale satvik multi-cuisine restaurant with South Indian, Gujarati and North Indian options. Air-conditioned, ideal for family pilgrimages.",
    price: "₹200 – ₹600",
    timings: "7:00 AM – 11:00 PM",
    serves: "A/C Seating for 120",
    highlight: false,
    tags: ["AC Restaurant", "Multi-Cuisine", "Family Friendly"],
  },
];

export default function DiningPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
      <PortalHeader />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Page Header */}
        <div className="mb-10">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#B45309] uppercase block mb-1">
            <Utensils className="w-3.5 h-3.5 inline mr-1 text-[#C2410C]" />
            Sacred Nourishment
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-2">
            Prasadam &amp; Dining
          </h1>
          <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
            From the sacred Sansthan community kitchen to traditional Maharashtrian thalis — savour pure satvik nourishment on your Shirdi pilgrimage.
          </p>
        </div>

        {/* Dining Cards */}
        <div className="flex flex-col gap-5 sm:gap-6">
          {diningOptions.map((option) => (
            <div
              key={option.id}
              className={`bg-white rounded-2xl border shadow-xs hover:shadow-md transition-all duration-300 p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-5 ${
                option.highlight ? "border-[#C2410C]/30 bg-[#FEF9EE]" : "border-slate-200/80"
              }`}
            >
              {/* Icon Block */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${option.highlight ? "bg-[#FFEDD5]" : "bg-slate-50 border border-slate-200"}`}>
                {option.highlight ? (
                  <Utensils className="w-6 h-6 text-[#C2410C]" />
                ) : (
                  <Leaf className="w-6 h-6 text-emerald-600" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-start gap-2 mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${option.categoryColor}`}>
                    {option.category}
                  </span>
                  {option.highlight && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#A73710] text-white">
                      ⭐ Most Recommended
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-serif font-bold text-slate-900 mb-1.5">{option.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{option.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {option.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-[10px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-lg">
                      <ShieldCheck className="w-2.5 h-2.5 text-emerald-600" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Row */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#A73710]" />
                    {option.timings}
                  </span>
                  <span className="flex items-center gap-1">
                    <Utensils className="w-3.5 h-3.5 text-slate-400" />
                    {option.serves}
                  </span>
                  <span className="font-bold text-[#A73710] text-sm ml-auto">
                    {option.price}
                  </span>
                  <button className="flex items-center gap-1 font-bold text-[#A73710] hover:underline">
                    Book Slot <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <PortalFooter />
    </div>
  );
}
