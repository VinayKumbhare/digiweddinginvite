import React from 'react';
import { useApp } from '../context/AppContext';
import { OrnamentDivider } from '../components/layout/OrnamentDivider';
import { PricingPreview } from '../components/home/PricingPreview';
import { Check, X, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';

export const PricingPage: React.FC = () => {
  const { navigate } = useApp();

  const matrixFeatures = [
    { name: 'Full-Screen Mobile & Desktop Website', basic: true, royal: true, imperial: true },
    { name: '1-Click WhatsApp Share with Rich Preview', basic: true, royal: true, imperial: true },
    { name: 'Google Maps Venue Routing Pin', basic: true, royal: true, imperial: true },
    { name: 'Live RSVP Guest Confirmation', basic: 'Up to 150', royal: 'Unlimited', imperial: 'Unlimited' },
    { name: 'Ceremonies / Event Schedules Included', basic: 'Up to 2', royal: 'Up to 6', imperial: 'Unlimited' },
    { name: 'Background Shehnai & Sitar Music Player', basic: false, royal: true, imperial: true },
    { name: 'High-Resolution Pre-Wedding Photo Gallery', basic: false, royal: 'Up to 20 Photos', imperial: 'Up to 50 Photos' },
    { name: 'RSVP Guest Dashboard & Excel/CSV Export', basic: false, royal: true, imperial: true },
    { name: 'Dress Code & Family Blessings Notes', basic: false, royal: true, imperial: true },
    { name: 'Bespoke Concierge Designer Dedicated Setup', basic: false, royal: false, imperial: true },
    { name: 'Custom Domain (e.g. rahulwedsankita.in)', basic: false, royal: false, imperial: true },
    { name: '24/7 Priority WhatsApp & Phone Concierge', basic: false, royal: false, imperial: true }
  ];

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto space-y-16">
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#5B1020]">
          Royal Inclusions
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#5B1020]">
          Transparent, One-Time Pricing
        </h1>
        <OrnamentDivider variant="gold" />
        <p className="text-sm sm:text-base text-[#33241F]/80">
          No subscriptions, no hidden printing charges. Every invitation package includes 1-year hosting, unlimited guest views, and dedicated support.
        </p>
      </div>

      {/* Main Pricing Cards */}
      <PricingPreview />

      {/* Comparison Matrix */}
      <div className="bg-white rounded-2xl border border-[#C6A15B]/35 shadow-md p-6 sm:p-10 space-y-6">
        <div className="text-center space-y-2 mb-8">
          <h2 className="font-serif text-2xl font-bold text-[#5B1020]">
            Feature Comparison Matrix
          </h2>
          <p className="text-xs sm:text-sm text-[#33241F]/70">
            Compare all packages side-by-side to find the right fit for your celebrations.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-[#C6A15B]/40 text-[#5B1020] font-serif text-sm">
                <th className="py-4 px-4 font-bold">Feature</th>
                <th className="py-4 px-4 text-center font-bold">Shubh Aarambh (₹1,499)</th>
                <th className="py-4 px-4 text-center font-bold bg-[#FFF8ED]">Rajwada Royal (₹2,499)</th>
                <th className="py-4 px-4 text-center font-bold">Imperial Shehnai (₹4,999)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#FFF8ED]">
              {matrixFeatures.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#FFF8ED]/30 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-[#33241F]">
                    {row.name}
                  </td>
                  <td className="py-3.5 px-4 text-center text-[#33241F]/80">
                    {typeof row.basic === 'boolean' ? (
                      row.basic ? (
                        <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="font-medium text-[#5B1020]">{row.basic}</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-center bg-[#FFF8ED]/60 font-medium text-[#5B1020]">
                    {typeof row.royal === 'boolean' ? (
                      row.royal ? (
                        <Check className="w-4 h-4 text-[#C6A15B] mx-auto stroke-[2.5]" />
                      ) : (
                        <X className="w-4 h-4 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="font-semibold text-[#5B1020]">{row.royal}</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-center text-[#33241F]/80 font-medium">
                    {typeof row.imperial === 'boolean' ? (
                      row.imperial ? (
                        <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="font-semibold text-[#5B1020]">{row.imperial}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Need Custom Concierge Banner */}
      <div className="bg-[#5B1020] text-[#FFF8ED] rounded-2xl p-8 sm:p-12 border border-[#C6A15B]/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-mandala-subtle opacity-20 pointer-events-none" />
        <div className="relative z-10 space-y-2 text-center md:text-left">
          <span className="text-xs uppercase tracking-widest text-[#E6C98A] font-semibold">
            Bespoke Service
          </span>
          <h3 className="font-serif text-2xl font-bold text-white">
            Need A Completely Custom Royal Invitation?
          </h3>
          <p className="text-xs sm:text-sm text-[#FFF8ED]/80 max-w-xl">
            Our royal design concierge can hand-craft animated video invites, custom family coat-of-arms, multi-city logistics portals, and printed gold foil matching cards.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => navigate('/contact')}
            className="w-full sm:w-auto px-6 py-3 bg-[#C6A15B] hover:bg-[#d4b069] text-[#5B1020] text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
          >
            Inquire With Concierge
          </button>
          <a
            href="https://wa.me/919820088990?text=Namaste!%20I%20am%20interested%20in%20a%20bespoke%20wedding%20invitation%20package."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};
