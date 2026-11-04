import React, { useState } from 'react';
import { OrnamentDivider } from '../layout/OrnamentDivider';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'How does WhatsApp invitation sharing work?',
      answer:
        'Upon publishing your wedding, you get a unique link (e.g. digiweddinginvite.in/w/rahul-weds-priya) and a 1-click "Share on WhatsApp" button. This auto-populates a royal greeting in Hindi or English, including couple names, venue city, and the link with an auspicious rich preview card.'
    },
    {
      question: 'Will the background music play on iPhones and Android devices?',
      answer:
        'Yes! In modern mobile browsers (Safari & Chrome), audio begins with an intuitive 1-tap "Play Mangal Dhwani" button to comply with mobile privacy standards, playing soothing licensed Indian shehnai, sitar, and shloka melodies.'
    },
    {
      question: 'How do guests submit their RSVP and can we download the list?',
      answer:
        'Guests simply tap "Joyfully Accept" or "Regretfully Decline", choose which functions (Haldi, Mehendi, Sangeet, Pheras, Reception) they will attend, specify how many guests are coming, and write blessings. All responses immediately populate in your Customer Dashboard where you can filter and export to CSV.'
    },
    {
      question: 'Can we change venue details or add new events after sharing?',
      answer:
        'Absolutely! Your wedding link is dynamic. Any time you update ceremony timings, add photos, or update the Google Maps pin from your customer dashboard, the changes update immediately for everyone without reprinting or resending.'
    },
    {
      question: 'Is there any guest limit or expiration on our wedding website?',
      answer:
        'No guest limits! Whether you have 50 intimate guests or 5,000 royal guests, the website handles unlimited views. Your invitation website remains live and accessible for a full year after your wedding date so guests can revisit photos and memories.'
    },
    {
      question: 'Can we add multiple languages or regional ceremonies?',
      answer:
        'Yes. You can write your welcome message, ceremony names, and family blessings in Devanagari Hindi, Sanskrit shlokas, Tamil, Telugu, Gujarati, Marathi, Punjabi, or English.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#5B1020]/5 border-t border-[#C6A15B]/25">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#5B1020]">
            Everything Explained
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B1020]">
            Frequently Asked Questions
          </h2>
          <OrnamentDivider variant="gold" />
          <p className="text-sm sm:text-base text-[#33241F]/80">
            Clear answers about digital invites, WhatsApp sharing, RSVP tracking, and music.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#C6A15B]/30 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FFF8ED]/50 transition-colors"
                >
                  <span className="font-serif text-base font-semibold text-[#33241F]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5B1020] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#33241F]/80 leading-relaxed border-t border-[#FFF8ED]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
