"use client";
import { useState } from "react";
import Image from "next/image";
import { GlobeIcon, HamburgerMenuIcon } from "./Icons";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Local Airbnb Logo Image */}
        <a href="/" className={styles.logo} aria-label="Airbnb home">
          <Image
            src="/logo.png"
            alt="Airbnb"
            width={150}
            height={68}
            priority
            className={styles.logoImage}
          />
        </a>

        {/* Center Search Pill matching screenshot 1 */}
        <div className={styles.searchPill}>
          <div className={styles.pillIcon}>
            <Image
              src="/images/search-house.png"
              alt=""
              width={26}
              height={26}
              priority
              style={{ objectFit: "contain", display: "block" }}
            />
          </div>
          <button type="button" className={styles.pillBtnBold}>Anywhere</button>
          <span className={styles.pillDivider} />
          <button type="button" className={styles.pillBtnBold}>Anytime</button>
          <span className={styles.pillDivider} />
          <button type="button" className={styles.pillBtnMuted}>Add guests</button>
          <button type="button" className={styles.searchCircle} aria-label="Search">
            <svg viewBox="0 0 32 32" width="12" height="12" fill="#fff" stroke="#fff" strokeWidth="2">
              <path d="M13 2a11 11 0 1 0 7.06 19.46l8.24 8.25a1 1 0 0 0 1.41-1.42l-8.24-8.24A11 11 0 0 0 13 2zm0 2a9 9 0 1 1 0 18 9 9 0 0 1 0-18z" />
            </svg>
          </button>
        </div>

        {/* Right side navigation matching screenshot 1 */}
        <div className={styles.right}>
          <a href="#" className={styles.hostLink}>Become a host</a>
          <button className={styles.circleBtn} aria-label="Choose a language">
            <GlobeIcon size={18} color="#222222" />
          </button>
          <button
            type="button"
            className={styles.circleBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Main navigation menu"
            aria-expanded={menuOpen}
          >
            <HamburgerMenuIcon size={18} color="#222222" />
          </button>
          {menuOpen && (
            <div className={styles.dropdown}>
              <a href="#" className={styles.dropdownItemBold}>Sign up</a>
              <a href="#" className={styles.dropdownItem}>Log in</a>
              <div className={styles.dropdownDivider} />
              <a href="#" className={styles.dropdownItem}>Become a host</a>
              <a href="#" className={styles.dropdownItem}>Help Centre</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
