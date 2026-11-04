import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const icon =
          toast.type === 'error' ? (
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
          ) : toast.type === 'info' ? (
            <Info className="w-5 h-5 text-blue-500 shrink-0" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-[#C6A15B] shrink-0" />
          );

        return (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-start justify-between gap-3 p-4 bg-[#5B1020] text-[#FFF8ED] rounded-lg shadow-xl border border-[#C6A15B]/50 transition-all transform animate-in slide-in-from-bottom-5"
          >
            <div className="flex items-start gap-2.5">
              {icon}
              <p className="text-xs sm:text-sm font-medium leading-snug">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-[#FFF8ED]/60 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
