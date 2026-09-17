"use client";
import Image from "next/image";
import { LISTING } from "@/data/listing";
import styles from "./MeetHost.module.css";

export default function MeetHost() {
  const { host, coHosts } = LISTING;

  return (
    <section className={styles.wrapper} id="meet-host">
      <h2 className={styles.title}>Meet your host</h2>

      <div className={styles.layout}>
        {/* ── LEFT: Host profile card + bio ── */}
        <div className={styles.leftCol}>
          {/* Card */}
          <div className={styles.hostCard}>
            {/* Avatar with green checkmark badge */}
            <div className={styles.avatarWrap}>
              <div className={styles.avatarBg}>
                <span className={styles.avatarText}>MIRASHYA</span>
              </div>
              <span className={styles.verifiedBadge} aria-label="Verified">
                {/* Airbnb-style checkmark circle */}
                <svg viewBox="0 0 16 16" width="22" height="22" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#FF385C" />
                  <path
                    d="M4.5 8.5l2.5 2.5 4.5-5"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            {/* Stats */}
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>{host.totalReviews.toLocaleString("en-IN")}</span>
                <span className={styles.statLabel}>Reviews</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNum}>
                  {host.hostRating}
                  <span className={styles.starIcon}>★</span>
                </span>
                <span className={styles.statLabel}>Rating</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNum}>{host.yearsHosting}</span>
                <span className={styles.statLabel}>Years hosting</span>
              </div>
            </div>

            {/* Name */}
            <p className={styles.hostName}>{host.name}</p>
            <p className={styles.hostRole}>Host</p>
          </div>

          {/* Bio items below card */}
          <ul className={styles.bioList}>
            {host.bio.map((item, i) => (
              <li key={i} className={styles.bioItem}>
                {item.icon === "born" ? (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 3L2 9v2h2v9h5v-5h6v5h5V11h2V9L12 3z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT: Co-hosts + details ── */}
        <div className={styles.rightCol}>
          {/* Co-Hosts */}
          <h3 className={styles.coHostTitle}>Co-Hosts</h3>
          <div className={styles.coHostGrid}>
            {coHosts.map((ch) => (
              <div key={ch.name} className={styles.coHostItem}>
                {ch.avatar ? (
                  <Image
                    src={ch.avatar}
                    alt={ch.name}
                    width={40}
                    height={40}
                    className={styles.coHostAvatar}
                  />
                ) : (
                  <div
                    className={styles.coHostInitial}
                    style={{ background: ch.color }}
                    aria-label={ch.name}
                  >
                    {ch.initials}
                  </div>
                )}
                <span className={styles.coHostName}>{ch.name}</span>
              </div>
            ))}
          </div>

          {/* Host details */}
          <div className={styles.hostDetails}>
            <h3 className={styles.hostDetailsTitle}>Host details</h3>
            <p className={styles.detailLine}>Response rate: {host.responseRate}</p>
            <p className={styles.detailLine}>Responds {host.responseTime}</p>
          </div>

          {/* Message host button */}
          <button type="button" className={styles.messageBtn}>
            Message host
          </button>

          {/* Payment protection notice */}
          <div className={styles.safetyNote}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#717171" strokeWidth="1.6">
              <path
                d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6L12 2z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </span>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />
    </section>
  );
}
