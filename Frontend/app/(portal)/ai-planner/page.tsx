"use client";

import React, { useState } from "react";
import PortalHeader from "@/components/portal/PortalHeader";
import PortalFooter from "@/components/portal/PortalFooter";
import { Sparkles, Calendar, Users, Moon, Sun, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import ToggleSwitch from "@/components/ui/ToggleSwitch";

const durations = ["1 Day", "2 Days", "3 Days", "5 Days", "7+ Days"];
const devoteeTypes = ["General Devotee", "Senior Citizen (60+)", "Family with Kids", "Overseas / NRI", "First Time Visitor"];

const sampleItinerary = [
  { day: "Day 1", time: "04:15 AM", activity: "Kakad Aarti at Samadhi Mandir", type: "Aarti", color: "bg-indigo-100 text-indigo-800" },
  { day: "Day 1", time: "07:00 AM", activity: "Prasad breakfast at Sansthan Bhojanalaya", type: "Dining", color: "bg-amber-100 text-amber-800" },
  { day: "Day 1", time: "09:00 AM", activity: "VIP Darshan — Samadhi Mandir (Gate 2)", type: "Darshan", color: "bg-orange-100 text-orange-800" },
  { day: "Day 1", time: "11:30 AM", activity: "Dwarkamai Masjid & Dhuni Maa Darshan", type: "Attraction", color: "bg-rose-100 text-rose-800" },
  { day: "Day 1", time: "12:00 PM", activity: "Madhyan Aarti attendance", type: "Aarti", color: "bg-indigo-100 text-indigo-800" },
  { day: "Day 1", time: "02:00 PM", activity: "Chavadi & Lendi Baug self-guided walk", type: "Attraction", color: "bg-emerald-100 text-emerald-800" },
  { day: "Day 1", time: "06:15 PM", activity: "Dhoop Aarti (Main sanctum hall)", type: "Aarti", color: "bg-indigo-100 text-indigo-800" },
  { day: "Day 1", time: "10:00 PM", activity: "Shej Aarti (final Aarti of the day)", type: "Aarti", color: "bg-indigo-100 text-indigo-800" },
];

export default function AIPlannerPage() {
  const [selectedDuration, setSelectedDuration] = useState("2 Days");
  const [selectedType, setSelectedType] = useState("General Devotee");
  const [includeStays, setIncludeStays] = useState(true);
  const [includeMeals, setIncludeMeals] = useState(true);
  const [includeTransport, setIncludeTransport] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setIsGenerated(false);
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
      <PortalHeader />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Page Header */}
        <div className="mb-10">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#B45309] uppercase block mb-1">
            <Sparkles className="w-3.5 h-3.5 inline mr-1 text-[#C2410C]" />
            Intelligent Pilgrimage Assistant
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-2">
            SaiAI Trip Architect
          </h1>
          <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
            Generate a personalized 1–7 day sacred pilgrimage itinerary optimised for your devotee type, mobility, meal preferences, and resting schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Planner Configuration Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 sm:p-6 flex flex-col gap-6">
              {/* Trip Duration */}
              <div>
                <label className="text-xs font-bold text-slate-700 mb-3 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#C2410C]" />
                  Trip Duration
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {durations.map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDuration(d)}
                      className={`py-2 text-xs font-semibold rounded-xl border transition-all ${
                        selectedDuration === d
                          ? "bg-[#FEF9EE] border-[#C2410C] text-[#A73710] shadow-2xs"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Devotee Type */}
              <div>
                <label className="text-xs font-bold text-slate-700 mb-3 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#C2410C]" />
                  Devotee Category
                </label>
                <div className="flex flex-col gap-2">
                  {devoteeTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`py-2 px-3 text-xs font-semibold rounded-xl border text-left transition-all ${
                        selectedType === type
                          ? "bg-[#FEF9EE] border-[#C2410C] text-[#A73710] shadow-2xs"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferences with Toggle Switches */}
              <div>
                <label className="text-xs font-bold text-slate-700 mb-3 block">
                  Include in Itinerary
                </label>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-xs text-slate-700 font-medium flex items-center gap-1.5">
                      <Moon className="w-3.5 h-3.5 text-indigo-500" /> Accommodation & Stays
                    </span>
                    <ToggleSwitch enabled={includeStays} onChange={setIncludeStays} activeColor="bg-[#A73710]" />
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="text-xs text-slate-700 font-medium flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5 text-amber-500" /> Meal & Prasadam Schedule
                    </span>
                    <ToggleSwitch enabled={includeMeals} onChange={setIncludeMeals} activeColor="bg-[#A73710]" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-xs text-slate-700 font-medium flex items-center gap-1.5">
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-500" /> Transport & Cab Bookings
                    </span>
                    <ToggleSwitch enabled={includeTransport} onChange={setIncludeTransport} activeColor="bg-[#A73710]" />
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-[#A73710] hover:bg-[#8F2E0C] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm transition-all shadow-md disabled:opacity-70"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Crafting Sacred Itinerary...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate My Itinerary</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right: Generated Itinerary */}
          <div className="lg:col-span-3">
            {!isGenerated && !isGenerating && (
              <div className="h-full min-h-[400px] bg-white rounded-2xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-center gap-4 p-8">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-[#C2410C]" />
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-800">Your Itinerary Awaits</h3>
                <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
                  Configure your trip preferences on the left and click Generate to receive a personalised sacred pilgrimage schedule.
                </p>
              </div>
            )}

            {isGenerating && (
              <div className="h-full min-h-[400px] bg-white rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-center gap-4 p-8">
                <Loader2 className="w-10 h-10 text-[#A73710] animate-spin" />
                <p className="text-sm font-semibold text-slate-600">SaiAI is crafting your sacred journey...</p>
              </div>
            )}

            {isGenerated && (
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
                {/* Itinerary Header */}
                <div className="bg-gradient-to-r from-[#A73710] to-[#C2410C] px-5 py-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-amber-300" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-amber-200">
                      SaiAI Generated Itinerary
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-xl">
                    {selectedDuration} Pilgrimage — {selectedType}
                  </h3>
                  <p className="text-xs text-amber-200/80 mt-0.5">
                    Personalised schedule with {includeStays ? "stays, " : ""}{includeMeals ? "meals, " : ""}{includeTransport ? "transport & " : ""}all sacred Aartis
                  </p>
                </div>

                {/* Timeline */}
                <div className="p-5 flex flex-col gap-3 max-h-[520px] overflow-y-auto">
                  {sampleItinerary.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#A73710] mt-1" />
                        {idx < sampleItinerary.length - 1 && (
                          <div className="w-0.5 h-8 bg-slate-200 mt-1" />
                        )}
                      </div>
                      <div className="flex-1 pb-2">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-slate-400">{item.time}</span>
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${item.color}`}>
                            {item.type}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-slate-800">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Export Button */}
                <div className="p-4 border-t border-slate-100 flex gap-3">
                  <button className="flex-1 bg-[#A73710] hover:bg-[#8F2E0C] text-white font-bold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                    Save to My Trips
                  </button>
                  <button className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs py-2.5 rounded-xl border border-slate-200 transition-colors">
                    Share via WhatsApp
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <PortalFooter />
    </div>
  );
}
