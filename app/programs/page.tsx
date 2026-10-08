'use client';

import Link from 'next/link';
import { programs } from '@/lib/data';

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Programs</p>
            <h1 className="mt-2 text-4xl font-black text-white">STEM camps and technology programs</h1>
          </div>
          <Link href="/dashboard" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-cyan-400">Back to dashboard</Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <article key={program.id} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-200">{program.type}</span>
                <span className="text-xs text-slate-400">{program.time}</span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-white">{program.name}</h2>
              <p className="mt-3 text-sm text-slate-300">{program.description}</p>
              <div className="mt-6 border-t border-slate-800 pt-4 text-sm text-slate-400">
                <p>Goal: {program.goal}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
