import React, { useState } from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { useApp } from '../context/AppContext';
import {
  Save,
  Plus,
  Trash2,
  Calendar,
  Clock,
  MapPin,
  Heart,
  Palette,
  Music,
  ExternalLink,
  ArrowLeft
} from 'lucide-react';

interface DashboardWeddingEditProps {
  weddingId: string;
}

export const DashboardWeddingEdit: React.FC<DashboardWeddingEditProps> = ({ weddingId }) => {
  const { weddings, updateWedding, addEventToWedding, navigate, showToast } = useApp();

  const wedding = weddings.find((w) => w.id === weddingId) || weddings[0];

  // Editable Form State
  const [brideName, setBrideName] = useState(wedding.brideName);
  const [groomName, setGroomName] = useState(wedding.groomName);
  const [weddingDate, setWeddingDate] = useState(wedding.weddingDate);
  const [weddingTime, setWeddingTime] = useState(wedding.weddingTime);
  const [city, setCity] = useState(wedding.city);
  const [welcomeMessage, setWelcomeMessage] = useState(wedding.welcomeMessage);
  const [brideMother, setBrideMother] = useState(wedding.brideParents.mother);
  const [brideFather, setBrideFather] = useState(wedding.brideParents.father);
  const [groomMother, setGroomMother] = useState(wedding.groomParents.mother);
  const [groomFather, setGroomFather] = useState(wedding.groomParents.father);
  const [themePalette, setThemePalette] = useState(wedding.themePalette);
  const [backgroundMusicTitle, setBackgroundMusicTitle] = useState(wedding.backgroundMusicTitle || 'Mangal Dhwani - Royal Shehnai');

  // New Event Form State
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('December 15, 2026');
  const [newEventTime, setNewEventTime] = useState('08:00 PM onwards');
  const [newEventVenue, setNewEventVenue] = useState('');
  const [newEventAddress, setNewEventAddress] = useState('');
  const [newEventMapUrl, setNewEventMapUrl] = useState('');
  const [newEventDesc, setNewEventDesc] = useState('');
  const [newEventDressCode, setNewEventDressCode] = useState('');

  const handleSaveAll = (e: React.FormEvent) => {
    e.preventDefault();

    updateWedding(wedding.id, {
      brideName,
      groomName,
      weddingDate,
      weddingTime,
      city,
      welcomeMessage,
      brideParents: {
        mother: brideMother,
        father: brideFather
      },
      groomParents: {
        mother: groomMother,
        father: groomFather
      },
      themePalette,
      backgroundMusicTitle
    });

    showToast('Wedding invitation details saved successfully! Refresh live link to view.', 'success');
  };

  const handleAddEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle.trim() || !newEventVenue.trim()) {
      showToast('Please provide event title and venue', 'error');
      return;
    }

    addEventToWedding(wedding.id, {
      title: newEventTitle,
      date: newEventDate,
      time: newEventTime,
      venueName: newEventVenue,
      venueAddress: newEventAddress || 'Udaipur, Rajasthan',
      mapUrl: newEventMapUrl || 'https://maps.google.com/?q=Udaipur',
      description: newEventDesc || 'Celebration with near and dear ones.',
      dressCode: newEventDressCode
    });

    setNewEventTitle('');
    setNewEventVenue('');
    setNewEventAddress('');
    setNewEventDesc('');
    setNewEventDressCode('');
    setShowAddEvent(false);
  };

  const handleDeleteEvent = (eventId: string) => {
    const updatedEvents = wedding.events.filter((ev) => ev.id !== eventId);
    updateWedding(wedding.id, { events: updatedEvents });
    showToast('Event removed from itinerary', 'info');
  };

  return (
    <DashboardLayout
      title={`Customize: ${brideName} & ${groomName}`}
      subtitle="Edit couple names, auspicious timings, parents blessings, ceremony schedules, and background music."
      actionButton={
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/dashboard/weddings')}
            className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to List</span>
          </button>
          <button
            onClick={() => navigate(`/w/${wedding.slug}`)}
            className="px-3.5 py-2 bg-[#C6A15B] hover:bg-[#d4b069] text-[#5B1020] text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>View Live Site</span>
          </button>
        </div>
      }
    >
      <form onSubmit={handleSaveAll} className="space-y-8">
        {/* Section 1: Couple Information */}
        <div className="bg-white rounded-2xl border border-[#C6A15B]/35 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="border-b border-[#FFF8ED] pb-4">
            <h3 className="font-serif text-xl font-bold text-[#5B1020]">
              1. Couple Information
            </h3>
            <p className="text-xs text-[#33241F]/70">
              The bride and groom names as they will appear on the royal invitation header.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-[#33241F] mb-1">
                Bride's Full Name *
              </label>
              <input
                type="text"
                required
                value={brideName}
                onChange={(e) => setBrideName(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#33241F] mb-1">
                Groom's Full Name *
              </label>
              <input
                type="text"
                required
                value={groomName}
                onChange={(e) => setGroomName(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#33241F] mb-1">
                Wedding Date (YYYY-MM-DD) *
              </label>
              <input
                type="date"
                required
                value={weddingDate}
                onChange={(e) => setWeddingDate(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#33241F] mb-1">
                Auspicious Muhurtham Time *
              </label>
              <input
                type="text"
                required
                value={weddingTime}
                onChange={(e) => setWeddingTime(e.target.value)}
                placeholder="e.g. 07:30 PM (Hastamelap)"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-[#33241F] mb-1">
                City & State (Location Header) *
              </label>
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Udaipur, Rajasthan"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Family Information & Parents */}
        <div className="bg-white rounded-2xl border border-[#C6A15B]/35 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="border-b border-[#FFF8ED] pb-4">
            <h3 className="font-serif text-xl font-bold text-[#5B1020]">
              2. Family Blessings & Parents
            </h3>
            <p className="text-xs text-[#33241F]/70">
              Honor your lineage and parents in traditional Sanskrit / Indian etiquette.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4 p-4 rounded-xl bg-[#FFF8ED]/40 border border-[#C6A15B]/20">
              <div className="text-xs font-bold text-[#5B1020] uppercase tracking-wider">
                Bride's Parents
              </div>
              <div>
                <label className="block text-xs font-medium text-[#33241F] mb-1">
                  Mother's Name
                </label>
                <input
                  type="text"
                  value={brideMother}
                  onChange={(e) => setBrideMother(e.target.value)}
                  placeholder="Smt. Sunita Sharma"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#33241F] mb-1">
                  Father's Name
                </label>
                <input
                  type="text"
                  value={brideFather}
                  onChange={(e) => setBrideFather(e.target.value)}
                  placeholder="Shri Rajesh Sharma"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none bg-white"
                />
              </div>
            </div>

            <div className="space-y-4 p-4 rounded-xl bg-[#FFF8ED]/40 border border-[#C6A15B]/20">
              <div className="text-xs font-bold text-[#5B1020] uppercase tracking-wider">
                Groom's Parents
              </div>
              <div>
                <label className="block text-xs font-medium text-[#33241F] mb-1">
                  Mother's Name
                </label>
                <input
                  type="text"
                  value={groomMother}
                  onChange={(e) => setGroomMother(e.target.value)}
                  placeholder="Smt. Meenakshi Verma"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#33241F] mb-1">
                  Father's Name
                </label>
                <input
                  type="text"
                  value={groomFather}
                  onChange={(e) => setGroomFather(e.target.value)}
                  placeholder="Shri Vikram Verma"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none bg-white"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-[#33241F] mb-1">
                Welcome Message / Invocation *
              </label>
              <textarea
                rows={3}
                required
                value={welcomeMessage}
                onChange={(e) => setWelcomeMessage(e.target.value)}
                className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none resize-none"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Wedding Ceremonies & Events Schedule */}
        <div className="bg-white rounded-2xl border border-[#C6A15B]/35 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#FFF8ED] pb-4">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#5B1020]">
                3. Wedding Ceremonies & Venues
              </h3>
              <p className="text-xs text-[#33241F]/70">
                Manage your multi-day events with Google Maps links and dress codes.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowAddEvent(!showAddEvent)}
              className="px-3.5 py-2 bg-[#FFF8ED] hover:bg-[#5B1020] text-[#5B1020] hover:text-white border border-[#C6A15B]/50 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap self-start"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{showAddEvent ? 'Cancel New Ceremony' : 'Add Ceremony (e.g. Sangeet)'}</span>
            </button>
          </div>

          {/* Add New Event Subform */}
          {showAddEvent && (
            <div className="p-5 bg-[#FFF8ED] rounded-xl border border-[#C6A15B]/40 space-y-4">
              <div className="text-xs font-bold text-[#5B1020] uppercase tracking-wider">
                Add New Wedding Function
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-[#33241F] mb-1">
                    Function Title *
                  </label>
                  <input
                    type="text"
                    value={newEventTitle}
                    onChange={(e) => setNewEventTitle(e.target.value)}
                    placeholder="e.g. Royal Sangeet & Cocktail Gala"
                    className="w-full px-3 py-2 text-xs rounded border border-gray-300 focus:outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#33241F] mb-1">
                    Date & Muhurtham Time *
                  </label>
                  <input
                    type="text"
                    value={newEventDate}
                    onChange={(e) => setNewEventDate(e.target.value)}
                    placeholder="December 15, 2026 · 07:00 PM"
                    className="w-full px-3 py-2 text-xs rounded border border-gray-300 focus:outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#33241F] mb-1">
                    Venue Name *
                  </label>
                  <input
                    type="text"
                    value={newEventVenue}
                    onChange={(e) => setNewEventVenue(e.target.value)}
                    placeholder="e.g. Grand Ballroom, Taj Lake Palace"
                    className="w-full px-3 py-2 text-xs rounded border border-gray-300 focus:outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#33241F] mb-1">
                    Dress Code / Attire
                  </label>
                  <input
                    type="text"
                    value={newEventDressCode}
                    onChange={(e) => setNewEventDressCode(e.target.value)}
                    placeholder="e.g. Indo-Western or Royal Velvet"
                    className="w-full px-3 py-2 text-xs rounded border border-gray-300 focus:outline-none bg-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-medium text-[#33241F] mb-1">
                    Google Maps Pin URL
                  </label>
                  <input
                    type="url"
                    value={newEventMapUrl}
                    onChange={(e) => setNewEventMapUrl(e.target.value)}
                    placeholder="https://maps.google.com/?q=..."
                    className="w-full px-3 py-2 text-xs rounded border border-gray-300 focus:outline-none bg-white"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={handleAddEventSubmit}
                className="px-4 py-2 bg-[#5B1020] text-white text-xs font-semibold rounded hover:bg-[#7B1E2B] cursor-pointer"
              >
                Save & Insert Ceremony
              </button>
            </div>
          )}

          {/* Current Events List */}
          <div className="space-y-3">
            {wedding.events.map((ev, idx) => (
              <div
                key={ev.id}
                className="p-4 rounded-xl bg-white border border-[#C6A15B]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-[#C6A15B] uppercase tracking-wider">
                      Event 0{idx + 1}
                    </span>
                    <span className="text-xs text-gray-400">·</span>
                    <span className="text-xs font-semibold text-[#5B1020]">{ev.date}</span>
                    <span className="text-xs text-gray-500">({ev.time})</span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#33241F]">
                    {ev.title}
                  </h4>
                  <div className="text-xs text-gray-600 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>{ev.venueName}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleDeleteEvent(ev.id)}
                  className="p-2 text-gray-400 hover:text-red-600 transition-colors cursor-pointer self-end sm:self-center"
                  title="Remove this event"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Music & Aesthetic Theme */}
        <div className="bg-white rounded-2xl border border-[#C6A15B]/35 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="border-b border-[#FFF8ED] pb-4">
            <h3 className="font-serif text-xl font-bold text-[#5B1020]">
              4. Music & Theme Palette
            </h3>
            <p className="text-xs text-[#33241F]/70">
              Select royal audio melodies and palace palette variations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-[#33241F] mb-1">
                Background Music
              </label>
              <select
                value={backgroundMusicTitle}
                onChange={(e) => setBackgroundMusicTitle(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none bg-white"
              >
                <option value="Mangal Dhwani - Royal Shehnai">Mangal Dhwani - Royal Shehnai (Auspicious)</option>
                <option value="Sitar & Santur Classical Raag">Sitar & Santoor Classical Raag (Soothing)</option>
                <option value="Genda Phool - Festive Folk">Genda Phool - Festive Folk (Celebratory)</option>
                <option value="Vedic Gayatri & Shanti Mantras">Vedic Gayatri & Shanti Mantras (Sacred)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#33241F] mb-1">
                Royal Color Palette
              </label>
              <select
                value={themePalette}
                onChange={(e) => setThemePalette(e.target.value as any)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none bg-white"
              >
                <option value="deep-maroon">Deep Maroon & Antique Gold (Classic Rajputana)</option>
                <option value="royal-ruby">Royal Ruby & Sandstone Ivory (Mughal Palace)</option>
                <option value="antique-gold">Antique Gold & Temple Brass (South Heritage)</option>
                <option value="emerald-palace">Emerald Palace Green & Champagne (Sangeet Glamour)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Save Bar */}
        <div className="sticky bottom-4 z-30 bg-[#5B1020] text-white p-4 rounded-xl border border-[#C6A15B] shadow-2xl flex items-center justify-between gap-4">
          <div className="text-xs text-[#E6C98A]">
            Unsaved changes will update your live invitation link immediately.
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 bg-gradient-to-r from-[#C6A15B] to-[#E6C98A] hover:brightness-105 text-[#5B1020] text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <Save className="w-4 h-4" />
            <span>Save All Changes</span>
          </button>
        </div>
      </form>
    </DashboardLayout>
  );
};
