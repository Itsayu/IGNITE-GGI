'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  CalendarDays,
  Clock3,
  MapPin,
  ArrowRight,
  Sparkles,
  Users,
  Utensils,
  Award,
  Presentation,
  PartyPopper,
} from 'lucide-react';
import { PageFrame, PageHero } from '@/components/site-shell';

interface ScheduleEvent {
  id: string;
  title: string;
  category: 'Ceremony' | 'Social' | 'Mentoring' | 'Presentation';
  description: string;
  date: string;
  day: 'day1' | 'day2';
  time: string;
  venue: string;
  icon: React.ElementType;
}

const scheduleEvents: ScheduleEvent[] = [
  // DAY 1 - SEPT 14, 2026
  {
    id: '1',
    title: 'Registration & Kit Distribution',
    category: 'Ceremony',
    description: 'Registration desk is open for all participants to collect their hackathon kits and ID badges.',
    date: 'Sept 14, 2026',
    day: 'day1',
    time: '07:30 AM - 10:00 AM',
    venue: 'Registration Desk',
    icon: Users,
  },
  {
    id: '2',
    title: 'Inauguration Ceremony',
    category: 'Ceremony',
    description: 'The inauguration ceremony will begin, followed by participants proceeding to their project locations.',
    date: 'Sept 14, 2026',
    day: 'day1',
    time: '10:00 AM - 10:45 AM',
    venue: 'Main Auditorium',
    icon: Sparkles,
  },
  {
    id: '3',
    title: 'Lunch Break',
    category: 'Social',
    description: 'Lunch will be served for all registered participants.',
    date: 'Sept 14, 2026',
    day: 'day1',
    time: '12:45 PM - 02:00 PM',
    venue: 'Food Court',
    icon: Utensils,
  },
  {
    id: '4',
    title: 'First Round of Mentoring',
    category: 'Mentoring',
    description: 'Teams will receive initial guidance, technical support, and idea feedback from domain mentors.',
    date: 'Sept 14, 2026',
    day: 'day1',
    time: '02:00 PM - 05:00 PM',
    venue: 'Team Zones',
    icon: Presentation,
  },
  {
    id: '5',
    title: 'Evening Snacks & Refreshments',
    category: 'Social',
    description: 'Light snacks and tea/coffee will be served to keep the momentum going.',
    date: 'Sept 14, 2026',
    day: 'day1',
    time: '05:00 PM - 06:00 PM',
    venue: 'Food Court',
    icon: Utensils,
  },
  {
    id: '6',
    title: 'Second Round of Mentoring',
    category: 'Mentoring',
    description: 'Additional guidance, progress tracking, and project refinement feedback from expert mentors.',
    date: 'Sept 14, 2026',
    day: 'day1',
    time: '06:15 PM - 08:00 PM',
    venue: 'Team Zones',
    icon: Presentation,
  },
  {
    id: '7',
    title: 'Dinner Break',
    category: 'Social',
    description: 'Dinner will be served for all participants and mentors.',
    date: 'Sept 14, 2026',
    day: 'day1',
    time: '08:00 PM - 09:30 PM',
    venue: 'Food Court',
    icon: Utensils,
  },
  {
    id: '8',
    title: 'Fun & Jamming Session',
    category: 'Social',
    description: 'Cultural, musical, or mini-game events to refresh participants and energize them for overnight coding.',
    date: 'Sept 14, 2026',
    day: 'day1',
    time: '11:00 PM - 12:00 AM',
    venue: 'Main Stage',
    icon: PartyPopper,
  },

  // DAY 2 - SEPT 15, 2026
  {
    id: '9',
    title: 'First Evaluation Round',
    category: 'Presentation',
    description: 'Teams present their midnight progress and technical prototype for initial assessment to judges.',
    date: 'Sept 15, 2026',
    day: 'day2',
    time: '01:00 AM - 05:00 AM',
    venue: 'Team Zones',
    icon: Presentation,
  },
  {
    id: '10',
    title: 'Breakfast',
    category: 'Social',
    description: 'Breakfast will be served to recharge hackers for the final sprint.',
    date: 'Sept 15, 2026',
    day: 'day2',
    time: '07:30 AM - 09:00 AM',
    venue: 'Food Court',
    icon: Utensils,
  },
  {
    id: '11',
    title: 'Final Round of Evaluation & Valedictory',
    category: 'Presentation',
    description: 'The top 10 to 15 finalist teams present their projects on the main stage, followed by the felicitation ceremony.',
    date: 'Sept 15, 2026',
    day: 'day2',
    time: '10:30 AM - 02:00 PM',
    venue: 'Main Auditorium',
    icon: Award,
  },
];

