export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 text-white">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-white/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-300 border-r-cyan-300 animate-spin" />
        </div>
        <p className="preloader-glow text-lg font-semibold tracking-[0.2em] uppercase">Nexora</p>
      </div>
    </div>
  );
}
