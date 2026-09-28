"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Volume2,
  VolumeX,
  LogOut,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";
import ToggleSwitch from "@/components/ui/ToggleSwitch";

export default function PortalHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLiveAudioOn, setIsLiveAudioOn] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", href: "/dashboard" },
    { id: "attractions", label: "Discover & Attractions", href: "/attractions" },
    { id: "darshan", label: "Darshan & Live Aarti", href: "/darshan" },
    { id: "stays", label: "Luxury Stays & Ashrams", href: "/stays" },
    { id: "dining", label: "Prasadam & Dining", href: "/dining" },
    { id: "planner", label: "AI Trip Planner", href: "/ai-planner" },
  ];

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <header className="w-full bg-white border-b border-slate-200/80 sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/dashboard" className="flex items-center gap-3 group flex-shrink-0">
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

        {/* Center: Desktop Navigation Tabs with dynamic active route detection */}
        <nav className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-slate-600">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/dashboard" && pathname === "/");
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? "bg-[#A73710] text-white shadow-xs font-bold"
                    : "hover:text-[#A73710] hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Controls, Audio Toggle, Devotee Profile & Logout */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Live Audio Chanting Toggle Button */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50/80 border border-amber-200/70 shadow-2xs">
            <div className="flex items-center gap-1.5 text-amber-900 text-xs font-semibold">
              {isLiveAudioOn ? (
                <Volume2 className="w-3.5 h-3.5 text-[#A73710] animate-pulse" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
              )}
              <span className="text-[11px]">Sanctum Chants</span>
            </div>
            <ToggleSwitch
              enabled={isLiveAudioOn}
              onChange={setIsLiveAudioOn}
              activeColor="bg-[#A73710]"
            />
          </div>

          {/* Devotee Profile Pill */}
          <div className="flex items-center gap-2.5 pl-2 sm:border-l sm:border-slate-200">
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-[#F59E0B]/50 bg-amber-100 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Arjun Sharma"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold text-slate-900 leading-tight">
                Arjun Sharma
              </span>
              <span className="text-[10px] font-semibold text-amber-800 flex items-center gap-0.5">
                <CheckCircle className="w-2.5 h-2.5 text-amber-600 inline" />
                <span>Pilgrim Portal</span>
              </span>
            </div>
          </div>

          {/* Logout Button */}
          <button
            type="button"
            onClick={handleLogout}
            title="Sign Out to Pilgrim Login"
            className="p-2 rounded-lg text-slate-400 hover:text-[#A73710] hover:bg-[#FCECE4] transition-colors focus:outline-none"
            aria-label="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/dashboard" && pathname === "/");
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold ${
                  isActive
                    ? "bg-[#A73710] text-white font-bold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Mobile Live Audio Toggle */}
          <div className="mt-2 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-700">
              Sanctum Audio Broadcast
            </span>
            <ToggleSwitch
              enabled={isLiveAudioOn}
              onChange={setIsLiveAudioOn}
              activeColor="bg-[#A73710]"
            />
          </div>
        </div>
      )}
    </header>
  );
}
