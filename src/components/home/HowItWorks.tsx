import React from 'react';
import { OrnamentDivider } from '../layout/OrnamentDivider';
import { Sparkles, Palette, Edit3, Send } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const HowItWorks: React.FC = () => {
  const { navigate } = useApp();

  const steps = [
    {
      num: '01',
      icon: Palette,
      title: 'Select Royal Aesthetic',
      description: 'Explore hand-curated designs inspired by Rajputana forts, South Indian temple architecture, Mughal motifs, and pastel floral gardens.'
    },
    {
      num: '02',
      icon: Edit3,
      title: 'Personalize In Minutes',
      description: 'Input bride & groom details, parents blessings, functions schedule, Google Maps venue links, and favorite romantic photographs.'
    },
    {
      num: '03',
      icon: Send,
      title: 'Publish & Share Worldwide',
      description: 'Receive your unique web link (e.g. digiweddinginvite.in/w/your-names) and broadcast via WhatsApp to family, relatives, and friends.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#5B1020]/5 border-y border-[#C6A15B]/25">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#5B1020]">
            Simple & Auspicious
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B1020]">
            How It Works in 3 Royal Steps
          </h2>
          <OrnamentDivider variant="gold" />
          <p className="text-sm sm:text-base text-[#33241F]/80">
            No technical knowledge or coding needed. From selection to live sharing in under 10 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-[#C6A15B]/30 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#5B1020] text-[#E6C98A] flex items-center justify-center border border-[#C6A15B]/40 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-3xl font-bold text-[#C6A15B]/40">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#33241F]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#33241F]/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/templates')}
            className="px-6 py-3 bg-[#5B1020] hover:bg-[#7B1E2B] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md border border-[#C6A15B]/50 cursor-pointer transition-colors"
          >
            Start Personalizing Now
          </button>
        </div>
      </div>
    </section>
  );
};
