"use client";

import { useState } from "react";
import { useEffect } from "react";

const orbitImages = [
  "/images/ant.jpg",
  "/images/aphex.jpg",
  "/images/dog.jpg",
  "/images/dog2.jpg",
  "/images/gum.jpg",
  "/images/hand.jpg",
  "/images/banana.jpg",
  "/images/camus.jpg",
  "/images/myspirit.jpg",
  "/images/owl.jpg",
  "/images/prodigy.jpg",
  "/images/thief.jpg",
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