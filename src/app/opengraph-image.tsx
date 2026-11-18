import {readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {ImageResponse} from 'next/og';

export const alt = 'Keisha Aurelly, software engineer in Jakarta & Tangerang';
export const size = {width: 1200, height: 630};
export const contentType = 'image/png';

// The image renderer reads woff but not woff2, so these come from @fontsource's woff files.
const fontDir = join(process.cwd(), 'node_modules/@fontsource/inter/files');
const [interRegular, interHeavy, photo] = await Promise.all([
  readFile(join(fontDir, 'inter-latin-400-normal.woff')),
  readFile(join(fontDir, 'inter-latin-800-normal.woff')),
  readFile(join(process.cwd(), 'public/about/keisha.jpg'), 'base64'),
]);

// Same layout as the hero: name and role on the left, the 4:5 photo on the right.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 56,
          padding: 64,
          background: '#ffffff',
          fontFamily: 'Inter',
        }}>
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 28}}>
          <div style={{fontSize: 112, fontWeight: 800, lineHeight: 1, letterSpacing: -4, color: '#111111'}}>
            Keisha Aurelly
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            <div style={{fontSize: 36, color: '#111111'}}>Software engineer</div>
            <div style={{fontSize: 28, color: '#6b6b6b'}}>Jakarta &amp; Tangerang</div>
          </div>
        </div>
        <img
          src={`data:image/jpeg;base64,${photo}`}
          width={402}
          height={502}
          style={{borderRadius: 20, objectFit: 'cover'}}
          alt=""
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {name: 'Inter', data: interRegular, style: 'normal', weight: 400},
        {name: 'Inter', data: interHeavy, style: 'normal', weight: 800},
      ],
    },
  );
}
