'use client';

import {usePathname} from 'next/navigation';
import {Button} from '@astryxdesign/core/Button';
import {TopNav, TopNavHeading, TopNavItem} from '@astryxdesign/core/TopNav';

const LINKS = [
  {label: 'Home', href: '/'},
  {label: 'Projects', href: '/projects'},
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <TopNav
      heading={<TopNavHeading heading="Keisha." headingHref="/" />}
      centerContent={LINKS.map(link => (
        <TopNavItem
          key={link.href}
          label={link.label}
          href={link.href}
          isSelected={pathname === link.href}
          className={link.href === '/' ? 'nav-home' : undefined}
        />
      ))}
      endContent={
        <Button label="Email me" variant="primary" size="sm" href="mailto:keisha.aurelly16@gmail.com" />
      }
    />
  );
}
