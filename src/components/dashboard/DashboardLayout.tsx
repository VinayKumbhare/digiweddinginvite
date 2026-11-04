import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  Heart,
  Users,
  CreditCard,
  ExternalLink,
  PlusCircle,
  Share2
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  actionButton?: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  title,
  subtitle,
  actionButton
}) => {
  const { currentRoute, navigate, currentUser, weddings } = useApp();

  const publishedWedding = weddings.find((w) => w.status === 'published');

  const navItems = [
    { label: 'Overview', route: '/dashboard', icon: LayoutDashboard },
    { label: 'My Weddings', route: '/dashboard/weddings', icon: Heart, count: weddings.length },
    { label: 'Guest RSVPs', route: '/dashboard/rsvps', icon: Users },
    { label: 'Orders & Billing', route: '/dashboard/orders', icon: CreditCard }
  ];

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto space-y-8">
      {/* Top Welcome Bar */}
      <div className="bg-[#5B1020] text-[#FFF8ED] rounded-2xl p-6 sm:p-8 border border-[#C6A15B]/50 shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="absolute inset-0 bg-mandala-subtle opacity-20 pointer-events-none" />

        <div className="relative z-10 space-y-2">
          <div className="flex items-center gap-2 text-xs text-[#E6C98A] font-semibold tracking-wider uppercase">
            <span>Customer Portal</span>
            <span>·</span>
            <span>Welcome, {currentUser?.fullName || 'Rahul Verma'}</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs sm:text-sm text-[#FFF8ED]/80 max-w-xl">
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative z-10 flex flex-wrap items-center gap-3">
          {actionButton}
          {publishedWedding && (
            <button
              onClick={() => navigate(`/w/${publishedWedding.slug}`)}
              className="px-4 py-2 bg-[#C6A15B] hover:bg-[#d4b069] text-[#5B1020] text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Sub Navigation Bar */}
      <div className="flex items-center gap-2 border-b border-[#C6A15B]/25 overflow-x-auto pb-2 scrollbar-none">
        {navItems.map((item) => {
          const active =
            item.route === '/dashboard'
              ? currentRoute === '/dashboard'
              : currentRoute.startsWith(item.route);

          const Icon = item.icon;

          return (
            <button
              key={item.route}
              onClick={() => navigate(item.route)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                active
                  ? 'bg-[#5B1020] text-[#FFF8ED] shadow-sm border border-[#C6A15B]/50'
                  : 'text-[#33241F]/80 hover:bg-white hover:text-[#5B1020]'
              }`}
            >
              <Icon className={`w-4 h-4 ${active ? 'text-[#E6C98A]' : 'text-[#C6A15B]'}`} />
              <span>{item.label}</span>
              {typeof item.count === 'number' && (
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${active ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'}`}>
                  {item.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div>{children}</div>
    </div>
  );
};
