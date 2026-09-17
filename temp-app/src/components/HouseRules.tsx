"use client";
import styles from "./HouseRules.module.css";

export default function HouseRules() {
  return (
    <section className={styles.wrapper} aria-label="Things to know">
      <h2 className={styles.sectionTitle}>Things to know</h2>
      <div className={styles.columns}>
        {/* Column 1: Cancellation policy */}
        <div className={styles.column}>
          <div className={styles.iconWrapper} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <h3 className={styles.colTitle}>Cancellation policy</h3>
          <p className={styles.text}>
            Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.
          </p>
          <p className={styles.subtext}>
            Review this host&apos;s full policy for details.
          </p>
          <a href="#learn-more" className={styles.learnMore}>
            Learn more
          </a>
        </div>

        {/* Column 2: House rules */}
        <div className={styles.column}>
          <div className={styles.iconWrapper} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="7.5" cy="15.5" r="4.5" />
              <path d="m21 3-9.5 9.5" />
              <path d="m15.5 7.5 3 3" />
            </svg>
          </div>
          <h3 className={styles.colTitle}>House rules</h3>
          <p className={styles.text}>Check-in after 2:00 pm</p>
          <p className={styles.text}>Checkout before 11:00 am</p>
          <p className={styles.text}>3 guests maximum</p>
          <a href="#learn-more" className={styles.learnMore}>
            Learn more
          </a>
        </div>

        {/* Column 3: Safety & property */}
        <div className={styles.column}>
          <div className={styles.iconWrapper} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h3 className={styles.colTitle}>Safety &amp; property</h3>
          <p className={styles.text}>Carbon monoxide alarm not reported</p>
          <p className={styles.text}>Smoke alarm not reported</p>
          <p className={styles.text}>Exterior security cameras on property</p>
          <a href="#learn-more" className={styles.learnMore}>
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
