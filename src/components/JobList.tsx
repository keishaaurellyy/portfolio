import {Divider} from '@astryxdesign/core/Divider';
import {Grid} from '@astryxdesign/core/Grid';
import {Link} from '@astryxdesign/core/Link';
import {HStack, VStack} from '@astryxdesign/core/Stack';
import {Heading, Text} from '@astryxdesign/core/Text';
import {VisuallyHidden} from '@astryxdesign/core/VisuallyHidden';
import {ExternalButton} from '@/components/ExternalButton';
import {JobMeta} from '@/components/JobMeta';
import {PhotoGallery} from '@/components/PhotoGallery';
import {TechBadge} from '@/components/TechBadge';
import {JOBS} from '@/data/jobs';

// Columns come from .job-row in globals.css. Company names are h3 under the page's "Experience" h2.
export function JobList() {
  return (
    <VStack gap={8}>
      {JOBS.map(job => (
        <VStack key={job.company} gap={8}>
          <Grid columns={2} gap={6} className="job-row">
            <VStack gap={4}>
              <VStack gap={1}>
                <Heading level={3}>
                  {job.companyUrl ? (
                    // No external-link icon (it looked out of scale next to the title); the new-tab note stays for screen readers.
                    <Link href={job.companyUrl} target="_blank" color="inherit" type="inherit" hasUnderline>
                      {job.company}
                      <VisuallyHidden> (opens in new tab)</VisuallyHidden>
                    </Link>
                  ) : (
                    job.company
                  )}
                </Heading>
                <JobMeta job={job} />
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
  );
}
