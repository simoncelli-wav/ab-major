"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BlackPage() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  function returnHome() {
    if (isTransitioning) {
      return;
    }

    setIsTransitioning(true);
    window.setTimeout(() => router.push("/"), 900);
  }

  return (
    <main className="black-page">
      <header className="black-header">
        <span className="black-home">ab-major</span>
        <p className="black-index">ARCHIVO / 01</p>
      </header>

      <button
        className="black-corner-dot"
        type="button"
        aria-label="Volver al inicio"
        onClick={returnHome}
        disabled={isTransitioning}
      />
      <div
        className={`page-wipe page-wipe-light${isTransitioning ? " is-active" : ""}`}
        aria-hidden="true"
      />
    </main>
  );
}