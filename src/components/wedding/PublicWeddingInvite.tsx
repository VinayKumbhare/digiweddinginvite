import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { OrnamentDivider } from '../layout/OrnamentDivider';
import {
  Calendar,
  Clock,
  MapPin,
  Share2,
  CheckCircle,
  Music,
  Volume2,
  VolumeX,
  ExternalLink,
  Heart,
  Send,
  MessageCircle,
  Copy,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';

interface PublicWeddingInviteProps {
  slug: string;
}

export const PublicWeddingInvite: React.FC<PublicWeddingInviteProps> = ({ slug }) => {
  const { weddings, submitRsvp, showToast, navigate } = useApp();
  
  // Find wedding by slug (or fallback to first wedding)
  const wedding = weddings.find((w) => w.slug === slug) || weddings[0];

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  // RSVP Form State
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [attendeesCount, setAttendeesCount] = useState(2);
  const [attendanceStatus, setAttendanceStatus] = useState<'attending' | 'declined' | 'tentative'>('attending');
  const [selectedEvents, setSelectedEvents] = useState<string[]>(
    wedding?.events.map((e) => e.title) || []
  );
  const [blessingMessage, setBlessingMessage] = useState('');
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  // Countdown timer calculations
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 42,
    hours: 8,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(`${wedding?.weddingDate || '2026-12-14'}T${wedding?.weddingTime ? '19:30:00' : '00:00:00'}`).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [wedding]);

  const toggleEvent = (title: string) => {
    setSelectedEvents((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) {
      showToast('Please enter your full name', 'error');
      return;
    }

    submitRsvp({
      weddingId: wedding.id,
      guestName,
      guestPhone,
      guestEmail,
      attendeesCount: attendanceStatus === 'declined' ? 0 : attendeesCount,
      attendanceStatus,
      eventsAttending: attendanceStatus === 'declined' ? [] : selectedEvents,
      message: blessingMessage
    });

    setRsvpSubmitted(true);
  };

  const handleShareWhatsApp = () => {
    const inviteUrl = window.location.href;
    const text = encodeURIComponent(
      `*Shubh Vivah Nimantran* 🪔\n\nWith great joy, you are cordially invited to celebrate the royal wedding of *${wedding.brideName} & ${wedding.groomName}* in ${wedding.city}.\n\nView complete invitation, venue location & RSVP online here:\n${inviteUrl}\n\nWe look forward to your gracious blessings!`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const copyInviteLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Invitation link copied to clipboard!', 'success');
  };

  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#33241F] relative">
      {/* Floating Audio & Navigation Bar */}
      <div className="fixed top-3 left-3 right-3 sm:left-6 sm:right-6 z-40 flex items-center justify-between pointer-events-none">
        <button
          onClick={() => navigate('/templates')}
          className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 bg-[#5B1020]/90 backdrop-blur-md text-[#FFF8ED] text-xs rounded-full border border-[#C6A15B]/50 hover:bg-[#5B1020] transition-colors shadow-md cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#E6C98A]" />
          <span>Gallery</span>
        </button>

        <div className="pointer-events-auto flex items-center gap-2">
          {/* Music Controller */}
          <button
            onClick={() => {
              setIsPlayingMusic(!isPlayingMusic);
              showToast(
                !isPlayingMusic
                  ? `Playing: ${wedding.backgroundMusicTitle || 'Mangal Dhwani Shehnai'}`
                  : 'Audio paused',
                'info'
              );
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md border transition-all cursor-pointer shadow-md ${
              isPlayingMusic
                ? 'bg-[#5B1020] text-[#E6C98A] border-[#C6A15B] animate-pulse'
                : 'bg-white/90 text-[#5B1020] border-[#C6A15B]/40 hover:bg-white'
            }`}
          >
            {isPlayingMusic ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">
              {isPlayingMusic ? 'Mangal Dhwani Playing' : 'Play Shehnai'}
            </span>
          </button>

          {/* WhatsApp Share Button */}
          <button
            onClick={handleShareWhatsApp}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-full shadow-md transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span className="hidden sm:inline">Share on WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-[#5B1020] text-[#FFF8ED] overflow-hidden">
        {/* Background Image with Deep Maroon Overlay Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={wedding.coverImage}
            alt={`${wedding.brideName} & ${wedding.groomName}`}
            className="w-full h-full object-cover opacity-35 filter brightness-75 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#5B1020]/90 via-[#5B1020]/60 to-[#5B1020]" />
          <div className="absolute inset-0 bg-mandala-subtle opacity-40" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          {/* Sacred Inscription */}
          <div className="space-y-1">
            <span className="text-sm sm:text-base font-serif text-[#E6C98A] tracking-widest uppercase">
              ॥ श्री गणेशाय नमः ॥
            </span>
            <div className="text-[11px] sm:text-xs text-[#FFF8ED]/75 tracking-wider uppercase">
              Vakratunda Mahakaya Suryakoti Samaprabha
            </div>
          </div>

          <OrnamentDivider variant="ivory" subtle />

          {/* Couple Names */}
          <div className="space-y-2">
            <div className="text-xs sm:text-sm font-editorial italic tracking-wide text-[#E6C98A]">
              Together with their families, cordially invite you to the wedding of
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide text-white drop-shadow-md">
              {wedding.brideName}
              <span className="block my-2 text-2xl sm:text-3xl text-[#C6A15B] font-editorial italic">
                weds
              </span>
              {wedding.groomName}
            </h1>
          </div>

          {/* Date & Location */}
          <div className="pt-2 text-base sm:text-lg font-serif text-[#E6C98A] tracking-wider flex items-center justify-center gap-3">
            <span>{wedding.weddingDate}</span>
            <span className="text-white/40">·</span>
            <span>{wedding.city}</span>
          </div>

          {/* Countdown Clock */}
          <div className="pt-6 max-w-md mx-auto">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#E6C98A] mb-3">
              Auspicious Muhurtham Countdown
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg border border-[#C6A15B]/40">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {timeLeft.days}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#E6C98A] mt-1">Days</div>
              </div>
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg border border-[#C6A15B]/40">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {timeLeft.hours}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#E6C98A] mt-1">Hours</div>
              </div>
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg border border-[#C6A15B]/40">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {timeLeft.minutes}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#E6C98A] mt-1">Mins</div>
              </div>
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-lg border border-[#C6A15B]/40">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {timeLeft.seconds}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#E6C98A] mt-1">Secs</div>
              </div>
            </div>
          </div>

          {/* Quick CTA */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#rsvp-section"
              className="px-6 py-3 bg-gradient-to-r from-[#C6A15B] to-[#E6C98A] text-[#5B1020] text-xs font-bold uppercase tracking-widest rounded-md hover:brightness-105 transition-all shadow-lg"
            >
              Confirm Your Attendance
            </a>
            <button
              onClick={copyInviteLink}
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-[#FFF8ED] text-xs font-medium rounded-md border border-[#C6A15B]/40 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5 text-[#E6C98A]" />
              <span>Copy Link</span>
            </button>
          </div>
        </div>
      </section>

      {/* Sacred Welcome Message & Family Heritage */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#5B1020] font-semibold">
            Heartfelt Blessings
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B1020]">
            With The Grace Of God & Ancestors
          </h2>
          <OrnamentDivider variant="gold" />
          <p className="max-w-2xl mx-auto font-editorial text-lg sm:text-xl text-[#33241F]/85 leading-relaxed italic">
            "{wedding.welcomeMessage}"
          </p>
        </div>

        {/* Parents Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {/* Bride's Family */}
          <div className="p-6 bg-white rounded-xl border border-[#C6A15B]/30 shadow-xs relative">
            <div className="text-xs uppercase tracking-wider text-[#5B1020] font-semibold mb-2">
              Bride's Family
            </div>
            <h4 className="font-serif text-lg font-bold text-[#33241F]">
              {wedding.brideName}
            </h4>
            <div className="text-xs text-[#33241F]/70 mt-1">Daughter of</div>
            <div className="mt-3 text-sm font-medium text-[#5B1020] space-y-0.5">
              <div>{wedding.brideParents.mother}</div>
              <div>& {wedding.brideParents.father}</div>
            </div>
          </div>

          {/* Groom's Family */}
          <div className="p-6 bg-white rounded-xl border border-[#C6A15B]/30 shadow-xs relative">
            <div className="text-xs uppercase tracking-wider text-[#5B1020] font-semibold mb-2">
              Groom's Family
            </div>
            <h4 className="font-serif text-lg font-bold text-[#33241F]">
              {wedding.groomName}
            </h4>
            <div className="text-xs text-[#33241F]/70 mt-1">Son of</div>
            <div className="mt-3 text-sm font-medium text-[#5B1020] space-y-0.5">
              <div>{wedding.groomParents.mother}</div>
              <div>& {wedding.groomParents.father}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Events Schedule */}
      <section className="py-20 px-4 bg-[#5B1020]/5 border-y border-[#C6A15B]/25">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-14">
            <div className="text-xs uppercase tracking-widest text-[#5B1020] font-semibold">
              Sacred Timeline
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B1020]">
              Wedding Celebrations
            </h2>
            <OrnamentDivider variant="gold" />
            <p className="text-xs sm:text-sm text-[#33241F]/75">
              Kindly join us in all ceremonies as we begin our auspicious journey together.
            </p>
          </div>

          <div className="space-y-6">
            {wedding.events.map((event, idx) => (
              <div
                key={event.id}
                className="bg-white rounded-xl p-6 sm:p-8 border border-[#C6A15B]/35 hover:border-[#C6A15B] transition-all shadow-sm hover:shadow-md grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                {/* Event number / date badge */}
                <div className="md:col-span-3 text-center md:text-left md:border-r border-[#FFF8ED] md:pr-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                    Event 0{idx + 1}
                  </div>
                  <div className="font-serif text-xl sm:text-2xl font-bold text-[#5B1020] mt-1">
                    {event.date.split(',')[0]}
                  </div>
                  <div className="text-xs text-[#33241F]/70 flex items-center justify-center md:justify-start gap-1 mt-1">
                    <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>{event.time}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="md:col-span-6 space-y-2 text-center md:text-left">
                  <h3 className="font-serif text-xl font-bold text-[#33241F]">
                    {event.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#33241F]/80 leading-relaxed">
                    {event.description}
                  </p>
                  {event.dressCode && (
                    <div className="text-xs text-[#5B1020] pt-1 font-medium">
                      <span className="font-semibold">Attire:</span> {event.dressCode}
                    </div>
                  )}
                  <div className="text-xs text-[#33241F]/70 pt-1 flex items-start justify-center md:justify-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#33241F]">{event.venueName}</div>
                      <div className="text-[11px] text-[#33241F]/60">{event.venueAddress}</div>
                    </div>
                  </div>
                </div>

                {/* Action: Google Maps */}
                <div className="md:col-span-3 flex flex-col gap-2 justify-center items-center md:items-end">
                  <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2 bg-[#FFF8ED] hover:bg-[#5B1020] text-[#5B1020] hover:text-[#FFF8ED] border border-[#C6A15B]/60 text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <div className="text-xs uppercase tracking-widest text-[#5B1020] font-semibold">
            Cherished Memories
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B1020]">
            Moments Of Love
          </h2>
          <OrnamentDivider variant="gold" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {wedding.gallery.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo.url)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-[#C6A15B]/30 cursor-pointer shadow-xs"
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-xs text-white font-medium">{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for photo zoom */}
        {activePhoto && (
          <div
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 p-4 flex items-center justify-center cursor-pointer"
          >
            <img
              src={activePhoto}
              alt="Zoomed view"
              className="max-w-4xl max-h-[85vh] rounded-lg shadow-2xl object-contain border border-[#C6A15B]/50"
            />
          </div>
        )}
      </section>

      {/* RSVP Section (FR-07) */}
      <section id="rsvp-section" className="py-20 px-4 bg-[#5B1020] text-[#FFF8ED] relative">
        <div className="absolute inset-0 bg-mandala-subtle opacity-20" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs uppercase tracking-widest text-[#E6C98A] font-semibold">
              R.S.V.P.
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Confirm Your Gracious Presence
            </h2>
            <OrnamentDivider variant="ivory" subtle />
            <p className="text-xs sm:text-sm text-[#FFF8ED]/80 leading-relaxed">
              Your presence will multiply our joy manifold. Kindly respond by December 1st, 2026.
            </p>
          </div>

          {rsvpSubmitted ? (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-[#C6A15B]/50 text-center space-y-4">
              <div className="w-16 h-16 bg-[#C6A15B] rounded-full mx-auto flex items-center justify-center text-[#5B1020]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#E6C98A]">
                Dhanyawad, {guestName}!
              </h3>
              <p className="text-sm text-[#FFF8ED]/90 max-w-md mx-auto">
                Your RSVP response has been recorded in the royal guest register. We eagerly look forward to welcoming you to the celebrations!
              </p>
              <button
                onClick={() => setRsvpSubmitted(false)}
                className="mt-4 px-4 py-2 bg-white/15 hover:bg-white/25 text-xs text-[#E6C98A] rounded-md transition-colors cursor-pointer"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleRsvpSubmit}
              className="bg-white/95 text-[#33241F] rounded-2xl p-6 sm:p-8 border border-[#C6A15B]/60 shadow-2xl space-y-5"
            >
              {/* Attendance Radio */}
              <div>
                <label className="block text-xs font-semibold text-[#5B1020] uppercase tracking-wider mb-2">
                  Will you grace our celebrations? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttendanceStatus('attending')}
                    className={`py-3 px-4 rounded-lg text-xs font-semibold border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      attendanceStatus === 'attending'
                        ? 'bg-[#5B1020] text-white border-[#5B1020] shadow-sm'
                        : 'bg-white text-[#33241F] border-gray-200 hover:border-[#C6A15B]'
                    }`}
                  >
                    <span>Joyfully Accept</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendanceStatus('declined')}
                    className={`py-3 px-4 rounded-lg text-xs font-semibold border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      attendanceStatus === 'declined'
                        ? 'bg-gray-800 text-white border-gray-800 shadow-sm'
                        : 'bg-white text-[#33241F] border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <span>Regretfully Decline</span>
                  </button>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#33241F] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Shri Vikram Rathore & Family"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#33241F] mb-1">
                    Mobile Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="+91 98200 12345"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none"
                  />
                </div>
              </div>

              {attendanceStatus === 'attending' && (
                <>
                  {/* Attendees Count */}
                  <div>
                    <label className="block text-xs font-medium text-[#33241F] mb-1">
                      Total Number of Guests Attending *
                    </label>
                    <select
                      value={attendeesCount}
                      onChange={(e) => setAttendeesCount(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none bg-white"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Events Attending Checkboxes */}
                  <div>
                    <label className="block text-xs font-medium text-[#33241F] mb-2">
                      Which functions will you attend?
                    </label>
                    <div className="space-y-2">
                      {wedding.events.map((ev) => (
                        <label
                          key={ev.id}
                          className="flex items-center gap-3 p-2.5 rounded-lg border border-gray-100 hover:bg-[#FFF8ED]/50 cursor-pointer text-xs"
                        >
                          <input
                            type="checkbox"
                            checked={selectedEvents.includes(ev.title)}
                            onChange={() => toggleEvent(ev.title)}
                            className="w-4 h-4 accent-[#5B1020] rounded"
                          />
                          <span className="font-medium text-[#33241F]">{ev.title}</span>
                          <span className="text-gray-400 text-[11px] ml-auto">{ev.date.split(',')[0]}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Blessings Note */}
              <div>
                <label className="block text-xs font-medium text-[#33241F] mb-1">
                  Wishes & Warm Blessings for the Couple
                </label>
                <textarea
                  rows={3}
                  value={blessingMessage}
                  onChange={(e) => setBlessingMessage(e.target.value)}
                  placeholder="Share a heartfelt message or note..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#5B1020] hover:bg-[#7B1E2B] text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#C6A15B]/50"
              >
                <Send className="w-4 h-4 text-[#E6C98A]" />
                <span>Submit RSVP Response</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Public Footer */}
      <footer className="py-8 bg-[#3a0812] text-[#FFF8ED]/70 text-center text-xs border-t border-[#C6A15B]/30 space-y-2">
        <p>Digital Invitation curated with Digi Wedding Invite</p>
        <button
          onClick={() => navigate('/')}
          className="text-[#E6C98A] hover:underline font-serif text-xs font-bold"
        >
          Create Your Own Royal Digital Wedding Invitation →
        </button>
      </footer>
    </div>
  );
};
