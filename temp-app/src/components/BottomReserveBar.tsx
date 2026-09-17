"use client";
import styles from "./BottomReserveBar.module.css";

interface BottomReserveBarProps {
  price?: string;
  dates?: string;
  onReserveClick?: () => void;
}

export default function BottomReserveBar({
  price = "₹28,499",
  dates = "18–23 Oct",
  onReserveClick,
}: BottomReserveBarProps) {
  return (
    <div className={styles.bar}>
      <div className={styles.left}>
        <div className={styles.priceRow}>
          <span className={styles.price}>{price}</span>
          <span className={styles.unit}> for 5 nights</span>
        </div>
        <button type="button" className={styles.datesBtn}>
          {dates}
        </button>
      </div>
      <button
        type="button"
        className={styles.reserveBtn}
        onClick={onReserveClick}
      >
        Reserve
      </button>
    </div>
  );
}
