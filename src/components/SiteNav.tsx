'use client';

import {useState} from 'react';
import {usePathname} from 'next/navigation';
import {Button} from '@astryxdesign/core/Button';
import {Icon} from '@astryxdesign/core/Icon';
import {IconButton} from '@astryxdesign/core/IconButton';
import {MobileNav} from '@astryxdesign/core/MobileNav';
import {SideNavItem} from '@astryxdesign/core/SideNav';
import {HStack} from '@astryxdesign/core/Stack';
import {TopNav, TopNavHeading, TopNavItem} from '@astryxdesign/core/TopNav';

const LINKS = [
  {label: 'Home', href: '/'},
  {label: 'Projects', href: '/projects'},
  {label: 'Experience', href: '/experience'},
];

export function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <TopNav
        heading={<TopNavHeading heading="Keisha." headingHref="/" />}
        centerContent={LINKS.map(link => (
          <TopNavItem
            key={link.href}
            label={link.label}
            href={link.href}
            isSelected={pathname === link.href}
            className="nav-link"
          />
        ))}
        endContent={
          <HStack gap={2} vAlign="center">
            <Button label="Email me" variant="primary" size="sm" href="mailto:keisha.aurelly16@gmail.com" />
            {/* Phones get the links in a drawer; .nav-link and .nav-menu swap in globals.css. */}
            <IconButton
              label="Open menu"
              icon={<Icon icon="menu" />}
              variant="ghost"
              className="nav-menu"
              onClick={() => setMenuOpen(true)}
            />
          </HStack>
        }
      />
      <MobileNav isOpen={menuOpen} onOpenChange={setMenuOpen} header="Keisha." side="end">
        {LINKS.map(link => (
          <SideNavItem
            key={link.href}
            label={link.label}
            href={link.href}
            isSelected={pathname === link.href}
            onClick={() => setMenuOpen(false)}
          />
        ))}
      </MobileNav>
    </>
  );
}
