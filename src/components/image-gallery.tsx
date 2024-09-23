"use client";
import { useState } from "react";
import Link from "next/link";
import DynamicImage from "./dynamic-image";
import useViewport from "@/hooks/useViewport";

interface TravelData {
  imageUrl: string;
  slug: string;
  title: string;
  location: string;
}

interface TravelDisplayDataProps {
  actualData: TravelData[];
}

const ImageGallery: React.FC<TravelDisplayDataProps> = ({ actualData }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(
    Array(actualData.length).fill(false)
  );

  const { visibleItems, refs } = useViewport(actualData.length);

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => {
      const newImageLoaded = [...prev];
      newImageLoaded[index] = true;
      return newImageLoaded;
    });
  };

  return (
    <div className="image-gallery">
      {actualData.map((obj, index) => {
        const { imageUrl, slug, title, location } = obj;
        return (
          <figure key={index}>
            <figcaption>
              <Link href={`/posts/${slug}`} className="hover:underline">
                <div
                  data-index={index}
                  ref={(el) => {
                    refs.current[index] = el;
                  }}
                  className={`${
                    imageLoaded[index] ? "" : "h-80 w-80 bg-gray-200"
                  }`}
                >
                  {visibleItems[index] && (
                    <DynamicImage
                      url={imageUrl}
                      alt={title}
                      onLoad={() => handleImageLoad(index)}
                    />
                  )}
                </div>
                <p className="text-base">{title}</p>
                <p className="text-sm text-[#71717a]">{location}</p>
              </Link>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
};

export default ImageGallery;
