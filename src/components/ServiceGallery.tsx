import Image from "next/image";

/**
 * ServiceGallery — staggered masonry photo gallery used on every service page.
 *
 * Renders the images in a CSS-columns layout so the items pack vertically
 * like a Pinterest board, with cycled aspect ratios so column heights stay
 * uneven (the "staggered" look). Server-rendered, no client JS.
 */

export type GalleryImage = {
  src: string;
  alt: string;
};

// Cycled aspect ratios drive the staggered/masonry effect. Each image picks
// the ratio at `i % ASPECTS.length`, so even uniformly-cropped source images
// produce a varied column rhythm.
const ASPECTS = [
  "aspect-[4/5]",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[5/4]",
  "aspect-[3/4]",
] as const;

export interface ServiceGalleryProps {
  images: GalleryImage[];
  /** Optional className applied to the outer columns container. */
  className?: string;
}

export default function ServiceGallery({
  images,
  className = "",
}: ServiceGalleryProps) {
  if (!images.length) return null;

  return (
    <div
      className={`columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance] ${className}`}
    >
      {images.map((img, i) => (
        <figure
          key={img.src}
          className={`relative mb-4 break-inside-avoid overflow-hidden ${
            ASPECTS[i % ASPECTS.length]
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </figure>
      ))}
    </div>
  );
}
