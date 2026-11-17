export type Project = {
  title: string;
  summary: string;
  stack: string[];
  year: number;
  repo: string;
  live?: string;
  cover?: {src: string; alt: string};
};

// From github.com/keishaaurellyy (public repos only).
export const PROJECTS: Project[] = [
  {
    title: 'Adi Indotent',
    summary:
      'Company website and CMS for a tent and event-equipment rental company in Tangerang. Staff update products and past events themselves from an admin panel.',
    stack: ['Next.js', 'Payload CMS', 'Neon Postgres'],
    year: 2026,
    repo: 'https://github.com/keishaaurellyy/adi-indotent',
    live: 'https://adi-indotent.com',
    cover: {src: '/projects/adi-indotent.jpg', alt: 'Adi Indotent homepage'},
  },
  {
    title: 'Nganteen',
    summary:
      // Team of three per the LinkedIn launch post.
      'Pre-order app for BINUS University canteens, built as a thesis project in a team of three. Students order ahead and pay with QRIS, kitchens see incoming orders live, and admins manage the kitchens.',
    stack: ['Next.js', 'Drizzle ORM', 'Neon Postgres'],
    year: 2025,
    repo: 'https://github.com/keishaaurellyy/nganteen',
    live: 'https://nganteen.vercel.app',
    cover: {src: '/projects/nganteen.jpg', alt: 'Nganteen buyer app on two phones'},
  },
];
