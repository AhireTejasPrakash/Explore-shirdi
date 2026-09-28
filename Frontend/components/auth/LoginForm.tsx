"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  ArrowRight,
  Phone,
  Ticket,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";

export default function LoginForm() {
  const router = useRouter();
  const [keepSignedIn, setKeepSignedIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 600);
    }, 800);
  };

  return (
    <div className="w-full flex flex-col justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
      {/* Category Tag */}
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-[#B83A14] inline-block animate-pulse" />
        <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#A73710] uppercase">
          Secure Devotee Access
        </span>
      </div>

      {/* Heading & Subtitle */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
        Sign In to Your Pilgrim Account
      </h1>
      <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-6 leading-relaxed">
        Access your personalized passes, booked pujas, and smart itineraries.
      </p>

      {/* Success Notification */}
      {isSuccess && (
        <div className="mb-5 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <div>
            <p className="font-semibold">Devotee Access Granted</p>
            <p className="text-emerald-700">
              Welcome back to your sacred Shirdi sanctuary portal.
            </p>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <AuthInput
          label="Registered Devotee Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
          leftIcon={<Mail className="w-4 h-4" />}
          required
        />

        <PasswordInput
          label="Devotee Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••••••"
          showForgotPassword={true}
          forgotPasswordHref="/forgot-password"
          required
        />

        {/* Remember me checkbox */}
        <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 select-none mt-1">
          <input
            type="checkbox"
            checked={keepSignedIn}
            onChange={(e) => setKeepSignedIn(e.target.checked)}
            className="w-4 h-4 mt-0.5 rounded text-[#A73710] focus:ring-[#A73710] border-slate-300 accent-[#A73710] flex-shrink-0"
          />
          <span className="leading-tight">
            Keep me signed in on this devotee device for 30 days
          </span>
        </label>

        {/* Primary Action Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#A73710] hover:bg-[#8F2E0C] active:bg-[#78260A] text-white font-semibold py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl shadow-md shadow-amber-900/15 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm mt-1 focus:outline-none focus:ring-4 focus:ring-amber-500/25 disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Verifying Devotee Credentials...</span>
            </>
          ) : (
            <>
              <span>Sign In to Pilgrim Portal</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* First Time Visiting Shirdi Banner */}
      <div className="mt-6 bg-[#FEF9EE] border border-[#FDEBC8] rounded-xl p-3 sm:p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FDE29D] flex items-center justify-center text-amber-900 flex-shrink-0">
            <Ticket className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">
              First time visiting Shirdi?
            </p>
            <p className="text-[11px] text-slate-600 leading-tight">
              Create profile &amp; receive 1 complimentary Sanctum audio guide pass
            </p>
          </div>
        </div>

        <Link
          href="/register"
          className="w-full sm:w-auto text-center flex-shrink-0 bg-white hover:bg-amber-50/80 text-amber-950 font-bold text-xs px-3 py-1.5 rounded-lg border border-[#E7D6A7] transition-all shadow-2xs"
        >
          Register Free
        </Link>
      </div>

      {/* Helpline Footer */}
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
