"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Phone,
  Loader2,
} from "lucide-react";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";

export default function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [devoteeType, setDevoteeType] = useState("general");
  const [privilegeClub, setPrivilegeClub] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="w-full flex flex-col justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
      {/* Category Tag */}
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-pulse" />
        <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-emerald-800 uppercase">
          New Pilgrim Registration
        </span>
      </div>

      {/* Heading & Subtitle */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
        Join Shirdi Pilgrim Portal
      </h1>
      <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-5 leading-relaxed">
        Unlock priority darshan passes, Sansthan room sync, and curated spiritual stays.
      </p>

      {/* Form Submission Notification */}
      {isSuccess && (
        <div className="mb-5 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <div>
            <p className="font-semibold">Devotee Account Initialized!</p>
            <p className="text-emerald-700">
              Your free audio guide pass and darshan token credentials have been sent.
            </p>
          </div>
        </div>
      )}

      {/* Form Area */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
        {/* Full Name */}
        <AuthInput
          label="Devotee Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="e.g. Arjun Sharma"
          leftIcon={<User className="w-4 h-4" />}
          required
        />

        {/* Mobile Number & Email side-by-side on sm screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <AuthInput
            label="Mobile Number"
            badge="For Darshan SMS"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98230 45890"
            leftIcon={<Smartphone className="w-4 h-4" />}
            required
          />

          <AuthInput
            label="Devotee Email"
            badge="For E-Pass & Login"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="arjun@example.com"
            leftIcon={<Mail className="w-4 h-4" />}
            required
          />
        </div>

        {/* Password with Strength Meter */}
        <PasswordInput
          label="Create Master Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Min. 8 characters"
          showStrengthMeter={true}
          required
        />

        {/* Devotee Category Pills */}
        <div className="flex flex-col gap-1.5 mt-1">
          <label className="text-xs font-semibold text-slate-700">
            Devotee Category
          </label>
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            {[
              { id: "general", title: "General Devotee" },
              { id: "senior", title: "Senior (60+) / VIP" },
              { id: "nri", title: "Overseas / NRI" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setDevoteeType(cat.id)}
                className={`py-2 px-1 sm:px-2 text-center text-[10px] sm:text-xs font-medium rounded-xl border transition-all ${
                  devoteeType === cat.id
                    ? "bg-[#FEF9EE] border-[#C2410C] text-[#A73710] font-semibold shadow-2xs"
                    : "bg-[#F8FAFC] border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Checkboxes */}
        <div className="flex flex-col gap-2 mt-1">
          <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 select-none">
            <input
              type="checkbox"
              checked={privilegeClub}
              onChange={(e) => setPrivilegeClub(e.target.checked)}
              className="w-4 h-4 mt-0.5 rounded text-[#A73710] focus:ring-[#A73710] border-slate-300 accent-[#A73710] flex-shrink-0"
            />
            <span className="leading-tight">
              Join <strong className="text-slate-800">Shirdi Privileges Club</strong> — claim 1 complimentary Sanctum audio guide &amp; Kakad Aarti alerts.
            </span>
          </label>

          <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 select-none">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="w-4 h-4 mt-0.5 rounded text-[#A73710] focus:ring-[#A73710] border-slate-300 accent-[#A73710] flex-shrink-0"
              required
            />
            <span className="leading-tight">
              I agree to the <Link href="#" className="underline text-slate-800">Terms of Sanctum Access</Link> &amp; <Link href="#" className="underline text-slate-800">VIP Darshan Guidelines</Link>.
            </span>
          </label>
        </div>

        {/* Primary Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#A73710] hover:bg-[#8F2E0C] active:bg-[#78260A] text-white font-semibold py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl shadow-md shadow-amber-900/15 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm mt-1 focus:outline-none focus:ring-4 focus:ring-amber-500/25 disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Issuing Pilgrim Credentials...</span>
            </>
          ) : (
            <>
              <span>Complete Sacred Registration</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Already registered sign-in link */}
      <div className="mt-6 text-center text-xs text-slate-600">
        Already have a pilgrim account?{" "}
        <Link
          href="/login"
          className="font-bold text-[#A73710] hover:text-[#7C2D12] hover:underline"
        >
          Sign In Here
        </Link>
      </div>

      {/* Helpline footer */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
        <div className="flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5 text-[#A73710]" />
          <span>24/7 Shirdi Helpline:</span>
          <span className="font-semibold text-slate-700">+91 2423 258 500</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400">
          <span>•</span>
          <span>🛎️ Lost phone counter at Gate 1 Sansthan</span>
        </div>
      </div>
    </div>
  );
}
