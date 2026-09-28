import React from "react";
import { Metadata } from "next";
import PortalHeader from "@/components/portal/PortalHeader";
import PortalFooter from "@/components/portal/PortalFooter";
import { Flame, Clock, Play, Calendar, ArrowRight, Bell } from "lucide-react";

export const metadata: Metadata = {
  title: "Darshan & Live Aarti - Explore Shirdi",
  description: "Book VIP darshan passes and watch live Aarti broadcasts from Shirdi Samadhi Mandir.",
};

const aartis = [
  { name: "Kakad Aarti", time: "04:30 AM", description: "Dawn awakening Aarti — the most spiritually potent. Baba is symbolically woken up with bells and conch.", color: "bg-indigo-100 text-indigo-800", dot: "bg-indigo-500" },
  { name: "Madhyan Aarti", time: "12:00 PM", description: "Midday Aarti performed after the Naivedyam (sacred food offering) ritual at noon.", color: "bg-amber-100 text-amber-800", dot: "bg-amber-500" },
  { name: "Dhoop Aarti", time: "Sunset (~06:15 PM)", description: "Evening incense Aarti — the most attended. A spectacular multi-lamp ceremony at golden hour.", color: "bg-orange-100 text-orange-800", dot: "bg-orange-500" },
  { name: "Shej Aarti", time: "10:00 PM", description: "Night Aarti — symbolic bedtime ritual. Baba is reverently put to rest with hymns and campher light.", color: "bg-slate-100 text-slate-800", dot: "bg-slate-500" },
];

const passes = [
  { title: "General Darshan", price: "Free", duration: "05:15 AM – 11:30 PM", tag: "Open Access", tagColor: "bg-emerald-100 text-emerald-800 border-emerald-200", highlight: false },
  { title: "VIP Priority Darshan", price: "₹200 (Subsidised)", duration: "All Hours", tag: "Zero Wait Queue", tagColor: "bg-amber-100 text-amber-800 border-amber-200", highlight: true },
  { title: "Senior / Wheelchair Pass", price: "Free", duration: "All Hours", tag: "Dedicated Lane", tagColor: "bg-blue-100 text-blue-800 border-blue-200", highlight: false },
  { title: "Abhishek Puja Slot", price: "₹500 Onwards", duration: "By Booking", tag: "Sansthan Official", tagColor: "bg-orange-100 text-orange-800 border-orange-200", highlight: false },
];

export default function DarshanPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
      <PortalHeader />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Page Header */}
        <div className="mb-10">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#B45309] uppercase block mb-1">
            <Flame className="w-3.5 h-3.5 inline mr-1 text-[#C2410C]" />
            Sanctum Schedule
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-2">
            Darshan &amp; Live Aarti
          </h1>
          <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
            Book instant VIP darshan passes, stream live sacred Aartis, and get real-time gate queue alerts for Shri Shirdi Sai Baba Mandir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Aarti Schedule */}
          <div>
            <h2 className="text-xl font-serif font-bold text-slate-900 mb-5 flex items-center gap-2">
              <Flame className="w-5 h-5 text-[#C2410C]" />
              Daily Aarti Schedule
            </h2>
            <div className="flex flex-col gap-4">
              {aartis.map((aarti) => (
                <div key={aarti.name} className={`rounded-xl p-4 border ${aarti.color} border-current/20 flex items-start gap-4`}>
                  <div className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${aarti.dot}`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-bold text-slate-900">{aarti.name}</h3>
                      <span className="text-xs font-semibold text-[#A73710] flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {aarti.time}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{aarti.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Aarti Stream Banner */}
            <div className="mt-6 bg-gradient-to-br from-[#1e0a02] to-[#3b1505] text-white rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-red-300">Live Now</span>
                </div>
                <h3 className="text-base font-serif font-bold text-white">360° Sanctum Aarti Broadcast</h3>
                <p className="text-xs text-amber-200/70 mt-0.5">HD multi-angle stream with devotional audio</p>
              </div>
              <button className="flex items-center gap-2 bg-[#A73710] hover:bg-[#8F2E0C] text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-colors whitespace-nowrap shadow-md">
                <Play className="w-3.5 h-3.5 fill-current" />
                Watch Live
              </button>
            </div>
          </div>

          {/* Right: Darshan Passes */}
          <div>
            <h2 className="text-xl font-serif font-bold text-slate-900 mb-5 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#C2410C]" />
              Darshan Pass Booking
            </h2>
            <div className="flex flex-col gap-4">
              {passes.map((pass) => (
                <div
                  key={pass.title}
                  className={`rounded-xl p-5 border flex items-center justify-between gap-4 transition-all ${
                    pass.highlight
                      ? "bg-[#FEF9EE] border-[#C2410C]/30 shadow-md"
                      : "bg-white border-slate-200/80 shadow-xs hover:shadow-sm"
                  }`}
                >
                  <div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${pass.tagColor} mb-1.5 block w-fit`}>
                      {pass.tag}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">{pass.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {pass.duration}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-base font-bold text-[#A73710]">{pass.price}</p>
                    <button className="mt-1.5 text-xs font-bold text-[#A73710] hover:underline flex items-center gap-0.5 ml-auto">
                      Book <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Alert Setup */}
            <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-slate-900">Enable Aarti Reminders</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Get WhatsApp + SMS alerts 30 minutes before each Aarti</p>
              </div>
              <button className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap">
                Enable
              </button>
            </div>
          </div>
        </div>
      </main>

      <PortalFooter />
    </div>
  );
}
