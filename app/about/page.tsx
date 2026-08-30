'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Users, Wrench, Target, ShieldCheck } from 'lucide-react';
import { PageFrame, PageHero } from '@/components/site-shell';

const points = [
  'Build a working solution in a focused 24-hour sprint',
  'Learn from mentors, industry experts, and peers',
  'Collaborate in a team that brings diverse strengths',
  'Present your thinking with clarity and confidence',
];

const pillars = [
  {
    icon: Sparkles,
    title: 'Think Wider',
    description: 'Look past the obvious answer, reframe the problem, and ask better questions.',
    cardBg: 'bg-slate-900 text-white',
    iconColor: 'text-[#f9be13]',
    descColor: 'text-slate-300',
  },
  {
    icon: Users,
    title: 'Build Together',
    description: 'Great work is rarely a solo pursuit. Find your people, complement skills, and create as a team.',
    cardBg: 'bg-white border border-slate-200 text-[#0f2d52]',
    iconColor: 'text-[#1d5ea8]',
    descColor: 'text-slate-600',
  },
  {
    icon: Wrench,
    title: 'Ship Something Real',
    description: 'Turn abstract concepts into a working prototype in 24 non-stop hours.',
    cardBg: 'bg-[#f9be13]/10 border border-[#f9be13]/40 text-[#0f2d52]',
    iconColor: 'text-[#1d5ea8]',
    descColor: 'text-slate-700',
  },
];

export default function AboutPage() {
  return (
    <PageFrame>
      <PageHero
        label="The Experience"
        title="Make an idea impossible to ignore."
        description="IGNITE 2026 brings students together at Gulzar Group of Institutes for a concentrated day of thinking, building, and sharing."
      />

      <main className="bg-white py-20 text-[#0f2d52]">
        {/* WHY IGNITE SECTION */}
        <section className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1d5ea8]">
                Why IGNITE 2026
              </span>
              <h2 className="mt-2 text-3xl font-black text-[#0f2d52] sm:text-4xl">
                Small teams.<br />
                <span className="text-[#1d5ea8]">Big ambition.</span>
              </h2>
              <p className="mt-4 text-base font-normal leading-relaxed text-slate-600">
                The best ideas grow when people with different perspectives have the space to explore them. IGNITE is your invitation to step out of the classroom and into a room where the only limit is what you are willing to attempt.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 shadow-sm transition hover:bg-white hover:shadow-md"
                  >
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#1d5ea8]" size={20} />
                    <span className="text-sm font-bold leading-snug text-[#0f2d52]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* THREE PILLARS CARDS */}
        <section className="mx-auto mt-24 max-w-7xl px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1d5ea8]">
              OUR PHILOSOPHY
            </span>
            <h2 className="mt-2 text-3xl font-black text-[#0f2d52]">
              Built for Impact
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`flex flex-col justify-between rounded-3xl p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${pillar.cardBg}`}
                >
                  <div>
                    <div className="inline-flex rounded-2xl bg-slate-100/10 p-3">
                      <Icon className={pillar.iconColor} size={28} />
                    </div>
                    <h3 className="mt-8 text-2xl font-black">{pillar.title}</h3>
                    <p className={`mt-3 text-sm font-medium leading-relaxed ${pillar.descColor}`}>
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="mx-auto mt-20 max-w-7xl px-6 text-center">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 py-12 px-6">
            <h3 className="text-2xl font-black text-[#0f2d52] sm:text-3xl">
              Ready to take on the challenge?
            </h3>
            <p className="mt-2 text-sm font-medium text-slate-600">
              Registration is open for student teams across all domains.
            </p>
            <div className="mt-6">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-full bg-[#1d5ea8] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#1d5ea8]/20 transition hover:bg-[#15467e]"
              >
                Start your journey
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}