"use client";

import React, { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";
import {
  Mail,
  ArrowRight,
  ArrowLeft,
  KeyRound,
  CheckCircle2,
  Loader2,
  Phone,
} from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"request" | "verify" | "success">("request");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep("verify");
    }, 1000);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep("success");
    }, 1200);
  };

  return (
    <AuthLayout>
      <div className="w-full flex flex-col justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
        {/* Category Tag */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-amber-500 inline-block animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-amber-800 uppercase">
            Sacred Devotee Recovery
          </span>
        </div>

        {/* Heading & Subtitle */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
          Reset Your Access Key
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-6 leading-relaxed">
          {step === "request" &&
            "Enter your registered email to receive a secure recovery code."}
          {step === "verify" &&
            `Enter the reset code sent to ${email} and set your new password.`}
          {step === "success" &&
            "Your pilgrim credentials have been updated securely. You can now sign in."}
        </p>

        {step === "request" && (
          <form onSubmit={handleSendCode} className="flex flex-col gap-4">
            <AuthInput
              label="Registered Devotee Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="arjun@example.com"
              leftIcon={<Mail className="w-4 h-4" />}
              required
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#A73710] hover:bg-[#8F2E0C] text-white font-semibold py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-xs sm:text-sm mt-2 disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Dispatching Reset Code...</span>
                </>
              ) : (
                <>
                  <span>Send Recovery Code</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {step === "verify" && (
          <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
            <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs text-amber-900 flex items-center justify-between">
              <span>Code sent to <strong>{email}</strong></span>
              <button
                type="button"
                onClick={() => setStep("request")}
                className="font-bold underline hover:text-[#7C2D12]"
              >
                Change
              </button>
            </div>

            <AuthInput
              label="6-Digit Recovery Code"
              type="text"
              value={resetCode}
              onChange={(e) => setResetCode(e.target.value)}
              placeholder="e.g. 728491"
              maxLength={6}
              leftIcon={<KeyRound className="w-4 h-4" />}
              required
            />

            <PasswordInput
              label="New Master Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              showStrengthMeter={true}
              required
            />

            <PasswordInput
              label="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#A73710] hover:bg-[#8F2E0C] text-white font-semibold py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-xs sm:text-sm mt-2 disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Updating Credentials...</span>
                </>
              ) : (
                <>
                  <span>Save New Password &amp; Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {step === "success" && (
          <div className="flex flex-col items-center text-center py-6 gap-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-2">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-xl text-slate-900">
              Access Key Restored
            </h3>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              Your devotee credentials have been successfully updated. You may
              now access your VIP darshan passes and booked journeys.
            </p>
            <Link
              href="/login"
              className="mt-4 inline-flex items-center gap-2 bg-[#A73710] hover:bg-[#8F2E0C] text-white font-semibold py-3 px-6 rounded-xl text-xs transition-all shadow-md"
            >
              <span>Proceed to Pilgrim Login</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Back to Login link */}
        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#A73710] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Pilgrim Login</span>
          </Link>
        </div>

        {/* Helpline footer */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#A73710]" />
            <span>24/7 Shirdi Helpline:</span>
            <span className="font-semibold text-slate-700">
              +91 2423 258 500
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>•</span>
            <span>🛎️ Lost phone counter at Gate 1 Sansthan</span>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
