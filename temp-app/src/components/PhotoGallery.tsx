"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./PhotoGallery.module.css";
import PhotoModal from "./PhotoModal";

const HERO_PHOTOS = [
  {
    id: "h1",
    caption: "Living room terrace with jacuzzi",
    localPath: "/images/listing/photo_07_2481343021.jpg",
  },
  {
    id: "h2",
    caption: "Terrace lounge seating",
    localPath: "/images/listing/photo_04_2481343372.jpg",
  },
  {
    id: "h3",
    caption: "Private jacuzzi tub",
    localPath: "/images/listing/photo_05_2483661863.jpg",
  },
  {
    id: "h4",
    caption: "Bedroom with double bed",
    localPath: "/images/listing/photo_13_2481343166.jpg",
  },
  {
    id: "h5",
    caption: "Amor de Goa building exterior",
    localPath: "/images/listing/photo_25_2483681093.jpg",
  },
];

export default function PhotoGallery() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className={styles.gallery} id="photos">
        {/* Main large photo on left */}
        <div
          className={styles.mainPhoto}
          onClick={() => setModalOpen(true)}
          role="button"
          tabIndex={0}
        >
          <Image
            src={HERO_PHOTOS[0].localPath}
            alt={HERO_PHOTOS[0].caption}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.img}
            priority
          />
        </div>

        {/* Right 2x2 grid */}
        <div className={styles.grid}>
          {HERO_PHOTOS.slice(1, 5).map((photo, i) => (
            <div
              key={photo.id}
              className={styles.gridPhoto}
              onClick={() => setModalOpen(true)}
              role="button"
              tabIndex={0}
            >
              <Image
                src={photo.localPath}
                alt={photo.caption}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className={styles.img}
              />
            </div>
          ))}
        </div>

        {/* Show all photos pill button matching frame 000.0s */}
        <button
          type="button"
          className={styles.showAllBtn}
          onClick={() => setModalOpen(true)}
        >
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
            <path d="M1 1h3v3H1V1zm5 0h3v3H6V1zm5 0h4v3h-4V1zM1 6h3v3H1V6zm5 0h3v3H6V6zm5 0h4v3h-4V6zM1 11h3v4H1v-4zm5 0h3v4H6v-4zm5 0h4v4h-4v-4z" />
          </svg>
          <span>Show all photos</span>
        </button>
      </div>

      {/* Photo Tour Modal */}
      {modalOpen && <PhotoModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
