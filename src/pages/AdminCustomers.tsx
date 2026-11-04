import React from 'react';
import { AdminLayout } from '../components/admin/AdminLayout';
import { useApp } from '../context/AppContext';
import { Users, Phone, Mail, Heart, ExternalLink } from 'lucide-react';

export const AdminCustomers: React.FC = () => {
  const { weddings, orders, navigate } = useApp();

  const customerDirectory = [
    {
      id: 'usr-cust-01',
      name: 'Rahul Verma',
      email: 'rahul.verma@example.com',
      phone: '+91 98200 45678',
      weddingCount: 2,
      primaryWedding: 'rahul-weds-priya',
      totalSpent: 3998,
      joinedDate: 'October 10, 2026',
      status: 'Active Customer'
    },
    {
      id: 'usr-cust-02',
      name: 'Sanjay Kapoor',
      email: 'sanjay.k@outlook.com',
      phone: '+91 98111 22334',
      weddingCount: 1,
      primaryWedding: 'sanjay-weds-kavya',
      totalSpent: 1999,
      joinedDate: 'November 01, 2026',
      status: 'Active Customer'
    },
    {
      id: 'usr-cust-03',
      name: 'Ananya Iyer',
      email: 'ananya.iyer@gmail.com',
      phone: '+91 94440 55667',
      weddingCount: 1,
      primaryWedding: 'arjun-weds-ananya',
      totalSpent: 1499,
      joinedDate: 'October 28, 2026',
      status: 'Active Customer'
    }
  ];

  return (
    <AdminLayout
      title="Customer Lineage & Directory"
      subtitle="Registered bridal couples, contact records, active invitation websites, and order metrics."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customerDirectory.map((customer) => (
            <div
              key={customer.id}
              className="bg-white rounded-2xl border border-[#C6A15B]/35 shadow-xs p-6 space-y-4 hover:border-[#C6A15B] transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#5B1020] text-[#E6C98A] font-serif font-bold text-sm flex items-center justify-center">
                  {customer.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {customer.status}
                </span>
              </div>

              <div>
                <h4 className="font-serif text-lg font-bold text-[#33241F]">
                  {customer.name}
                </h4>
                <div className="text-xs text-gray-500 mt-1 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>{customer.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>{customer.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#FFF8ED] text-xs text-[#33241F]/80 flex items-center justify-between">
                <div>
                  <div className="text-gray-400 text-[11px]">Weddings Created</div>
                  <div className="font-bold text-[#5B1020]">{customer.weddingCount} Invitations</div>
                </div>
                <div className="text-right">
                  <div className="text-gray-400 text-[11px]">Total Lifetime Value</div>
                  <div className="font-serif font-bold text-[#5B1020] tabular-nums">
                    ₹{customer.totalSpent.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate(`/w/${customer.primaryWedding}`)}
                  className="w-full py-2 bg-[#FFF8ED] hover:bg-[#5B1020] text-[#5B1020] hover:text-white border border-[#C6A15B]/40 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Inspect Wedding Invite</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};
