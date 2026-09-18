import React from 'react';
import Image from 'next/image';

interface SlavaUkrainiBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  withGlow?: boolean;
}

export const SlavaUkrainiBadge: React.FC<SlavaUkrainiBadgeProps> = ({
  size = 'md',
  className = '',
  withGlow = false,
}) => {
  const sizeClasses = {
    sm: 'h-6 sm:h-7 w-auto',
    md: 'h-8 sm:h-9 w-auto',
    lg: 'h-10 sm:h-12 w-auto',
  };

  return (
    <div
      className={`inline-flex items-center select-none transition-transform duration-300 hover:scale-105 group ${className}`}
      title="Слава Україні!"
    >
      <div
        className={`relative flex items-center justify-center ${
          withGlow ? 'drop-shadow-[0_0_12px_rgba(0,87,183,0.35)]' : ''
        }`}
      >
        <Image
          src="/images/slava_ukraini_transparent.png"
          alt="Слава Україні — Державний Герб та Гасло"
          width={188}
          height={70}
          priority
          className={`${sizeClasses[size]} object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]`}
        />
      </div>
    </div>
  );
};

export default SlavaUkrainiBadge;
