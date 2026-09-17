"use client";
import styles from "./Footer.module.css";
import { GlobeIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Footer">
      {/* Breadcrumb row */}
      <div className={styles.breadcrumbRow}>
        <nav aria-label="Breadcrumb">
          <ol className={styles.breadcrumbs}>
            <li><a href="#">Airbnb</a></li>
            <li className={styles.separator}>›</li>
            <li><a href="#">India</a></li>
            <li className={styles.separator}>›</li>
            <li><a href="#">Goa</a></li>
            <li className={styles.separator}>›</li>
            <li><a href="#">North Goa</a></li>
            <li className={styles.separator}>›</li>
            <li className={styles.current} aria-current="page">Candolim</li>
          </ol>
        </nav>
      </div>

      {/* 3 Column Links */}
      <div className={styles.linksGrid}>
        <div className={styles.column}>
          <h4 className={styles.colTitle}>Support</h4>
          <ul className={styles.colList}>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">AirCover</a></li>
            <li><a href="#">Anti-discrimination</a></li>
            <li><a href="#">Disability support</a></li>
            <li><a href="#">Cancellation options</a></li>
            <li><a href="#">Report neighborhood concern</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.colTitle}>Hosting</h4>
          <ul className={styles.colList}>
            <li><a href="#">Airbnb your home</a></li>
            <li><a href="#">AirCover for Hosts</a></li>
            <li><a href="#">Hosting resources</a></li>
            <li><a href="#">Community forum</a></li>
            <li><a href="#">Hosting responsibly</a></li>
            <li><a href="#">Airbnb-friendly apartments</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.colTitle}>Airbnb</h4>
          <ul className={styles.colList}>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">New features</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Airbnb.org emergency stays</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomDivider} />

      {/* Bottom copyright & settings bar */}
      <div className={styles.bottomBar}>
        <div className={styles.legalLinks}>
          <span>© 2026 Airbnb, Inc.</span>
          <span className={styles.dot}>·</span>
          <a href="#">Privacy</a>
          <span className={styles.dot}>·</span>
          <a href="#">Terms</a>
          <span className={styles.dot}>·</span>
          <a href="#">Sitemap</a>
          <span className={styles.dot}>·</span>
          <a href="#">Company details</a>
        </div>

        <div className={styles.settingsRow}>
          <button type="button" className={styles.settingBtn}>
            <GlobeIcon size={16} color="#222222" />
            <span>English (IN)</span>
          </button>
          <button type="button" className={styles.settingBtn}>
            <span>₹ INR</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
