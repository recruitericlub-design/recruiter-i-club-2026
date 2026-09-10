import React from 'react';

export const BrandLogo: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' }> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-10',
    md: 'h-10 sm:h-12 md:h-14',
    lg: 'h-14 sm:h-16 md:h-20'
  };

  return (
    <a href="/" className={`relative flex items-center shrink-0 group select-none transition-transform duration-300 hover:scale-[1.03] ${className}`} title="Recruiter I Club">
      <img
        src="/images/logo/riclub_master_badge_3d.png"
        alt="Recruiter I Club B2B"
        className={`${sizeClasses[size]} w-auto object-contain rounded-xl shadow-lg border border-amber-500/40 transition-all duration-300 group-hover:border-amber-400`}
      />
    </a>
  );
};
