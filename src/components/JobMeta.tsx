import {Link} from '@astryxdesign/core/Link';
import {Text} from '@astryxdesign/core/Text';
import {VisuallyHidden} from '@astryxdesign/core/VisuallyHidden';
import type {Job} from '@/data/jobs';

// "Role · via Agency · Period", with the agency name linking to its site.
export function JobMeta({job}: {job: Job}) {
  return (
    <Text color="secondary">
      {job.role} ·{' '}
      {job.agency && (
        <>
          via{' '}
          <Link href={job.agency.url} target="_blank" color="inherit" type="inherit">
            {job.agency.name}
            <VisuallyHidden> (opens in new tab)</VisuallyHidden>
          </Link>{' '}
          ·{' '}
        </>
      )}
      {job.period}
    </Text>
  );
}
