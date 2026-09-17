"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./NearbyStays.module.css";

interface NearbyStay {
  id: string;
  title: string;
  price: string;
  rating: string;
  image: string;
}

const STAYS_PAGE_1: NearbyStay[] = [
  {
    id: "n1",
    title: "Beautiful Studio with a view to die for",
    price: "₹23,600",
    rating: "4.91",
    image: "/images/listing/photo_04_2481343372.jpg",
  },
  {
    id: "n2",
    title: "NAQAB - 1bhk with private pool",
    price: "₹42,218",
    rating: "4.95",
    image: "/images/listing/photo_05_2483661863.jpg",
  },
  {
    id: "n3",
    title: "Greentique Luxury Flat with plunge pool, Calangute",
    price: "₹44,506",
    rating: "4.94",
    image: "/images/listing/photo_08_2483654732.jpg",
  },
  {
    id: "n4",
    title: "The Tropical Studio | 5 mins to Beach",
    price: "₹22,824",
    rating: "4.96",
    image: "/images/listing/photo_13_2481343166.jpg",
  },
  {
    id: "n5",
    title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
    price: "₹39,942",
    rating: "4.95",
    image: "/images/listing/photo_31_2481343116.jpg",
  },
];

const STAYS_PAGE_2: NearbyStay[] = [
  {
    id: "n6",
    title: "Candolim Haven Private Villa with Jacuzzi",
    price: "₹31,500",
    rating: "4.98",
    image: "/images/listing/photo_01_2597711731.jpg",
  },
  {
    id: "n7",
    title: "Modern Boho Sunset Retreat Candolim",
    price: "₹26,800",
    rating: "4.89",
    image: "/images/listing/photo_02_2597711755.jpg",
  },
  {
    id: "n8",
    title: "Azure Waves 2BHK Near Calangute Beach",
    price: "₹38,200",
    rating: "4.93",
    image: "/images/listing/photo_06_2481343147.jpg",
  },
  {
    id: "n9",
    title: "Casa Palmera Tropical Garden Studio",
    price: "₹21,450",
    rating: "4.92",
    image: "/images/listing/photo_11_2597712394.jpg",
  },
  {
    id: "n10",
    title: "Serene Palms Luxury Suite with Pool Access",
    price: "₹34,900",
    rating: "4.97",
    image: "/images/listing/photo_32_2483655024.jpg",
  },
];

export default function NearbyStays() {
  const [page, setPage] = useState<1 | 2>(1);

  const renderStayCard = (stay: NearbyStay) => (
    <div key={stay.id} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={stay.image}
          alt={stay.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
          className={styles.image}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.stayTitle} title={stay.title}>
          {stay.title}
        </h3>
        <div className={styles.stayMeta}>
          <span className={styles.price}>{stay.price}</span>
          <span className={styles.rating}>★ {stay.rating}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className={styles.wrapper} aria-label="More stays nearby">
      <div className={styles.header}>
        <h2 className={styles.title}>More stays nearby</h2>
        <div className={styles.navControls}>
          <span className={styles.pageText}>{page} / 2</span>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => setPage(1)}
            disabled={page === 1}
            aria-label="Previous page"
          >
            <svg viewBox="0 0 18 18" width="10" height="10" fill="currentColor">
              <path d="M13.71 1.71a1 1 0 0 0-1.42 0L5.7 8.3a1 1 0 0 0 0 1.42l6.59 6.59a1 1 0 0 0 1.42-1.42L8.12 9l5.59-5.87a1 1 0 0 0 0-1.42z" />
            </svg>
          </button>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => setPage(2)}
            disabled={page === 2}
            aria-label="Next page"
          >
            <svg viewBox="0 0 18 18" width="10" height="10" fill="currentColor">
              <path d="M4.29 1.71a1 1 0 0 0 0 1.42L10.17 9l-5.88 5.87a1 1 0 1 0 1.42 1.42l6.59-6.59a1 1 0 0 0 0-1.42L5.71 1.71a1 1 0 0 0-1.42 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.carouselViewport}>
        <div
          className={styles.carouselTrack}
          style={{ transform: page === 1 ? "translateX(0%)" : "translateX(-50%)" }}
        >
          <div className={styles.carouselPage}>
            {STAYS_PAGE_1.map(renderStayCard)}
          </div>
          <div className={styles.carouselPage}>
            {STAYS_PAGE_2.map(renderStayCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
