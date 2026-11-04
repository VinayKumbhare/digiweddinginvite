import React from 'react';
import { AdminLayout } from '../components/admin/AdminLayout';
import { useApp } from '../context/AppContext';
import {
  TrendingUp,
  CreditCard,
  Heart,
  Users,
  Eye,
  CheckCircle,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { templates, weddings, orders, rsvps, navigate } = useApp();

  const totalRevenue = orders.reduce((sum, ord) => sum + ord.amount, 0);
  const activeWeddingsCount = weddings.filter((w) => w.status === 'published').length;

  return (
    <AdminLayout
      title="Platform Operations & Analytics"
      subtitle="High-level commercial KPIs, revenue velocity, active invitations, and guest interactions."
    >
      <div className="space-y-8">
        {/* KPI Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-5 border border-[#C6A15B]/30 shadow-xs space-y-1">
            <div className="flex items-center justify-between text-[#33241F]/60 text-xs">
              <span>Gross Platform Revenue</span>
              <CreditCard className="w-4 h-4 text-[#C6A15B]" />
            </div>
            <div className="font-serif text-3xl font-bold text-[#5B1020] tabular-nums">
              ₹{totalRevenue.toLocaleString('en-IN')}
            </div>
            <div className="text-[11px] text-emerald-700 font-medium">
              +18.4% vs last week (Vivah Season)
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#C6A15B]/30 shadow-xs space-y-1">
            <div className="flex items-center justify-between text-[#33241F]/60 text-xs">
              <span>Live Published Weddings</span>
              <Heart className="w-4 h-4 text-[#C6A15B]" />
            </div>
            <div className="font-serif text-3xl font-bold text-[#33241F] tabular-nums">
              {activeWeddingsCount} / {weddings.length}
            </div>
            <div className="text-[11px] text-gray-500">
              Active unique URL endpoints
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#C6A15B]/30 shadow-xs space-y-1">
            <div className="flex items-center justify-between text-[#33241F]/60 text-xs">
              <span>Total Guest RSVPs</span>
              <Users className="w-4 h-4 text-[#C6A15B]" />
            </div>
            <div className="font-serif text-3xl font-bold text-[#5B1020] tabular-nums">
              {rsvps.length}
            </div>
            <div className="text-[11px] text-emerald-700 font-medium">
              88% Joyfully Accepted
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#C6A15B]/30 shadow-xs space-y-1">
            <div className="flex items-center justify-between text-[#33241F]/60 text-xs">
              <span>Active Templates in Catalog</span>
              <TrendingUp className="w-4 h-4 text-[#C6A15B]" />
            </div>
            <div className="font-serif text-3xl font-bold text-[#C6A15B] tabular-nums">
              {templates.filter((t) => t.isActive).length} Designs
            </div>
            <div className="text-[11px] text-gray-500">
              Across 8 royal categories
            </div>
          </div>
        </div>

        {/* 2-Column Split: Recent Orders + Wedding Status */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Recent Orders Table */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#C6A15B]/35 shadow-xs p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#FFF8ED] pb-3">
              <h3 className="font-serif text-lg font-bold text-[#5B1020]">
                Recent Customer Orders
              </h3>
              <button
                onClick={() => navigate('/admin/orders')}
                className="text-xs text-[#5B1020] font-semibold hover:underline"
              >
                View All Orders →
              </button>
            </div>

            <div className="divide-y divide-gray-100 text-xs">
              {orders.map((ord) => (
                <div key={ord.id} className="py-3 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-[#33241F]">{ord.customerName}</div>
                    <div className="text-[11px] text-gray-500">{ord.templateName}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-serif font-bold text-[#5B1020] tabular-nums">
                      ₹{ord.amount.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[10px] text-emerald-700 font-medium capitalize">
                      {ord.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Published Weddings Quick Access */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#C6A15B]/35 shadow-xs p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#FFF8ED] pb-3">
              <h3 className="font-serif text-lg font-bold text-[#5B1020]">
                Managed Invitations
              </h3>
              <button
                onClick={() => navigate('/admin/customers')}
                className="text-xs text-[#5B1020] font-semibold hover:underline"
              >
                Customer Directory →
              </button>
            </div>

            <div className="space-y-3">
              {weddings.map((w) => (
                <div
                  key={w.id}
                  className="p-3.5 rounded-xl bg-[#FFF8ED]/50 border border-[#C6A15B]/20 flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-bold text-[#5B1020]">
                      {w.brideName} & {w.groomName}
                    </div>
                    <div className="text-[11px] text-gray-500">
                      /w/{w.slug} · {w.viewCount} views
                    </div>
                  </div>
                  <button
                    onClick={() => navigate(`/w/${w.slug}`)}
                    className="p-1.5 rounded-lg border border-[#C6A15B]/40 hover:bg-[#5B1020] hover:text-white text-[#5B1020] transition-colors cursor-pointer"
                    title="Open public invitation"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
