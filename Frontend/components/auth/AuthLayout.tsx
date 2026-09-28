"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Ticket,
  Bed,
  Accessibility,
  Bell,
  ExternalLink,
  Plus,
  Compass,
} from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F3F6FA] text-slate-800 flex flex-col justify-between">
      {/* Top Header */}
      <header className="w-full bg-white border-b border-slate-200/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo & Tagline */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Sacred Lotus / Sun Emblem */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#EA580C] via-[#F59E0B] to-[#FBBF24] p-0.5 shadow-sm flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-lg leading-none select-none text-[#C2410C] font-serif font-black">
                  ॐ
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-slate-900 tracking-tight leading-tight group-hover:text-[#A73710] transition-colors">
                Explore Shirdi
              </span>
              <span className="text-[9px] font-bold tracking-[0.18em] text-[#B45309] uppercase">
                Sacred Sanctuary Portal
              </span>
            </div>
          </Link>
        </div>
      </header>

      {/* Main Auth Card Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-12 flex items-center justify-center">
        <div className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/70 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[680px]">
          {/* Left Panel: Devotee Privileges & Sacred Showcase */}
          <div className="order-2 lg:order-1 lg:col-span-5 bg-gradient-to-b from-[#E6ECF5] via-[#EFF3F9] to-[#FAF6F0] p-4 sm:p-6 lg:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-r border-slate-200/80">
            <div>
              {/* Official Gateway Badge & Estd. Year */}
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-200 text-[10px] font-bold tracking-wider text-slate-700 uppercase shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Official Pilgrim Gateway</span>
                </div>
                <span className="font-serif text-xs font-bold tracking-widest text-[#B45309]">
                  ESTD. 1922
                </span>
              </div>

              {/* Sacred Temple Sanctum Image Banner */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md group mb-5 sm:mb-6 aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/10]">
                <Image
                  src="/shirdi-sanctum.jpg"
                  alt="Shirdi Sai Baba Temple Sanctum"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-3.5 sm:p-4 text-white">
                  <h3 className="font-serif italic text-base sm:text-xl font-medium tracking-wide text-[#FDE68A]">
                    &ldquo;Shraddha &amp; Saburi&rdquo;
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-200 mt-0.5 leading-snug">
                    Faith and Patience — Welcome back to your sacred companion.
                  </p>
                </div>
              </div>

              {/* Devotee Privileges Section */}
              <div className="flex flex-col gap-2 sm:gap-2.5">
                <span className="text-[10px] font-bold tracking-widest text-[#B45309] uppercase mb-0.5">
                  Devotee Access Privileges
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                  {/* Privilege 1: 1-Click VIP Darshan */}
                  <div className="bg-white/95 rounded-xl p-3 border border-slate-200/70 shadow-2xs flex items-center gap-3.5 transition-transform hover:-translate-y-0.5">
                    <div className="w-9 h-9 rounded-lg bg-[#FFEDD5] text-[#C2410C] flex items-center justify-center flex-shrink-0">
                      <Ticket className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">
                        1-Click VIP Darshan &amp; Aarti Re-issuance
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">
                        Instant pass retrieval even in offline Sanctum corridors
                      </p>
                    </div>
                  </div>

                  {/* Privilege 2: Sansthan Rooms Sync */}
                  <div className="bg-white/95 rounded-xl p-3 border border-slate-200/70 shadow-2xs flex items-center gap-3.5 transition-transform hover:-translate-y-0.5">
                    <div className="w-9 h-9 rounded-lg bg-[#DCFCE7] text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <Bed className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">
                        Sansthan Rooms &amp; Luxury Stays Sync
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">
                        Direct checkout vouchers with early morning wake-up calls
                      </p>
                    </div>
                  </div>

                  {/* Privilege 3: Senior Citizen Fast-Track */}
                  <div className="bg-white/95 rounded-xl p-3 border border-slate-200/70 shadow-2xs flex items-center gap-3.5 transition-transform hover:-translate-y-0.5">
                    <div className="w-9 h-9 rounded-lg bg-[#FFEDD5] text-[#EA580C] flex items-center justify-center flex-shrink-0">
                      <Accessibility className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">
                        Senior Citizen &amp; Wheelchair Fast-Track
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">
                        Pre-verified gate passage for elders &amp; special assistance
                      </p>
                    </div>
                  </div>

                  {/* Privilege 4: Live Queue Pings */}
                  <div className="bg-white/95 rounded-xl p-3 border border-slate-200/70 shadow-2xs flex items-center gap-3.5 transition-transform hover:-translate-y-0.5">
                    <div className="w-9 h-9 rounded-lg bg-[#FEF9C3] text-amber-800 flex items-center justify-center flex-shrink-0">
                      <Bell className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">
                        Live Queue Pings via SMS &amp; WhatsApp
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">
                        Accurate gate wait-times before Kakad &amp; Shej Aarti
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Digital Accreditation Pill */}
            <div className="mt-5 sm:mt-6 bg-white/90 border border-slate-200/80 rounded-xl p-2.5 flex items-center gap-2.5 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <div className="text-[10px] leading-tight">
                <span className="font-bold text-slate-800">
                  Sansthan Digital Accreditation:{" "}
                </span>
                <span className="text-slate-500">
                  End-to-end encrypted with DigiLocker &amp; Aadhaar e-KYC
                </span>
              </div>
            </div>
          </div>

          {/* Right Panel: Auth Form */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col justify-center bg-white">
            {children}
          </div>
        </div>
      </main>

      {/* 3-Column Devotional Footer */}
      <footer className="w-full bg-[#0D1524] text-slate-300 pt-8 sm:pt-12 pb-6 border-t border-slate-800/80 mt-8 sm:mt-12">
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
              &copy; 2024 Explore Shirdi Devotional Gateway. Dedicated with
              devotion to Shri Shirdi Sai Baba.
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
    </div>
  );
}
