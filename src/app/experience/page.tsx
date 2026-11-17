import {Divider} from '@astryxdesign/core/Divider';
import {Grid} from '@astryxdesign/core/Grid';
import {Link} from '@astryxdesign/core/Link';
import {HStack, VStack} from '@astryxdesign/core/Stack';
import {Heading, Text} from '@astryxdesign/core/Text';
import {VisuallyHidden} from '@astryxdesign/core/VisuallyHidden';
import type {Metadata} from 'next';
import {ExternalButton} from '@/components/ExternalButton';
import {PageHeader} from '@/components/PageHeader';
import {PhotoGallery} from '@/components/PhotoGallery';
import {TechBadge} from '@/components/TechBadge';

export const metadata: Metadata = {title: 'Experience · Keisha'};

type Job = {
  company: string;
  // The company's own site, linked from its name (not a claim of having built it).
  companyUrl?: string;
  role: string;
  period: string;
  points: string[];
  stack: string[];
  link?: {label: string; href: string};
  photos?: {src: string; alt: string}[];
};

// Newest first. Each entry is summarised from the commits in that company's repos.
const JOBS: Job[] = [
  {
    company: 'SafeWork Tech',
    role: 'Full Stack Engineer',
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

export default function ExperiencePage() {
  return (
    <VStack hAlign="center">
      <VStack gap={10} width="100%" maxWidth={1200} paddingInline={6} paddingBlock={10}>
        <PageHeader
          title="Experience"
          meta={[
            'Software Engineer',
            'Based in Jakarta & Tangerang',
            `${JOBS.length} ${JOBS.length === 1 ? 'company' : 'companies'}`,
          ]}
        />

        {/* Rows like the reference's services list: number, details, thumbnails (columns set in .job-row). */}
        <VStack gap={8}>
          {JOBS.map((job, i) => (
            <VStack key={job.company} gap={8}>
              <Grid columns={3} gap={6} className="job-row">
                <Text type="supporting" hasTabularNumbers>
                  [{String(i + 1).padStart(2, '0')}]
                </Text>
                <VStack gap={4}>
                  <VStack gap={1}>
                    <Heading level={2}>
                      {job.companyUrl ? (
                        // No external-link icon (it looked out of scale next to the title); the new-tab note stays for screen readers.
                        <Link href={job.companyUrl} target="_blank" color="inherit" type="inherit">
                          {job.company}
                          <VisuallyHidden> (opens in new tab)</VisuallyHidden>
                        </Link>
                      ) : (
                        job.company
                      )}
                    </Heading>
                    <Text color="secondary">
                      {job.role} · {job.period}
                    </Text>
                  </VStack>
                  {job.points.map(point => (
                    <Text key={point} color="secondary">
                      {point}
                    </Text>
                  ))}
                  {job.stack.length > 0 && (
                    <HStack gap={2} wrap="wrap">
                      {job.stack.map(name => (
                        <TechBadge key={name} name={name} />
                      ))}
                    </HStack>
                  )}
                  {job.link && (
                    <HStack>
                      <ExternalButton label={job.link.label} href={job.link.href} />
                    </HStack>
                  )}
                </VStack>
                {job.photos ? <PhotoGallery photos={job.photos} /> : <VStack />}
              </Grid>
              <Divider />
            </VStack>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
}
