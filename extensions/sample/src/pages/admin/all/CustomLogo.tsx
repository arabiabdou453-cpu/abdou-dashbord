import React from 'react';

export default function CustomLogo() {
  return (
    <a href="/admin" className="flex items-center gap-2.5 px-2 py-1 group">
      {/* AI Futuristic Hexagon / Neural Icon */}
      <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
          <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
            <path d="M12 12L2.1 12a10.05 10.05 0 0 0 4.9 6.9" />
            <circle cx="12" cy="12" r="3" fill="#818cf8" />
          </svg>
        </div>
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
        </span>
      </div>

      {/* Brand Text with AI Badge */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-extrabold text-sm tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            Abdou
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-md bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-sm">
            AI
          </span>
        </div>
        <span className="text-[10px] text-indigo-300/80 font-medium tracking-wide">
          Intelligence Suite
        </span>
      </div>
    </a>
  );
}

export const layout = {
  areaId: 'header',
  sortOrder: 5
};
