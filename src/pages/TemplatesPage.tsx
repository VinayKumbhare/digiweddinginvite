import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TemplateCard } from '../components/templates/TemplateCard';
import { TemplateFilterBar } from '../components/templates/TemplateFilterBar';
import { TemplatePreviewModal } from '../components/preview/TemplatePreviewModal';
import { OrnamentDivider } from '../components/layout/OrnamentDivider';
import { Template, TemplateCategory } from '../types';
import { Sparkles } from 'lucide-react';

export const TemplatesPage: React.FC = () => {
  const { templates } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high'>('popular');
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);

  const filteredTemplates = templates.filter((t) => {
    if (!t.isActive) return false;
    if (selectedCategory !== 'All' && t.category !== selectedCategory) return false;
    if (selectedStyle !== 'All' && t.style !== selectedStyle) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = t.name.toLowerCase().includes(q);
      const matchDesc = t.description.toLowerCase().includes(q);
      const matchCat = t.category.toLowerCase().includes(q);
      const matchStyle = t.style.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchCat && !matchStyle) return false;
    }
    return true;
  });

  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
  });

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#5B1020]">
          Occasions & Celebrations
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#5B1020]">
          Royal Invitation Gallery
        </h1>
        <OrnamentDivider variant="gold" />
        <p className="text-sm sm:text-base text-[#33241F]/80">
          Discover hand-crafted digital invitations designed for Indian weddings, engagements, Haldi, Sangeet, receptions, and housewarming ceremonies.
        </p>
      </div>

      {/* Filter Bar */}
      <TemplateFilterBar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedStyle={selectedStyle}
        onStyleChange={setSelectedStyle}
        sortBy={sortBy}
        onSortChange={setSortBy}
        totalCount={sortedTemplates.length}
      />

      {/* Grid */}
      {sortedTemplates.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-[#C6A15B]/30 p-8 space-y-4">
          <Sparkles className="w-10 h-10 text-[#C6A15B] mx-auto" />
          <h3 className="font-serif text-xl font-bold text-[#5B1020]">
            No templates found matching your query
          </h3>
          <p className="text-xs sm:text-sm text-[#33241F]/70 max-w-md mx-auto">
            We are continuously curating new royal themes. Try resetting your search filters to browse all active designs.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
              setSelectedStyle('All');
            }}
            className="px-5 py-2.5 bg-[#5B1020] text-white text-xs font-semibold rounded-md shadow-sm"
          >
            Show All Templates
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onPreview={(tmpl) => setPreviewTemplate(tmpl)}
            />
          ))}
        </div>
      )}

      {/* Preview Modal */}
      <TemplatePreviewModal
        template={previewTemplate}
        onClose={() => setPreviewTemplate(null)}
      />
    </div>
  );
};
