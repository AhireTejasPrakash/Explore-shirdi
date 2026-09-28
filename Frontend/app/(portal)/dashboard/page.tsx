import React from "react";
import { Metadata } from "next";
import PortalHeader from "@/components/portal/PortalHeader";
import HeroSection from "@/components/portal/HeroSection";
import ServicesSection from "@/components/portal/ServicesSection";
import SacredSitesSection from "@/components/portal/SacredSitesSection";
import SafeguardsSection from "@/components/portal/SafeguardsSection";
import PortalFooter from "@/components/portal/PortalFooter";

export const metadata: Metadata = {
  title: "Devotee Portal - Explore Shirdi | Official Sanctuary Gateway",
  description:
    "Official pilgrim portal for Shirdi Sai Baba devotees. Instant VIP Darshan passes, live queue status, Sansthan stays, and sacred sites chronology.",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 flex flex-col justify-between">
      {/* Top Navbar with Live Audio Toggle */}
      <PortalHeader />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section & Live Sanctum Status */}
        <HeroSection />

        {/* Holistic Pilgrim Services (6 Cards) */}
        <ServicesSection />

        {/* Sacred Sites of Grace & Miracle (4 Cards) */}
        <SacredSitesSection />

        {/* Official Trust & Pilgrim Safeguards (4 Cards) */}
        <SafeguardsSection />
      </main>

      {/* Devotional Footer */}
      <PortalFooter />
    </div>
  );
}
