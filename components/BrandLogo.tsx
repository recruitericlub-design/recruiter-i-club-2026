import React from 'react';

export interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | string;
  variant?: 'light' | 'dark' | string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md', variant = 'light' }) => {
  const sizeClasses: Record<string, string> = {
    sm: 'h-8 sm:h-10',
    md: 'h-10 sm:h-12 md:h-14',
    lg: 'h-14 sm:h-16 md:h-20'
  };

  const actualSize = sizeClasses[size] || sizeClasses.md;

  return (
    <a href="/" className={`relative flex items-center shrink-0 group select-none transition-transform duration-300 hover:scale-[1.03] ${className}`} title="Recruiter I Club">
      <img
        src="/images/logo/riclub_master_badge_3d.png"
        alt="Recruiter I Club B2B"
        className={`${actualSize} w-auto object-contain rounded-xl shadow-lg border border-amber-500/40 transition-all duration-300 group-hover:border-amber-400`}
      />
    </a>
  );
};

export default BrandLogo;
