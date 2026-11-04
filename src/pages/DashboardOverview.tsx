import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { useApp } from '../context/AppContext';
import {
  Heart,
  Users,
  Eye,
  Calendar,
  Share2,
  Edit3,
  ExternalLink,
  MessageCircle,
  Copy,
  Plus
} from 'lucide-react';

export const DashboardOverview: React.FC = () => {
  const { weddings, rsvps, navigate, showToast } = useApp();

  const primaryWedding = weddings[0];

  const totalAttendees = rsvps
    .filter((r) => r.attendanceStatus === 'attending')
    .reduce((sum, r) => sum + r.attendeesCount, 0);

  const copyShareLink = (slug: string) => {
    const url = `${window.location.origin}/#w/${slug}`;
    navigator.clipboard?.writeText(url);
    showToast('Wedding link copied to clipboard!', 'success');
  };

  const handleShareWhatsApp = (w: typeof primaryWedding) => {
    const inviteUrl = `${window.location.origin}/#w/${w.slug}`;
    const text = encodeURIComponent(
      `*Shubh Vivah Nimantran* 🪔\n\nYou are warmly invited to the wedding celebrations of *${w.brideName} & ${w.groomName}* in ${w.city}.\n\nView itinerary & RSVP online here:\n${inviteUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <DashboardLayout
      title="Wedding Command Center"
      subtitle="Track your published invitations, guest responses, and manage ceremonies."
      actionButton={
        <button
          onClick={() => navigate('/templates')}
          className="px-4 py-2 bg-white/15 hover:bg-white/25 text-white text-xs font-semibold rounded-lg border border-[#C6A15B]/40 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
        >
          <Plus className="w-3.5 h-3.5 text-[#E6C98A]" />
          <span>New Invitation</span>
        </button>
      }
    >
      <div className="space-y-8">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-5 border border-[#C6A15B]/30 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-[#33241F]/60 text-xs">
              <span>Confirmed Attendees</span>
              <Users className="w-4 h-4 text-[#C6A15B]" />
            </div>
            <div className="font-serif text-3xl font-bold text-[#5B1020] tabular-nums">
              {totalAttendees} Guests
            </div>
            <div className="text-[11px] text-emerald-700 font-medium">
              From {rsvps.filter((r) => r.attendanceStatus === 'attending').length} guest parties
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#C6A15B]/30 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-[#33241F]/60 text-xs">
              <span>Total Website Views</span>
              <Eye className="w-4 h-4 text-[#C6A15B]" />
            </div>
            <div className="font-serif text-3xl font-bold text-[#5B1020] tabular-nums">
              {primaryWedding?.viewCount || 1420}
            </div>
            <div className="text-[11px] text-gray-500">
              Unique device impressions
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#C6A15B]/30 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-[#33241F]/60 text-xs">
              <span>Wedding Date</span>
              <Calendar className="w-4 h-4 text-[#C6A15B]" />
            </div>
            <div className="font-serif text-2xl font-bold text-[#33241F]">
              {primaryWedding?.weddingDate || '2026-12-14'}
            </div>
            <div className="text-[11px] text-[#5B1020] font-medium">
              {primaryWedding?.city || 'Udaipur, Rajasthan'}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#C6A15B]/30 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-[#33241F]/60 text-xs">
              <span>Ceremonies Scheduled</span>
              <Heart className="w-4 h-4 text-[#C6A15B]" />
            </div>
            <div className="font-serif text-3xl font-bold text-[#5B1020] tabular-nums">
              {primaryWedding?.events.length || 3} Events
            </div>
            <div className="text-[11px] text-gray-500">
              Sangeet, Haldi & Vivah
            </div>
          </div>
        </div>

        {/* Primary Active Wedding Spotlight */}
        {primaryWedding && (
          <div className="bg-white rounded-2xl border border-[#C6A15B]/40 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#FFF8ED]">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#5B1020] font-medium tracking-wide">
                  <span>Status:</span>
                  <span className="font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {primaryWedding.status}
                  </span>
                  <span>·</span>
                  <span className="text-[#33241F]/60">Slug: /w/{primaryWedding.slug}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B1020] mt-1">
                  {primaryWedding.brideName} & {primaryWedding.groomName}
                </h2>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => navigate(`/dashboard/weddings/${primaryWedding.id}/edit`)}
                  className="px-3.5 py-2 bg-[#FFF8ED] hover:bg-[#5B1020] text-[#5B1020] hover:text-white border border-[#C6A15B]/50 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Details</span>
                </button>

                <button
                  onClick={() => copyShareLink(primaryWedding.slug)}
                  className="px-3.5 py-2 bg-white hover:bg-gray-50 text-[#33241F] border border-gray-300 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Copy Link</span>
                </button>

                <button
                  onClick={() => handleShareWhatsApp(primaryWedding)}
                  className="px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp Broadcast</span>
                </button>

                <button
                  onClick={() => navigate(`/w/${primaryWedding.slug}`)}
                  className="px-4 py-2 bg-[#5B1020] hover:bg-[#7B1E2B] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#E6C98A]" />
                  <span>Live Preview</span>
                </button>
              </div>
            </div>

            {/* Quick summary split */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#5B1020] uppercase tracking-wider">
                  Events & Venues
                </div>
                <div className="space-y-1.5 text-xs text-[#33241F]/80">
                  {primaryWedding.events.map((e) => (
                    <div key={e.id} className="p-2.5 rounded bg-[#FFF8ED]/50 border border-[#C6A15B]/20">
                      <div className="font-bold text-[#33241F]">{e.title}</div>
                      <div className="text-[11px] text-gray-600">{e.venueName}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#5B1020] uppercase tracking-wider">
                  Parents & Blessings
                </div>
                <div className="p-3 rounded-lg bg-[#FFF8ED]/50 border border-[#C6A15B]/20 text-xs text-[#33241F]/80 space-y-2">
                  <div>
                    <span className="font-semibold text-[#5B1020]">Bride's Parents:</span>
                    <div>{primaryWedding.brideParents.mother} & {primaryWedding.brideParents.father}</div>
                  </div>
                  <div>
                    <span className="font-semibold text-[#5B1020]">Groom's Parents:</span>
                    <div>{primaryWedding.groomParents.mother} & {primaryWedding.groomParents.father}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#5B1020] uppercase tracking-wider">
                  Recent RSVP Responses
                </div>
                <div className="space-y-1.5 text-xs">
                  {rsvps.slice(0, 3).map((r) => (
                    <div key={r.id} className="p-2 rounded bg-white border border-gray-100 flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-[#33241F]">{r.guestName}</div>
                        <div className="text-[10px] text-gray-500">{r.createdAt}</div>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${r.attendanceStatus === 'attending' ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>
                        {r.attendanceStatus === 'attending' ? `${r.attendeesCount} Attending` : 'Declined'}
                      </span>
                    </div>
                  ))}
                  <button
                    onClick={() => navigate('/dashboard/rsvps')}
                    className="w-full text-center text-xs text-[#5B1020] font-semibold hover:underline pt-1"
                  >
                    View All {rsvps.length} RSVPs →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};
