import React from 'react';
import { OrnamentDivider } from '../components/layout/OrnamentDivider';
import { ROYAL_HERITAGE_IMAGE, HERO_IMAGE } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { Heart, Sparkles, Shield, TreePine, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useApp();

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto space-y-16">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#5B1020]">
          Tradition Meets The Future
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#5B1020]">
          Our Royal Heritage Story
        </h1>
        <OrnamentDivider variant="gold" />
        <p className="text-sm sm:text-base text-[#33241F]/80 leading-relaxed font-editorial text-lg italic">
          "A sacred Indian wedding is not merely a single day event; it is the holy union of two ancestral lineages, celebrated with devotion, festivity, and timeless blessings."
        </p>
      </div>

      {/* Story 2-Column Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#33241F]/85 leading-relaxed">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B1020]">
            Honoring Sacred Vivah Sanskars in the Digital Age
          </h2>
          <p>
            Digi Wedding Invite was conceived in the royal city of Jaipur by wedding curators, calligraphers, and software engineers who were disheartened by the limitations of traditional paper invites: delayed courier deliveries to outstation guests, inaccurate guest counts, and hundreds of trees discarded as paper waste.
          </p>
          <p>
            We asked ourselves: <em>Could a digital invitation evoke the exact same awe, auspicious sanctity, and regal beauty as opening an embossed gold-leaf velvet wedding box from a royal palace?</em>
          </p>
          <p>
            Today, our platform combines traditional Indian motifs—kalash symbols, Sanskrit shlokas, temple borders, and licensed Shehnai ragas—with modern digital conveniences: instant WhatsApp delivery, 1-tap Google Maps directions, and real-time RSVP tracking.
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#C6A15B] shadow-xl">
            <img
              src={ROYAL_HERITAGE_IMAGE}
              alt="Royal heritage stage"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <div className="text-xs uppercase tracking-wider text-[#E6C98A] font-semibold">
                  Crafted With Devotion
                </div>
                <div className="font-serif text-lg font-bold">
                  Inspired by the Palaces of Rajasthan & Temple Architecture of Tamil Nadu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl p-8 border border-[#C6A15B]/30 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-[#5B1020] text-[#E6C98A] flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-[#5B1020]">
            Aesthetic Sanctity
          </h3>
          <p className="text-xs sm:text-sm text-[#33241F]/75 leading-relaxed">
            Every font, border, and color scheme is curated to reflect traditional Indian grandeur. No cheap clipart or generic templates.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-[#C6A15B]/30 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-[#5B1020] text-[#E6C98A] flex items-center justify-center">
            <TreePine className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-[#5B1020]">
            Eco-Friendly Vivah
          </h3>
          <p className="text-xs sm:text-sm text-[#33241F]/75 leading-relaxed">
            By shifting to digital invitations, our couples have saved over 1.2 million printed envelopes and eliminated courier transit carbon.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-[#C6A15B]/30 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-[#5B1020] text-[#E6C98A] flex items-center justify-center">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-[#5B1020]">
            Privacy & Trust
          </h3>
          <p className="text-xs sm:text-sm text-[#33241F]/75 leading-relaxed">
            Your family photos, guest telephone numbers, and venue addresses belong solely to you. We never sell data or display third-party advertisements.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-8">
        <button
          onClick={() => navigate('/templates')}
          className="px-8 py-3.5 bg-[#5B1020] hover:bg-[#7B1E2B] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-lg border border-[#C6A15B]/40 cursor-pointer"
        >
          Explore Our Heritage Templates
        </button>
      </div>
    </div>
  );
};
