import React from 'react';
import { TemplateCategory } from '../../types';
import { Search, X, SlidersHorizontal } from 'lucide-react';

interface TemplateFilterBarProps {
  selectedCategory: TemplateCategory;
  onSelectCategory: (cat: TemplateCategory) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedStyle: string;
  onStyleChange: (s: string) => void;
  sortBy: 'popular' | 'price-low' | 'price-high';
  onSortChange: (sort: 'popular' | 'price-low' | 'price-high') => void;
  totalCount: number;
}

const CATEGORIES: TemplateCategory[] = [
  'All',
  'Wedding',
  'Engagement',
  'Haldi',
  'Mehendi',
  'Reception',
  'Anniversary',
  'Housewarming'
];

export const TemplateFilterBar: React.FC<TemplateFilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  selectedStyle,
  onStyleChange,
  sortBy,
  onSortChange,
  totalCount
}) => {
  return (
    <div className="space-y-4 mb-8">
      {/* Top search & sorting row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B1020]/60" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search royal templates (e.g. Rajwada, Haldi, Sangeet)..."
            className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-white rounded-lg border border-[#C6A15B]/35 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none placeholder-[#33241F]/40"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort & Filter Controls */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          <div className="flex items-center gap-2 text-xs text-[#33241F]/70">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span className="hidden sm:inline">Style:</span>
            <select
              value={selectedStyle}
              onChange={(e) => onStyleChange(e.target.value)}
              className="py-1.5 px-2 bg-white rounded border border-[#C6A15B]/30 text-xs text-[#33241F] focus:outline-none"
            >
              <option value="All">All Styles</option>
              <option value="Royal Rajasthani">Royal Rajasthani</option>
              <option value="South Indian Heritage">South Indian Heritage</option>
              <option value="Contemporary Mughal">Contemporary Mughal</option>
              <option value="Floral Pastel">Floral Pastel</option>
              <option value="Velvet Regal">Velvet Regal</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#33241F]/70">
            <span className="hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as any)}
              className="py-1.5 px-2 bg-white rounded border border-[#C6A15B]/30 text-xs text-[#33241F] focus:outline-none"
            >
              <option value="popular">Royal Curations</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="text-xs text-[#5B1020] font-semibold whitespace-nowrap">
            {totalCount} Designs
          </div>
        </div>
      </div>

      {/* Interactive Category Segmented Control */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const active = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                active
                  ? 'bg-[#5B1020] text-[#FFF8ED] shadow-sm border border-[#C6A15B]/60'
                  : 'bg-white/80 hover:bg-white text-[#33241F]/80 border border-[#C6A15B]/20 hover:border-[#C6A15B]/50'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};
