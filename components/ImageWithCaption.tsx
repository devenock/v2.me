import Image from "next/image";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

export default function ImageWithCaption({
  src,
  alt,
  caption,
}: ImageWithCaptionProps) {
  return (
    <figure className="my-8 w-full">
      <div className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 896px, 100vw"
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
