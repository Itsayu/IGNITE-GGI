'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { PageFrame, PageHero } from '@/components/site-shell';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'Participation & Teams',
    question: 'Who can participate in IGNITE 2026?',
    answer:
      'IGNITE 2026 is open to undergraduate and postgraduate college students from all technical and non-technical disciplines who are excited to solve problems through innovation and technology.',
  },
  {
    category: 'Participation & Teams',
    question: 'Do I need to arrive with a team?',
    answer:
      'Yes! Participants must register and compete in teams of 2 to 4 members. Make sure all your team members complete their registration prior to the event.',
  },
  {
    category: 'Tracks & Projects',
    question: 'Can I work on an idea outside the listed themes?',
    answer:
      'Yes. Our Open Innovation track is specifically designed for novel ideas that do not fit into traditional categories. If your project solves a meaningful real-world problem, it is welcome!',
  },
  {
    category: 'Logistics & Prep',
    question: 'What should I bring to the campus?',
    answer:
      'Bring your laptop, chargers, extension cords, valid college ID card, personal toiletries, and any hardware/IoT components your team needs for your project. Meals and workspace are provided.',
  },
  {
    category: 'Registration',
    question: 'How does the registration process work?',
    answer:
      'Fill out the online registration form on our portal. Once reviewed, your team leader will receive a confirmation email containing event instructions and check-in badges.',
  },
  {
    category: 'Venue & Location',
    question: 'Where is IGNITE 2026 happening?',
    answer:
      'The event is hosted on-campus at Gulzar Group of Institutes, located on GT Road, Khanna, Punjab. Detailed venue directions and check-in locations will be shared prior to the event.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageFrame>
      <PageHero
        label="Questions Answered"
        title="Everything you need to know"
        description="Got questions about IGNITE 2026? Find answers regarding rules, team requirements, logistics, and registration below."
      />

      <main className="bg-slate-50/50 py-12 sm:py-20 text-[#0f2d52]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          
          {/* ACCORDION FAQ CONTAINER */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border bg-white transition-all duration-200 ${
                    isOpen
                      ? 'border-[#1d5ea8] shadow-md'
                      : 'border-slate-200 shadow-sm hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`rounded-xl p-2.5 transition-colors ${
                          isOpen
                            ? 'bg-[#1d5ea8] text-white'
                            : 'bg-slate-100 text-[#1d5ea8]'
                        }`}
                      >
                        <HelpCircle size={18} />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#1d5ea8]">
                          {faq.category}
                        </span>
                        <h2 className="text-base sm:text-lg font-black text-[#0f2d52]">
                          {faq.question}
                        </h2>
                      </div>
                    </div>

                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-slate-100 text-[#1d5ea8]' : 'text-slate-400'
                      }`}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {/* Animated Collapse Content */}
                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 pb-6 pt-4 sm:px-6">
                      <p className="text-sm font-medium leading-relaxed text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CONTACT ASSISTANCE BANNER */}
          <section className="mt-16">
            <div className="rounded-3xl bg-[#0f2d52] p-8 sm:p-12 text-center text-white shadow-xl">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f9be13]/20 px-3.5 py-1 text-xs font-bold text-[#f9be13]">
                <Sparkles size={14} />
                <span>STILL HAVE QUESTIONS?</span>
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl font-black">
                We're here to help you out
              </h2>
              <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm font-medium text-slate-300">
                Can't find the answer you are looking for? Reach out directly to our organizing committee team.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f9be13] px-7 py-3 text-xs sm:text-sm font-bold text-[#0f2d52] shadow-md transition hover:bg-[#e6ad0a]"
                >
                  <MessageCircle size={16} />
                  Get in Touch
                </Link>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1d5ea8] px-7 py-3 text-xs sm:text-sm font-bold text-white transition hover:bg-[#15467e]"
                >
                  Register Now
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