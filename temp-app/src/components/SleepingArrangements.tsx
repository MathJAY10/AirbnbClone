"use client";
import Image from "next/image";
import styles from "./SleepingArrangements.module.css";

const SLEEPING_CARDS = [
  {
    id: "bed1",
    room: "Bedroom",
    type: "1 double bed",
    image: "/images/listing/photo_13_2481343166.jpg",
  },
  {
    id: "bed2",
    room: "Living room",
    type: "1 sofa",
    image: "/images/listing/photo_01_2597711731.jpg",
  },
];

export default function SleepingArrangements() {
  return (
    <section className={styles.wrapper} aria-label="Sleeping arrangements">
      <h2 className={styles.title}>Where you&apos;ll sleep</h2>

      <div className={styles.grid}>
        {SLEEPING_CARDS.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.imgWrapper}>
              <Image
                src={card.image}
                alt={card.room}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className={styles.img}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.room}>{card.room}</h3>
              <p className={styles.type}>{card.type}</p>
            </div>
          </div>
        ))}
      </div>

      <hr className={styles.divider} />
    </section>
  );
}
