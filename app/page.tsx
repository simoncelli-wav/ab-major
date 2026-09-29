"use client";

import { useState } from "react";
import { useEffect } from "react";

const assetPrefix = process.env.NODE_ENV === "production" ? "/ab-major" : "";

const orbitImages = [
  `${assetPrefix}/images/ant.jpg`,
  `${assetPrefix}/images/aphex.jpg`,
  `${assetPrefix}/images/dog.jpg`,
  `${assetPrefix}/images/dog2.jpg`,
  `${assetPrefix}/images/gum.jpg`,
  `${assetPrefix}/images/hand.jpg`,
  `${assetPrefix}/images/banana.jpg`,
  `${assetPrefix}/images/camus.jpg`,
  `${assetPrefix}/images/myspirit.jpg`,
  `${assetPrefix}/images/owl.jpg`,
  `${assetPrefix}/images/prodigy.jpg`,
  `${assetPrefix}/images/thief.jpg`,
];

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettled, setIsSettled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const orbitStep = 360 / orbitImages.length;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const settleTimer = window.setTimeout(() => setIsSettled(true), 3500);

    return () => window.clearTimeout(settleTimer);
  }, [isOpen]);

  return (
    <main className={`site-shell${isOpen ? " is-open" : ""}${isSettled ? " is-settled" : ""}`}>
      <button
        className="brand-mark"
        type="button"
        aria-label="Abrir galería"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        ab-major
      </button>

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
              key={image}
              className="orbit-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                "--orbit-angle": `${targetIndex * orbitStep}deg`,
                "--orbit-delay": `${700 + index * 110}ms`,
              } as React.CSSProperties}
            >
              <div className="orbit-face">
                <img className="orbit-image" src={image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}