import React from 'react';

interface OrnamentDividerProps {
  className?: string;
  variant?: 'gold' | 'maroon' | 'ivory';
  subtle?: boolean;
}

export const OrnamentDivider: React.FC<OrnamentDividerProps> = ({
  className = '',
  variant = 'gold',
  subtle = false
}) => {
  const colorClass =
    variant === 'gold'
      ? 'text-[#C6A15B]'
      : variant === 'maroon'
      ? 'text-[#7B1E2B]'
      : 'text-[#E6C98A]';

  const lineColor =
    variant === 'gold'
      ? 'bg-gradient-to-r from-transparent via-[#C6A15B]/40 to-transparent'
      : variant === 'maroon'
      ? 'bg-gradient-to-r from-transparent via-[#7B1E2B]/40 to-transparent'
      : 'bg-gradient-to-r from-transparent via-[#E6C98A]/30 to-transparent';

  return (
    <div className={`flex items-center justify-center my-6 gap-3 ${className}`}>
      <div className={`h-[1px] flex-1 max-w-[120px] ${lineColor}`} />
      
      {/* Traditional Indian decorative motif (mandala floral star) */}
      <div className={`flex items-center gap-1.5 ${colorClass}`}>
        <span className="text-[10px] opacity-70">✦</span>
        <svg
          className={`w-5 h-5 ${subtle ? 'opacity-70' : 'opacity-90'}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" />
          <circle cx="12" cy="10" r="1.5" fill="#FFF8ED" />
          <circle cx="6" cy="10" r="1" />
          <circle cx="18" cy="10" r="1" />
          <circle cx="12" cy="4" r="1" />
          <circle cx="12" cy="16" r="1" />
        </svg>
        <span className="text-[10px] opacity-70">✦</span>
      </div>

      <div className={`h-[1px] flex-1 max-w-[120px] ${lineColor}`} />
    </div>
  );
};
