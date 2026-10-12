import React from 'react';

export default function FreeShippingMessage() {
  return (
    <div className="bg-slate-900 border-b border-indigo-500/30 text-white py-2.5 px-4 relative overflow-hidden shadow-sm">
      <div className="container mx-auto text-center relative z-10">
        <p className="font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 tracking-wide">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-cyan-400">⚡ Abdou AI Store:</span>
          <span className="text-slate-200">توصيل سريع مجاني لجميع الطلبات أكثر من 50$ 🚚</span>
          <span className="hidden sm:inline bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-[11px] px-2 py-0.5 rounded-full">
            عروض حصرية
          </span>
        </p>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'body',
  sortOrder: 0
};
