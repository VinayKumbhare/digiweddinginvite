import React from 'react';
import { OrnamentDivider } from '../layout/OrnamentDivider';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        'With 400+ outstation guests travelling to our destination wedding in Udaipur, paper cards were impossible to coordinate. Digi Wedding Invite allowed our guests to RSVP with 1 click on WhatsApp and navigate straight to the palace with Google Maps. The Shehnai music on entry brought tears to our grandparents.',
      couple: 'Priya & Rahul Verma',
      city: 'Udaipur & Mumbai',
      occasion: 'Rajwada Royal Vivah',
      date: 'Wedding in December 2026'
    },
    {
      quote:
        'The aesthetic exceeded all expectations! The traditional temple borders and Kanjivaram color palettes looked so divine. We tracked 280 RSVPs within 48 hours of sharing on our family WhatsApp groups. Truly modern convenience without sacrificing traditional sanctity.',
      couple: 'Ananya & Arjun Nair',
      city: 'Bengaluru & Chennai',
      occasion: 'Traditional Muhurtham',
      date: 'Wedding in January 2027'
    },
    {
      quote:
        'Our NRI relatives in the USA and London felt so connected. They could view the high-definition photo gallery, the Muhurtham timings in IST, and send direct heartfelt blessings before flying in. Outstanding craftsmanship!',
      couple: 'Sanjana & Kunal Mehta',
      city: 'New Delhi & London',
      occasion: 'Palace Sangeet & Vivah',
      date: 'Wedding in November 2026'
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#FFF8ED]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#5B1020]">
            Blessings & Words of Joy
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B1020]">
            Loved by Royal Indian Families
          </h2>
          <OrnamentDivider variant="gold" />
          <p className="text-sm sm:text-base text-[#33241F]/80">
            Real couples who celebrated their union with Digi Wedding Invite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 border border-[#C6A15B]/35 shadow-xs flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                {/* 5 gold stars */}
                <div className="flex items-center gap-1 text-[#C6A15B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C6A15B]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#33241F]/85 italic leading-relaxed font-editorial text-base">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#FFF8ED]">
                <div className="font-serif text-base font-bold text-[#5B1020]">
                  {t.couple}
                </div>
                {/* Zero-Pill metadata with dots */}
                <div className="text-xs text-[#33241F]/60 mt-0.5 flex items-center gap-1.5">
                  <span>{t.city}</span>
                  <span>·</span>
                  <span>{t.occasion}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
