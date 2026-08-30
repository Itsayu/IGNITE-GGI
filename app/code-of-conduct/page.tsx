'use client';

import Link from 'next/link';
import {
  ShieldAlert,
  Code2,
  HeartHandshake,
  UserX,
  CameraOff,
  ShieldCheck,
  FileCode,
  AlertTriangle,
  Gavel,
  ArrowRight,
} from 'lucide-react';
import { PageFrame, PageHero } from '@/components/site-shell';

const sections = [
  {
    id: 'applicability',
    icon: HeartHandshake,
    title: 'Applicability',
    content: (
      <p className="text-sm font-normal leading-relaxed text-slate-600">
        This policy shall be applicable on all spaces related to IGNITE 2026 and Devfolio, including hackathons, talks, presentations or demos, workshops, parties and social events, social media channels, and their online counterparts. This Code of Conduct applies equally to all sponsors, partners, and projects created during the hackathon.
      </p>
    ),
  },
  {
    id: 'plagiarism',
    icon: Code2,
    title: 'No Plagiarism or Re-using Past Work',
    content: (
      <div className="space-y-3 text-sm font-normal leading-relaxed text-slate-600">
        <p>
          We encourage you to submit projects prepared entirely during the 24-hour duration of the hackathon. However, if you decide to submit projects consisting of re-used code, or re-submit a project previously submitted to another hackathon, you must disclose such previous use and its extent upon submission.
        </p>
        <p>
          If upon inspection a project contains undisclosed re-used code, organizers may request clarification on similarities and differences or disqualify the submission from winning awards automatically.
        </p>
      </div>
    ),
  },
  {
    id: 'no-discrimination',
    icon: UserX,
    title: 'No Discrimination',
    content: (
      <div className="space-y-3 text-sm font-normal leading-relaxed text-slate-600">
        <p>
          IGNITE 2026 is dedicated to providing a safe, comfortable, and harassment-free experience for everyone. No discrimination based on the following will be tolerated:
        </p>
        <div className="grid grid-cols-2 gap-2 font-bold text-[#0f2d52] sm:grid-cols-3">
          {[
            'Gender & Identity',
            'Age & Sexual Orientation',
            'Disability & Appearance',
            'Race & Ethnicity',
            'Nationality & Religion',
            'Political Views',
            'Hackathon Experience',
            'Tech Stack / Language',
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs"
            >
              • {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'no-harassment',
    icon: ShieldAlert,
    title: 'No Harassment',
    content: (
      <p className="text-sm font-normal leading-relaxed text-slate-600">
        We do not tolerate harassment of participants in any form, including offensive verbal comments, deliberate intimidation, stalking, willful disruption, inappropriate physical contact, unwelcome sexual advances, or public display of sexual material.
      </p>
    ),
  },
  {
    id: 'consent',
    icon: CameraOff,
    title: 'No Recording Without Consent',
    content: (
      <div className="space-y-3 text-sm font-normal leading-relaxed text-slate-600">
        <p>
          While photography and videography are encouraged, participants must be given a reasonable chance to opt out. If someone objects or disapproves after a photo/video is taken, comply immediately by deleting it and retracting it from social media channels.
        </p>
        <p className="font-semibold text-rose-600">
          Photographs are strictly prohibited in contexts with reasonable expectations of privacy (e.g., restrooms or sleeping areas).
        </p>
      </div>
    ),
  },
  {
    id: 'safe-space',
    icon: ShieldCheck,
    title: 'Creation of a Safe Space',
    content: (
      <p className="text-sm font-normal leading-relaxed text-slate-600">
        No sponsors, partners, or participants shall use sexualized images, activities, uniforms, or material. Anything creating an uncomfortable or sexualized environment is strictly prohibited.
      </p>
    ),
  },
  {
    id: 'intellectual-property',
    icon: FileCode,
    title: 'Intellectual Property',
    content: (
      <p className="text-sm font-normal leading-relaxed text-slate-600">
        You retain full ownership of all developments and intellectual property made during IGNITE 2026. By posting your submission, you grant Devfolio and IGNITE 2026 a non-exclusive, worldwide, royalty-free license to display and distribute your submission strictly to deliver platform services. Your creations will never be used exploitatively.
      </p>
    ),
  },
  {
    id: 'reporting',
    icon: AlertTriangle,
    title: 'Always Report',
    content: (
      <p className="text-sm font-normal leading-relaxed text-slate-600">
        If you notice any Code of Conduct violation or suspicious behavior, contact an organizing committee member immediately. We will gladly help participants contact campus security or local law enforcement to ensure everyone feels safe throughout the event.
      </p>
    ),
  },
  {
    id: 'consequences',
    icon: Gavel,
    title: 'Consequences of Violations',
    content: (
      <div className="space-y-2 text-sm font-normal leading-relaxed text-slate-600">
        <p>
          Organizers reserve the right to take appropriate action against anyone violating these rules, including:
        </p>
        <ul className="list-disc pl-5 font-semibold text-[#0f2d52]">
          <li>Expulsion from the hackathon without refunds (if applicable)</li>
          <li>Blocking access to Devfolio resources and event portals</li>
          <li>Reporting behavior to campus security and local law enforcement</li>
        </ul>
      </div>
    ),
  },
];

export default function CodeOfConductPage() {
  return (
    <PageFrame>
      <PageHero
        label="Event Standards"
        title="Code of Conduct"
        description="Fostering an inclusive, safe, fair, and collaborative environment for all hackers, mentors, and partners at IGNITE 2026."
      />

      <main className="bg-white py-16 text-[#0f2d52]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* STICKY QUICK-NAV SIDEBAR */}
            <aside className="hidden lg:col-span-4 lg:block">
              <div className="sticky top-28 rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1d5ea8]">
                  Table of Contents
                </span>
                <nav className="mt-4 flex flex-col space-y-2 text-xs font-bold text-slate-600">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="transition-colors hover:text-[#1d5ea8]"
                    >
                      • {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* MAIN POLICY CONTENT CARDS */}
            <div className="space-y-6 lg:col-span-8">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-slate-100 p-2.5 text-[#1d5ea8]">
                        <Icon size={22} />
                      </div>
                      <h2 className="text-xl font-black text-[#0f2d52]">
                        {section.title}
                      </h2>
                    </div>
                    <div className="mt-4">{section.content}</div>
                  </section>
                );
              })}

              {/* REPORT CTA */}
              <div className="mt-8 rounded-2xl bg-slate-900 p-8 text-white shadow-md">
                <h3 className="text-xl font-black">Need to report an issue?</h3>
                <p className="mt-2 text-sm text-slate-300">
                  If you experience harassment or notice violations during IGNITE 2026, reach out immediately to our organizers at the help desk or online support channel.
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#f9be13] px-6 py-3 text-sm font-bold text-[#0f2d52] transition hover:bg-[#e6ad0a]"
                  >
                    Contact Organizing Team
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageFrame>
  );
}