import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {Button} from '@astryxdesign/core/Button';
import {Divider} from '@astryxdesign/core/Divider';
import {Grid} from '@astryxdesign/core/Grid';
import {HStack, VStack} from '@astryxdesign/core/Stack';
import {Heading, Text} from '@astryxdesign/core/Text';
import {JobList} from '@/components/JobList';
import {ProjectList} from '@/components/ProjectList';
import {SocialLinks} from '@/components/SocialLinks';

// /projects and /experience redirect to the #projects and #experience sections (next.config.ts).
export default function Home() {
  return (
    <VStack hAlign="center">
      <VStack gap={10} width="100%" maxWidth={1200} paddingInline={6} paddingBlock={10}>
        {/* Columns come from .hero-row in globals.css. */}
        <Grid columns={2} gap={8} className="hero-row">
          <VStack gap={6} vAlign="end">
            <Heading level={1} type="display-1" className="page-title">
              Keisha Aurelly
            </Heading>
            {/* shortcut: "nearly three years" counts from Feb 2024; change to "over three years" from Feb 2027. */}
            <Text type="large">
              I&rsquo;m a software engineer with nearly three years of experience building web and mobile apps in
              TypeScript, React and Next.js. I work on SafeWork Tech through KOKOH. Before that I was at Satu Dental,
              where I started as a tech intern and became a frontend engineer. I studied Computer Science at BINUS
              University.
            </Text>
            <Text type="supporting">Based in Jakarta&nbsp;&amp;&nbsp;Tangerang</Text>
            <HStack gap={2} wrap="wrap">
              <Button label="Email me" href="mailto:keisha.aurelly16@gmail.com" variant="primary" />
              <SocialLinks />
            </HStack>
          </VStack>
          <AspectRatio ratio={4 / 5} fit="cover">
            <img src="/about/keisha.jpg" alt="Keisha Aurelly" fetchPriority="high" />
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
