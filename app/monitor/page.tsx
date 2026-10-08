'use client';

import { useEffect, useState } from 'react';
import { Cpu, LoaderCircle, Search } from 'lucide-react';

export default function MonitorPage() {
  const [query, setQuery] = useState('robotics scholarships for high school students in Rwanda');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const evtSource = new EventSource('/api/realtime/messages');
    evtSource.onmessage = (event) => {
      const payload = JSON.parse(event.data);
      setEvents((current) => [payload, ...current].slice(0, 6));
    };

    return () => evtSource.close();
  }, []);

  const runScan = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/ai/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      setResult(data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">AI monitor</p>
          <h1 className="mt-2 text-4xl font-black text-white">Scholarship discovery engine</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <label className="mb-3 block text-sm text-slate-300">Search a scholarship pattern</label>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3">
                <Search size={18} className="text-cyan-300" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent text-white outline-none"
                  placeholder="e.g. robotics scholarships in Rwanda"
                />
              </div>
              <button onClick={runScan} className="rounded-2xl bg-cyan-400 px-4 py-3 font-medium text-slate-950 hover:bg-cyan-300" disabled={loading}>
                {loading ? 'Scanning...' : 'Scan'}
              </button>
            </div>

            {result ? (
              <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-slate-950 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Cpu className="text-cyan-300" size={18} />
                  <h3 className="text-xl font-semibold text-white">AI analysis</h3>
                </div>
                <p className="text-slate-200">{result.summary}</p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm uppercase tracking-[0.2em] text-cyan-200">Best keywords</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {result.keywords?.map((keyword: string) => (
                        <span key={keyword} className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-200">{keyword}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-[0.2em] text-cyan-200">Recommendations</h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {result.recommendations?.map((item: string) => (<li key={item}>• {item}</li>))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-950 p-5 text-slate-400">
                Start a scan to get AI suggestions and opportunities matching your interests.
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold text-white">Live activity stream</h2>
            <div className="mt-6 space-y-3">
              {events.length === 0 ? (
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <LoaderCircle className="animate-spin text-cyan-300" size={16} />
                  Listening for new scholarship updates...
                </div>
              ) : (
                events.map((event, index) => (
                  <div key={`${event.title}-${index}`} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-medium text-white">{event.title}</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-200">{event.channel}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-300">{event.message}</p>
                    <p className="mt-2 text-xs text-slate-400">{event.time}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
