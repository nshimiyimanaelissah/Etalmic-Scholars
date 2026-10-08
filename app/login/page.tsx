'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('demo@etalmic.com');
  const [password, setPassword] = useState('Password123');
  const [error, setError] = useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    const user = { email, name: 'Student User' };
    localStorage.setItem('etalmic-user', JSON.stringify(user));
    router.push('/dashboard');
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-5xl overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900 shadow-glow">
        <div className="grid md:grid-cols-2">
          <div className="bg-gradient-to-br from-cyan-500/20 via-slate-900 to-slate-950 p-8 md:p-12">
            <div className="mb-8 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-cyan-200">Etalmic Scholars</div>
            <h1 className="text-4xl font-black text-white">Find the right scholarship, faster.</h1>
            <p className="mt-4 text-slate-300">
              Track STEM scholarships, robotics competitions, camps, and technology opportunities across ministries and social media channels.
            </p>
          </div>

          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white">Welcome back</h2>
            <p className="mt-2 text-sm text-slate-400">Sign in to access your scholarship dashboard.</p>

            <form onSubmit={handleLogin} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                  placeholder="••••••••"
                />
              </div>

              {error ? <p className="text-sm text-red-400">{error}</p> : null}

              <button type="submit" className="w-full rounded-2xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
                Login
              </button>
            </form>

            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-300">
              Demo login: <span className="font-medium text-cyan-200">demo@etalmic.com</span> / <span className="font-medium text-cyan-200">Password123</span>
            </div>

            <div className="mt-6 text-sm text-slate-400">
              Don&apos;t have an account? <Link href="/" className="text-cyan-300">Back to home</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
