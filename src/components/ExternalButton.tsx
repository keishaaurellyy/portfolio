import {Button} from '@astryxdesign/core/Button';

// A button rather than a text link so the tap target meets the theme's 44px minimum.
export function ExternalButton({label, href}: {label: string; href: string}) {
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