const categoryStyles = {
  Ceremony: 'bg-purple-50 text-purple-700 border-purple-200',
  Social: 'bg-amber-50 text-amber-800 border-amber-200',
  Mentoring: 'bg-blue-50 text-[#1d5ea8] border-blue-200',
  Presentation: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  const filteredEvents = scheduleEvents.filter(
    (event) => event.day === activeDay
  );

  return (
    <PageFrame>
      <PageHero
        label="Event Timeline"
        title="24 Hours of Pure Innovation"
        description="A structured roadmap designed for deep work, mentorship, meals, and high-impact pitching."
      />

      <main className="bg-slate-50/50 py-12 sm:py-20 text-[#0f2d52]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          
          {/* DAY SELECTOR TABS */}
          <div className="mx-auto flex max-w-sm items-center justify-center rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
            <button
              onClick={() => setActiveDay('day1')}
              className={`flex-1 rounded-full py-2.5 text-xs sm:text-sm font-bold transition-all ${
                activeDay === 'day1'
                  ? 'bg-[#1d5ea8] text-white shadow-md shadow-[#1d5ea8]/20'
                  : 'text-slate-600 hover:text-[#0f2d52]'
              }`}
            >
              Day 1 • Sept 14
            </button>
            <button
              onClick={() => setActiveDay('day2')}
              className={`flex-1 rounded-full py-2.5 text-xs sm:text-sm font-bold transition-all ${
                activeDay === 'day2'
                  ? 'bg-[#1d5ea8] text-white shadow-md shadow-[#1d5ea8]/20'
                  : 'text-slate-600 hover:text-[#0f2d52]'
              }`}
            >
              Day 2 • Sept 15
            </button>
          </div>

          {/* CLEAN CARD STACK */}
          <div className="mt-10 space-y-4">
            {filteredEvents.map((event) => {
              const Icon = event.icon;
              return (
                <div
                  key={event.id}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-[#1d5ea8] hover:shadow-md"
                >
                  {/* Top Header Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="rounded-xl bg-[#1d5ea8]/10 p-2 text-[#1d5ea8]">
                        <Icon size={18} />
                      </div>
                      <span
                        className={`rounded-full border px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                          categoryStyles[event.category]
                        }`}
                      >
                        {event.category}
                      </span>
                    </div>

                    {/* Time & Location Tags */}
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#1d5ea8]">
                        <Clock3 size={13} />
                        <span>{event.time}</span>
                      </div>
                      <div className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                        <MapPin size={13} className="text-slate-400" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="mt-4">
                    <h3 className="text-lg font-black text-[#0f2d52]">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-slate-600">
                      {event.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* REGISTRATION CTA BANNER */}
          <section className="mt-16">
            <div className="rounded-3xl bg-[#0f2d52] p-8 sm:p-12 text-center text-white shadow-xl">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f9be13]/20 px-3.5 py-1 text-xs font-bold text-[#f9be13]">
                <Sparkles size={14} />
                <span>SPOT RESERVATION</span>
              </div>
              <h2 className="mt-4 text-2xl sm:text-4xl font-black">
                Ready to Join IGNITE 2026?
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm font-medium text-slate-300">
                Don't miss out on 24 hours of non-stop innovation, mentorship, and building at Gulzar Group of Institutes.
              </p>
              <div className="mt-8">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1d5ea8] px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-[#1d5ea8]/30 transition hover:bg-[#15467e]"
                >
                  Register Now
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>
    </PageFrame>
  );
}