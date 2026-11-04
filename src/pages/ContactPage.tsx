import React, { useState } from 'react';
import { OrnamentDivider } from '../components/layout/OrnamentDivider';
import { useApp } from '../context/AppContext';
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [occasion, setOccasion] = useState('Wedding (Vivah)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      showToast('Please enter your name and contact phone number', 'error');
      return;
    }
    setSubmitted(true);
    showToast('Dhanyawad! Our Royal Concierge will call you within 2 business hours.', 'success');
  };

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#5B1020]">
          Royal Concierge & Assistance
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#5B1020]">
          We Are Here To Assist You
        </h1>
        <OrnamentDivider variant="gold" />
        <p className="text-sm sm:text-base text-[#33241F]/80">
          Have questions about customizing your invitation, multi-ceremony scheduling, or bespoke designs? Reach out anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Contacts */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white rounded-2xl p-8 border border-[#C6A15B]/35 shadow-xs space-y-6">
            <h3 className="font-serif text-xl font-bold text-[#5B1020]">
              Direct Helpline & Studios
            </h3>

            <div className="space-y-5 text-xs sm:text-sm text-[#33241F]/80">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFF8ED] text-[#5B1020] border border-[#C6A15B]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#33241F]">Toll-Free & Direct Call</div>
                  <div className="text-xs text-[#5B1020] font-semibold mt-0.5">
                    +91 98200 88990 / +91 80000 12345
                  </div>
                  <div className="text-[11px] text-gray-500">Monday - Saturday (10:00 AM - 08:00 PM IST)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFF8ED] text-[#5B1020] border border-[#C6A15B]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#33241F]">Email Inquiries</div>
                  <div className="text-xs text-[#5B1020] font-semibold mt-0.5">
                    namaste@digiweddinginvite.in
                  </div>
                  <div className="text-[11px] text-gray-500">Response within 3 business hours</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFF8ED] text-[#5B1020] border border-[#C6A15B]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#33241F]">Design Studios</div>
                  <div className="text-xs text-[#33241F]/70 mt-0.5 leading-relaxed">
                    Heritage Haveli, M.I. Road, Jaipur, Rajasthan 302001
                    <br />
                    Bandra Kurla Complex, Mumbai, Maharashtra 400051
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct CTA */}
            <div className="pt-4 border-t border-[#FFF8ED]">
              <a
                href="https://wa.me/919820088990?text=Namaste!%20I%20would%20like%20to%20speak%20with%20a%20wedding%20stylist."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Instant Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#C6A15B]/35 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#C6A15B] mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-[#5B1020]">
                  Message Received With Honor
                </h3>
                <p className="text-sm text-[#33241F]/80 max-w-md mx-auto">
                  Dhanyawad {name}. Our wedding design specialist will review your requirements and reach out to you at {phone}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 border border-[#5B1020] text-[#5B1020] text-xs font-semibold rounded hover:bg-[#FFF8ED]"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1 mb-4">
                  <h3 className="font-serif text-xl font-bold text-[#5B1020]">
                    Send A Message
                  </h3>
                  <p className="text-xs text-[#33241F]/70">
                    Fill out the form below and we will contact you right away.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#33241F] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Vikramaditya Sharma"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#33241F] mb-1">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98200 12345"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#33241F] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vikram@example.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#33241F] mb-1">
                      Occasion / Celebration
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none bg-white"
                    >
                      <option value="Wedding (Vivah)">Royal Wedding (Vivah)</option>
                      <option value="Engagement (Roka)">Engagement (Roka & Sagan)</option>
                      <option value="Haldi & Mehendi">Phoolon Ki Haldi & Mehendi</option>
                      <option value="Reception">Grand Banquet Reception</option>
                      <option value="Housewarming">Griha Pravesh</option>
                      <option value="Anniversary">Golden Anniversary</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#33241F] mb-1">
                    Your Requirements / Wedding Date / Special Requests
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your wedding city, estimated guests, favorite music, or any specific requirements..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#5B1020] hover:bg-[#7B1E2B] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#C6A15B]/40"
                >
                  <Send className="w-4 h-4 text-[#E6C98A]" />
                  <span>Send Concierge Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
