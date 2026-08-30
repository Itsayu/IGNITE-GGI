# IGNITE 2026

IGNITE 2026 is the official website for the 24-hour hackathon organized by Gulzar Group of Institutes (GGI), Khanna, Punjab. The platform provides information about the event, themes, schedule, registration, code of conduct, FAQs, and contact details.

## Tech Stack

- Next.js 13 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React

## Features

- Responsive landing page
- Sticky navigation with mobile drawer
- Countdown timer
- About page
- Hackathon themes
- Event schedule
- Code of Conduct
- Frequently Asked Questions
- Contact page
- Registration page
- Fully responsive design

## Project Structure

```text
ignite-2026/
├── app/
│   ├── about/
│   ├── code-of-conduct/
│   ├── contact/
│   ├── faq/
│   ├── register/
│   ├── schedule/
│   ├── themes/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── site-shell.tsx
├── public/
│   └── assets/
│       └── ggi.png
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

Clone the repository.

```bash
git clone https://github.com/your-username/ignite-2026.git
```

Move into the project directory.

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

Open your browser.

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
npm run typecheck   # Run TypeScript type checking
```

## Pages

| Route | Description |
| ------ | ----------- |
| `/` | Home page |
| `/about` | About the hackathon |
| `/themes` | Hackathon themes |
| `/schedule` | Event schedule |
| `/code-of-conduct` | Rules and Code of Conduct |
| `/faq` | Frequently Asked Questions |
| `/contact` | Contact information |
| `/register` | Registration page |

## Location

Gulzar Group of Institutes  
Grand Trunk Road, Libra, Khanna, Punjab 141412

## Assets

Place the official college logo in:

```text
public/assets/ggi.png
```

## Deployment

Build the application.

```bash
npm run build
```

Start the production server.

```bash
npm run start
```

The project can be deployed on platforms such as Vercel or Netlify.

## License

This project is developed for the IGNITE 2026 Hackathon organized by Gulzar Group of Institutes, Khanna, Punjab.

All rights reserved.