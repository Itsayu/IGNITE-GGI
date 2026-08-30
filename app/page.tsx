"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Trophy,
  Gift,
  Award,
  Flame,
  Compass,
  Lightbulb,
  Code,
  Cpu,
  Clock,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { PageFrame } from "@/components/site-shell";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-09-14T09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto flex max-w-2xl items-center justify-center gap-4 sm:gap-8 py-6">
      {[
        { label: "DAYS", value: timeLeft.days },
        { label: "HOURS", value: timeLeft.hours },
        { label: "MINS", value: timeLeft.minutes },
        { label: "SECS", value: timeLeft.seconds },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="flex h-20 w-20 sm:h-28 sm:w-28 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-md">
            <span className="text-3xl sm:text-5xl font-black text-[#1d5ea8]">
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
          <span className="mt-3 text-xs sm:text-sm font-extrabold tracking-widest text-slate-500">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

const stats = [
  { value: "24 Hrs", label: "NON-STOP BUILDING" },
  { value: "500+", label: "STUDENT HACKERS" },
  { value: "Open", label: "INNOVATION FORMAT" },
  { value: "100%", label: "MEALS & PERKS PROVIDED" },
];

const domains = [
  {
    badge: "URBAN TECH",
    badgeColor: "bg-[#f9be13]/20 text-[#0f2d52]",
    title: "Smart Cities & Urban Mobility",
    desc: "Build solutions for traffic management, intelligent transit, public safety, and smart infrastructure.",
    icon: Compass,
  },
  {
    badge: "MEDTECH & CARE",
    badgeColor: "bg-rose-100 text-rose-700",
    title: "Healthcare & Assistive Tech",
    desc: "Develop early diagnostic tools, patient tracking systems, accessibility devices, and mental health tools.",
    icon: Lightbulb,
  },
  {
    badge: "FUTURE OF EDU",
    badgeColor: "bg-teal-100 text-teal-800",
    title: "EdTech & Learning Accessibility",
    desc: "Create interactive learning platforms, AI tutors, skill development tools, and digital classroom systems.",
    icon: Code,
  },
  {
    badge: "WEB3 & SYSTEMS",
    badgeColor: "bg-indigo-100 text-indigo-700",
    title: "Web3, CyberSec & Open Hardware",
    desc: "Engineer decentralized protocols, security scanners, IoT sensors, or embedded system prototypes.",
    icon: Cpu,
  },
];

export default function Home() {
  return (
    <PageFrame>
      <main className="min-h-screen bg-white font-sans text-[#0f2d52] antialiased">
        {/* HERO SECTION - CLEAN, MINIMALIST, HIGH IMPACT */}
        <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-6 text-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-bold tracking-wide text-[#1d5ea8] shadow-sm">
              <Sparkles size={14} className="text-[#f9be13]" />
              GULZAR GROUP OF INSTITUTES PRESENTS
            </div>

            {/* Big Clean Title */}
            <h1 className="mt-8 text-5xl font-black tracking-tight text-[#0f2d52] sm:text-7xl md:text-8xl">
              IGNITE <span className="text-[#1d5ea8]">2026</span>
            </h1>

            {/* Subtitle with gold stroke accent line */}
            <div className="relative mx-auto mt-4 inline-block">
              <p className="text-xl sm:text-3xl font-extrabold text-[#0f2d52]">
                Ideas in motion. <span className="text-[#1d5ea8]">Impact in mind.</span>
              </p>
              <div className="mt-2 h-1 w-full rounded-full bg-[#f9be13]" />
            </div>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-4xl text-base font-medium text-slate-600 sm:text-lg">
              A national 24-hour innovation hackathon bringing together thinkers, creators, and developers to build solutions for real-world problems.
            </p>

            {/* Event Info Strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-bold text-slate-700">
              <span className="flex items-center gap-2">
                <Calendar size={18} className="text-[#1d5ea8]" /> Sept 14-15, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} className="text-[#1d5ea8]" /> 24 Hours Non-stop
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={18} className="text-[#1d5ea8]" /> GGI Campus
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/register"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#1d5ea8] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#1d5ea8]/20 transition hover:bg-[#15467e] sm:w-auto"
              >
                Register Your Team
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-bold text-[#0f2d52] transition hover:bg-slate-50 sm:w-auto"
              >
                Read Guidelines
              </Link>
            </div>

            {/* Countdown Component */}
            <div className="mt-28">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                HACKATHON STARTS IN
              </p>
              <CountdownTimer />
            </div>

          </div>
        </section>

        {/* STATS STRIP */}
        <section className="border-y border-slate-100 bg-slate-50/50 py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-[#1d5ea8] sm:text-4xl">
                    {s.value}
                  </span>
                  <span className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPEN INNOVATION SECTION */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <span className="inline-block rounded-full bg-[#f9be13]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0f2d52]">
                    NO DOMAIN BOUNDARIES
                  </span>
                  <h2 className="mt-4 text-3xl font-black text-[#0f2d52] sm:text-4xl">
                    What is Open Innovation at IGNITE 2026?
                  </h2>
                  <p className="mt-4 text-base font-normal leading-relaxed text-slate-600">
                    We believe great software and hardware solutions shouldn't be boxed into rigid tracks. At IGNITE 2026, you have 100% freedom to identify any real-world problem and build a solution using Web, AI, App Dev, Web3, Cloud, or IoT.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Any Technology Stack",
                      "Hardware & Software Allowed",
                      "Real-World Impact",
                    ].map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-bold text-[#0f2d52]"
                      >
                        <CheckCircle2 size={14} className="text-[#1d5ea8]" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-md">
                    <div className="flex items-center gap-2 text-[#f9be13]">
                      <Flame size={22} />
                      <h3 className="text-xl font-bold">Build Without Constraints</h3>
                    </div>
                    <p className="mt-4 text-sm font-normal leading-relaxed text-slate-300">
                      Whether it's an AI diagnostic assistant, an automated developer CLI tool, a smart IoT device, or a decentralized app, if it works and solves a problem, it belongs here!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SAMPLE INNOVATION DOMAINS */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1d5ea8]">
                INSPIRED FOCUS AREAS
              </span>
              <h2 className="mt-2 text-3xl font-black text-[#0f2d52] sm:text-4xl">
                Sample Innovation Domains
              </h2>
              <p className="mt-3 text-sm font-medium text-slate-500">
                Need inspiration? Explore some of the high-impact themes you can tackle.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {domains.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.title}
                    className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-wider ${d.badgeColor}`}>
                          {d.badge}
                        </span>
                        <Icon size={20} className="text-[#1d5ea8]" />
                      </div>
                      <h3 className="mt-6 text-lg font-bold text-[#0f2d52]">
                        {d.title}
                      </h3>
                      <p className="mt-2 text-xs font-normal leading-relaxed text-slate-600">
                        {d.desc}
                      </p>
                    </div>

                    {/* <div className="mt-6 flex items-center text-xs font-bold text-[#1d5ea8]">
                      View Details <ArrowRight size={14} className="ml-1" />
                    </div> */}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* REWARDS SECTION */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1d5ea8]">
              REWARDS & PERKS
            </span>
            <h2 className="mt-2 text-3xl font-black text-[#0f2d52] sm:text-4xl">
              Prizes & Bounties To Be Revealed Soon!
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm font-medium text-slate-500">
              We are preparing rewards, track bounties, swag hampers, and direct opportunities for participants.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                <div className="inline-flex rounded-xl bg-blue-50 p-3 text-[#1d5ea8]">
                  <Trophy size={28} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-[#0f2d52]">
                  Main Hackathon Prizes
                </h3>
                <p className="mt-2 text-xs font-normal leading-relaxed text-slate-600">
                  Top overall winning teams receive trophies, cash prizes, and certificates.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                <div className="inline-flex rounded-xl bg-amber-50 p-3 text-[#f9be13]">
                  <Gift size={28} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-[#0f2d52]">
                  Track Bounties & Swag
                </h3>
                <p className="mt-2 text-xs font-normal leading-relaxed text-slate-600">
                  Special category bounties for best beginner team, all-girls team, and track winners.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600">
                  <Award size={28} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-[#0f2d52]">
                  Perks for All Hackers
                </h3>
                <p className="mt-2 text-xs font-normal leading-relaxed text-slate-600">
                  Participation certificates, stickers, sponsor credits, and meals provided for every hacker.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SIMPLE FOOTER CTA */}
        <section className="bg-[#0f2d52] py-16 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-black sm:text-4xl">
              Ready to make your mark at IGNITE 2026?
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Sept 14-15, 2026 • Gulzar Group of Institutes Campus
            </p>
            <div className="mt-8">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-full bg-[#f9be13] px-8 py-4 text-base font-bold text-[#0f2d52] transition hover:bg-[#e6ad0a]"
              >
                Register Now
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}