import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { HeroSection } from '../components/home/HeroSection';
import { TemplateCard } from '../components/templates/TemplateCard';
import { TemplateFilterBar } from '../components/templates/TemplateFilterBar';
import { HowItWorks } from '../components/home/HowItWorks';
import { RoyalFeatures } from '../components/home/RoyalFeatures';
import { PricingPreview } from '../components/home/PricingPreview';
import { Testimonials } from '../components/home/Testimonials';
import { FaqAccordion } from '../components/home/FaqAccordion';
import { OrnamentDivider } from '../components/layout/OrnamentDivider';
import { TemplatePreviewModal } from '../components/preview/TemplatePreviewModal';
import { Template, TemplateCategory } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { templates, navigate } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high'>('popular');
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);

  // Filter templates
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

  // Sort
  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
  });

  return (
    <div className="space-y-0">
      {/* Hero */}
      <HeroSection />

      {/* Featured Templates Showcase */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#5B1020]">
            The Heritage Collection
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B1020]">
            Exquisite Digital Wedding Templates
          </h2>
          <OrnamentDivider variant="gold" />
          <p className="text-sm sm:text-base text-[#33241F]/80">
            Each invitation is architected with sacred Indian motifs, responsive mobile views, and seamless WhatsApp RSVP management.
          </p>
        </div>

        {/* Filter bar */}
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

        {/* Templates Grid */}
        {sortedTemplates.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-[#C6A15B]/30 p-8 space-y-3">
            <Sparkles className="w-8 h-8 text-[#C6A15B] mx-auto" />
            <h3 className="font-serif text-lg font-bold text-[#5B1020]">
              No templates found matching your search
            </h3>
            <p className="text-xs text-[#33241F]/70">
              Try adjusting your search criteria or resetting filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setSelectedStyle('All');
              }}
              className="mt-2 px-4 py-2 bg-[#5B1020] text-white text-xs font-semibold rounded"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedTemplates.slice(0, 6).map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onPreview={(tmpl) => setPreviewTemplate(tmpl)}
              />
            ))}
          </div>
        )}

        {/* View all button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/templates')}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#5B1020] text-[#5B1020] hover:bg-[#5B1020] hover:text-[#FFF8ED] text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
          >
            <span>View All Occasion Templates</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* How it Works */}
      <HowItWorks />

      {/* Royal Features */}
      <RoyalFeatures />

      {/* Pricing Preview */}
      <PricingPreview />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FaqAccordion />

      {/* Template Preview Modal */}
      <TemplatePreviewModal
        template={previewTemplate}
        onClose={() => setPreviewTemplate(null)}
      />
    </div>
  );
};
