"use client";

import { Media, MasonryGrid } from "@once-ui-system/core";
import { gallery } from "@/resources";
import { useSearchParams } from "next/navigation";

export default function GalleryView() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filteredImages = category
    ? gallery.images.filter((img) => img.category === category)
    : gallery.images;

  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {filteredImages.map((image, index) => (
        <Media
          enlarge
          priority={index < 10}
          sizes="(max-width: 560px) 100vw, 50vw"
          key={index}
          radius="m"
          aspectRatio={
            image.orientation === "horizontal" ? "16 / 9" : "3 / 4"
          }
          src={image.src}
          alt={image.alt}
        />
      ))}
    </MasonryGrid>
  );
}