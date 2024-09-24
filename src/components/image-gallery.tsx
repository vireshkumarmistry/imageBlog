"use client";
import { Card } from "@/components/ui/card";
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
    <div className="image-gallery grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-5 my-4 h-[calc(100vh-130px)] lg:h-[calc(100vh-175px)] overflow-auto pr-2">
      {actualData.map((obj, index) => {
        const { imageUrl, slug, title, location } = obj;
        return (
          <figure key={index} className="w-full h-full bg-white rounded-lg">
            <figcaption className="w-full h-full">
              <Link
                href={`/posts/${slug}`}
                className="hover:underline w-full h-full flex flex-col gap-1"
              >
                <Card className="shadow-none border-0 flex flex-col gap-2">
                  <div
                    data-index={index}
                    ref={(el) => {
                      refs.current[index] = el;
                    }}
                    className={`relative h-[200px]`}
                  >
                    {!imageLoaded[index] && (
                      <div className="absolute top-0 left-0 w-full h-full bg-gray-300 animate-pulse rounded-lg" />
                    )}
                    {visibleItems[index] && (
                      <DynamicImage
                        url={imageUrl}
                        alt={title}
                        onLoad={() => handleImageLoad(index)}
                      />
                    )}
                  </div>

                  <div className="flex flex-col gap-1 py-2 px-4">
                    <p className="text-base">{title}</p>
                    <p className="text-sm text-[#71717a]">{location}</p>
                  </div>
                </Card>
              </Link>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
};

export default ImageGallery;
