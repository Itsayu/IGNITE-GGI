"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Cpu,
  HeartPulse,
  GraduationCap,
  Building2,
  Sprout,
  ShieldCheck,
  Coins,
  Lock,
  Boxes,
} from "lucide-react";
import { PageFrame, PageHero } from "@/components/site-shell";

const themes = [
  {
    number: "01",
    title: "Artificial Intelligence",
    description:
      "Build intelligent tools, predictive models, and agentic workflows that make everyday life simpler, smarter, and more human.",
    icon: Cpu,
    tag: "AI & ML",
  },
  {
    number: "02",
    title: "Healthcare & HealthTech",
    description:
      "Create ideas that improve access, diagnosis, telemedicine, mental wellness, and patient experience.",
    icon: HeartPulse,
    tag: "MedTech",
  },
  {
    number: "03",
    title: "Education & EdTech",
    description:
      "Reimagine learning with adaptive platforms, AI tutors, and tools that make education engaging and accessible.",
    icon: GraduationCap,
    tag: "EdTech",
  },
  {
    number: "04",
    title: "Smart Cities & IoT",
    description:
      "Design connected solutions for traffic management, renewable energy, waste handling, and urban mobility.",
    icon: Building2,
    tag: "IoT",
  },
  {
    number: "05",
    title: "Agriculture & AgriTech",
    description:
      "Use technology to strengthen yield prediction, precision farming, food security, and supply chain tracking.",
    icon: Sprout,
    tag: "AgriTech",
  },
  {
    number: "06",
    title: "Blockchain & Web3",
    description:
      "Explore transparent systems, decentralized protocols, digital identity, and new ways to build trust online.",
    icon: Boxes,
    tag: "Web3",
  },
  {
    number: "07",
    title: "FinTech",
    description:
      "Shape thoughtful solutions for seamless payments, personal finance, micro-investing, and financial inclusion.",
    icon: Coins,
    tag: "Finance",
  },
  {
    number: "08",
    title: "Cybersecurity",
    description:
      "Develop security scanners and threat-detection tools that protect privacy and safeguard systems.",
    icon: Lock,
    tag: "CyberSec",
  },
  {
    number: "09",
    title: "Open Innovation",
    description:
      "Have a bold idea outside this list? Bring it on! Any software or hardware solution addressing real problems is welcome.",
    icon: Sparkles,
    tag: "Open Track",
  },
];

export default function ThemesPage() {
  return (
    <PageFrame>
      <PageHero
        label="The Challenge Map"
        title="Start with a problem worth solving."
        description="Pick a direction, follow your curiosity, and build something that moves the conversation forward."
      />

      <main className="bg-white py-16 text-[#0f2d52]">
        <div className="mx-auto max-w-7xl px-6">
          {/* TRACKS GRID */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {themes.map((theme) => {
              const Icon = theme.icon;
              return (
                <article
                  key={theme.number}
                  className="group flex min-h-[280px] flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#1d5ea8] hover:bg-white hover:shadow-xl"
                >
                  <div>
                    {/* Top Header Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-xl bg-[#1d5ea8]/10 p-2.5 text-[#1d5ea8]">
                          <Icon size={22} />
                        </div>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                          {theme.tag}
                        </span>
                      </div>
                      <span className="text-sm font-black text-[#f9be13]">
                        {theme.number}
                      </span>
                    </div>

                    {/* Content */}
                    <h2 className="mt-6 text-2xl font-black tracking-tight text-[#0f2d52]">
                      {theme.title}
                    </h2>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">
                      {theme.description}
                    </p>
                  </div>

                  {/* Card Bottom Indicator */}
                  {/* <div className="mt-6 flex items-center gap-1 text-xs font-bold text-[#1d5ea8]">
                    <span>Register Now</span>
                    <ArrowUpRight
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      size={16}
                    />
                  </div> */}
                  <Link
                    href="/register"
                    className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-[#1d5ea8] transition-colors hover:text-[#15467e]"
                  >
                    <span>Register Now</span>
                    <ArrowUpRight
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      size={16}
                    />
                  </Link>
                </article>
              );
            })}
          </div>

          {/* CALL TO ACTION SECTION */}
          <section className="mt-20">
            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-center text-white shadow-md sm:p-12">
              <span className="inline-block rounded-full bg-[#f9be13] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#0f2d52]">
                READY TO BUILD?
              </span>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Found the domain that sparks your vision?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm font-medium text-slate-300 sm:text-base">
                Form a team of 2 to 4 members and bring your project to life in
                24 non-stop hours at Gulzar Group of Institutes.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/register"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f9be13] px-8 py-4 font-bold text-[#0f2d52] shadow-md transition hover:bg-[#e6ad0a] sm:w-auto"
                >
                  Register Your Team Now
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/schedule"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-700 bg-transparent px-8 py-4 font-bold text-white transition hover:bg-slate-800 sm:w-auto"
                >
                  Check Event Schedule
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </PageFrame>
  );
}