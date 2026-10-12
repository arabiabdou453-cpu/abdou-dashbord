import React from 'react';

export default function OnlyHomePage() {
  return (
    <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-8 my-8 shadow-xl text-center max-w-5xl mx-auto">
      <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        ✨ تشكيلة جديدة وحصرية
      </span>
      <h2 className="text-3xl font-extrabold mt-3 tracking-tight">
        مرحباً بكم في متجر Abdou Store
      </h2>
      <p className="text-emerald-100 max-w-xl mx-auto mt-2 text-sm leading-relaxed">
        اكتشف أحدث المنتجات والإكسسوارات العصرية بأفضل الأسعار، مع إمكانية التوصيل السريع والدفع عند الاستلام.
      </p>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
