import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { User, Mail, Phone, Lock, ArrowRight, Sparkles } from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const { navigate, loginAs, showToast } = useApp();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim() || !password.trim()) {
      showToast('Please fill out all registration fields', 'error');
      return;
    }
    showToast(`Welcome ${fullName}! Your royal account has been created.`, 'success');
    loginAs('customer');
  };

  return (
    <div className="min-h-[85vh] py-16 px-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 sm:p-10 border border-[#C6A15B]/40 shadow-xl space-y-6 relative overflow-hidden">
        {/* Top Gold Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C6A15B] via-[#F5E6BE] to-[#C6A15B]" />

        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#5B1020] border border-[#C6A15B] text-[#E6C98A] flex items-center justify-center mx-auto shadow-sm">
            <span className="font-serif text-xl font-bold">D</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B1020]">
            Begin Your Celebration
          </h1>
          <div className="text-xs text-[#33241F]/70">
            Create an account to design and share your wedding invitation
          </div>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#33241F] mb-1">
              Your Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Rahul Verma"
                className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#33241F] mb-1">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rahul@example.com"
                className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#33241F] mb-1">
              WhatsApp Mobile Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98200 12345"
                className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#33241F] mb-1">
              Create Password *
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 8 characters"
                className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#5B1020] hover:bg-[#7B1E2B] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#C6A15B]/40"
          >
            <span>Create Royal Account</span>
            <ArrowRight className="w-4 h-4 text-[#E6C98A]" />
          </button>
        </form>

        <div className="text-center pt-2 text-xs text-[#33241F]/70">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-[#5B1020] font-semibold hover:underline cursor-pointer"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};
