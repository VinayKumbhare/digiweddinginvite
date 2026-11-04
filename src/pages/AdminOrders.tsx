import React, { useState } from 'react';
import { AdminLayout } from '../components/admin/AdminLayout';
import { useApp } from '../context/AppContext';
import { CreditCard, Search, Download, CheckCircle, FileText } from 'lucide-react';

export const AdminOrders: React.FC = () => {
  const { orders, showToast } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOrders = orders.filter((o) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchNum = o.orderNumber.toLowerCase().includes(q);
      const matchCust = o.customerName.toLowerCase().includes(q);
      const matchEmail = o.customerEmail.toLowerCase().includes(q);
      const matchTmpl = o.templateName.toLowerCase().includes(q);
      if (!matchNum && !matchCust && !matchEmail && !matchTmpl) return false;
    }
    return true;
  });

  const exportOrdersCSV = () => {
    const headers = ['Order Number', 'Customer Name', 'Email', 'Template', 'Amount (INR)', 'Payment Method', 'Status', 'Date'];
    const rows = filteredOrders.map((o) => [
      `"${o.orderNumber}"`,
      `"${o.customerName}"`,
      `"${o.customerEmail}"`,
      `"${o.templateName}"`,
      o.amount,
      `"${o.paymentMethod}"`,
      `"${o.status}"`,
      `"${o.createdAt}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `DigiWedding_Orders_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Orders exported to CSV', 'success');
  };

  return (
    <AdminLayout
      title="Orders & Transaction Logs"
      subtitle="Complete ledger of purchases, payment statuses, and customer entitlements."
      actionButton={
        <button
          onClick={exportOrdersCSV}
          className="px-4 py-2 bg-[#C6A15B] hover:bg-[#d4b069] text-[#5B1020] text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export Ledger CSV</span>
        </button>
      }
    >
      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-[#C6A15B]/30 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by order #, customer name, email..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-200 focus:outline-none focus:border-[#5B1020]"
            />
          </div>

          <div className="text-xs text-[#5B1020] font-semibold">
            {filteredOrders.length} Transactions Found
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#C6A15B]/35 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#FFF8ED] border-b border-[#C6A15B]/30 text-[#5B1020] font-serif">
                  <th className="py-3.5 px-4 font-bold">Order #</th>
                  <th className="py-3.5 px-4 font-bold">Customer Details</th>
                  <th className="py-3.5 px-4 font-bold">Purchased Template</th>
                  <th className="py-3.5 px-4 font-bold">Amount</th>
                  <th className="py-3.5 px-4 font-bold">Payment Method</th>
                  <th className="py-3.5 px-4 font-bold">Status</th>
                  <th className="py-3.5 px-4 font-bold">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredOrders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-[#FFF8ED]/30 transition-colors">
                    <td className="py-4 px-4 font-mono font-bold text-[#5B1020]">
                      {ord.orderNumber}
                    </td>

                    <td className="py-4 px-4">
                      <div className="font-bold text-[#33241F] text-sm">{ord.customerName}</div>
                      <div className="text-[11px] text-gray-500">{ord.customerEmail}</div>
                    </td>

                    <td className="py-4 px-4">
                      <div className="font-medium text-[#33241F]">{ord.templateName}</div>
                      <div className="text-[11px] text-gray-400 font-mono">/w/{ord.weddingSlug}</div>
                    </td>

                    <td className="py-4 px-4 font-serif text-sm font-bold text-[#5B1020] tabular-nums">
                      ₹{ord.amount.toLocaleString('en-IN')}
                    </td>

                    <td className="py-4 px-4 text-xs text-[#33241F]/80">
                      {ord.paymentMethod}
                    </td>

                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle className="w-3 h-3" />
                        <span className="capitalize">{ord.status}</span>
                      </span>
                    </td>

                    <td className="py-4 px-4 text-gray-500 text-[11px] tabular-nums whitespace-nowrap">
                      {ord.createdAt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
