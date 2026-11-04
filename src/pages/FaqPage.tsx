import React from 'react';
import { OrnamentDivider } from '../components/layout/OrnamentDivider';
import { FaqAccordion } from '../components/home/FaqAccordion';
import { useApp } from '../context/AppContext';
import { HelpCircle, MessageCircle } from 'lucide-react';

export const FaqPage: React.FC = () => {
  const { navigate } = useApp();

  return (
    <div className="py-12 px-4 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#5B1020]">
          Knowledge Base & Help
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#5B1020]">
          Everything You Need To Know
        </h1>
        <OrnamentDivider variant="gold" />
        <p className="text-sm sm:text-base text-[#33241F]/80">
          Find instant answers to the most common questions asked by brides, grooms, and their families.
        </p>
      </div>

      {/* Accordion Component */}
      <FaqAccordion />

      {/* Support CTA */}
      <div className="bg-white rounded-2xl p-8 border border-[#C6A15B]/35 shadow-xs text-center space-y-4">
        <HelpCircle className="w-10 h-10 text-[#C6A15B] mx-auto" />
        <h3 className="font-serif text-xl font-bold text-[#5B1020]">
          Still Have A Question?
        </h3>
        <p className="text-xs sm:text-sm text-[#33241F]/70 max-w-md mx-auto">
          Our royal wedding concierge team is happy to answer any doubts over WhatsApp or direct telephone.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => navigate('/contact')}
            className="px-5 py-2.5 bg-[#5B1020] text-white text-xs font-semibold rounded-md hover:bg-[#7B1E2B] transition-colors"
          >
            Contact Support
          </button>
          <a
            href="https://wa.me/919820088990?text=Namaste!%20I%20have%20a%20question%20regarding%20digital%20wedding%20invites."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#25D366] text-white text-xs font-semibold rounded-md flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
