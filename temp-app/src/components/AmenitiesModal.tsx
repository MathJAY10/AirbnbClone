"use client";
import { useEffect } from "react";
import { AmenityIcon, CloseIcon } from "./Icons";
import styles from "./AmenitiesModal.module.css";

interface Amenity {
  title: string;
  icon: string;
  available: boolean;
  group: string;
}

interface AmenitiesModalProps {
  amenities: Amenity[];
  onClose: () => void;
}

// Group amenities by category
function groupAmenities(amenities: Amenity[]) {
  const groups: Record<string, Amenity[]> = {};
  amenities.forEach((a) => {
    if (!groups[a.group]) groups[a.group] = [];
    groups[a.group].push(a);
  });
  return groups;
}

export default function AmenitiesModal({ amenities, onClose }: AmenitiesModalProps) {
  const groups = groupAmenities(amenities);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <CloseIcon size={16} color="#222" />
          </button>
          <span className={styles.headerTitle}>What this place offers</span>
        </div>

        <div className={styles.body}>
          {Object.entries(groups).map(([groupName, items]) => (
            <div key={groupName} className={styles.group}>
              <h3 className={styles.groupTitle}>{groupName}</h3>
              <div className={styles.items}>
                {items.map((a) => (
                  <div key={a.title} className={`${styles.item} ${!a.available ? styles.unavailable : ""}`}>
                    <AmenityIcon iconType={a.icon} size={24} color={a.available ? "#222" : "#b0b0b0"} />
                    <span className={styles.label}>
                      {a.available ? a.title : <s>{a.title}</s>}
                    </span>
                    {!a.available && <span className={styles.notIncluded}>Not included</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
