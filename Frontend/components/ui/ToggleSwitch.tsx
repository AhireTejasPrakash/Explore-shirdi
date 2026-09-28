"use client";

import React from "react";

interface ToggleSwitchProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  label?: string;
  subLabel?: string;
  icon?: React.ReactNode;
  activeColor?: string;
}

export default function ToggleSwitch({
  enabled,
  onChange,
  label,
  subLabel,
  icon,
  activeColor = "bg-[#A73710]",
}: ToggleSwitchProps) {
  return (
    <div
      onClick={() => onChange(!enabled)}
      className="flex items-center gap-2.5 cursor-pointer select-none group"
      role="switch"
      aria-checked={enabled}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onChange(!enabled);
        }
      }}
    >
      {(label || icon) && (
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
          {icon && <span className="text-[#A73710]">{icon}</span>}
          {label && <span>{label}</span>}
          {subLabel && (
            <span className="text-[10px] font-normal text-slate-400">
              ({subLabel})
            </span>
          )}
        </div>
      )}

      {/* Pill Track */}
      <div
        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out ${
          enabled ? activeColor : "bg-slate-300"
        }`}
      >
        {/* Switch Thumb */}
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            enabled ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
}
