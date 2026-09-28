import React from "react";
import { Metadata } from "next";
import PortalHeader from "@/components/portal/PortalHeader";
import PortalFooter from "@/components/portal/PortalFooter";
import Image from "next/image";
import { MapPin, Star, Clock, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Discover & Attractions - Explore Shirdi",
  description: "Explore sacred sites, pilgrimage spots and divine attractions around Shirdi.",
};

const attractions = [
  {
    id: "samadhi-mandir",
    title: "Shri Samadhi Mandir",
    category: "Main Sanctum",
    categoryColor: "bg-amber-100 text-amber-900 border-amber-200",
    image: "/samadhi-mandir.jpg",
    distance: "0 km (Sanctum)",
    rating: "4.9",
    duration: "1–2 hrs",
    description: "The divine resting place of Shri Sai Baba, adorned with Italian marble, gold spire and daily sacred Aartis. The heartbeat of all pilgrimages to Shirdi.",
  },
  {
    id: "dwarkamai",
    title: "Dwarkamai Masjid",
    category: "Eternal Dhuni",
    categoryColor: "bg-orange-100 text-orange-900 border-orange-200",
    image: "/dwarkamai.jpg",
    distance: "0.2 km",
    rating: "4.8",
    duration: "30–45 mins",
    description: "The rustic mosque where Baba lived for over 60 years. The eternal Dhuni Maa flame has burned without interruption since Baba's era.",
  },
  {
    id: "chavadi",
    title: "Chavadi Sanctuary",
    category: "Palkhi Tradition",
    categoryColor: "bg-amber-100 text-amber-800 border-amber-200",
    image: "/chavadi.jpg",
    distance: "0.3 km",
    rating: "4.7",
    duration: "20–30 mins",
    description: "Where Baba spent alternate nights during the last decade of his life. Famous for the historic Thursday Palkhi procession with wooden decor.",
  },
  {
    id: "lendi-baug",
    title: "Lendi Baug & Nanda Deep",
    category: "Sacred Gardens",
    categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
    image: "/lendi-baug.jpg",
    distance: "0.4 km",
    rating: "4.6",
    duration: "45–60 mins",
    description: "The serene botanical garden tended by Baba's own hands. Features the ceaseless Nanda Deep oil lamp encased in glass and marble platform.",
  },
  {
    id: "shani-shingnapur",
    title: "Shani Shingnapur",
    category: "Sacred Circuit",
    categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-200",
    image: "/shirdi-sanctum.jpg",
    distance: "65 km",
    rating: "4.7",
    duration: "Half Day Trip",
    description: "Ancient Shani temple village — famously a village without doors. An essential pilgrimage extension from Shirdi by AC coach.",
  },
  {
    id: "trimbakeshwar",
    title: "Trimbakeshwar Jyotirlinga",
    category: "Sacred Circuit",
    categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-200",
    image: "/shirdi-sanctum.jpg",
    distance: "160 km",
    rating: "4.8",
    duration: "Full Day Trip",
    description: "One of the 12 Jyotirlingas of India, situated near the source of the Godavari river, surrounded by the Brahmagiri hills.",
  },
];

export default function AttractionsPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
      <PortalHeader />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Page Header */}
        <div className="mb-10">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#B45309] uppercase block mb-1">
            <Sparkles className="w-3.5 h-3.5 inline mr-1 text-[#C2410C]" />
            Sanctum Chronology
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-2">
            Discover &amp; Attractions
          </h1>
          <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
            Step into the authentic sacred places where Sai Baba walked, meditated, and poured boundless compassion upon visiting pilgrims.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {attractions.map((site) => (
            <div key={site.id} className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={site.image}
                  alt={site.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border shadow-sm ${site.categoryColor}`}>
                    {site.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-[#A73710] transition-colors mb-1.5">
                    {site.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {site.description}
                  </p>
                </div>

                {/* Meta Row */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#A73710]" />
                    {site.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    {site.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {site.duration}
                  </span>
                  <button className="flex items-center gap-0.5 text-[#A73710] font-bold hover:underline">
                    View <ArrowRight className="w-3 h-3" />
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
