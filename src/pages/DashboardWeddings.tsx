import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { useApp } from '../context/AppContext';
import {
  Heart,
  Edit3,
  ExternalLink,
  Share2,
  Eye,
  CheckCircle,
  Clock,
  Plus,
  Copy
} from 'lucide-react';

export const DashboardWeddings: React.FC = () => {
  const { weddings, publishWedding, unpublishWedding, navigate, showToast } = useApp();

  const copyShareLink = (slug: string) => {
    const url = `${window.location.origin}/#w/${slug}`;
    navigator.clipboard?.writeText(url);
    showToast('Wedding link copied to clipboard!', 'success');
  };

  return (
    <DashboardLayout
      title="My Wedding Invitations"
      subtitle="Manage, edit, publish and copy shareable links for all your wedding websites."
      actionButton={
        <button
          onClick={() => navigate('/templates')}
          className="px-4 py-2 bg-white/15 hover:bg-white/25 text-white text-xs font-semibold rounded-lg border border-[#C6A15B]/40 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
        >
          <Plus className="w-3.5 h-3.5 text-[#E6C98A]" />
          <span>Create Another Invitation</span>
        </button>
      }
    >
      <div className="space-y-6">
        {weddings.map((w) => {
          const isPublished = w.status === 'published';

          return (
            <div
              key={w.id}
              className="bg-white rounded-2xl border border-[#C6A15B]/35 shadow-sm p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#C6A15B] transition-all"
            >
              <div className="flex items-start gap-4">
                <img
                  src={w.coverImage}
                  alt={w.brideName}
                  className="w-20 h-20 rounded-xl object-cover border border-[#C6A15B]/40 shrink-0"
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isPublished
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      {w.status}
                    </span>
                    <span className="text-xs text-gray-400">·</span>
                    <span className="text-xs text-gray-500 font-mono">
                      /w/{w.slug}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#5B1020]">
                    {w.brideName} & {w.groomName}
                  </h3>

                  <div className="text-xs text-[#33241F]/70 flex flex-wrap items-center gap-3">
                    <span>{w.weddingDate}</span>
                    <span>·</span>
                    <span>{w.city}</span>
                    <span>·</span>
                    <span>{w.events.length} Events scheduled</span>
                    <span>·</span>
                    <span className="text-[#5B1020] font-semibold">{w.viewCount} Views</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
                {isPublished ? (
                  <button
                    onClick={() => unpublishWedding(w.id)}
                    className="px-3.5 py-2 border border-gray-300 hover:bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Unpublish
                  </button>
                ) : (
                  <button
                    onClick={() => publishWedding(w.id)}
                    className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Publish Live
                  </button>
                )}

                <button
                  onClick={() => navigate(`/dashboard/weddings/${w.id}/edit`)}
                  className="px-3.5 py-2 bg-[#FFF8ED] hover:bg-[#5B1020] text-[#5B1020] hover:text-white border border-[#C6A15B]/50 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Details</span>
                </button>

                <button
                  onClick={() => copyShareLink(w.slug)}
                  className="px-3.5 py-2 bg-white hover:bg-gray-50 text-[#33241F] border border-gray-300 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Copy URL</span>
                </button>

                <button
                  onClick={() => navigate(`/w/${w.slug}`)}
                  className="px-4 py-2 bg-[#5B1020] hover:bg-[#7B1E2B] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#E6C98A]" />
                  <span>Preview</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
};
