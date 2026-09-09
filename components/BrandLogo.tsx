'use client';

import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export default function BrandLogo({ variant = 'dark', size = 'md', showTagline = true }: BrandLogoProps) {
  const isLightText = variant === 'light';

  return (
    <Link href="/" className="inline-flex items-center gap-3.5 group select-none">
      {/* Precision Emblem */}
      <div className="relative flex-shrink-0">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-[1.5px] shadow-md shadow-blue-950/20 group-hover:shadow-blue-600/30 transition-all duration-300">
          <div className="w-full h-full rounded-[10px] bg-slate-900 flex items-center justify-center relative overflow-hidden">
            {/* Subtle radial shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-amber-400/20 opacity-70"></div>
            
            {/* High-Craft Ukrainian Trident & Global Globe Icon */}
            <svg 
              className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 group-hover:scale-105 transition-transform duration-300" 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Shield / Arch Ring */}
              <circle cx="16" cy="16" r="14.5" stroke="url(#goldGrad)" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.4" />
              <circle cx="16" cy="16" r="12" stroke="url(#goldGrad)" strokeWidth="0.8" opacity="0.6" />
              
              {/* Trident Core Geometry */}
              <path 
                d="M16 4.5L17.5 10V24H14.5V10L16 4.5Z" 
                fill="url(#goldGrad)" 
              />
              <path 
                d="M9 9.5C9 13.5 10.5 18 12.5 20.5V23H8C6.5 20 5 15.5 5 9.5L9 9.5Z" 
                fill="url(#goldGrad)" 
              />
              <path 
                d="M23 9.5C23 13.5 21.5 18 19.5 20.5V23H24C25.5 20 27 15.5 27 9.5L23 9.5Z" 
                fill="url(#goldGrad)" 
              />
              <path 
                d="M12 25H20V27.5H12V25Z" 
                fill="url(#goldGrad)" 
              />
              {/* Central Diamond Accent */}
              <polygon points="16,11 17.5,13 16,15 14.5,13" fill="#ffffff" opacity="0.9" />

              <defs>
                <linearGradient id="goldGrad" x1="5" y1="4.5" x2="27" y2="27.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FDE047" />
                  <stop offset="0.5" stopColor="#EAB308" />
                  <stop offset="1" stopColor="#CA8A04" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Small Ukrainian Flag Ribbon Dot */}
        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full overflow-hidden border border-white shadow-sm flex flex-col">
          <div className="w-full h-1/2 bg-[#0057B7]"></div>
          <div className="w-full h-1/2 bg-[#FFD700]"></div>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`text-lg sm:text-xl font-black tracking-tight ${isLightText ? 'text-white' : 'text-slate-900'} group-hover:text-blue-600 transition-colors`}>
            Recruiter <span className="text-amber-500 font-serif">I</span> Club
          </span>
          <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 uppercase tracking-wide">
            B2B
          </span>
        </div>
        {showTagline && (
          <span className={`text-[10px] font-semibold tracking-wide ${isLightText ? 'text-slate-400' : 'text-slate-500'} uppercase font-mono`}>
            Міжнародний рекрутинг в Україні
          </span>
        )}
      </div>
    </Link>
  );
}
