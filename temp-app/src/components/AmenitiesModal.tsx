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

// Group amenities by category maintaining specific presentation order
function groupAmenities(amenities: Amenity[]) {
  const groupOrder = [
    "Bathroom",
    "Bedroom and laundry",
    "Entertainment",
    "Family",
    "Heating and cooling",
    "Home safety",
    "Internet and office",
    "Kitchen and dining",
    "Outdoor",
    "Parking and facilities",
    "Services",
  ];

  const groups: Record<string, Amenity[]> = {};
  amenities.forEach((a) => {
    if (!groups[a.group]) groups[a.group] = [];
    groups[a.group].push(a);
  });

  const orderedGroups: Record<string, Amenity[]> = {};
  groupOrder.forEach((g) => {
    if (groups[g]) {
      orderedGroups[g] = groups[g];
    }
  });

  // Add any remaining groups
  Object.keys(groups).forEach((g) => {
    if (!orderedGroups[g]) {
      orderedGroups[g] = groups[g];
    }
  });

  return orderedGroups;
}

export default function AmenitiesModal({ amenities, onClose }: AmenitiesModalProps) {
  const groups = groupAmenities(amenities);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="Amenities">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <CloseIcon size={16} color="#222" />
          </button>
        </div>

        <div className={styles.body}>
          <h2 className={styles.mainTitle}>What this place offers</h2>

          {Object.entries(groups).map(([groupName, items]) => (
            <div key={groupName} className={styles.group}>
              <h3 className={styles.groupTitle}>{groupName}</h3>
              <div className={styles.items}>
                {items.map((a) => (
                  <div key={a.title} className={`${styles.item} ${!a.available ? styles.unavailable : ""}`}>
                    <div className={styles.iconWrap}>
                      <AmenityIcon iconType={a.icon} size={24} color={a.available ? "#222222" : "#717171"} />
                    </div>
                    <div className={styles.labelContainer}>
                      <span className={styles.label}>
                        {a.available ? a.title : <s>{a.title}</s>}
                      </span>
                    </div>
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
