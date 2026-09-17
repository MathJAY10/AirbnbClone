"use client";
import { useState, useEffect } from "react";
import styles from "./StickyNav.module.css";

const NAV_ITEMS = [
  { label: "Photos", href: "#photos" },
  { label: "Amenities", href: "#amenities" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

interface StickyNavProps {
  onReserveClick?: () => void;
}

export default function StickyNav({ onReserveClick }: StickyNavProps) {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("Photos");

  useEffect(() => {
    const onScroll = () => {
      // Show nav after scrolling past the photo gallery (~500px)
      setVisible(window.scrollY > 480);

      // Determine active section
      const sections = ["photos", "amenities", "reviews", "location"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(NAV_ITEMS[i].label);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string, label: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setActive(label);
  };

  if (!visible) return null;

  return (
    <nav className={styles.nav} aria-label="Page navigation">
      <div className={styles.inner}>
        {/* Nav Links */}
        <div className={styles.linksRow}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`${styles.item} ${active === item.label ? styles.active : ""}`}
              onClick={() => scrollTo(item.href, item.label)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Reserve widget matching frame 90s */}
        <div className={styles.reserveWidget}>
          <div className={styles.priceInfo}>
            <div className={styles.priceLine}>
              <span className={styles.price}>₹28,499</span>
              <span className={styles.unit}> for 5 nights</span>
            </div>
            <div className={styles.ratingLine}>
              <span className={styles.star}>★</span>
              <span>4.95 · </span>
              <span className={styles.reviewsCount}>19 reviews</span>
            </div>
          </div>
          <button
            type="button"
            className={styles.reserveBtn}
            onClick={onReserveClick}
          >
            Reserve
          </button>
        </div>
      </div>
    </nav>
  );
}
