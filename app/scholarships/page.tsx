'use client';

import Link from 'next/link';
import { scholarships } from '@/lib/data';

export default function ScholarshipsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">STEM opportunities</p>
            <h1 className="mt-2 text-4xl font-black text-white">High school scholarships</h1>
          </div>
          <Link href="/dashboard" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-cyan-400">Back to dashboard</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {scholarships.map((scholarship) => (
            <article key={scholarship.id} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-cyan-500/25 bg-cyan-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-200">{scholarship.category}</span>
                <span className="text-xs text-slate-400">{scholarship.deadline}</span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-white">{scholarship.name}</h2>
              <p className="mt-3 text-sm text-slate-300">{scholarship.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {scholarship.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-800 px-2 py-1 text-[10px] text-slate-300">{tag}</span>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-800 pt-4 text-sm text-slate-400">
                <div className="flex items-center justify-between">
                  <span>Provider</span>
                  <span className="text-slate-200">{scholarship.provider}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span>Country</span>
                  <span className="text-slate-200">{scholarship.country}</span>
                </div>
              </div>

              <a href={scholarship.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-cyan-300">Open opportunity</a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
