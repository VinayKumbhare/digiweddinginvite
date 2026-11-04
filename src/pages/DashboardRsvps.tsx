import React, { useState } from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { useApp } from '../context/AppContext';
import {
  Users,
  Download,
  Search,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

export const DashboardRsvps: React.FC = () => {
  const { rsvps, weddings, showToast } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'attending' | 'declined'>('all');

  const filteredRsvps = rsvps.filter((r) => {
    if (statusFilter !== 'all' && r.attendanceStatus !== statusFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = r.guestName.toLowerCase().includes(q);
      const matchPhone = r.guestPhone.includes(q);
      const matchMsg = r.message?.toLowerCase().includes(q) || false;
      if (!matchName && !matchPhone && !matchMsg) return false;
    }
    return true;
  });

  const totalAttendingGuests = rsvps
    .filter((r) => r.attendanceStatus === 'attending')
    .reduce((sum, r) => sum + r.attendeesCount, 0);

  const exportToCSV = () => {
    if (rsvps.length === 0) {
      showToast('No RSVPs to export yet', 'info');
      return;
    }

    const headers = ['Guest Name', 'Phone', 'Email', 'Status', 'Attendees Count', 'Events', 'Message', 'Submitted Date'];
    const rows = filteredRsvps.map((r) => [
      `"${r.guestName.replace(/"/g, '""')}"`,
      `"${r.guestPhone}"`,
      `"${r.guestEmail || ''}"`,
      `"${r.attendanceStatus}"`,
      r.attendeesCount,
      `"${(r.eventsAttending || []).join('; ')}"`,
      `"${(r.message || '').replace(/"/g, '""')}"`,
      `"${r.createdAt}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Wedding_RSVPs_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('RSVP guest register exported to CSV successfully!', 'success');
  };

  return (
    <DashboardLayout
      title="Guest RSVP Register"
      subtitle="Track attendance responses, headcounts, dietary notes, and heartfelt wishes in real-time."
      actionButton={
        <button
          onClick={exportToCSV}
          className="px-4 py-2 bg-[#C6A15B] hover:bg-[#d4b069] text-[#5B1020] text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export Guest CSV</span>
        </button>
      }
    >
      <div className="space-y-6">
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 border border-[#C6A15B]/30 shadow-xs space-y-1">
            <div className="text-xs text-[#33241F]/60">Total Confirmed Guests</div>
            <div className="font-serif text-3xl font-bold text-[#5B1020] tabular-nums">
              {totalAttendingGuests}
            </div>
            <div className="text-[11px] text-emerald-700">
              {rsvps.filter((r) => r.attendanceStatus === 'attending').length} Parties Joyfully Attending
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#C6A15B]/30 shadow-xs space-y-1">
            <div className="text-xs text-[#33241F]/60">Declined With Blessings</div>
            <div className="font-serif text-3xl font-bold text-gray-700 tabular-nums">
              {rsvps.filter((r) => r.attendanceStatus === 'declined').length}
            </div>
            <div className="text-[11px] text-gray-500">
              Sent wishes from afar
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#C6A15B]/30 shadow-xs space-y-1">
            <div className="text-xs text-[#33241F]/60">Total Responses Recorded</div>
            <div className="font-serif text-3xl font-bold text-[#C6A15B] tabular-nums">
              {rsvps.length}
            </div>
            <div className="text-[11px] text-[#5B1020]">
              Updated live from website forms
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-xl border border-[#C6A15B]/30 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by guest name or phone..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-200 focus:outline-none focus:border-[#5B1020]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                statusFilter === 'all'
                  ? 'bg-[#5B1020] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All ({rsvps.length})
            </button>
            <button
              onClick={() => setStatusFilter('attending')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                statusFilter === 'attending'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Attending ({rsvps.filter((r) => r.attendanceStatus === 'attending').length})
            </button>
            <button
              onClick={() => setStatusFilter('declined')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                statusFilter === 'declined'
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Declined ({rsvps.filter((r) => r.attendanceStatus === 'declined').length})
            </button>
          </div>
        </div>

        {/* RSVPs Table */}
        <div className="bg-white rounded-2xl border border-[#C6A15B]/35 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#FFF8ED] border-b border-[#C6A15B]/30 text-[#5B1020] font-serif">
                  <th className="py-3.5 px-4 font-bold">Guest & Contact</th>
                  <th className="py-3.5 px-4 font-bold">Attendance</th>
                  <th className="py-3.5 px-4 font-bold text-center">Headcount</th>
                  <th className="py-3.5 px-4 font-bold">Functions Attending</th>
                  <th className="py-3.5 px-4 font-bold">Blessings / Note</th>
                  <th className="py-3.5 px-4 font-bold">Submitted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredRsvps.map((rsvp) => (
                  <tr key={rsvp.id} className="hover:bg-[#FFF8ED]/30 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-[#33241F] text-sm">{rsvp.guestName}</div>
                      <div className="text-[11px] text-gray-500 flex items-center gap-1.5 mt-0.5">
                        <Phone className="w-3 h-3 text-[#C6A15B]" />
                        <span>{rsvp.guestPhone}</span>
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      {rsvp.attendanceStatus === 'attending' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Joyfully Accept</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-semibold bg-gray-100 text-gray-700 border border-gray-200">
                          <XCircle className="w-3 h-3 text-gray-500" />
                          <span>Declined</span>
                        </span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-center font-bold text-sm tabular-nums text-[#5B1020]">
                      {rsvp.attendanceStatus === 'attending' ? `${rsvp.attendeesCount} pax` : '—'}
                    </td>

                    <td className="py-3.5 px-4">
                      {rsvp.eventsAttending && rsvp.eventsAttending.length > 0 ? (
                        <div className="space-y-0.5 max-w-xs">
                          {rsvp.eventsAttending.map((ev, i) => (
                            <div key={i} className="text-[11px] text-[#33241F]/80">
                              • {ev}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span className="text-gray-400 text-[11px]">None</span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 max-w-xs">
                      {rsvp.message ? (
                        <div className="text-xs text-[#33241F]/80 italic line-clamp-2">
                          "{rsvp.message}"
                        </div>
                      ) : (
                        <span className="text-gray-400 text-[11px]">No message</span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-gray-500 text-[11px] tabular-nums whitespace-nowrap">
                      {rsvp.createdAt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
