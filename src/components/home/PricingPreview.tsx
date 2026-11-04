import React from 'react';
import { OrnamentDivider } from '../layout/OrnamentDivider';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const PricingPreview: React.FC = () => {
  const { navigate, createMockOrder, templates } = useApp();

  const plans = [
    {
      name: 'Shubh Aarambh',
      tagline: 'Ideal for Intimate Haldi, Mehendi or Roka',
      price: 1499,
      originalPrice: 2999,
      popular: false,
      templateId: templates[1]?.id || 'tmpl-02',
      features: [
        'Custom Invitation Website',
        'Up to 2 Wedding Events',
        'Google Maps Pin & Routing',
        'WhatsApp 1-Click Share Button',
        'Mobile & Desktop Responsive',
        'Up to 150 Guest RSVPs',
        '1-Year Live Web Hosting'
      ]
    },
    {
      name: 'Rajwada Royal',
      tagline: 'Most Loved for Multi-Day Grand Vivah',
      price: 2499,
      originalPrice: 4999,
      popular: true,
      templateId: templates[0]?.id || 'tmpl-01',
      features: [
        'Everything in Shubh Aarambh',
        'Up to 6 Ceremonies (Haldi, Mehendi, Sangeet, Baraat, Pheras, Reception)',
        'Auspicious Shehnai & Sitar Music Player',
        'Pre-Wedding Photo Gallery (20 Photos)',
        'Unlimited Guest RSVPs',
        'Guest RSVP Dashboard & CSV Export',
        'Event-Specific Dress Codes & Details',
        'Family Blessings & Parents Tribute'
      ]
    },
    {
      name: 'Imperial Shehnai',
      tagline: 'Luxury Destination Weddings & Bespoke Concierge',
      price: 4999,
      originalPrice: 8999,
      popular: false,
      templateId: templates[3]?.id || 'tmpl-04',
      features: [
        'Everything in Rajwada Royal',
        'Personal Royal Concierge Designer to format your details',
        'High-Resolution Photo Gallery (50 Photos)',
        'Custom Monogram & Palace Border Styling',
        'Guest Wishes Digital Guestbook',
        'Outstation Guest Travel & Hotel Guide Section',
        'Priority Phone & WhatsApp Concierge Support'
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#FFF8ED]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#5B1020]">
            Transparent Royal Pricing
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B1020]">
            One Simple Fee. No Hidden Charges.
          </h2>
          <OrnamentDivider variant="gold" />
          <p className="text-sm sm:text-base text-[#33241F]/80">
            Pay once and keep your wedding website active for a full year with unlimited guest views.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-[#5B1020] text-[#FFF8ED] border-2 border-[#C6A15B] shadow-2xl scale-102'
                  : 'bg-white text-[#33241F] border border-[#C6A15B]/35 shadow-xs'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C6A15B] text-[#5B1020] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#5B1020]" />
                  Royal Choice
                </div>
              )}

              <div>
                <div className="text-center pb-6 border-b border-[#C6A15B]/30">
                  <h3
                    className={`font-serif text-2xl font-bold ${
                      plan.popular ? 'text-[#E6C98A]' : 'text-[#5B1020]'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`mt-1 text-xs ${
                      plan.popular ? 'text-[#FFF8ED]/75' : 'text-[#33241F]/60'
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  <div className="mt-5 flex items-baseline justify-center gap-2">
                    <span
                      className={`font-serif text-4xl font-bold tabular-nums ${
                        plan.popular ? 'text-white' : 'text-[#5B1020]'
                      }`}
                    >
                      ₹{plan.price.toLocaleString('en-IN')}
                    </span>
                    <span
                      className={`text-sm line-through tabular-nums ${
                        plan.popular ? 'text-[#FFF8ED]/50' : 'text-gray-400'
                      }`}
                    >
                      ₹{plan.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div
                    className={`text-[11px] mt-1 ${
                      plan.popular ? 'text-[#E6C98A]' : 'text-[#5B1020]'
                    }`}
                  >
                    One-time payment · 1-Year Hosting included
                  </div>
                </div>

                {/* Features List */}
                <div className="py-6 space-y-3">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.popular
                            ? 'bg-[#C6A15B] text-[#5B1020]'
                            : 'bg-[#FFF8ED] text-[#5B1020] border border-[#C6A15B]/50'
                        }`}
                      >
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className={plan.popular ? 'text-[#FFF8ED]/90' : 'text-[#33241F]/80'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  createMockOrder(plan.templateId);
                }}
                className={`w-full py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#C6A15B] to-[#E6C98A] text-[#5B1020] hover:brightness-105'
                    : 'bg-[#5B1020] hover:bg-[#7B1E2B] text-white border border-[#C6A15B]/40'
                }`}
              >
                <span>Select Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
