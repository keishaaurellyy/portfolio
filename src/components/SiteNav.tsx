import {Button} from '@astryxdesign/core/Button';
import {TopNav, TopNavHeading} from '@astryxdesign/core/TopNav';

// One-page site: just the name (back to top) and the email button. Bring page links back once
// there are enough projects and jobs for their own pages.
export function SiteNav() {
  return (
    <TopNav
      heading={<TopNavHeading heading="Keisha." headingHref="/" />}
      endContent={<Button label="Email me" variant="primary" size="sm" href="mailto:keisha.aurelly16@gmail.com" />}
    />
  );
}
