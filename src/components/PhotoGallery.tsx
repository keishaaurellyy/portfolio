'use client';

import {useState} from 'react';
import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {Lightbox} from '@astryxdesign/core/Lightbox';
import {VStack} from '@astryxdesign/core/Stack';

type Photo = {src: string; alt: string};

// Stacked 4:3 photos; clicking one opens it full size, with prev/next through the rest.
// A plain button (styled as .photo-thumb in globals.css) because Astryx Thumbnail is locked to a square.
export function PhotoGallery({photos}: {photos: Photo[]}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <VStack gap={2} width="100%">
      {photos.map((photo, i) => (
        <button
          key={photo.src}
          type="button"
          className="photo-thumb"
          aria-label={`View photo: ${photo.alt}`}
          onClick={() => setOpenIndex(i)}>
          <AspectRatio ratio={4 / 3} fit="cover">
            <img src={photo.src} alt="" loading="lazy" />
          </AspectRatio>
        </button>
      ))}
      <Lightbox
        isOpen={openIndex !== null}
        onOpenChange={isOpen => !isOpen && setOpenIndex(null)}
        media={photos.map(photo => ({...photo, caption: photo.alt}))}
        index={openIndex ?? 0}
        onIndexChange={setOpenIndex}
      />
    </VStack>
  );
}
