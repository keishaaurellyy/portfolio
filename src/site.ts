// Vercel sets this to the shortest production domain (the custom one once it's added, else *.vercel.app).
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL = productionHost ? `https://${productionHost}` : 'http://localhost:3000';

export const SITE_TITLE = 'Keisha Aurelly';

export const SITE_DESCRIPTION =
  'Keisha Aurelly is a software engineer in Jakarta & Tangerang building web and mobile apps with TypeScript, React and Next.js.';
