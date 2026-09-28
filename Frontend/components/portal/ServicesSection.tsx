"use client";

import React from "react";
import Link from "next/link";
import {
  Ticket,
  Bed,
  Sparkles,
  Utensils,
  Radio,
  Compass,
  ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: "vip-darshan",
      title: "Instant VIP Darshan",
      tag: "Sansthan Official Token",
      tagColor: "bg-amber-100 text-amber-900 border-amber-200",
      description:
        "Direct authenticated biometric queue passes. Zero wait time for senior citizens, infants, and special puja offerings with live slot status updates.",
      footerText: "From ₹200 Subsidized",
      icon: <Ticket className="w-5 h-5 text-[#C2410C]" />,
      iconBg: "bg-[#FFEDD5]",
      href: "#",
    },
    {
      id: "sanctuary-stays",
      title: "Sanctuary Stays & Ashrams",
      tag: "Verified Sansthan & Boutique",
      tagColor: "bg-blue-100 text-blue-900 border-blue-200",
      description:
        "Handpicked 5-star spiritual wellness resorts, serene Trust ashrams, and quiet heritage villas within 500 meters of temple Gate No. 2.",
      footerText: "120+ Curated Stays",
      icon: <Bed className="w-5 h-5 text-amber-800" />,
      iconBg: "bg-[#FEF9C3]",
      href: "#",
    },
    {
      id: "sai-ai",
      title: "SaiAI Trip Architect",
      tag: "Intelligent Devotee Assistant",
      tagColor: "bg-orange-100 text-orange-900 border-orange-200",
      description:
        "Generate customized 1, 2, or 3-day spiritual pilgrimage routes optimized for resting hours, elderly mobility, and children's meal breaks.",
      footerText: "Smart In-App Itinerary",
      icon: <Sparkles className="w-5 h-5 text-[#EA580C]" />,
      iconBg: "bg-[#FFEDD5]",
      href: "#",
    },
    {
      id: "prasadam",
      title: "Prasadam & Bhojanalaya",
      tag: "Asia's Largest Solar Kitchen",
      tagColor: "bg-yellow-100 text-yellow-900 border-yellow-200",
      description:
        "Reserve priority pure satvik meals at the sacred Prasadalaya, or discover traditional Maharashtrian thalis, bhakri, and fresh sugarcane nectar nearby.",
      footerText: "Sansthan Laddu Box Booking",
      icon: <Utensils className="w-5 h-5 text-amber-800" />,
      iconBg: "bg-[#FEF08A]",
      href: "#",
    },
    {
      id: "live-aarti",
      title: "360° Live Aarti Broadcast",
      tag: "24/7 Sanctum Feed",
      tagColor: "bg-red-100 text-red-900 border-red-200",
      description:
        "Experience ultra-low latency holy darshan of Shri Sai Baba's Samadhi from home, with multi-angle views and high-fidelity devotional chanting audio.",
      footerText: "Free Sacred Stream",
      icon: <Radio className="w-5 h-5 text-rose-700" />,
      iconBg: "bg-rose-100",
      href: "#",
    },
    {
      id: "excursions",
      title: "Nearby Sacred Excursions",
      tag: "Spiritual Circuit",
      tagColor: "bg-indigo-100 text-indigo-900 border-indigo-200",
      description:
        "Effortlessly book chauffeur-driven sanitized day trips to Shani Shingnapur, Trimbakeshwar Jyotirlinga, Muktidham Nashik, and Ellora Caves.",
      footerText: "Chauffeur & AC Coaches",
      icon: <Compass className="w-5 h-5 text-indigo-700" />,
      iconBg: "bg-indigo-100",
      href: "#",
    },
  ];

  return (
    <section id="services" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
        <div>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#B45309] uppercase block mb-1">
            Sacred Conveniences
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Holistic Pilgrim Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mt-1.5 leading-relaxed">
            Designed with devotion and luxury simplicity to make your Shirdi visit unhurried, peaceful, and spiritually enriching.
          </p>
        </div>

        <Link
          href="#"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A73710] hover:text-[#7C2D12] transition-colors whitespace-nowrap group"
        >
          <span>Explore All 14 Trust Facilities</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Services Grid (3x2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {services.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-[#E8B896]"
          >
            <div>
              {/* Icon & Badge */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center shadow-2xs`}
                >
                  {item.icon}
                </div>
              </div>

              {/* Tag */}
              <span
                className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-md border ${item.tagColor} mb-2 uppercase tracking-wide`}
              >
                {item.tag}
              </span>

              {/* Title & Description */}
              <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 mb-2 group-hover:text-[#A73710] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            {/* Action Footer */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 group-hover:text-[#A73710] transition-colors">
                {item.footerText}
              </span>
              <div className="w-6 h-6 rounded-full bg-slate-50 group-hover:bg-[#FDECE4] text-slate-400 group-hover:text-[#A73710] flex items-center justify-center transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
