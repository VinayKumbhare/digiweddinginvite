import React from 'react';
import { OrnamentDivider } from '../layout/OrnamentDivider';
import {
  MessageCircle,
  Users,
  MapPin,
  Music,
  Camera,
  CalendarCheck2,
  Sparkles,
  Smartphone
} from 'lucide-react';

export const RoyalFeatures: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'WhatsApp 1-Click Sharing',
      description: 'Generate personalized invite links with pre-formatted auspicious Sanskrit greetings that open straight in WhatsApp for all family groups.'
    },
    {
      icon: Users,
      title: 'Live RSVP & Dietary Manager',
      description: 'Track exactly who is attending each ceremony, headcounts, dietary requirements, and heartfelt blessings in real-time.'
    },
    {
      icon: MapPin,
      title: 'Google Maps Venue Routing',
      description: 'Zero lost outstation guests. Tap-to-navigate directly opens Google Maps to palace courtyards, hotels, and marriage lawns.'
    },
    {
      icon: Music,
      title: 'Auspicious Shehnai & Sitar Audio',
      description: 'Captivate guests with licensed Indian classical melodies, Vedic shlokas, and folk tunes that play smoothly upon arrival.'
    },
    {
      icon: CalendarCheck2,
      title: 'Multi-Event Wedding Timeline',
      description: 'Dedicated itinerary cards for Haldi, Mehendi, Sangeet, Baraat, Pheras, and Reception with specific dress codes and timings.'
    },
    {
      icon: Camera,
      title: 'High-Resolution Photo Gallery',
      description: 'Showcase your royal pre-wedding photoshoot and family heritage in a mobile-optimized visual slideshow.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#FFF8ED] text-[#33241F]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#5B1020]">
            Sacred Craft Meets Modern Convenience
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B1020]">
            Everything Your Royal Wedding Requires
          </h2>
          <OrnamentDivider variant="gold" />
          <p className="text-sm sm:text-base text-[#33241F]/80 leading-relaxed">
            Thoughtfully crafted to honour deep Indian family values while removing the friction of paper printing, delays, and outstation logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-[#C6A15B]/30 hover:border-[#C6A15B] transition-all hover:shadow-lg flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF8ED] text-[#5B1020] border border-[#C6A15B]/40 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#5B1020]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#33241F]">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#33241F]/75 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
