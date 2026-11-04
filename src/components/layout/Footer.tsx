import React from 'react';
import { useApp } from '../../context/AppContext';
import { MessageCircle, Heart, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useApp();

  return (
    <footer className="bg-[#5B1020] text-[#FFF8ED] border-t-2 border-[#C6A15B]/50 relative overflow-hidden">
      {/* Decorative top pattern border */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#C6A15B] via-[#F5E6BE] to-[#C6A15B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: Brand & Craft */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#3a0812] border border-[#C6A15B] flex items-center justify-center text-[#E6C98A]">
                <span className="font-serif text-base font-bold">D</span>
              </div>
              <span className="font-serif text-lg font-bold tracking-wider text-[#E6C98A]">
                DIGI WEDDING INVITE
              </span>
            </div>
            <p className="text-sm text-[#FFF8ED]/80 leading-relaxed">
              Curating royal, timeless digital wedding invitations for discerning couples worldwide. Honoring sacred traditions with modern elegance.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#E6C98A]">
              <span>Made with devotion in India</span>
              <Heart className="w-3.5 h-3.5 fill-[#C6A15B] text-[#C6A15B]" />
            </div>
          </div>

          {/* Col 2: Occasions & Templates */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#E6C98A] uppercase mb-4">
              Occasions
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF8ED]/80">
              <li>
                <button
                  onClick={() => navigate('/templates')}
                  className="hover:text-[#E6C98A] transition-colors cursor-pointer"
                >
                  Royal Vivah (Weddings)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/templates')}
                  className="hover:text-[#E6C98A] transition-colors cursor-pointer"
                >
                  Roka & Sagan (Engagement)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/templates')}
                  className="hover:text-[#E6C98A] transition-colors cursor-pointer"
                >
                  Phoolon Ki Haldi Ceremony
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/templates')}
                  className="hover:text-[#E6C98A] transition-colors cursor-pointer"
                >
                  Sangeet & Mehendi Night
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/templates')}
                  className="hover:text-[#E6C98A] transition-colors cursor-pointer"
                >
                  Grand Dawat & Reception
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/templates')}
                  className="hover:text-[#E6C98A] transition-colors cursor-pointer"
                >
                  Griha Pravesh & Anniversaries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Platform & Assistance */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#E6C98A] uppercase mb-4">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF8ED]/80">
              <li>
                <button
                  onClick={() => navigate('/pricing')}
                  className="hover:text-[#E6C98A] transition-colors cursor-pointer"
                >
                  Pricing & Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/w/rahul-weds-priya')}
                  className="hover:text-[#E6C98A] transition-colors cursor-pointer"
                >
                  Live Sample Wedding
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="hover:text-[#E6C98A] transition-colors cursor-pointer"
                >
                  Our Royal Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/faq')}
                  className="hover:text-[#E6C98A] transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="hover:text-[#E6C98A] transition-colors cursor-pointer"
                >
                  Concierge Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="hover:text-[#E6C98A] transition-colors cursor-pointer"
                >
                  Customer Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Royal Concierge & WhatsApp */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#E6C98A] uppercase mb-4">
              Royal Concierge
            </h4>
            <p className="text-xs text-[#FFF8ED]/80 leading-relaxed">
              Need personalized bespoke customization or assistance for your grand celebrations? Speak directly with our wedding stylists.
            </p>
            <div className="space-y-2 text-xs text-[#FFF8ED]/80">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>+91 98200 88990 (10 AM - 8 PM IST)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>namaste@digiweddinginvite.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Jaipur & Mumbai, India</span>
              </div>
            </div>

            <a
              href="https://wa.me/919820088990?text=Namaste!%20I%20would%20like%20to%20inquire%20about%20a%20luxury%20digital%20wedding%20invitation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-md transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-[#C6A15B]/30 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFF8ED]/60 gap-4">
          <p>© {new Date().getFullYear()} Digi Wedding Invite. All rights reserved. Commercial SaaS Edition.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate('/privacy')}
              className="hover:text-[#E6C98A] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate('/terms')}
              className="hover:text-[#E6C98A] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="hover:text-[#E6C98A] transition-colors cursor-pointer"
            >
              Bespoke Inquiries
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
