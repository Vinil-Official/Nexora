import React from 'react';

export default function MobileContainer({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">
      <div className="w-full max-w-[420px] bg-white min-h-screen shadow-2xl relative overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}
