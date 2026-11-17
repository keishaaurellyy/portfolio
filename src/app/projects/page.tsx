import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {Divider} from '@astryxdesign/core/Divider';
import {EmptyState} from '@astryxdesign/core/EmptyState';
import {Grid} from '@astryxdesign/core/Grid';
import {Button} from '@astryxdesign/core/Button';
import {HStack, VStack} from '@astryxdesign/core/Stack';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Token} from '@astryxdesign/core/Token';
import type {Metadata} from 'next';
import {siDrizzle, siNextdotjs, siPayloadcms, siPostgresql, type SimpleIcon} from 'simple-icons';

// Logos for the stack badges; a tech without an entry here gets a text-only badge.
const TECH_ICONS: Record<string, SimpleIcon> = {
  'Next.js': siNextdotjs,
  'Payload CMS': siPayloadcms,
  PostgreSQL: siPostgresql,
  'Drizzle ORM': siDrizzle,
};

function TechBadge({name}: {name: string}) {
  const icon = TECH_ICONS[name];
  return (
    <Token
      label={name}
      color="gray"
      icon={
        icon && (
          // currentColor keeps the logo monochrome so it follows the theme in light and dark mode.
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
            <path d={icon.path} />
          </svg>
        )
      }
    />
  );
}

export const metadata: Metadata = {title: 'Projects · Keisha'};

type Project = {
  title: string;
  summary: string;
  stack: string[];
  year: number;
  repo: string;
  live?: string;
  cover?: {src: string; alt: string};
};

// From github.com/keishaaurellyy (public repos only).
const PROJECTS: Project[] = [
  {
    title: 'Adi Indotent',
    summary:
      'Company website and CMS for a tent and event-equipment rental company in Tangerang. Staff update products and past events from an admin panel, with no code changes.',
    stack: ['Next.js', 'Payload CMS', 'PostgreSQL'],
    year: 2026,
    repo: 'https://github.com/keishaaurellyy/adi-indotent',
    live: 'https://adi-indotent.com',
    cover: {src: '/projects/adi-indotent.jpg', alt: 'Adi Indotent homepage'},
  },
  {
    title: 'Nganteen',
    summary:
      'Pre-order app for BINUS University canteens. Students order ahead and pay with QRIS, kitchens see incoming orders live, and admins manage the kitchens.',
    stack: ['Next.js', 'Drizzle ORM', 'PostgreSQL'],
    year: 2025,
    repo: 'https://github.com/keishaaurellyy/nganteen',
    live: 'https://nganteen.vercel.app',
    cover: {src: '/projects/nganteen.jpg', alt: 'Nganteen buyer app on two phones'},
  },
];

// A button rather than a text link so the tap target meets the theme's 44px minimum.
function ExternalButton({label, href}: {label: string; href: string}) {
  return (
    <Button
      label={`${label} (opens in new tab)`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant="secondary"
      size="sm">
      {label}
    </Button>
  );
}

export default function ProjectsPage() {
  return (
    <VStack hAlign="center">
      <VStack gap={10} width="100%" maxWidth={1200} paddingInline={6} paddingBlock={10}>
        <VStack gap={6}>
          <Heading level={1} type="display-1">
            Projects
          </Heading>
          <Divider />
          {/* Left / center / right on wide screens, stacked on phones (see .meta-row in globals.css). */}
          <Grid columns={3} gap={2} className="meta-row">
            <Text type="supporting">Software Engineer</Text>
            <Text type="supporting">Based in Jakarta & Tangerang</Text>
            <Text type="supporting">
              {PROJECTS.length} {PROJECTS.length === 1 ? 'project' : 'projects'}
            </Text>
          </Grid>
        </VStack>

        {PROJECTS.length === 0 ? (
          <EmptyState
            headingLevel={2}
            title="No projects yet"
            description="Projects you add to this page will show up here."
          />
        ) : (
          // 300px minimum: two columns from tablet width up, one on phones.
          <Grid columns={{minWidth: 300, max: 2, repeat: 'fit'}} gap={8}>
            {PROJECTS.map((project, i) => (
              <VStack key={project.repo} gap={3}>
                <AspectRatio ratio={4 / 3} fit="cover">
                  {project.cover ? (
                    <img src={project.cover.src} alt={project.cover.alt} />
                  ) : (
                    // No screenshot for API-only work: show the stack instead of a fake image.
                    <VStack
                      hAlign="center"
                      vAlign="center"
                      style={{background: 'var(--color-background-gray)'}}>
                      <Text type="large" weight="medium" color="secondary">
                        {project.stack.join(' · ')}
                      </Text>
                    </VStack>
                  )}
                </AspectRatio>
                <VStack gap={2}>
                  <HStack hAlign="between" vAlign="center" gap={4}>
                    <Heading level={2}>{project.title}</Heading>
                    <Text type="large" color="secondary" hasTabularNumbers>
                      [{String(i + 1).padStart(2, '0')}]
                    </Text>
                  </HStack>
                  <VStack gap={2}>
                    <Text color="secondary">{project.summary}</Text>
                    <Text type="supporting">{project.year}</Text>
                    <HStack gap={2} wrap="wrap">
                      {project.stack.map(name => (
                        <TechBadge key={name} name={name} />
                      ))}
                    </HStack>
                    <HStack gap={2} wrap="wrap">
                      {project.live && <ExternalButton label="Live site" href={project.live} />}
                      <ExternalButton label="Source code" href={project.repo} />
                    </HStack>
                  </VStack>
                </VStack>
              </VStack>
            ))}
          </Grid>
        )}
      </VStack>
    </VStack>
  );
}
