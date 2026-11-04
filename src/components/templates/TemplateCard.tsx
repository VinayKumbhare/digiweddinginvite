import React from 'react';
import { Template } from '../../types';
import { useApp } from '../../context/AppContext';
import { Eye, ArrowRight, Music, Sparkles } from 'lucide-react';

interface TemplateCardProps {
  template: Template;
  onPreview: (template: Template) => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ template, onPreview }) => {
  const { navigate, createMockOrder } = useApp();

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-[#C6A15B]/30 hover:border-[#C6A15B] transition-all duration-300 hover:shadow-xl flex flex-col">
      {/* Thumbnail with overlay buttons */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#5B1020]/5">
        <img
          src={template.thumbnailUrl}
          alt={template.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Subtle dark gradient scrim for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <button
            onClick={() => onPreview(template)}
            className="w-full py-2 px-3 bg-white/95 hover:bg-white text-[#5B1020] text-xs font-semibold rounded shadow-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#C6A15B]" />
            Live Full-Screen Preview
          </button>
        </div>

        {template.popular && (
          <div className="absolute top-3 left-3 bg-[#5B1020] text-[#E6C98A] text-[11px] font-semibold px-2.5 py-1 rounded border border-[#C6A15B]/40 shadow-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#C6A15B]" />
            Royal Choice
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Zero-Pill unboxed clean metadata */}
          <div className="flex items-center gap-2 text-xs text-[#5B1020] font-medium tracking-wide mb-1.5">
            <span>{template.category}</span>
            <span aria-hidden="true" className="text-[#C6A15B]">·</span>
            <span className="text-[#33241F]/70">{template.style}</span>
          </div>

          <h3 className="font-serif text-lg font-bold text-[#33241F] group-hover:text-[#5B1020] transition-colors leading-snug">
            {template.name}
          </h3>

          <p className="mt-2 text-xs text-[#33241F]/80 line-clamp-2 leading-relaxed">
            {template.description}
          </p>

          {/* Key Feature highlights */}
          <div className="mt-3 pt-3 border-t border-[#FFF8ED] text-xs text-[#33241F]/70 space-y-1">
            {template.musicTitle && (
              <div className="flex items-center gap-1.5 text-[#5B1020] truncate">
                <Music className="w-3 h-3 text-[#C6A15B] shrink-0" />
                <span className="truncate">{template.musicTitle}</span>
              </div>
            )}
            <div className="text-[11px] text-[#33241F]/60">
              Includes: {template.features.slice(0, 2).join(' · ')}
            </div>
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-[#C6A15B]/20 flex items-center justify-between gap-3">
          <div>
            <div className="text-xs text-[#33241F]/60">One-time license</div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-lg font-bold text-[#5B1020] tabular-nums">
                ₹{template.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-gray-400 line-through tabular-nums">
                ₹{template.originalPrice.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onPreview(template)}
              className="p-2 border border-[#C6A15B]/40 hover:bg-[#FFF8ED] text-[#5B1020] rounded-md transition-colors cursor-pointer"
              title="Preview template"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                createMockOrder(template.id);
              }}
              className="px-3.5 py-2 bg-[#5B1020] hover:bg-[#7B1E2B] text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 shadow-sm border border-[#C6A15B]/40 cursor-pointer whitespace-nowrap"
            >
              <span>Personalize</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E6C98A]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
