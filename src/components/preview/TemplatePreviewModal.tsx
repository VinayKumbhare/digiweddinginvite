import React, { useState } from 'react';
import { Template } from '../../types';
import { useApp } from '../../context/AppContext';
import {
  X,
  Smartphone,
  Monitor,
  Music,
  Calendar,
  MapPin,
  Volume2,
  VolumeX,
  Share2,
  Sparkles,
  ArrowRight,
  Check
} from 'lucide-react';

interface TemplatePreviewModalProps {
  template: Template | null;
  onClose: () => void;
}

export const TemplatePreviewModal: React.FC<TemplatePreviewModalProps> = ({ template, onClose }) => {
  const { createMockOrder, showToast } = useApp();
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('mobile');
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  if (!template) return null;

  const toggleMusic = () => {
    setIsPlayingMusic(!isPlayingMusic);
    showToast(
      !isPlayingMusic
        ? `Playing sample: ${template.musicTitle || 'Mangal Dhwani Shehnai'}`
        : 'Background audio paused',
      'info'
    );
  };

  const copyDemoShareLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Demo invitation link copied to clipboard!', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-between p-2 sm:p-4 overflow-hidden animate-in fade-in">
      {/* Top Controller Bar */}
      <div className="w-full max-w-6xl bg-[#5B1020] text-[#FFF8ED] rounded-xl border border-[#C6A15B]/50 px-4 py-3 flex items-center justify-between gap-4 shadow-2xl shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#E6C98A] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-sm sm:text-base font-bold text-[#E6C98A]">
                {template.name}
              </h3>
              <span className="hidden sm:inline text-xs text-[#FFF8ED]/70 font-sans">
                ({template.style})
              </span>
            </div>
            <div className="text-[11px] text-[#FFF8ED]/70">
              Interactive Preview Mode · No real payment charged
            </div>
          </div>
        </div>

        {/* Viewport device switcher & music control */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Device Toggles */}
          <div className="flex items-center bg-black/30 rounded-lg p-1 border border-[#C6A15B]/30">
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded transition-all cursor-pointer ${
                deviceMode === 'mobile'
                  ? 'bg-[#C6A15B] text-[#5B1020] font-semibold shadow'
                  : 'text-[#FFF8ED]/70 hover:text-white'
              }`}
              title="Mobile Device Preview"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Mobile (Guest View)</span>
            </button>
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded transition-all cursor-pointer ${
                deviceMode === 'desktop'
                  ? 'bg-[#C6A15B] text-[#5B1020] font-semibold shadow'
                  : 'text-[#FFF8ED]/70 hover:text-white'
              }`}
              title="Desktop Preview"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Desktop</span>
            </button>
          </div>

          {/* Music player toggle */}
          {template.musicTitle && (
            <button
              onClick={toggleMusic}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-all cursor-pointer ${
                isPlayingMusic
                  ? 'bg-[#E6C98A] text-[#5B1020] border-[#E6C98A] font-semibold animate-pulse'
                  : 'bg-white/10 text-[#E6C98A] border-[#C6A15B]/40 hover:bg-white/20'
              }`}
              title="Toggle background music"
            >
              {isPlayingMusic ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden lg:inline truncate max-w-[120px]">
                {isPlayingMusic ? 'Music Playing' : 'Play Music'}
              </span>
            </button>
          )}

          {/* Share */}
          <button
            onClick={copyDemoShareLink}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#E6C98A] border border-[#C6A15B]/30 transition-colors cursor-pointer"
            title="Copy share link"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* CTA: Personalize this template */}
          <button
            onClick={() => {
              createMockOrder(template.id);
              onClose();
            }}
            className="px-4 py-2 bg-gradient-to-r from-[#C6A15B] to-[#E6C98A] hover:brightness-105 text-[#5B1020] text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>Select & Personalize</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Preview Container */}
      <div className="flex-1 w-full max-w-6xl my-2 overflow-y-auto flex items-center justify-center">
        {deviceMode === 'mobile' ? (
          /* Mobile Phone Mockup Frame */
          <div className="relative w-full max-w-[390px] h-[720px] bg-black rounded-[48px] p-3 shadow-2xl border-4 border-[#33241F] flex flex-col">
            {/* Phone Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-[#1a1a1a] rounded-full z-30 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-black/60 mr-4" />
              <div className="w-2 h-2 rounded-full bg-blue-900/40" />
            </div>

            {/* Inner Mobile Screen Content */}
            <div className="w-full h-full bg-[#FFF8ED] rounded-[36px] overflow-y-auto scrollbar-none relative border border-[#C6A15B]/30 text-[#33241F]">
              {/* Hero inside phone */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={template.thumbnailUrl}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5B1020] via-[#5B1020]/40 to-transparent" />
                
                {/* Traditional shloka & couple */}
                <div className="absolute bottom-4 left-0 right-0 px-6 text-center text-[#FFF8ED]">
                  <div className="text-[11px] text-[#E6C98A] font-serif tracking-widest uppercase mb-1">
                    ॥ श्री गणेशाय नमः ॥
                  </div>
                  <h1 className="font-serif text-2xl font-bold tracking-wide text-white">
                    Rahul & Priya
                  </h1>
                  <p className="font-editorial text-sm italic text-[#E6C98A] mt-1">
                    Cordially invite you to celebrate their Royal Vivah
                  </p>
                  <div className="mt-2 text-[11px] text-[#FFF8ED]/90 tracking-wide font-medium">
                    14th December 2026 · Udaipur, Rajasthan
                  </div>
                </div>
              </div>

              {/* Invitation message */}
              <div className="p-6 text-center space-y-3">
                <div className="w-12 h-0.5 bg-[#C6A15B] mx-auto" />
                <h4 className="font-serif text-base font-bold text-[#5B1020]">
                  Shubh Vivah Nimantran
                </h4>
                <p className="text-xs text-[#33241F]/80 leading-relaxed font-editorial text-sm">
                  With the divine blessings of our beloved ancestors and elders, we request the honor of your gracious presence as we tie the auspicious knot.
                </p>

                {/* Events list preview */}
                <div className="pt-4 space-y-3 text-left">
                  <div className="p-3 rounded-lg bg-white border border-[#C6A15B]/30 shadow-xs">
                    <div className="flex items-center justify-between text-[#5B1020] text-xs font-bold font-serif">
                      <span>Shubh Sangeet & Mehendi</span>
                      <span className="text-[#C6A15B]">Dec 13</span>
                    </div>
                    <div className="text-[11px] text-[#33241F]/70 mt-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C6A15B]" />
                      <span>04:00 PM onwards · City Palace Courtyard</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white border border-[#C6A15B]/30 shadow-xs">
                    <div className="flex items-center justify-between text-[#5B1020] text-xs font-bold font-serif">
                      <span>Baraat & Varmala</span>
                      <span className="text-[#C6A15B]">Dec 14</span>
                    </div>
                    <div className="text-[11px] text-[#33241F]/70 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C6A15B]" />
                      <span>06:30 PM · Jagmandir Island Palace</span>
                    </div>
                  </div>
                </div>

                {/* RSVP teaser inside mobile */}
                <div className="mt-6 p-4 rounded-xl bg-[#5B1020] text-[#FFF8ED] text-center space-y-2">
                  <div className="font-serif text-sm font-bold text-[#E6C98A]">
                    Confirm Attendance (RSVP)
                  </div>
                  <p className="text-[11px] text-[#FFF8ED]/80">
                    Let us know if you will grace the auspicious celebrations.
                  </p>
                  <div className="w-full py-2 bg-[#C6A15B] text-[#5B1020] text-xs font-bold rounded">
                    Submit RSVP Response
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Desktop Browser Mockup Frame */
          <div className="w-full h-full max-h-[700px] bg-white rounded-xl shadow-2xl border border-[#C6A15B]/40 overflow-hidden flex flex-col">
            {/* Browser top chrome */}
            <div className="bg-[#5B1020]/10 border-b border-[#C6A15B]/30 px-4 py-2.5 flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-[#33241F]/70 border border-[#C6A15B]/20 text-center font-mono">
                https://digiweddinginvite.in/w/rahul-weds-priya
              </div>
            </div>

            {/* Desktop Screen Content */}
            <div className="flex-1 overflow-y-auto bg-[#FFF8ED] text-[#33241F]">
              {/* Full Desktop Header Hero */}
              <div className="relative h-80 overflow-hidden bg-[#5B1020]">
                <img
                  src={template.thumbnailUrl}
                  alt={template.name}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5B1020] via-black/30 to-transparent flex flex-col items-center justify-center text-center p-6 text-white">
                  <div className="text-xs font-serif text-[#E6C98A] uppercase tracking-widest mb-2">
                    ॥ श्री गणेशाय नमः ॥
                  </div>
                  <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-wider text-[#FFF8ED]">
                    Rahul & Priya
                  </h1>
                  <p className="font-editorial text-lg italic text-[#E6C98A] mt-2">
                    Invite you to celebrate their wedding celebrations
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-[#FFF8ED]/90 tracking-wide font-medium bg-black/40 px-4 py-1.5 rounded-full border border-[#C6A15B]/40">
                    <span>14th December 2026</span>
                    <span>·</span>
                    <span>Udaipur, Rajasthan</span>
                  </div>
                </div>
              </div>

              {/* Details & Features Grid */}
              <div className="max-w-4xl mx-auto p-8 space-y-8">
                <div className="text-center max-w-xl mx-auto">
                  <h3 className="font-serif text-xl font-bold text-[#5B1020]">
                    Template Features Included
                  </h3>
                  <p className="mt-2 text-xs text-[#33241F]/70">
                    Everything you need to deliver an unforgettable royal digital invitation to your guests.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {template.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg bg-white border border-[#C6A15B]/30 flex items-start gap-3 shadow-xs"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#FFF8ED] text-[#5B1020] border border-[#C6A15B]/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#C6A15B]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#33241F]">{feat}</div>
                        <div className="text-[11px] text-[#33241F]/60 mt-0.5">
                          Instant live updates, mobile-optimized, and frictionless for outstation guests.
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Summary Bar */}
      <div className="w-full max-w-6xl bg-white/90 backdrop-blur-md rounded-xl border border-[#C6A15B]/40 px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#33241F] shadow-lg shrink-0">
        <div className="flex items-center gap-3">
          <div className="font-serif text-base font-bold text-[#5B1020]">
            ₹{template.price.toLocaleString('en-IN')}
          </div>
          <span className="text-gray-400 line-through">₹{template.originalPrice.toLocaleString('en-IN')}</span>
          <span className="text-[#5B1020] font-semibold">50% Season Discount</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 hover:bg-gray-100 rounded text-gray-700 cursor-pointer"
          >
            Close Preview
          </button>
          <button
            onClick={() => {
              createMockOrder(template.id);
              onClose();
            }}
            className="px-5 py-2 bg-[#5B1020] hover:bg-[#7B1E2B] text-white font-semibold rounded shadow-sm border border-[#C6A15B]/40 flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E6C98A]" />
            Choose & Customize
          </button>
        </div>
      </div>
    </div>
  );
};
