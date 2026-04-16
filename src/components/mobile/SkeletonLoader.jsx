import React from 'react';

export default function SkeletonLoader({ type = "card" }) {
  if (type === "card") {
    return (
      <div className="flex-shrink-0 w-[145px] animate-pulse">
        <div className="w-full aspect-square bg-slate-200 rounded-2xl mb-2.5"></div>
        <div className="h-3 bg-slate-200 rounded-full w-3/4 mb-1.5"></div>
        <div className="h-4 bg-slate-200 rounded-full w-1/2"></div>
      </div>
    );
  }

  if (type === "banner") {
    return (
      <div className="px-4 py-3 animate-pulse">
        <div className="w-full aspect-[21/9] bg-slate-200 rounded-2xl"></div>
      </div>
    );
  }

  if (type === "category") {
    return (
      <div className="flex flex-col items-center gap-1.5 flex-shrink-0 animate-pulse">
        <div className="w-12 h-12 rounded-2xl bg-slate-200"></div>
        <div className="h-2 bg-slate-200 rounded-full w-10"></div>
      </div>
    );
  }

  return null;
}
