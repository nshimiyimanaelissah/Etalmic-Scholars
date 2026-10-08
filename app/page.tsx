import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, Cpu, Globe, Radio, Sparkles, Target } from 'lucide-react';
import { programs, scholarships, stats } from '@/lib/data';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto max-w-7xl px-6 py-6">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-cyan-400/20 p-2 text-cyan-300">
              <Cpu size={18} />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-[0.25em] text-cyan-300">Etalmic</span>
              <strong className="text-lg">Scholars</strong>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex text-sm text-slate-300">
            <Link href="#about">About</Link>
            <Link href="#opportunities">Scholarships</Link>
            <Link href="#programs">Programs</Link>
            <Link href="#monitoring">Monitoring</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-full border border-slate-700 px-4 py-2 text-sm hover:border-cyan-400">Login</Link>
            <Link href="/dashboard" className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-cyan-300">Get started</Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 md:pb-24 md:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
              <Sparkles size={14} />
              AI-powered high-school scholarships
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-tight text-white md:text-6xl">
              Discover the best STEM scholarships before they disappear.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Etalmic Scholars monitors official ministry updates, school announcements, newsletters, and social channels to keep students informed about scholarships in science, technology, engineering, mathematics, and robotics.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-medium text-slate-950 hover:bg-cyan-300">
                Explore opportunities <ArrowRight size={18} />
              </Link>
              <a href="https://opportunity-universe.com/en/stories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 font-medium text-white hover:border-cyan-400">
                Opportunity stories
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-glow">
            <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-slate-400">Live opportunity watch</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-300">Live</span>
              </div>

              <div className="space-y-3">
                {scholarships.slice(0, 3).map((item) => (
                  <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-white">{item.name}</h3>
                        <p className="mt-1 text-xs text-slate-400">{item.provider}</p>
                      </div>
                      <span className="rounded-full bg-cyan-500/15 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-200">{item.category}</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                      <span>{item.deadline}</span>
                      <span>{item.country}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 bg-slate-900/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="opportunities" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Featured scholarships</p>
            <h2 className="mt-3 text-3xl font-bold text-white">High school STEM opportunities</h2>
          </div>
          <Link href="/scholarships" className="text-sm text-cyan-300 hover:text-cyan-200">View all</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {scholarships.map((scholarship) => (
            <div key={scholarship.id} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-cyan-500/25 bg-cyan-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-200">{scholarship.category}</span>
                <span className="text-xs text-slate-400">{scholarship.deadline}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{scholarship.name}</h3>
              <p className="mt-3 text-sm text-slate-300">{scholarship.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {scholarship.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-800 px-2 py-1 text-[10px] text-slate-300">{tag}</span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
                <span>{scholarship.provider}</span>
                <span>{scholarship.country}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="programs" className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Programs</p>
              <h2 className="mt-3 text-3xl font-bold text-white">Events, camps, and STEM programs</h2>
            </div>
            <Link href="/programs" className="text-sm text-cyan-300 hover:text-cyan-200">Explore programs</Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <div key={program.id} className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-200">{program.type}</span>
                  <span className="text-xs text-slate-400">{program.time}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{program.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="monitoring" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Monitoring</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Always connected to sources that matter</h2>
            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-3"><Globe className="text-cyan-300" size={18} /> <span>Official government and education portals</span></div>
              <div className="flex items-center gap-3"><Radio className="text-cyan-300" size={18} /> <span>Newsletters, radio, TV, and press announcements</span></div>
              <div className="flex items-center gap-3"><Target className="text-cyan-300" size={18} /> <span>Instagram, WhatsApp, Facebook, TikTok, and YouTube</span></div>
              <div className="flex items-center gap-3"><BriefcaseBusiness className="text-cyan-300" size={18} /> <span>STEM and ICT-focused programs and camps</span></div>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-900 p-7">
            <h3 className="text-xl font-semibold text-white">Why Etalmic Scholars works</h3>
            <p className="mt-3 text-slate-300">
              The system combines structured data sources with AI classification to find opportunities, summarize them, and notify students in near real time.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li>• Curated STEM scholarship alerts</li>
              <li>• Program discovery for coding, robotics, and applied science</li>
              <li>• Real-time updates from official and social channels</li>
              <li>• AI-assisted analysis for eligibility and opportunity quality</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
