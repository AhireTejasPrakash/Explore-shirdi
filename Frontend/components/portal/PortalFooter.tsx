"use client";

import React from "react";
import Link from "next/link";
import {
  ExternalLink,
  Plus,
  ShieldCheck,
  Compass,
  Accessibility,
} from "lucide-react";

export default function PortalFooter() {
  return (
    <footer className="w-full bg-[#0D1524] text-slate-300 pt-10 sm:pt-14 pb-6 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-800">
          {/* Col 1: Brand Info & Helpline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#EA580C] to-[#FBBF24] p-0.5 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#0D1524] flex items-center justify-center">
                  <span className="text-xs text-[#F59E0B] font-serif font-black">
                    ॐ
                  </span>
                </div>
              </div>
              <span className="font-serif font-bold text-base text-white">
                Explore Shirdi
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              The definitive luxury pilgrimage accompaniment for Shirdi Sai
              Baba devotees, offering sacred slot scheduling, boutique retreat
              discovery, and personalized sanctum travel.
            </p>
            <div className="mt-2 text-xs">
              <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">
                Helpline:
              </span>{" "}
              <span className="font-bold text-[#F59E0B]">
                +91 2423 258 500
              </span>
            </div>
          </div>

          {/* Col 2: Sanctum Timings */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-xs font-bold tracking-wider text-white uppercase flex items-center gap-1.5">
              <span>⏰</span>
              <span>Sanctum Timings</span>
            </h4>
            <div className="flex flex-col gap-1.5 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Kakad Aarti</span>
                <span className="text-amber-400 font-semibold">04:30 AM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Madhyan Aarti</span>
                <span className="text-amber-400 font-semibold">12:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Dhoop Aarti</span>
                <span className="text-amber-400 font-semibold">
                  Sunset (06:15 PM)
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Shej Aarti</span>
                <span className="text-amber-400 font-semibold">10:00 PM</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">General Darshan</span>
                <span className="text-emerald-400 font-semibold">
                  05:15 AM - 11:30 PM
                </span>
              </div>
            </div>
          </div>

          {/* Col 3: Sansthan & Essentials */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-xs font-bold tracking-wider text-white uppercase flex items-center gap-1.5">
              <span>🏛️</span>
              <span>Sansthan &amp; Essentials</span>
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-slate-400">
              <li>
                <Link
                  href="https://online.sai.org.in"
                  target="_blank"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                  <span>Shri Sai Baba Sansthan Trust</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Plus className="w-3 h-3 text-red-400" />
                  <span>Shri Sainath Hospital (24/7 ER)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3 h-3 text-blue-400" />
                  <span>Pilgrim Police Assistance Unit</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Compass className="w-3 h-3 text-amber-400" />
                  <span>Shirdi International Airport (SAG)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Accessibility className="w-3 h-3 text-emerald-400" />
                  <span>Wheelchair &amp; Senior Priority Care</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>
            &copy; 2024 Explore Shirdi Devotional Gateway. Dedicated with devotion
            to Shri Shirdi Sai Baba.
          </p>
          <div className="flex items-center gap-3">
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Terms of Sanctum Access
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              VIP Darshan Guidelines
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
