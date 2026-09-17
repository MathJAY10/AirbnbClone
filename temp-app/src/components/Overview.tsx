"use client";
import styles from "./Overview.module.css";
import { LISTING } from "@/data/listing";
import { LaurelBranchFlat } from "./Icons";

export default function Overview() {
  const { specs } = LISTING;

  return (
    <div className={styles.wrapper}>
      {/* Title & Specs matching screenshot 2 */}
      <div className={styles.headerRow}>
        <div>
          <h2 className={styles.propertyTitle}>Entire serviced apartment in Candolim, India</h2>
          <p className={styles.specs}>
            {specs.guests} guests · {specs.bedrooms} bedroom · {specs.beds} bed · {specs.bathrooms} bathroom
          </p>
        </div>
      </div>

      {/* Guest Favourite Card matching screenshot 2 */}
      <div className={styles.guestFavCard}>
        <div className={styles.favLeft}>
          <div className={styles.laurelBadge}>
            <LaurelBranchFlat size={34} />
            <div className={styles.favLabel}>
              <span>Guest</span>
              <span>favourite</span>
            </div>
            <LaurelBranchFlat size={34} flip />
          </div>
          <div className={styles.favDescription}>
            One of the most loved homes on Airbnb, according to guests
          </div>
        </div>

        <div className={styles.favStats}>
          <div className={styles.statCol}>
            <span className={styles.ratingVal}>4.95</span>
            <span className={styles.stars}>★★★★★</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statCol}>
            <span className={styles.ratingVal}>19</span>
            <span className={styles.statLabel}>Reviews</span>
          </div>
        </div>
      </div>

      {/* Host Row */}
      <div className={styles.hostRow}>
        <div className={styles.hostAvatar}>
          <span className={styles.avatarText}>MIRASHYA</span>
        </div>
        <div className={styles.hostInfo}>
          <h3 className={styles.hostName}>Hosted by Mirashya Homes</h3>
          <p className={styles.hostingYears}>2 years hosting</p>
        </div>
      </div>

      <div className={styles.divider} />

      {/* Highlights matching frame 060.0s */}
      <div className={styles.highlights}>
        {/* Highlight 1: Outdoor entertainment */}
        <div className={styles.highlightItem}>
          <div className={styles.hlIcon}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#222" strokeWidth="1.5">
              <path d="M12 2l3 6h6l-5 4 2 7-6-4-6 4 2-7-5-4h6z" />
            </svg>
          </div>
          <div>
            <h4 className={styles.hlTitle}>Outdoor entertainment</h4>
            <p className={styles.hlSub}>The pool and alfresco dining are great for summer trips.</p>
          </div>
        </div>

        {/* Highlight 2: Designed for staying cool */}
        <div className={styles.highlightItem}>
          <div className={styles.hlIcon}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#222" strokeWidth="1.5">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2a4 4 0 0 1 4 4c0 2-2 3-4 3s-4-1-4-3a4 4 0 0 1 4-4zM22 12a4 4 0 0 1-4 4c-2 0-3-2-3-4s1-4 3-4a4 4 0 0 1 4 4zM12 22a4 4 0 0 1-4-4c0-2 2-3 4-3s4 1 4 3a4 4 0 0 1-4 4zM2 12a4 4 0 0 1 4-4c2 0 3 2 3 4s-1 4-3 4a4 4 0 0 1-4-4z" />
            </svg>
          </div>
          <div>
            <h4 className={styles.hlTitle}>Designed for staying cool</h4>
            <p className={styles.hlSub}>Beat the heat with the A/C and ceiling fan.</p>
          </div>
        </div>

        {/* Highlight 3: Self check-in */}
        <div className={styles.highlightItem}>
          <div className={styles.hlIcon}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#222" strokeWidth="1.5">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <circle cx="9" cy="12" r="1" fill="#222" />
            </svg>
          </div>
          <div>
            <h4 className={styles.hlTitle}>Self check-in</h4>
            <p className={styles.hlSub}>You can check in with the building staff.</p>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      {/* Auto-translation banner matching frame 060.0s */}
      <div className={styles.translationCard}>
        <span>Some info has been automatically translated. </span>
        <button type="button" className={styles.translationBtn}>Show original</button>
      </div>
    </div>
  );
}
