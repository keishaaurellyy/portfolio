import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {Button} from '@astryxdesign/core/Button';
import {Divider} from '@astryxdesign/core/Divider';
import {Grid} from '@astryxdesign/core/Grid';
import {HStack, VStack} from '@astryxdesign/core/Stack';
import {Heading, Text} from '@astryxdesign/core/Text';
import {JobList} from '@/components/JobList';
import {ProjectList} from '@/components/ProjectList';

// The whole portfolio on one page: intro, projects, experience.
// /projects and /experience redirect to the #projects and #experience sections (next.config.ts).
export default function Home() {
  return (
    <VStack hAlign="center">
      <VStack gap={10} width="100%" maxWidth={1200} paddingInline={6} paddingBlock={10}>
        {/* Intro beside the photo (columns set in .hero-row); stacked on phones. */}
        <Grid columns={2} gap={8} className="hero-row">
          <VStack gap={6} vAlign="end">
            <Heading level={1} type="display-1" className="page-title">
              Keisha
            </Heading>
            {/* From the LinkedIn profile (headline, education, posts) and the experience data. */}
            <Text type="large">
              Software engineer with a Computer Science degree from BINUS University. I build web and mobile apps
              with TypeScript, React and Next.js: now for SafeWork Tech through KOKOH, and before that at Satu Dental,
              where I grew from tech intern to frontend engineer.
            </Text>
            <Text type="supporting">Software Engineer · Based in Jakarta&nbsp;&amp;&nbsp;Tangerang</Text>
            <HStack gap={2} wrap="wrap">
              <Button label="Email me" href="mailto:keisha.aurelly16@gmail.com" variant="primary" />
              <Button label="See my projects" href="#projects" variant="secondary" />
            </HStack>
          </VStack>
          <AspectRatio ratio={4 / 5} fit="cover">
            <VStack hAlign="center" vAlign="center" style={{background: 'var(--color-background-gray)'}}>
              <Text color="secondary">[Photo: coming soon]</Text>
            </VStack>
          </AspectRatio>
        </Grid>

        <Divider />

        <VStack gap={8}>
          <Heading level={2} type="display-3" id="projects" className="section-title">
            Projects
          </Heading>
          <ProjectList />
        </VStack>

        <Divider />

        <VStack gap={8}>
          <Heading level={2} type="display-3" id="experience" className="section-title">
            Experience
          </Heading>
          <JobList />
        </VStack>
      </VStack>
    </VStack>
  );
}
