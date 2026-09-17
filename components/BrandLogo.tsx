'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | string;
  variant?: 'light' | 'dark' | string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md', variant = 'dark' }) => {
  const pathname = usePathname();
  const isRu = pathname?.startsWith('/ru');
  const isLight = variant === 'light';

  const sealSizes: Record<string, string> = {
    sm: 'h-8 sm:h-9 w-8 sm:w-9',
    md: 'h-9 sm:h-11 md:h-12 w-9 sm:w-11 md:w-12',
    lg: 'h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16'
  };

  const actualSize = sealSizes[size] || sealSizes.md;

  return (
    <Link 
      href={isRu ? '/ru' : '/'} 
      className={`relative flex items-center gap-2.5 sm:gap-3 shrink-0 group select-none transition-all duration-300 min-h-[44px] ${className}`} 
      title="Recruiter I Club — Міжнародний B2B Рекрутинг"
      aria-label="Recruiter I Club — Головна сторінка"
    >
      <div className={`relative ${actualSize} shrink-0 drop-shadow-[0_2px_8px_rgba(217,119,6,0.3)] transition-transform duration-300 group-hover:scale-105`}>
        <Image
          src="/images/logo/riclub_gold_seal_3d.png"
          alt="Recruiter I Club"
          width={48}
          height={48}
          priority
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className={`text-sm sm:text-base md:text-lg font-black tracking-tight leading-tight ${isLight ? 'text-white' : 'text-slate-900'}`}>
          RECRUITER <span className={isLight ? 'text-amber-400' : 'text-amber-600'}>I</span> CLUB
        </span>
        <span className={`text-[8px] sm:text-[9.5px] uppercase font-bold tracking-widest leading-none mt-0.5 ${isLight ? 'text-slate-400' : 'text-slate-600'}`}>
          {isRu ? 'Международный оператор' : 'Міжнародний оператор'}
        </span>
      </div>
    </Link>
  );
};

export default BrandLogo;
