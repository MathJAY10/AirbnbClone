"use client";
import { useState } from "react";
import styles from "./Reviews.module.css";
import { LaurelBranch3D } from "./Icons";

interface ReviewItem {
  id: string;
  name: string;
  tenure: string;
  timeAgo: string;
  avatarText?: string;
  avatarBg?: string;
  avatarImage?: string;
  comment: string;
  hasShowMore?: boolean;
}

const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev1",
    name: "Amit",
    tenure: "2 months on Airbnb",
    timeAgo: "1 week ago",
    avatarText: "A",
    avatarBg: "#d9a74a",
    comment: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
  },
  {
    id: "rev2",
    name: "Aheesh",
    tenure: "3 years on Airbnb",
    timeAgo: "2 weeks ago",
    avatarText: "A",
    avatarBg: "#5c6bc0",
    comment: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
    hasShowMore: true,
  },
  {
    id: "rev3",
    name: "Samiksha",
    tenure: "1 year on Airbnb",
    timeAgo: "May 2026",
    avatarText: "S",
    avatarBg: "#e91e63",
    comment: "the host nitish was really great help",
  },
  {
    id: "rev4",
    name: "Vedant",
    tenure: "4 years on Airbnb",
    timeAgo: "May 2026",
    avatarText: "V",
    avatarBg: "#7e57c2",
    comment: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....",
    hasShowMore: true,
  },
  {
    id: "rev5",
    name: "Vaibhav S",
    tenure: "3 years on Airbnb",
    timeAgo: "May 2026",
    avatarText: "V",
    avatarBg: "#26a69a",
    comment: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
  },
  {
    id: "rev6",
    name: "Mohd",
    tenure: "5 years on Airbnb",
    timeAgo: "May 2026",
    avatarText: "M",
    avatarBg: "#78909c",
    comment: "Great place. Exactly as described in the listing.",
  },
];

const TAGS = [
  { icon: "🛋️", label: "Comfort", count: 6 },
  { icon: "🟢", label: "Accuracy", count: 5 },
  { icon: "🛁", label: "Hot tub", count: 5 },
  { icon: "🧽", label: "Condition", count: 4 },
  { icon: "🎁", label: "Hospitality", count: 8 },
  { icon: "🧼", label: "Cleanliness", count: 4 },
  { icon: "🍰", label: "Amenities", count: 2 },
];

