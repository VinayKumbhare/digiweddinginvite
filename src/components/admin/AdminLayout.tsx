import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  ShieldCheck,
  BarChart3,
  Palette,
  CreditCard,
  Users,
  Settings,
  ArrowLeft
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  actionButton?: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  title,
  subtitle,
  actionButton
}) => {
  const { currentRoute, navigate, currentUser } = useApp();

  const navItems = [
    { label: 'Analytics & Overview', route: '/admin', icon: BarChart3 },
    { label: 'Template Catalog', route: '/admin/templates', icon: Palette },
    { label: 'Orders & Payments', route: '/admin/orders', icon: CreditCard },
    { label: 'Customers Directory', route: '/admin/customers', icon: Users }
  ];

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto space-y-8">
      {/* Top Admin Header */}
      <div className="bg-[#3a0812] text-[#FFF8ED] rounded-2xl p-6 sm:p-8 border border-[#C6A15B]/50 shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="absolute inset-0 bg-mandala-subtle opacity-15 pointer-events-none" />

        <div className="relative z-10 space-y-2">
          <div className="flex items-center gap-2 text-xs text-[#E6C98A] font-semibold tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
            <span>Administrator Control Console</span>
            <span>·</span>
            <span>{currentUser?.fullName || 'Royal Concierge Admin'}</span>
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

        <div className="relative z-10 flex items-center gap-3">
          {actionButton}
          <button
            onClick={() => navigate('/')}
            className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#E6C98A]" />
            <span>Public Site</span>
          </button>
        </div>
      </div>

      {/* Admin Subnav */}
      <div className="flex items-center gap-2 border-b border-[#C6A15B]/25 overflow-x-auto pb-2 scrollbar-none">
        {navItems.map((item) => {
          const active =
            item.route === '/admin'
              ? currentRoute === '/admin'
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
            </button>
          );
        })}
      </div>

      {/* Main Content */}
      <div>{children}</div>
    </div>
  );
};
