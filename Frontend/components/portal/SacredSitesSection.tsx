"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function SacredSitesSection() {
  const sites = [
    {
      id: "dwarkamai",
      title: "Dwarkamai Masjid",
      badge: "Eternal Dhuni",
      badgeColor: "bg-orange-500/90 text-white",
      image: "/dwarkamai.jpg",
      description:
        "The rustic mosque where Baba resided for over 60 years. Here the eternal sacred flame (Dhuni Maa) burns uninterrupted since Baba's era.",
    },
    {
      id: "samadhi-mandir",
      title: "Shri Samadhi Mandir",
      badge: "Main Sanctum",
      badgeColor: "bg-amber-500/90 text-white",
      image: "/samadhi-mandir.jpg",
      description:
        "The resting place of Sai Baba's mortal body, constructed with Italian marble and gold spire. The epicentre of global devotion and daily Aartis.",
    },
    {
      id: "chavadi",
      title: "Chavadi Sanctuary",
      badge: "Palkhi Tradition",
      badgeColor: "bg-[#B45309]/90 text-white",
      image: "/chavadi.jpg",
      description:
        "Where Baba spent alternate nights during the final decade of his life. Venue of the famous Thursday Palkhi procession with wooden heritage decor.",
    },
    {
      id: "lendi-baug",
      title: "Lendi Baug & Nanda Deep",
      badge: "Sacred Gardens",
      badgeColor: "bg-emerald-700/90 text-white",
      image: "/lendi-baug.jpg",
      description:
        "The serene botanical garden nurtured by Baba's own hands. Features the ceaseless Nanda Deep oil lamp encased in glass and marble.",
    },
  ];

  return (
    <section
      id="sacred-sites"
      className="w-full bg-[#F6F8FB] border-y border-slate-200/80 py-14 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#B45309] uppercase block mb-1">
            Sanctum Chronology
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Sacred Sites of Grace &amp; Miracle
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
            Step into the authentic places where Sai Baba walked, meditated, and poured boundless compassion upon visiting pilgrims.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {sites.map((site) => (
            <div
              key={site.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={site.image}
                  alt={site.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-[9px] font-bold px-2.5 py-1 rounded-full shadow-md backdrop-blur-xs flex items-center gap-1 ${site.badgeColor}`}
                  >
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>{site.badge}</span>
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-serif font-bold text-slate-900 group-hover:text-[#A73710] transition-colors mb-1.5">
                    {site.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {site.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
