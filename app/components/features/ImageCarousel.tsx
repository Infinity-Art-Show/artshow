"use client";

import Image from "next/image";
import { useState } from "react";

interface Artwork {
  artworks: {
    images: string[];
  };
}

const ImageCarousel = ({ artworks }: Artwork) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Handler to change the main image (prev/next)
  const handleImageChange = (direction: "prev" | "next") => {
    setCurrentImageIndex((prevIndex) => {
      if (direction === "prev") {
        return prevIndex === 0 ? artworks.images.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === artworks.images.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <div className="flex">
      <div className="space-y-2">
        {artworks.images.map((artwork, index) => (
          <div key={index} onClick={() => handleImageClick(index)}>
            <Image
              src={artwork}
              alt="image"
              width={100}
              height={100}
              className={`h-14 w-14 object-cover cursor-pointer ${
                index === currentImageIndex
                  ? "border-2 border-blue-500"
                  : "opacity-50"
              }`}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <button
          onClick={() => handleImageChange("prev")}
          className="text-sm mb-6 px-4"
        >
          &lt;
        </button>
        {artworks.images.length > 0 && (
          <Image
            src={artworks.images[currentImageIndex]}
            alt="Artwork"
            width={480}
            height={480}
          />
        )}
        <button
          onClick={() => handleImageChange("next")}
          className="text-sm mb-6 px-4"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
