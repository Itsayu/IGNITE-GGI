'use client';

import Link from 'next/link';
import {
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Clock,
  Compass,
} from 'lucide-react';
import { PageFrame, PageHero } from '@/components/site-shell';

export default function ContactPage() {
  const googleMapsUrl = 'https://maps.app.goo.gl/puUmu5C515aVE9BU7';

  return (
    <PageFrame>
      <PageHero
        label="Get in Touch"
        title="Have a question? We are listening."
        description="Reach out directly to the IGNITE 2026 organizing team for event details, sponsorship opportunities, or campus directions."
      />

      <main className="bg-slate-50/50 py-12 sm:py-20 text-[#0f2d52]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            
            {/* LEFT COLUMN: CONTACT DETAILS */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#1d5ea8]/10 px-3.5 py-1 text-xs font-bold text-[#1d5ea8]">
                  <Sparkles size={14} />
                  <span>DIRECT HELPLINE</span>
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl font-black text-[#0f2d52]">
                  Reach out <span className="text-[#1d5ea8]">directly.</span>
                </h2>
                <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">
                  Have questions regarding team registrations, event logistics, or campus arrival? Our team is here to assist.
                </p>

                <div className="mt-8 space-y-4">
                  {/* Email Card */}
                  <a
                    href="mailto:ignite@ggi.ac.in"
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4 transition-all duration-200 hover:border-[#1d5ea8] hover:bg-white hover:shadow-md"
                  >
                    <div className="rounded-xl bg-[#1d5ea8]/10 p-3 text-[#1d5ea8] transition-colors group-hover:bg-[#1d5ea8] group-hover:text-white">
                      <Mail size={22} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Email Inquiry
                      </p>
                      <p className="text-base font-black text-[#0f2d52] group-hover:text-[#1d5ea8]">
                        ignite@ggi.ac.in
                      </p>
                    </div>
                  </a>

                  {/* Phone Card */}
                  <a
                    href="tel:+919876543210"
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4 transition-all duration-200 hover:border-[#1d5ea8] hover:bg-white hover:shadow-md"
                  >
                    <div className="rounded-xl bg-[#1d5ea8]/10 p-3 text-[#1d5ea8] transition-colors group-hover:bg-[#1d5ea8] group-hover:text-white">
                      <Phone size={22} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Phone Helpline
                      </p>
                      <p className="text-base font-black text-[#0f2d52] group-hover:text-[#1d5ea8]">
                        +91 98765 43210
                      </p>
                    </div>
                  </a>

                  {/* Location Info Card */}
                  <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4">
                    <div className="rounded-xl bg-[#1d5ea8]/10 p-3 text-[#1d5ea8]">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Campus Address
                      </p>
                      <p className="text-base font-black text-[#0f2d52]">
                        Gulzar Group of Institutes
                      </p>
                      <p className="mt-0.5 text-xs font-medium leading-relaxed text-slate-600">
                        GT Road, Khanna, Ludhiana District, Punjab 141401
                      </p>
                    </div>
                  </div>
                </div>

                {/* Operating Hours Info */}
                <div className="mt-6 flex items-center gap-2 rounded-xl bg-slate-100/70 p-3 text-xs font-semibold text-slate-600">
                  <Clock size={15} className="text-[#1d5ea8]" />
                  <span>Support Available: Mon–Sat, 09:00 AM – 05:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: MAP EMBED */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                {/* Map Header Strip */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 bg-slate-50/80 p-5 sm:p-6">
                  <div className="flex items-center gap-2.5">
                    <div className="rounded-xl bg-[#1d5ea8]/10 p-2 text-[#1d5ea8]">
                      <Compass size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-[#0f2d52]">
                        Venue Location Map
                      </h3>
                      <p className="text-xs font-medium text-slate-500">
                        GT Road, Khanna, Punjab
                      </p>
                    </div>
                  </div>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#1d5ea8] px-4 py-2 text-xs font-bold text-white shadow-md shadow-[#1d5ea8]/20 transition hover:bg-[#15467e]"
                  >
                    Open in Google Maps
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Google Maps iFrame */}
                <div className="relative h-[340px] sm:h-[380px] w-full bg-slate-100">
                  <iframe
                    title="Gulzar Group of Institutes Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.3414987019685!2d76.10889237624905!3d30.596095974650505!2m3!1f0!0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910014a480d19bd%3A0x8e8eb45d6dd8b9eb!2sGulzar%20Group%20of%20Institutes!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Map Footer Note */}
                <div className="p-5 sm:p-6 bg-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1d5ea8]">
                    Arrival Assistance
                  </p>
                  <p className="mt-1 text-xs font-medium leading-relaxed text-slate-600">
                    Accessible directly via National Highway (GT Road). Student volunteer desks will be active at the main campus entrance to guide registered teams to the auditorium.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* CALL TO ACTION SECTION */}
          <section className="mt-16 sm:mt-20">
            <div className="rounded-3xl bg-[#0f2d52] p-8 sm:p-12 text-center text-white shadow-xl">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f9be13]/20 px-3.5 py-1 text-xs font-bold text-[#f9be13]">
                <Sparkles size={14} />
                <span>JOIN THE BUILD</span>
              </div>
              <h2 className="mt-4 text-2xl sm:text-4xl font-black">
                Ready to turn your idea into impact?
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm font-medium text-slate-300">
                Secure your team's spot at IGNITE 2026. 24 hours of non-stop building, mentoring, and prizes await.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1d5ea8] px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#1d5ea8]/30 transition hover:bg-[#15467e]"
                >
                  Register Team Now
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/schedule"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-transparent px-8 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:bg-slate-800"
                >
                  View Event Schedule
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>
    </PageFrame>
  );
}