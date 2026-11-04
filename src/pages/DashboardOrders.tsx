import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { useApp } from '../context/AppContext';
import { CreditCard, CheckCircle, FileText, ArrowRight } from 'lucide-react';

export const DashboardOrders: React.FC = () => {
  const { orders, navigate, showToast } = useApp();

  const handleDownloadInvoice = (orderNumber: string) => {
    showToast(`Generating GST tax invoice for #${orderNumber}...`, 'info');
  };

  return (
    <DashboardLayout
      title="Orders & Entitlements"
      subtitle="View your purchased templates, payment receipts, and billing history."
    >
      <div className="space-y-6">
        <div className="bg-white rounded-2xl border border-[#C6A15B]/35 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#FFF8ED] border-b border-[#C6A15B]/30 text-[#5B1020] font-serif">
                  <th className="py-3.5 px-4 font-bold">Order #</th>
                  <th className="py-3.5 px-4 font-bold">Template Package</th>
                  <th className="py-3.5 px-4 font-bold">Amount Paid</th>
                  <th className="py-3.5 px-4 font-bold">Payment Mode</th>
                  <th className="py-3.5 px-4 font-bold">Status</th>
                  <th className="py-3.5 px-4 font-bold">Date</th>
                  <th className="py-3.5 px-4 font-bold text-right">Invoice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-[#FFF8ED]/30 transition-colors">
                    <td className="py-4 px-4 font-mono font-semibold text-[#5B1020]">
                      {order.orderNumber}
                    </td>

                    <td className="py-4 px-4">
                      <div className="font-bold text-[#33241F] text-sm">{order.templateName}</div>
                      <div className="text-[11px] text-gray-500 font-mono">
                        Slug: /w/{order.weddingSlug}
                      </div>
                    </td>

                    <td className="py-4 px-4 font-serif text-sm font-bold text-[#33241F] tabular-nums">
                      ₹{order.amount.toLocaleString('en-IN')}
                    </td>

                    <td className="py-4 px-4 text-xs text-[#33241F]/80">
                      {order.paymentMethod}
                    </td>

                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle className="w-3 h-3" />
                        <span className="capitalize">{order.status}</span>
                      </span>
                    </td>

                    <td className="py-4 px-4 text-gray-500 text-[11px] tabular-nums whitespace-nowrap">
                      {order.createdAt}
                    </td>

                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => handleDownloadInvoice(order.orderNumber)}
                        className="inline-flex items-center gap-1 text-xs text-[#5B1020] hover:text-[#7B1E2B] font-semibold cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#C6A15B]" />
                        <span>GST Receipt</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Security and guarantee badge */}
        <div className="p-4 bg-[#FFF8ED] rounded-xl border border-[#C6A15B]/30 flex items-center justify-between text-xs text-[#33241F]/80">
          <div>
            Transactions are secured by bank-grade 256-bit encryption. Need billing support or business invoicing?
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="text-[#5B1020] font-semibold hover:underline shrink-0"
          >
            Contact Billing →
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};
