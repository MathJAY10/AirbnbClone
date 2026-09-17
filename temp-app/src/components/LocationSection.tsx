"use client";
import { useState } from "react";
import { LISTING } from "@/data/listing";
import { ArrowIcon } from "./Icons";
import styles from "./LocationSection.module.css";

export default function LocationSection() {
  const [expanded, setExpanded] = useState(false);
  const { location } = LISTING;

  return (
    <section id="location" className={styles.wrapper} aria-label="Location">
      <h2 className={styles.title}>Where you&apos;ll be</h2>
      <div className={styles.locationSub}>{location}</div>

      {/* Map visual replica matching frame 120s */}
      <div className={styles.mapContainer}>
        {/* Search tool icon button */}
        <button type="button" className={styles.mapSearchBtn} aria-label="Search map">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>

        {/* Zoom controls */}
        <div className={styles.zoomControls}>
          <button type="button" className={styles.zoomBtn} aria-label="Zoom in">+</button>
          <div className={styles.zoomDivider} />
          <button type="button" className={styles.zoomBtn} aria-label="Zoom out">−</button>
        </div>

        {/* Visual Map Surface */}
        <div className={styles.mapGraphic}>
          {/* Water Area */}
          <div className={styles.waterArea} />
          {/* Land Area */}
          <div className={styles.landArea}>
            <div className={styles.gridOverlay} />
            <div className={styles.spotCircle1} />
            <div className={styles.spotCircle2} />
          </div>

          {/* Central Property Pin */}
          <div className={styles.centerPin}>
            <div className={styles.pinCircle}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.exactLocationNote}>
        Exact location will be provided after booking.
      </div>

      {/* Neighbourhood highlights */}
      <div className={styles.neighbourhood}>
        <h3 className={styles.neighbourhoodTitle}>Neighbourhood highlights</h3>
        <p className={styles.neighbourhoodDesc}>
          {expanded
            ? "Located in the heart of Candolim, Goa. Just 10 minutes to Candolim Beach, with quick and convenient access to Baga, Calangute, Sinquerim and Fort Aguada. The property is surrounded by renowned cafés, restaurants, vibrant nightlife, and supermarkets, while remaining approximately 35–40 minutes from MOPA Airport."
            : "Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions."}
        </p>
        <button
          type="button"
          className={styles.showMoreBtn}
          onClick={() => setExpanded(!expanded)}
        >
          <span>{expanded ? "Show less" : "Show more"}</span>
          <ArrowIcon size={12} color="#222222" direction={expanded ? "up" : "right"} />
        </button>
      </div>

      <hr className={styles.divider} />
    </section>
  );
}
