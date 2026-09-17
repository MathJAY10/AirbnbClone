"use client";
import { useState } from "react";
import { LISTING } from "@/data/listing";
import styles from "./Description.module.css";

export default function Description() {
  const [expanded, setExpanded] = useState(false);
  const { description } = LISTING;

  const shortText = description.short;
  const fullText = description.full;

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.text} ${expanded ? styles.expanded : styles.collapsed}`}>
        {expanded ? fullText : shortText}
      </div>
      {!expanded && (
        <button className={styles.showMore} onClick={() => setExpanded(true)}>
          Show more
          <svg viewBox="0 0 18 18" width="12" height="12" fill="#222" style={{ marginLeft: 6 }}>
            <path d="M1 5l8 8 8-8" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </button>
      )}
      <hr className={styles.divider} />
    </div>
  );
}
