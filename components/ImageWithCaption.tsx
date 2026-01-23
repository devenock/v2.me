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
  width,
  height,
}: ImageWithCaptionProps) {
  return (
    <figure className="my-8 w-full">
      <div className="relative w-full max-w-4xl mx-auto">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg w-full h-auto object-cover"
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
