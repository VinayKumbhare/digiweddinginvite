import React from 'react';
import { useApp } from '../../context/AppContext';
import { HERO_IMAGE } from '../../data/mockData';
import { OrnamentDivider } from '../layout/OrnamentDivider';
import { Sparkles, ArrowRight, Eye, ShieldCheck, HeartHandshake, Smartphone } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { navigate } = useApp();

  return (
    <div className="relative bg-[#5B1020] text-[#FFF8ED] overflow-hidden border-b-2 border-[#C6A15B]/40">
      {/* Background subtle mandala pattern */}
      <div className="absolute inset-0 bg-mandala-subtle opacity-30 pointer-events-none" />

      {/* Decorative Top Accent */}
      <div className="h-1 bg-gradient-to-r from-[#C6A15B] via-[#F5E6BE] to-[#C6A15B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Auspicious kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 border border-[#C6A15B]/50 text-xs text-[#E6C98A] tracking-wider font-medium">
              <span className="text-[#C6A15B]">✦</span>
              <span>Traditional Indian Digital Wedding Invitations</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Inviting Your Loved Ones To The Most Sacred Day Of Your Life.
            </h1>

            <p className="text-base sm:text-lg text-[#FFF8ED]/85 max-w-2xl font-editorial italic leading-relaxed">
              Replace paper envelopes with exquisite, royal digital wedding websites. Featuring live RSVPs, Google Maps venue navigation, background Shehnai melodies, and seamless WhatsApp sharing.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={() => navigate('/templates')}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[#C6A15B] to-[#E6C98A] hover:brightness-105 text-[#5B1020] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Royal Templates</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/w/rahul-weds-priya')}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-[#FFF8ED] text-xs sm:text-sm font-semibold rounded-lg border border-[#C6A15B]/50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#C6A15B]" />
                <span>View Live Sample Invite</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="pt-4 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-xs text-[#FFF8ED]/75">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                <span>Private & Secure</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-[#C6A15B]" />
                <span>100% Mobile Optimized</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-[#C6A15B]" />
                <span>Loved by 2,500+ Indian Families</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-2xl overflow-hidden border-2 border-[#C6A15B] shadow-2xl bg-[#3a0812]">
              {/* Image */}
              <img
                src={HERO_IMAGE}
                alt="Royal Indian Bride and Groom"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Bottom Card Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-white text-center">
                <div className="font-serif text-xs text-[#E6C98A] tracking-widest uppercase mb-1">
                  Rajwada Heritage Edition
                </div>
                <h3 className="font-serif text-2xl font-bold tracking-wide text-white">
                  Rahul & Priya
                </h3>
                <p className="text-xs text-[#FFF8ED]/80 mt-1">
                  14th December 2026 · Udaipur, Rajasthan
                </p>
                <button
                  onClick={() => navigate('/w/rahul-weds-priya')}
                  className="mt-4 w-full py-2 bg-[#C6A15B] hover:bg-[#d4b069] text-[#5B1020] text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
                >
                  Experience This Invitation
                </button>
              </div>
            </div>

            {/* Decorative Corner Flourishes */}
            <div className="hidden sm:block absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#E6C98A]" />
            <div className="hidden sm:block absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#E6C98A]" />
          </div>
        </div>

        {/* Claim-to-Proof 4-Column Strip (frontend-design §1.H & §5.13) */}
        <div className="mt-16 pt-8 border-t border-[#C6A15B]/30 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-white/5 rounded-lg border border-[#C6A15B]/20">
            <div className="font-serif text-2xl lg:text-3xl font-bold text-[#E6C98A] tabular-nums">
              2,500+
            </div>
            <div className="text-xs text-[#FFF8ED]/70 mt-1">Royal Weddings Published</div>
          </div>
          <div className="p-4 bg-white/5 rounded-lg border border-[#C6A15B]/20">
            <div className="font-serif text-2xl lg:text-3xl font-bold text-[#E6C98A] tabular-nums">
              98.4%
            </div>
            <div className="text-xs text-[#FFF8ED]/70 mt-1">Guest RSVP Response Rate</div>
          </div>
          <div className="p-4 bg-white/5 rounded-lg border border-[#C6A15B]/20">
            <div className="font-serif text-2xl lg:text-3xl font-bold text-[#E6C98A] tabular-nums">
              10 Mins
            </div>
            <div className="text-xs text-[#FFF8ED]/70 mt-1">Average Setup & Share Time</div>
          </div>
          <div className="p-4 bg-white/5 rounded-lg border border-[#C6A15B]/20">
            <div className="font-serif text-2xl lg:text-3xl font-bold text-[#E6C98A] tabular-nums">
              ₹0 Paper Waste
            </div>
            <div className="text-xs text-[#FFF8ED]/70 mt-1">Eco-friendly Luxury Vivah</div>
          </div>
        </div>
      </div>
    </div>
  );
};
