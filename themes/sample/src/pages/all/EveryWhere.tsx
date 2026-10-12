import React from 'react';

export default function EveryWhere() {
  return (
    <div className="bg-slate-900 border-t border-slate-800 text-slate-300 py-6 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white text-base">🛍️ Abdou-Store</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-400">Powered by Abdou-dashbord Commerce</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span>شحن سريع لجميع الولايات 🚚</span>
          <span>•</span>
          <span>الدفع عند الاستلام 💵</span>
          <span>•</span>
          <span>ضمان الجودة 💯</span>
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 100
};
