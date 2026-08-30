'use client';

import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Users,
  Calendar,
  MapPin,
  Trophy,
  Compass,
  Target,
  Lightbulb,
} from 'lucide-react';
import { PageFrame, PageHero } from '@/components/site-shell';

const expectationsFromPdf = [
  '24 hours of continuous hacking and innovation',
  'Mentorship from industry experts and faculty',
  'Networking opportunities with fellow developers and problem-solvers',
  'Exciting challenges across 9 distinct technology domains',
  'Attractive prizes and recognition for outstanding projects',
];

const whyParticipateFromPdf = [
  'Build projects that create real impact',
  'Learn from mentors and industry professionals',
  'Enhance your technical and teamwork skills',
  'Expand your professional network',
  'Compete for exciting prizes and certificates',
];

export default function RegisterPage() {
  // Replace with your official hackathon portal URL
  const externalRegistrationUrl = 'https://devfolio.co';

  return (
    <PageFrame>
      <PageHero
        label="Registration Portal"
        title="Innovate. Build. Inspire."
        description="Welcome to IGNITE 2026, the flagship hackathon hosted at Gulzar Group of Institutes. Join developers, designers, innovators, and problem-solvers for an exciting 24-hour journey."
      />

      <main className="bg-slate-50/50 py-12 sm:py-20 text-[#0f2d52]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          {/* TOP SECTION: OVERVIEW & REDIRECT PORTAL */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            
            {/* LEFT COLUMN: MISSION & WHAT TO EXPECT */}
            <div className="flex flex-col justify-between space-y-6 lg:col-span-6">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#1d5ea8]/10 px-3.5 py-1 text-xs font-bold text-[#1d5ea8]">
                  <Sparkles size={14} />
                  <span>FLAGSHIP HACKATHON</span>
                </div>
                
                <h2 className="mt-4 text-3xl font-black text-[#0f2d52] sm:text-4xl">
                  Turn your ideas <br />
                  <span className="text-[#1d5ea8]">into reality.</span>
                </h2>
                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
                  Our mission is to encourage innovation, teamwork, and practical problem-solving by providing a platform where participants transform ideas into impactful solutions.
                </p>
              </div>

              {/* Event Meta Badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                  <div className="rounded-xl bg-[#1d5ea8]/10 p-2.5 text-[#1d5ea8]">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Duration
                    </p>
                    <p className="text-xs font-black text-[#0f2d52]">
                      24 Hours Non-Stop
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                  <div className="rounded-xl bg-[#1d5ea8]/10 p-2.5 text-[#1d5ea8]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Venue
                    </p>
                    <p className="text-xs font-black text-[#0f2d52]">
                      GGI Campus, Punjab
                    </p>
                  </div>
                </div>
              </div>

              {/* What to Expect Card */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-base font-black text-[#0f2d52]">
                  What to expect at IGNITE 2026:
                </h3>
                <div className="mt-4 space-y-3">
                  {expectationsFromPdf.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#1d5ea8]" />
                      <span className="text-xs font-bold leading-relaxed text-slate-700 sm:text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: REDIRECT PORTAL CARD */}
            <div className="flex lg:col-span-6">
              <div className="flex w-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg sm:p-12">
                <div>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1d5ea8]/10 text-[#1d5ea8]">
                    <Users size={32} />
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-[#0f2d52] sm:text-3xl">
                    Register Your Team
                  </h3>

                  <p className="mx-auto mt-2 max-w-sm text-xs font-medium leading-relaxed text-slate-500 sm:text-sm">
                    Complete your team registration on our official platform to receive confirmed event passes and participant instructions.
                  </p>

                  {/* Requirements & Eligibility Badges */}
                  <div className="my-6 flex flex-wrap items-center justify-center gap-2">
                    <span className="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-700">
                      • Open to All Students
                    </span>
                    <span className="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-700">
                      • Beginners & Experienced Welcome
                    </span>
                  </div>
                </div>

                {/* Primary Action Button */}
                <div>
                  <a
                    href={externalRegistrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#1d5ea8] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#1d5ea8]/25 transition-all duration-200 hover:bg-[#15467e] sm:text-base"
                  >
                    Proceed to Official Portal
                    <ExternalLink size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <p className="mt-3 text-[11px] font-medium text-slate-400">
                    Verified Portal • Instant Pass Confirmation
                  </p>
                </div>

                {/* Navigation Links */}
                <div className="mt-8 border-t border-slate-100 pt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-[#1d5ea8]">
                  <Link href="/themes" className="hover:underline">
                    Hackathon Themes
                  </Link>
                  <span>•</span>
                  <Link href="/schedule" className="hover:underline">
                    Event Timeline
                  </Link>
                  <span>•</span>
                  <Link href="/code-of-conduct" className="hover:underline">
                    Code of Conduct
                  </Link>
                </div>

              </div>
            </div>

          </div>

          {/* SECOND SECTION: WHY PARTICIPATE GRID */}
          <section className="mt-16 sm:mt-20">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
              <div className="text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1d5ea8]">
                  KEY BENEFIT HIGHLIGHTS
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-black text-[#0f2d52]">
                  Why Participate in IGNITE 2026?
                </h2>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {whyParticipateFromPdf.map((reason, idx) => (
                  <div
                    key={reason}
                    className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 shadow-sm transition hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#1d5ea8] text-xs font-black text-white">
                      0{idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-[#0f2d52]">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CALL TO ACTION (CTA) COMPONENT */}
          <section className="mt-16 sm:mt-20">
            <div className="relative overflow-hidden rounded-3xl bg-[#0f2d52] p-8 sm:p-12 text-center text-white shadow-xl">
              
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f9be13]/20 px-3.5 py-1 text-xs font-bold text-[#f9be13]">
                <Trophy size={14} />
                <span>COLLABORATE & BUILD</span>
              </div>

              <h2 className="mt-4 text-2xl sm:text-4xl font-black">
                Collaborate, innovate, and build solutions that make a difference.
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm font-medium text-slate-300">
                Explore problem domains or contact the GGI organizing committee for assistance.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/themes"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f9be13] px-7 py-3.5 text-xs sm:text-sm font-bold text-[#0f2d52] shadow-md transition hover:bg-[#e6ad0a]"
                >
                  <Compass size={16} />
                  Explore Themes
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-transparent px-7 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:bg-slate-800"
                >
                  Contact Organizers
                  <ArrowRight size={16} />
                </Link>
              </div>

            </div>
          </section>

        </div>
      </main>
    </PageFrame>
  );
}