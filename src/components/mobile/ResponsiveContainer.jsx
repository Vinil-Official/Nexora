import React from 'react';

export default function ResponsiveContainer({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center">
      <div className="w-full max-w-7xl bg-white min-h-screen relative overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}
