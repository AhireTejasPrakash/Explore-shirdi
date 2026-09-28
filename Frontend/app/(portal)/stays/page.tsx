import React from "react";
import { Metadata } from "next";
import PortalHeader from "@/components/portal/PortalHeader";
import PortalFooter from "@/components/portal/PortalFooter";
import Image from "next/image";
import { Bed, Star, MapPin, ArrowRight, ShieldCheck, Wifi, Coffee, Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Luxury Stays & Ashrams - Explore Shirdi",
  description: "Handpicked hotels, boutique ashrams and luxury spiritual retreats near Shirdi Samadhi Mandir.",
};

const stays = [
  {
    id: "sai-ashram",
    title: "Shri Sai Baba Sansthan Ashram",
    type: "Sansthan Trust Accommodation",
    typeColor: "bg-amber-100 text-amber-900 border-amber-200",
    image: "/shirdi-sanctum.jpg",
    rating: "4.8",
    distance: "0.1 km from Samadhi Mandir",
    price: "₹800",
    priceUnit: "/ night",
    amenities: ["Sansthan Certified", "Satvik Meals Included", "Daily Aarti Alert"],
    tag: "Best Value",
  },
  {
    id: "ibis-shirdi",
    title: "Radisson Blu Shirdi",
    type: "5-Star Luxury Hotel",
    typeColor: "bg-indigo-100 text-indigo-900 border-indigo-200",
    image: "/samadhi-mandir.jpg",
    rating: "4.7",
    distance: "1.2 km from Samadhi Mandir",
    price: "₹4,500",
    priceUnit: "/ night",
    amenities: ["Pool & Spa", "Airport Shuttle", "Temple Transfer"],
    tag: "Luxury Pick",
  },
  {
    id: "sai-leela",
    title: "Sai Leela Heritage Ashram",
    type: "Boutique Ashram",
    typeColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
    image: "/lendi-baug.jpg",
    rating: "4.6",
    distance: "0.4 km from Samadhi Mandir",
    price: "₹1,200",
    priceUnit: "/ night",
    amenities: ["Meditation Hall", "Yoga Sessions", "Prasad Meals"],
    tag: "Spiritual Retreat",
  },
  {
    id: "fortune-shirdi",
    title: "Fortune Park Sai Residency",
    type: "4-Star Business Hotel",
    typeColor: "bg-blue-100 text-blue-900 border-blue-200",
    image: "/chavadi.jpg",
    rating: "4.5",
    distance: "0.8 km from Samadhi Mandir",
    price: "₹2,800",
    priceUnit: "/ night",
    amenities: ["Free Breakfast", "24/7 Concierge", "AC Rooms"],
    tag: "Popular Choice",
  },
];

const amenityIcons: Record<string, React.ReactNode> = {
  "Pool & Spa": <Coffee className="w-3 h-3" />,
  "Airport Shuttle": <Car className="w-3 h-3" />,
  "Free Breakfast": <Coffee className="w-3 h-3" />,
  "Sansthan Certified": <ShieldCheck className="w-3 h-3" />,
  "Meditation Hall": <Wifi className="w-3 h-3" />,
  "24/7 Concierge": <ShieldCheck className="w-3 h-3" />,
};

export default function StaysPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
      <PortalHeader />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Page Header */}
        <div className="mb-10">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#B45309] uppercase block mb-1">
            <Bed className="w-3.5 h-3.5 inline mr-1 text-[#C2410C]" />
            Sansthan Curated
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-2">
            Luxury Stays &amp; Ashrams
          </h1>
          <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
            Handpicked 5-star spiritual wellness resorts, serene Trust ashrams and quiet heritage villas within walking distance of the Samadhi Mandir.
          </p>
        </div>

        {/* Stays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stays.map((stay) => (
            <div key={stay.id} className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col">
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <Image
                  src={stay.image}
                  alt={stay.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border shadow-sm ${stay.typeColor}`}>
                    {stay.type}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-[#A73710] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {stay.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-[#A73710] transition-colors">
                      {stay.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-amber-600 font-bold flex-shrink-0">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      {stay.rating}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mb-4">
                    <MapPin className="w-3 h-3 text-[#A73710]" />
                    {stay.distance}
                  </p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {stay.amenities.map((a) => (
                      <span key={a} className="flex items-center gap-1 text-[10px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-lg">
                        {amenityIcons[a] || <ShieldCheck className="w-3 h-3" />}
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-[#A73710]">{stay.price}</span>
                    <span className="text-xs text-slate-400 font-medium">{stay.priceUnit}</span>
                  </div>
                  <button className="flex items-center gap-1.5 bg-[#A73710] hover:bg-[#8F2E0C] text-white font-bold text-xs py-2 px-4 rounded-xl transition-colors shadow-xs">
                    Book Now <ArrowRight className="w-3.5 h-3.5" />
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
