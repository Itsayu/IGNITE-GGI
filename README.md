````md
# IGNITE 2026

IGNITE 2026 is the official web application for the flagship 24-hour innovation hackathon organized by Gulzar Group of Institutes (GGI), Khanna, Punjab.

The platform serves as the primary information and registration portal for the event, providing participants with everything they need before and during the hackathon, including event details, schedules, innovation tracks, FAQs, code of conduct, venue information, and registration access.

The project is built using Next.js, React, TypeScript, and Tailwind CSS with a focus on performance, responsive design, accessibility, and modern UI principles.

---

## Table of Contents

- Overview
- Features
- Technology Stack
- Project Structure
- Design System
- Getting Started
- Installation
- Available Scripts
- Application Pages
- Deployment
- Browser Support
- Contributing
- License

---

## Overview

IGNITE 2026 aims to provide a centralized platform for participants, mentors, judges, organizers, and visitors.

The application includes:

- Event information
- Innovation themes
- Live countdown to the hackathon
- Detailed event schedule
- Registration portal
- Frequently Asked Questions
- Code of Conduct
- Contact information
- Responsive experience across desktop, tablet, and mobile devices

---

## Features

### User Experience

- Fully responsive interface
- Mobile-first design
- Sticky navigation bar
- Animated off-canvas mobile navigation
- Smooth transitions and interactions
- Optimized typography and spacing
- Accessible navigation components

### Home Page

- Hero section
- Event overview
- Countdown timer
- Statistics section
- Innovation themes preview
- Open Innovation showcase
- Registration call-to-action

### About

- Vision of IGNITE 2026
- Event objectives
- Team eligibility
- Participation guidelines

### Themes

Nine innovation domains including:

- Artificial Intelligence & Machine Learning
- HealthTech
- EdTech
- Smart Cities
- AgriTech
- FinTech
- Cybersecurity
- Web3
- Open Innovation

### Schedule

- Day 1 timeline
- Day 2 timeline
- Registration
- Opening ceremony
- Hacking sessions
- Mentor interactions
- Final presentations
- Prize distribution

### Registration

- External registration portal
- Event benefits
- Eligibility
- Registration instructions

### Code of Conduct

- Community guidelines
- Anti-harassment policy
- Code submission rules
- Intellectual Property policy
- Event expectations

### FAQ

Frequently asked questions covering:

- Eligibility
- Team size
- Registration
- Hardware
- Accommodation
- Certificates
- Judging process

### Contact

- Institute information
- Email
- Phone numbers
- Google Maps integration

---

## Technology Stack

### Framework

- Next.js 13 (App Router)

### Language

- TypeScript
- React 18

### Styling

- Tailwind CSS
- CSS Modules

### UI Components

- Radix UI
- Lucide React

### Forms

- React Hook Form
- Zod

### Charts

- Recharts

### Backend Services

- Supabase

### Utilities

- date-fns
- clsx
- class-variance-authority
- tailwind-merge

### Deployment

- Netlify
- Vercel (Compatible)

---

## Project Structure

```text
ignite-2026/
│
├── app/
│   ├── about/
│   ├── code-of-conduct/
│   ├── contact/
│   ├── faq/
│   ├── register/
│   ├── schedule/
│   ├── themes/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── site-shell.tsx
│   └── ...
│
├── lib/
│
├── public/
│   └── assets/
│       └── ggi.png
│
├── styles/
│
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── README.md
```

---

## Design System

### Brand Colors

| Name | Hex |
|------|------|
| Primary Blue | `#1d5ea8` |
| Dark Blue | `#0f2d52` |
| Accent Gold | `#f9be13` |
| Background | `#faf8f5` |
| Secondary Background | `#f8fafc` |

### Typography

- Modern sans-serif typography
- Responsive font scaling
- Accessible contrast ratios

### Layout

Maximum content width:

```text
max-w-7xl
```

Container Width:

```text
1280px
```

---

## Prerequisites

Before running the project, ensure the following software is installed.

- Node.js 18 or later
- npm

Alternatively, you may use:

- yarn
- pnpm

---

## Installation

Clone the repository.

```bash
git clone https://github.com/your-username/ignite-2026.git
```

Navigate into the project.

```bash
cd ignite-2026
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Open the application.

```text
http://localhost:3000
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the local development server.

---

### Production Build

```bash
npm run build
```

Creates an optimized production build.

---

### Start Production Server

```bash
npm run start
```

Runs the production build locally.

---

### Type Checking

```bash
npm run typecheck
```

Runs the TypeScript compiler without emitting files.

---

### Linting

```bash
npm run lint
```

Runs ESLint across the project.

---

## Application Pages

| Route | Description |
|--------|-------------|
| `/` | Landing page |
| `/about` | About IGNITE 2026 |
| `/themes` | Innovation themes |
| `/schedule` | Event schedule |
| `/register` | Registration portal |
| `/faq` | Frequently Asked Questions |
| `/contact` | Contact information |
| `/code-of-conduct` | Event policies |

---

## Assets

The project expects the following asset to be available.

```text
public/
└── assets/
    └── ggi.png
```

---

## Deployment

The project can be deployed on any platform supporting Next.js.

Recommended platforms:

- Netlify
- Vercel

To create a production build:

```bash
npm run build
```

---

## Browser Support

The application is tested on modern browsers including:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to your branch.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

## License

This project is maintained by Gulzar Group of Institutes (GGI), Khanna, Punjab.

All rights reserved.

Unauthorized reproduction, distribution, or commercial use of this project or its assets without permission is prohibited.

---

## Acknowledgements

Developed for the official IGNITE 2026 Hackathon hosted by Gulzar Group of Institutes.

Built with:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Radix UI
- Lucide React
- Supabase
````
