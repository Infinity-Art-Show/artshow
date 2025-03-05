"use client";

import { useEffect, useRef, useState } from "react";

export const ArtistDescription = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [maxHeight, setMaxHeight] = useState("96px");

  useEffect(() => {
    if (textRef.current) {
      setIsOverflowing(textRef.current.scrollHeight > 96);
    }
  }, []);

  useEffect(() => {
    if (textRef.current) {
      if (showFullText) {
        setMaxHeight(`${textRef.current.scrollHeight}px`);
      } else {
        setMaxHeight("96px");
      }
    }
  }, [showFullText]);

  return (
    <div className="w-full">
      <p
        ref={textRef}
        className="text-sm overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight }}
      >
        This painting is a work on paper. It is beautiful calm and serene. It is
        ready for a frame of your choosing to hang.This began as an expressive,
        distraught chaotic painting with lots of color. Most likely a virtue of
        responding to the Pandemic. After literally sitting with the painting on
        the floor of my studio it became clear that it must be simplified,
        unified and calm. I mixed cold wax with oil pigment and solvent in a big
        plastic painting bucket and I covered much of the painting. I then began
        to subtly remove parts of the cold wax. This I allowed parts of the
        underlying color to emerge. Some I deeper with pigment stick, some I
        rubbed away with a special cloth. When it was dry to bring cohesion to
        the composition, I took a pencil unifying two of the forms creating a
        line fir the eye to follow. plastic painting bucket and I covered much
        of the painting. I then began to subtly remove parts of the cold wax.
        This I allowed parts of the underlying color to emerge. Some I deeper
        with pigment stick, some I rubbed away with a special cloth. When it was
        dry to bring cohesion to the composition, I took a pencil unifying two
        of the forms creating a line fir the eye to follow.
      </p>

      {isOverflowing && (
        <button
          onClick={() => setShowFullText(!showFullText)}
          className="text-sm font-bold text-slate-500 mt-2 hover:text-slate-500/80 w-full text-center"
        >
          {showFullText ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ArtistDescription;
