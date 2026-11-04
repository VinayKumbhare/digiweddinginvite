import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { OrnamentDivider } from '../components/layout/OrnamentDivider';
import { User, ShieldCheck, Lock, Mail, ArrowRight, Sparkles } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { navigate, loginAs, showToast } = useApp();
  const [email, setEmail] = useState('rahul.verma@example.com');
  const [password, setPassword] = useState('royalvivah2026');

  const handleCustomLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      showToast('Please enter both email and password', 'error');
      return;
    }
    // Check if email resembles admin
    if (email.toLowerCase().includes('admin')) {
      loginAs('admin');
    } else {
      loginAs('customer');
    }
  };

  return (
    <div className="min-h-[80vh] py-16 px-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 sm:p-10 border border-[#C6A15B]/40 shadow-xl space-y-6 relative overflow-hidden">
        {/* Top Gold Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C6A15B] via-[#F5E6BE] to-[#C6A15B]" />

        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#5B1020] border border-[#C6A15B] text-[#E6C98A] flex items-center justify-center mx-auto shadow-sm">
            <span className="font-serif text-xl font-bold">D</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B1020]">
            Welcome Back
          </h1>
          <div className="text-xs text-[#33241F]/70">
            Sign in to manage your royal wedding invitations
          </div>
        </div>

        {/* Demo Fast-Login Strip for Evaluation */}
        <div className="p-3.5 bg-[#FFF8ED] rounded-xl border border-[#C6A15B]/30 space-y-2 text-xs">
          <div className="font-semibold text-[#5B1020] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Instant Demo Sign-In</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => loginAs('customer')}
              className="py-2 px-2.5 bg-white hover:bg-gray-50 text-[#5B1020] rounded border border-[#C6A15B]/40 font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-[11px]"
            >
              <User className="w-3 h-3 text-[#5B1020]" />
              <span>Customer View</span>
            </button>
            <button
              type="button"
              onClick={() => loginAs('admin')}
              className="py-2 px-2.5 bg-[#5B1020] hover:bg-[#7B1E2B] text-white rounded font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-[11px]"
            >
              <ShieldCheck className="w-3 h-3 text-[#E6C98A]" />
              <span>Admin View</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleCustomLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#33241F] mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-medium text-[#33241F]">
                Password
              </label>
              <button
                type="button"
                onClick={() => showToast('Password reset link sent to registered email', 'info')}
                className="text-[11px] text-[#5B1020] hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 focus:border-[#5B1020] focus:ring-1 focus:ring-[#5B1020] focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#5B1020] hover:bg-[#7B1E2B] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer border border-[#C6A15B]/40"
          >
            <span>Sign In to Account</span>
            <ArrowRight className="w-4 h-4 text-[#E6C98A]" />
          </button>
        </form>

        <div className="text-center pt-2 text-xs text-[#33241F]/70">
          New to Digi Wedding Invite?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-[#5B1020] font-semibold hover:underline cursor-pointer"
          >
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
};
