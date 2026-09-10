'use client';

import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'badge';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export default function BrandLogo({ variant = 'badge', size = 'md', showTagline = true }: BrandLogoProps) {
  return (
    <Link 
      href="/" 
      className="inline-flex items-center gap-3 group select-none transition-transform duration-300 hover:scale-[1.02]"
      title="Recruiter I Club — Платформа підбору персоналу з Азії"
    >
      {/* Authentic 3D Gold Seal & Typography Lockup */}
      <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-950/90 border border-amber-500/40 shadow-lg shadow-black/20 backdrop-blur-md">
        <img 
          src="/images/logo/riclub_gold_seal_3d.png" 
          alt="Recruiter I Club 3D Gold Seal" 
          className="h-8 sm:h-9 w-auto object-contain filter drop-shadow(0 2px 4px rgba(0,0,0,0.4)) transition-transform duration-300 group-hover:rotate-6"
        />
        <img 
          src="/images/logo/riclub_text_gold_3d.png" 
          alt="Recruiter I Club" 
          className="h-5 sm:h-6 w-auto object-contain filter drop-shadow(0 1px 3px rgba(0,0,0,0.3))"
        />
      </div>

      {showTagline && (
        <span className="hidden xl:inline-block text-[10px] font-semibold text-slate-400 font-mono uppercase tracking-wider pl-1 border-l border-slate-700/50">
          Official B2B Licensed Agency
        </span>
      )}
    </Link>
  );
}
