import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {EmptyState} from '@astryxdesign/core/EmptyState';
import {Grid} from '@astryxdesign/core/Grid';
import {HStack, VStack} from '@astryxdesign/core/Stack';
import {Heading, Text} from '@astryxdesign/core/Text';
import {ExternalButton} from '@/components/ExternalButton';
import {TechBadge} from '@/components/TechBadge';
import {PROJECTS} from '@/data/projects';

// Titles are h3 under the page's "Projects" h2.
export function ProjectList() {
  if (PROJECTS.length === 0) {
    return (
      <EmptyState
        headingLevel={3}
        title="No projects yet"
        description="Projects you add to this page will show up here."
      />
    );
  }

  return (
    // 300px minimum: two columns from tablet width up, one on phones.
    <Grid columns={{minWidth: 300, max: 2, repeat: 'fit'}} gap={8}>
      {PROJECTS.map(project => (
        <VStack key={project.repo} gap={3}>
          <AspectRatio ratio={4 / 3} fit="cover">
            {project.cover ? (
              <img src={project.cover.src} alt={project.cover.alt} loading="lazy" />
            ) : (
              // No screenshot for API-only work: show the stack instead of a fake image.
              <VStack hAlign="center" vAlign="center" style={{background: 'var(--color-background-gray)'}}>
                <Text type="large" weight="medium" color="secondary">
                  {project.stack.join(' · ')}
                </Text>
              </VStack>
            )}
          </AspectRatio>
          <VStack gap={2}>
            <Heading level={3}>{project.title}</Heading>
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
  );
}
