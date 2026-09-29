"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const assetPrefix = process.env.NODE_ENV === "production" ? "/ab-major" : "";

const orbitImages = [
  `${assetPrefix}/images/ant.jpg`,
  `${assetPrefix}/images/banana.jpg`,
  `${assetPrefix}/images/gum.jpg`,
  `${assetPrefix}/images/ant.jpg`,
  `${assetPrefix}/images/banana.jpg`,
  `${assetPrefix}/images/gum.jpg`,
  `${assetPrefix}/images/ant.jpg`,
  `${assetPrefix}/images/banana.jpg`,
  `${assetPrefix}/images/gum.jpg`,
  `${assetPrefix}/images/ant.jpg`,
  `${assetPrefix}/images/banana.jpg`,
  `${assetPrefix}/images/gum.jpg`,
  `${assetPrefix}/images/ant.jpg`,
  `${assetPrefix}/images/banana.jpg`,
];

export default function HomePage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const orbitStep = 360 / orbitImages.length;

  function openArchive() {
    if (isTransitioning) {
      return;
    }

    setIsTransitioning(true);
    window.setTimeout(() => router.push("/black/"), 900);
  }

  return (
    <main className={`site-shell${isOpen ? " is-open" : ""}`}>
      <button
        className="brand-mark"
        type="button"
        aria-label="Abrir galería"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        ab-major
      </button>
      <button
        className="corner-dot"
        type="button"
        aria-label="Abrir archivo"
        onClick={openArchive}
        disabled={isTransitioning}
      />

      <div className="orbit" aria-hidden={!isOpen}>
        {orbitImages.map((image, index) => {
          const oppositeIndex = (orbitImages.length / 2 + index) % orbitImages.length;
          const targetIndex = hoveredIndex === index
            ? oppositeIndex
            : hoveredIndex === oppositeIndex
              ? hoveredIndex
              : index;

          return (
            <div
              key={`${image}-${index}`}
              className="orbit-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                "--orbit-angle": `${targetIndex * orbitStep}deg`,
              } as React.CSSProperties}
            >
              <div className="orbit-face">
                <img className="orbit-image" src={image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`page-wipe${isTransitioning ? " is-active" : ""}`}
        aria-hidden="true"
      />
    </main>
  );
}