export default function Reviews() {
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="reviews" className={styles.wrapper} aria-label="Reviews">
      {/* Guest Favourite Hero matching screenshot 3 */}
      <div className={styles.guestFavHero}>
        <div className={styles.heroRatingRow}>
          <LaurelBranch3D size={96} />
          <span className={styles.heroRatingNumber}>4.95</span>
          <LaurelBranch3D size={96} flip />
        </div>
        <h2 className={styles.heroTitle}>Guest favourite</h2>
        <p className={styles.heroSubtitle}>
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <a href="#how-reviews-work" className={styles.howReviewsWork}>
          How reviews work
        </a>
      </div>

      {/* 7 Horizontal Rating Columns matching frame 111.0s */}
      <div className={styles.metricsGrid}>
        {/* Col 1: Overall rating bars */}
        <div className={styles.metricCol}>
          <div className={styles.metricLabel}>Overall rating</div>
          <div className={styles.barList}>
            <div className={styles.barItem}>
              <span className={styles.barNum}>5</span>
              <div className={styles.barTrack}><div className={styles.barFill} style={{ width: "95%" }} /></div>
            </div>
            <div className={styles.barItem}>
              <span className={styles.barNum}>4</span>
              <div className={styles.barTrack}><div className={styles.barFill} style={{ width: "5%" }} /></div>
            </div>
            <div className={styles.barItem}>
              <span className={styles.barNum}>3</span>
              <div className={styles.barTrack}><div className={styles.barFill} style={{ width: "0%" }} /></div>
            </div>
            <div className={styles.barItem}>
              <span className={styles.barNum}>2</span>
              <div className={styles.barTrack}><div className={styles.barFill} style={{ width: "0%" }} /></div>
            </div>
            <div className={styles.barItem}>
              <span className={styles.barNum}>1</span>
              <div className={styles.barTrack}><div className={styles.barFill} style={{ width: "0%" }} /></div>
            </div>
          </div>
        </div>

        {/* Col 2: Cleanliness */}
        <div className={styles.metricCol}>
          <div className={styles.metricLabel}>Cleanliness</div>
          <div className={styles.metricScore}>5.0</div>
          <div className={styles.metricIcon}>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 11V7a2 2 0 0 1 2-2h2v6M11 5l3-3 2 2-3 3M7 11h8l2 10H5L7 11z" />
            </svg>
          </div>
        </div>

        {/* Col 3: Accuracy */}
        <div className={styles.metricCol}>
          <div className={styles.metricLabel}>Accuracy</div>
          <div className={styles.metricScore}>5.0</div>
          <div className={styles.metricIcon}>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="9" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
        </div>

        {/* Col 4: Check-in */}
        <div className={styles.metricCol}>
          <div className={styles.metricLabel}>Check-in</div>
          <div className={styles.metricScore}>5.0</div>
          <div className={styles.metricIcon}>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="8" cy="15" r="4" />
              <path d="M11 12l8-8M17 4l2 2M15 6l2 2" />
            </svg>
          </div>
        </div>

        {/* Col 5: Communication */}
        <div className={styles.metricCol}>
          <div className={styles.metricLabel}>Communication</div>
          <div className={styles.metricScore}>5.0</div>
          <div className={styles.metricIcon}>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
        </div>

        {/* Col 6: Location */}
        <div className={styles.metricCol}>
          <div className={styles.metricLabel}>Location</div>
          <div className={styles.metricScore}>4.8</div>
          <div className={styles.metricIcon}>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
              <line x1="8" y1="2" x2="8" y2="18" />
              <line x1="16" y1="6" x2="16" y2="22" />
            </svg>
          </div>
        </div>

        {/* Col 7: Value */}
        <div className={styles.metricCol}>
          <div className={styles.metricLabel}>Value</div>
          <div className={styles.metricScore}>4.8</div>
          <div className={styles.metricIcon}>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
              <circle cx="7" cy="7" r="1.5" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>

      {/* Pill Tags matching frame 111.0s */}
      <div className={styles.tagPillsRow}>
        {TAGS.map((tag) => (
          <div key={tag.label} className={styles.tagPill}>
            <span>{tag.icon}</span>
            <span className={styles.tagLabel}>{tag.label}</span>
            <span className={styles.tagCount}>{tag.count}</span>
          </div>
        ))}
      </div>

      {/* 2-Column Reviews Grid */}
      <div className={styles.reviewsGrid}>
        {REVIEWS_DATA.map((rev) => (
          <div key={rev.id} className={styles.reviewCard}>
            <div className={styles.authorRow}>
              <div className={styles.avatar} style={{ background: rev.avatarBg }}>
                {rev.avatarText}
              </div>
              <div className={styles.authorMeta}>
                <div className={styles.authorName}>{rev.name}</div>
                <div className={styles.authorTenure}>{rev.tenure}</div>
              </div>
            </div>

            <div className={styles.reviewRatingRow}>
              <span className={styles.reviewStars}>★★★★★</span>
              <span className={styles.dot}>·</span>
              <span className={styles.reviewDate}>{rev.timeAgo}</span>
            </div>

            <p className={styles.comment}>
              {rev.comment}
            </p>

            {rev.hasShowMore && (
              <button
                type="button"
                className={styles.showMoreBtn}
                onClick={() => toggleExpand(rev.id)}
              >
                {expandedReviews[rev.id] ? "Show less" : "Show more"}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Show all 19 reviews button matching frame 115.5s */}
      <button type="button" className={styles.showAllReviewsBtn}>
        Show all 19 reviews
      </button>

      <hr className={styles.divider} />
    </section>
  );
}
