"use client";

import React from "react";
import { Clock, Flame, CloudSun, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#F1F5FB] to-[#F8F9FC] pt-12 sm:pt-16 md:pt-20 pb-14 sm:pb-18">
      {/* Background Sacred Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-amber-200/25 via-orange-100/15 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Official Devotee Assistance Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/80 text-[10px] sm:text-[11px] font-bold tracking-widest text-[#B45309] uppercase mb-5 sm:mb-6 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C2410C]" />
          <span>Official Devotee Assistance Network</span>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-4xl font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-4 sm:mb-5">
          Embrace the Divine Presence of{" "}
          <span className="italic text-[#A73710] font-medium">Shri Sai Baba</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-8 sm:mb-12">
          Your official gateway to peaceful darshan passes, sacred heritage walks, satvik dining, and bespoke spiritual retreats in Shirdi.
        </p>

        {/* Real-Time Live Sanctum Status Bar (3 Cards) */}
        <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-lg shadow-slate-200/50 p-3 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 items-center">
            {/* Status 1: Queue Wait */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
              <div className="w-9 h-9 rounded-lg bg-orange-100 text-[#C2410C] flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Gate 2 Queue
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-800">
                  16 mins wait time
                </p>
              </div>
            </div>

            {/* Status 2: Next Sacred Aarti */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-[#B45309] flex items-center justify-center flex-shrink-0">
                <Flame className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Next Sacred Aarti
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-800">
                  Dhoop Aarti • 18:30 IST
                </p>
              </div>
            </div>

            {/* Status 3: Shirdi Climate */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
              <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0">
                <CloudSun className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Shirdi Climate
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-800">
                  26°C Pleasant Breeze
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
