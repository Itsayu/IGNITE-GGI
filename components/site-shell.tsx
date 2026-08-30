'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

const navItems = [
  ['About', '/about'],
  ['Themes', '/themes'],
  ['Schedule', '/schedule'],
  ['Code of Conduct', '/code-of-conduct'],
  ['FAQ', '/faq'],
  ['Contact', '/contact'],
];

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label="IGNITE 2026 home"
    >
      <Image
        src="./assets/ggi.png"
        alt="Gulzar Group of Institutes Logo"
        width={130}
        height={40}
        className="h-8 w-auto object-contain sm:h-9"
        priority
      />

      {/* Keeps IGNITE 2026 visible on all screen sizes */}
      <div className="block border-l border-slate-300 pl-2.5">
        <span className="text-sm font-black tracking-tight text-[#0f2d52] sm:text-base">
          IGNITE <span className="text-[#1d5ea8]">2026</span>
        </span>
      </div>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  // Prevent page scrolling when the mobile drawer is active
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-bold text-[#0f2d52] transition-colors hover:text-[#1d5ea8]"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/register"
              className="group inline-flex items-center gap-2 rounded-full bg-[#1d5ea8] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-[#1d5ea8]/20 transition hover:bg-[#15467e]"
            >
              Register Now
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </nav>

          {/* Mobile Hamburger Button with Custom 3-Line Pattern */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-10 w-10 items-center justify-center text-[#0f2d52] transition lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="relative flex h-4 w-5 flex-col justify-between items-end transition-all duration-300">
              {/* Line 1: Full width */}
              <span
                className={`h-0.5 w-5 rounded-full bg-[#0f2d52] transition-all duration-300 ${
                  open ? 'translate-y-1.5 rotate-45 bg-[#1d5ea8]' : ''
                }`}
              />
              {/* Line 2: Shorter width from the left */}
              <span
                className={`h-0.5 w-3.5 rounded-full bg-[#0f2d52] transition-all duration-300 ${
                  open ? 'w-0 opacity-0' : 'opacity-100'
                }`}
              />
              {/* Line 3: Full width */}
              <span
                className={`h-0.5 w-5 rounded-full bg-[#0f2d52] transition-all duration-300 ${
                  open ? '-translate-y-2 -rotate-45 bg-[#1d5ea8]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* FULL-SCREEN RIGHT-TO-LEFT SLIDE OVERLAY (Covers Hero Entirely) */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          open ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        {/* Full-width Off-Canvas Drawer Panel */}
        <div
          className={`absolute inset-0 h-full w-full bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col justify-between ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Top Header Row inside Full-Screen Drawer */}
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-[#0f2d52]"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="mt-8 flex flex-col space-y-2">
              {navItems.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-5 py-4 text-xl font-black text-[#0f2d52] transition-colors hover:bg-slate-50 hover:text-[#1d5ea8]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Call to Action inside Full-Screen Drawer */}
          <div className="border-t border-slate-100 pt-6 pb-4">
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1d5ea8] px-6 py-4 text-center text-base font-bold text-white shadow-lg shadow-[#1d5ea8]/20 transition hover:bg-[#15467e]"
            >
              Register Now for IGNITE 2026
              <ArrowUpRight size={18} />
            </Link>
            <p className="mt-3 text-center text-xs font-medium text-slate-400">
              Gulzar Group of Institutes • GT Road, Khanna
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-16 pb-6 text-[#0f2d52]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm font-medium leading-relaxed text-slate-600">
            A 24-hour non-stop innovation hackathon for thinkers, creators, and developers ready to build tomorrow.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-wider text-[#1d5ea8]">
            Explore
          </p>
          <div className="grid gap-3 text-sm font-bold text-slate-600">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="transition hover:text-[#1d5ea8]">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-wider text-[#1d5ea8]">
            Host Campus
          </p>
          <p className="text-sm font-medium leading-relaxed text-slate-600">
            Gulzar Group of Institutes<br />
            GT Road, Khanna, Punjab
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#1d5ea8] hover:underline"
          >
            Get in touch <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-slate-200/80 px-6 pt-6 text-xs font-medium text-slate-500">
        © 2026 Gulzar Group of Institutes. IGNITE 2026. All rights reserved.
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export function PageHero({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="inline-block rounded-full bg-[#f9be13]/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#0f2d52]">
          {label}
        </span>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-[#0f2d52] sm:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}