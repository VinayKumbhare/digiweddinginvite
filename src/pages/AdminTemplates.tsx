import React, { useState } from 'react';
import { AdminLayout } from '../components/admin/AdminLayout';
import { useApp } from '../context/AppContext';
import {
  Palette,
  Eye,
  CheckCircle,
  XCircle,
  Edit,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { TemplatePreviewModal } from '../components/preview/TemplatePreviewModal';
import { Template } from '../types';

export const AdminTemplates: React.FC = () => {
  const { templates, toggleTemplateActive, updateTemplate, showToast } = useApp();
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);
  const [editingTemplateId, setEditingTemplateId] = useState<string | null>(null);
  const [newPrice, setNewPrice] = useState<number>(2499);

  const startEditPrice = (tmpl: Template) => {
    setEditingTemplateId(tmpl.id);
    setNewPrice(tmpl.price);
  };

  const savePrice = (tmplId: string) => {
    updateTemplate(tmplId, { price: newPrice });
    setEditingTemplateId(null);
  };

  return (
    <AdminLayout
      title="Template Catalog Governance"
      subtitle="Publish new invitation styles, manage pricing tiers, and toggle availability across categories."
    >
      <div className="space-y-6">
        <div className="bg-white rounded-2xl border border-[#C6A15B]/35 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#FFF8ED] border-b border-[#C6A15B]/30 text-[#5B1020] font-serif">
                  <th className="py-3.5 px-4 font-bold">Template</th>
                  <th className="py-3.5 px-4 font-bold">Category</th>
                  <th className="py-3.5 px-4 font-bold">Style</th>
                  <th className="py-3.5 px-4 font-bold">Price (₹)</th>
                  <th className="py-3.5 px-4 font-bold text-center">Status</th>
                  <th className="py-3.5 px-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {templates.map((tmpl) => (
                  <tr key={tmpl.id} className="hover:bg-[#FFF8ED]/30 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={tmpl.thumbnailUrl}
                          alt={tmpl.name}
                          className="w-12 h-12 rounded-lg object-cover border border-[#C6A15B]/30 shrink-0"
                        />
                        <div>
                          <div className="font-bold text-[#33241F] text-sm">{tmpl.name}</div>
                          <div className="text-[11px] text-gray-500 font-mono">slug: {tmpl.slug}</div>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 text-[#5B1020] font-medium">
                      {tmpl.category}
                    </td>

                    <td className="py-3.5 px-4 text-[#33241F]/80">
                      {tmpl.style}
                    </td>

                    <td className="py-3.5 px-4 font-serif text-sm font-bold tabular-nums">
                      {editingTemplateId === tmpl.id ? (
                        <div className="flex items-center gap-1.5">
                          <span>₹</span>
                          <input
                            type="number"
                            value={newPrice}
                            onChange={(e) => setNewPrice(Number(e.target.value))}
                            className="w-20 px-2 py-1 text-xs border border-[#5B1020] rounded focus:outline-none"
                          />
                          <button
                            onClick={() => savePrice(tmpl.id)}
                            className="px-2 py-1 bg-[#5B1020] text-white text-[10px] rounded cursor-pointer"
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className="text-[#5B1020]">₹{tmpl.price.toLocaleString('en-IN')}</span>
                          <button
                            onClick={() => startEditPrice(tmpl)}
                            className="text-gray-400 hover:text-[#5B1020] cursor-pointer"
                            title="Edit price"
                          >
                            <Edit className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-center">
                      <button
                        onClick={() => toggleTemplateActive(tmpl.id)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-semibold cursor-pointer transition-all ${
                          tmpl.isActive
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : 'bg-gray-100 text-gray-600 border border-gray-200'
                        }`}
                        title="Click to toggle active status"
                      >
                        {tmpl.isActive ? (
                          <>
                            <CheckCircle className="w-3 h-3 text-emerald-600" />
                            <span>Active</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3 h-3 text-gray-400" />
                            <span>Inactive</span>
                          </>
                        )}
                      </button>
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => setPreviewTemplate(tmpl)}
                        className="px-3 py-1.5 border border-[#C6A15B]/50 hover:bg-[#FFF8ED] text-[#5B1020] text-xs font-semibold rounded-md transition-colors cursor-pointer inline-flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Preview</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal preview */}
        <TemplatePreviewModal
          template={previewTemplate}
          onClose={() => setPreviewTemplate(null)}
        />
      </div>
    </AdminLayout>
  );
};
