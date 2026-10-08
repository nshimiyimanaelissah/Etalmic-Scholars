'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Bell, BriefcaseBusiness, LogOut, Search, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { programs, scholarships, socialSources } from '@/lib/data';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem('etalmic-user');
    if (!raw) {
      router.push('/login');
      return;
    }

    setUser(JSON.parse(raw));
  }, [router]);

  const logout = () => {
    localStorage.removeItem('etalmic-user');
    router.push('/login');
  };

  const quickStats = [
    { label: 'New matches', value: '18', icon: Sparkles },
    { label: 'Active sources', value: '27', icon: Bell },
    { label: 'Applications', value: '6', icon: BriefcaseBusiness },
    { label: 'Saved scholarships', value: '12', icon: ShieldCheck },
  ];

  if (!user) return null;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 md:px-6">
        <aside className="hidden w-72 shrink-0 rounded-3xl border border-slate-800 bg-slate-900 p-6 md:block">
          <div className="mb-10 flex items-center gap-3">
            <div className="rounded-full bg-cyan-500/20 p-2 text-cyan-300">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-cyan-300">Etalmic</div>
              <div className="text-xl font-bold text-white">Scholars</div>
            </div>
          </div>

          <nav className="space-y-2 text-sm">
            <Link href="/dashboard" className="block rounded-2xl bg-slate-800 px-4 py-3 text-white">Dashboard</Link>
            <Link href="/scholarships" className="block rounded-2xl px-4 py-3 text-slate-300 hover:bg-slate-800">Scholarships</Link>
            <Link href="/programs" className="block rounded-2xl px-4 py-3 text-slate-300 hover:bg-slate-800">Programs</Link>
            <Link href="/monitor" className="block rounded-2xl px-4 py-3 text-slate-300 hover:bg-slate-800">AI monitor</Link>
          </nav>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Account</p>
            <p className="mt-3 font-semibold text-white">{user.name}</p>
            <p className="text-sm text-slate-400">{user.email}</p>
          </div>

          <button onClick={logout} className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-700 px-4 py-3 text-sm text-slate-300">
            <LogOut size={16} /> Logout
          </button>
        </aside>

        <div className="flex-1">
          <header className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Student portal</p>
                <h1 className="mt-2 text-3xl font-bold text-white">Welcome back, {user.name.split(' ')[0]}</h1>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-300">
                <Search size={15} />
                <span>Search scholarships</span>
              </div>
            </div>
          </header>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {quickStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
                <stat.icon className="text-cyan-300" size={18} />
                <div className="mt-5 text-3xl font-black text-white">{stat.value}</div>
                <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Recommended scholarships</h2>
                <Link href="/scholarships" className="text-sm text-cyan-300">See all</Link>
              </div>

              <div className="space-y-4">
                {scholarships.slice(0, 3).map((item) => (
                  <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-white">{item.name}</h3>
                        <p className="mt-1 text-xs text-slate-400">{item.provider}</p>
                      </div>
                      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-200">{item.category}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-slate-800 px-2 py-1 text-[10px] text-slate-300">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-xl font-bold text-white">Connected channels</h2>
              <div className="mt-6 space-y-3">
                {socialSources.map((source) => (
                  <div key={source.name} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-cyan-500/10 p-2 text-cyan-300">{source.icon}</div>
                      <span className="font-medium text-white">{source.name}</span>
                    </div>
                    <span className="text-xs text-emerald-300">{source.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
