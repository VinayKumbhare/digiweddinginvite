import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, User, ShieldCheck, LogOut, LayoutDashboard, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentRoute, navigate, currentUser, loginAs, logout } = useApp();
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const isActive = (route: string) => {
    if (route === '/' && currentRoute === '/') return true;
    if (route !== '/' && currentRoute.startsWith(route)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8ED]/95 backdrop-blur-md border-b border-[#C6A15B]/25 transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-[#5B1020] text-[#E6C98A] text-xs py-1 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span className="text-[10px] text-[#C6A15B]">✦</span>
        <span>Auspicious Vivah Season Special: Use code <strong className="text-white tracking-wider">SHUBH2026</strong> for 20% off all Royal templates</span>
        <span className="text-[10px] text-[#C6A15B]">✦</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element, display face) */}
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-left cursor-pointer whitespace-nowrap shrink-0 focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-[#5B1020] border border-[#C6A15B]/60 flex items-center justify-center text-[#E6C98A] shadow-sm group-hover:scale-105 transition-transform">
            <span className="font-serif text-lg font-bold">D</span>
          </div>
          <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-[#5B1020] group-hover:text-[#7B1E2B] transition-colors">
            DIGI WEDDING INVITE
          </span>
        </button>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <button
            onClick={() => navigate('/templates')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              isActive('/templates')
                ? 'border-[#C6A15B] text-[#5B1020] font-semibold'
                : 'border-transparent text-[#33241F]/80 hover:text-[#5B1020]'
            }`}
          >
            Templates
          </button>
          <button
            onClick={() => navigate('/w/rahul-weds-priya')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 flex items-center gap-1.5 ${
              isActive('/w/')
                ? 'border-[#C6A15B] text-[#5B1020] font-semibold'
                : 'border-transparent text-[#33241F]/80 hover:text-[#5B1020]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            Live Invite Demo
          </button>
          <button
            onClick={() => navigate('/pricing')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              isActive('/pricing')
                ? 'border-[#C6A15B] text-[#5B1020] font-semibold'
                : 'border-transparent text-[#33241F]/80 hover:text-[#5B1020]'
            }`}
          >
            Pricing
          </button>
          <button
            onClick={() => navigate('/about')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              isActive('/about')
                ? 'border-[#C6A15B] text-[#5B1020] font-semibold'
                : 'border-transparent text-[#33241F]/80 hover:text-[#5B1020]'
            }`}
          >
            About
          </button>
          <button
            onClick={() => navigate('/contact')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              isActive('/contact')
                ? 'border-[#C6A15B] text-[#5B1020] font-semibold'
                : 'border-transparent text-[#33241F]/80 hover:text-[#5B1020]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1 primary action or user session dropdown */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quick role switcher for testing Phase 1 requirements */}
          <div className="relative">
            <button
              onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md border border-[#C6A15B]/50 bg-white/70 hover:bg-white text-[#5B1020] transition-colors cursor-pointer"
              title="Test role switcher"
            >
              <span className="w-2 h-2 rounded-full bg-[#C6A15B]" />
              <span className="hidden sm:inline">Role:</span>
              <strong className="capitalize">{currentUser ? currentUser.role : 'Guest'}</strong>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>

            {roleDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-xl border border-[#C6A15B]/30 py-2 z-50 text-xs"
                onMouseLeave={() => setRoleDropdownOpen(false)}
              >
                <div className="px-3 py-1.5 text-[11px] font-semibold text-[#5B1020] uppercase tracking-wider border-b border-[#FFF8ED]">
                  Switch Role Preview
                </div>
                <button
                  onClick={() => {
                    loginAs('customer');
                    setRoleDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-[#FFF8ED] flex items-center justify-between text-[#33241F]"
                >
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#5B1020]" />
                    <span>Customer (Rahul)</span>
                  </div>
                  {currentUser?.role === 'customer' && <span className="text-[#C6A15B] font-bold">✓</span>}
                </button>
                <button
                  onClick={() => {
                    loginAs('admin');
                    setRoleDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-[#FFF8ED] flex items-center justify-between text-[#33241F]"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#5B1020]" />
                    <span>Admin Concierge</span>
                  </div>
                  {currentUser?.role === 'admin' && <span className="text-[#C6A15B] font-bold">✓</span>}
                </button>
                <button
                  onClick={() => {
                    loginAs('guest');
                    setRoleDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-[#FFF8ED] flex items-center justify-between text-[#33241F]"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-gray-400" />
                    <span>Guest Visitor</span>
                  </div>
                  {!currentUser && <span className="text-[#C6A15B] font-bold">✓</span>}
                </button>
              </div>
            )}
          </div>

          {/* Primary Action Button */}
          {currentUser?.role === 'admin' ? (
            <button
              onClick={() => navigate('/admin')}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#5B1020] rounded-md hover:bg-[#7B1E2B] transition-colors whitespace-nowrap shrink-0 shadow-sm border border-[#C6A15B]/40 cursor-pointer"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-[#E6C98A]" />
              Admin Portal
            </button>
          ) : currentUser?.role === 'customer' ? (
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#5B1020] rounded-md hover:bg-[#7B1E2B] transition-colors whitespace-nowrap shrink-0 shadow-sm border border-[#C6A15B]/40 cursor-pointer"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-[#E6C98A]" />
              My Weddings
            </button>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#5B1020] rounded-md hover:bg-[#7B1E2B] transition-colors whitespace-nowrap shrink-0 shadow-sm border border-[#C6A15B]/40 cursor-pointer"
            >
              Sign In
            </button>
          )}

          {currentUser && (
            <button
              onClick={logout}
              title="Logout"
              className="p-2 text-[#33241F]/60 hover:text-[#5B1020] transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile nav row */}
      <div className="md:hidden flex items-center justify-around border-t border-[#C6A15B]/20 py-2 bg-[#FFF8ED] text-xs">
        <button
          onClick={() => navigate('/templates')}
          className={`px-2 py-1 ${isActive('/templates') ? 'text-[#5B1020] font-semibold' : 'text-[#33241F]'}`}
        >
          Templates
        </button>
        <button
          onClick={() => navigate('/w/rahul-weds-priya')}
          className={`px-2 py-1 ${isActive('/w/') ? 'text-[#5B1020] font-semibold' : 'text-[#33241F]'}`}
        >
          Live Demo
        </button>
        <button
          onClick={() => navigate('/pricing')}
          className={`px-2 py-1 ${isActive('/pricing') ? 'text-[#5B1020] font-semibold' : 'text-[#33241F]'}`}
        >
          Pricing
        </button>
        {currentUser?.role === 'admin' ? (
          <button
            onClick={() => navigate('/admin')}
            className={`px-2 py-1 ${isActive('/admin') ? 'text-[#5B1020] font-semibold' : 'text-[#33241F]'}`}
          >
            Admin
          </button>
        ) : (
          <button
            onClick={() => navigate(currentUser ? '/dashboard' : '/login')}
            className={`px-2 py-1 ${isActive('/dashboard') || isActive('/login') ? 'text-[#5B1020] font-semibold' : 'text-[#33241F]'}`}
          >
            {currentUser ? 'Dashboard' : 'Sign In'}
          </button>
        )}
      </div>
    </header>
  );
};
