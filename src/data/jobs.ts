export type Job = {
  company: string;
  // The company's own site, linked from its name (not a claim of having built it).
  companyUrl?: string;
  role: string;
  // The agency that employs me on this client's project, shown as "via <agency>".
  agency?: {name: string; url: string};
  period: string;
  points: string[];
  stack: string[];
  link?: {label: string; href: string};
  photos?: {src: string; alt: string}[];
};

// Newest first. Each entry is summarised from the commits in that company's repos.
export const JOBS: Job[] = [
  {
    company: 'SafeWork Tech',
    role: 'Full Stack Engineer',
    // Employed by the KOKOH agency and placed on the SafeWork Tech project.
    agency: {name: 'KOKOH', url: 'https://www.kokoh.work'},
    period: 'Sep 2026 – Present',
    points: [
      'Built the Salus mobile app for iOS and Android: sign-in, the Hey Salus reporting assistant, My Reports and the report page, account settings, and push notifications.',
      'Worked on the Salus web app: Hey Salus conversation limits and wording, the marketing site’s landing page, pricing and contact form, and a 31-article blog with FAQs and structured data.',
    ],
    stack: ['TypeScript', 'React Native', 'Expo', 'React Router', 'Supabase', 'Cloudflare Workers'],
    link: {label: 'heysalus.com', href: 'https://heysalus.com'},
    photos: [{src: '/experience/safework-tech-dinner.jpg', alt: 'Dinner with the SafeWork Tech team'}],
  },
  // Summarised from commits in the Satu Dental repos (laptop backup, Oct 2026).
  {
    company: 'Satu Dental',
    companyUrl: 'https://www.satudental.com',
    role: 'Frontend Engineer',
    period: 'Feb 2024 – Sep 2026',
    points: [
      'Built and maintained the internal ERP for clinic staff: bookings and doctor schedules, patient and medical records, invoices and payments, stock, and loyalty vouchers.',
      'Built features for the patient mobile web at patients.satudental.com: booking, loyalty and vouchers, medical information, invoices, and satisfaction surveys.',
      'Ran staging and production releases of the web apps through Kubernetes manifests, and wrote Playwright end-to-end tests for the ERP’s patient, booking, medical record and stock flows.',
      'Also worked on the dental lab order app and the clinic check-in app.',
    ],
    stack: ['TypeScript', 'Next.js', 'Vue.js', 'Kubernetes', 'Playwright'],
    // Link the patient web built in this role; the ERP is internal and the main satudental.com site was not part of the job.
    link: {label: 'patients.satudental.com', href: 'https://patients.satudental.com'},
    photos: [
      {src: '/experience/satu-dental-team.jpg', alt: 'The Satu Dental team in front of the office mural'},
      {src: '/experience/satu-dental-meeting-room.jpg', alt: 'The Satu Dental team in a meeting room'},
    ],
  },
];
