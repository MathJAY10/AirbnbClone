"use client";
import { useState } from "react";
import { LISTING } from "@/data/listing";
import { AmenityIcon } from "./Icons";
import styles from "./Amenities.module.css";
import AmenitiesModal from "./AmenitiesModal";

export default function Amenities() {
  const [modalOpen, setModalOpen] = useState(false);
  const { topAmenities, amenities } = LISTING;

  return (
    <section id="amenities" className={styles.wrapper}>
      <h2 className={styles.title}>What this place offers</h2>

      <div className={styles.grid}>
        {topAmenities.map((a) => (
          <div key={a.title} className={`${styles.item} ${!a.available ? styles.unavailable : ""}`}>
            <AmenityIcon iconType={a.icon} size={24} color={a.available ? "#222" : "#b0b0b0"} />
            <span className={styles.label}>{!a.available && <s>{a.title}</s>}{a.available && a.title}</span>
          </div>
        ))}
      </div>

      <button className={styles.showAllBtn} onClick={() => setModalOpen(true)}>
        Show all {amenities.length} amenities
      </button>

      <hr className={styles.divider} />

      {modalOpen && (
        <AmenitiesModal
          amenities={amenities}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
}
