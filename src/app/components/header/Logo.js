"use client"
import Link from 'next/link';

export const Logo = () => (
  <Link href="/" className="flex items-center gap-3 group">
    <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-105 transition-transform">D</div>
    <div className="hidden xs:block">
      <span className="text-lg sm:text-xl font-bold text-slate-900 block leading-none">Dental Clinics</span>
      <span className="text-[10px] text-brand-primary font-bold tracking-[0.2em] uppercase">of Texas</span>
    </div>
  </Link>
);