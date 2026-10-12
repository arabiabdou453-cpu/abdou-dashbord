import React from 'react';

export default function Hello() {
  return (
    <div className="relative overflow-hidden bg-slate-950 rounded-2xl mx-4 my-4 p-6 border border-indigo-500/30 shadow-2xl shadow-indigo-950/50">
      {/* Background Neural Glow Gradients */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-violet-600/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/3 w-96 h-32 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none transform -translate-y-1/2"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        
        {/* Left Side: Avatar & AI Title */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/30">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-2xl">
                🤖
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-slate-950 flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
                Abdou <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">AI Dashboard</span>
              </h1>
              <span className="bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                AI Agent Active
              </span>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 flex items-center gap-2">
              <span className="text-indigo-400">⚡</span>
              <span>نظام التجارة الذكي المدعوم بالذكاء الاصطناعي — إدارة المنتجات، الأسعار، والتحليلات الآلية</span>
            </p>
          </div>
        </div>

        {/* Right Side: AI Metrics Badges */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition rounded-xl px-3.5 py-2 flex items-center gap-2.5 backdrop-blur-md">
            <span className="text-base">🧠</span>
            <div className="text-right">
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">AI Engine</div>
              <div className="text-xs font-semibold text-indigo-300">Autonomous v4.0</div>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition rounded-xl px-3.5 py-2 flex items-center gap-2.5 backdrop-blur-md">
            <span className="text-base">🚀</span>
            <div className="text-right">
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Server Status</div>
              <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <span>99.9% Online</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 0
};
