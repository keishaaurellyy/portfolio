import {Token} from '@astryxdesign/core/Token';
import {
  siCloudflareworkers,
  siDrizzle,
  siExpo,
  siKubernetes,
  siNeon,
  siNextdotjs,
  siPayloadcms,
  siReact,
  siReactrouter,
  siSupabase,
  siTypescript,
  siVuedotjs,
  type SimpleIcon,
} from 'simple-icons';

// Logos for the stack badges; a tech without an entry here gets a text-only badge.
const TECH_ICONS: Record<string, SimpleIcon> = {
  'Next.js': siNextdotjs,
  'Payload CMS': siPayloadcms,
  'Neon Postgres': siNeon,
  'Drizzle ORM': siDrizzle,
  TypeScript: siTypescript,
  'React Native': siReact,
  Expo: siExpo,
  'React Router': siReactrouter,
  Supabase: siSupabase,
  'Cloudflare Workers': siCloudflareworkers,
  'Vue.js': siVuedotjs,
  Kubernetes: siKubernetes,
};

export function TechBadge({name}: {name: string}) {
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
