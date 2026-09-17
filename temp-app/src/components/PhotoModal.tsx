"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./PhotoModal.module.css";
import { ShareIcon, HeartIcon } from "./Icons";

interface PhotoTourItem {
  room: string;
  sub?: string;
  photos: {
    id: string;
    caption: string;
    localPath: string;
  }[];
}

const PHOTO_TOUR_ROOMS: PhotoTourItem[] = [
  {
    room: "Living room",
    sub: "Private jacuzzi · High-speed WiFi · Smart TV · Sofa bed",
    photos: [
      { id: "p7", caption: "Living room terrace", localPath: "/images/listing/photo_07_2481343021.jpg" },
      { id: "p4", caption: "Terrace lounge seating", localPath: "/images/listing/photo_04_2481343372.jpg" },
      { id: "p5", caption: "Private jacuzzi tub", localPath: "/images/listing/photo_05_2483661863.jpg" },
      { id: "p1", caption: "Living room indoor seating", localPath: "/images/listing/photo_01_2597711731.jpg" },
      { id: "p2", caption: "Smart TV and credenza", localPath: "/images/listing/photo_02_2597711755.jpg" },
      { id: "p3", caption: "Living space wide angle", localPath: "/images/listing/photo_03_2597711760.jpg" },
      { id: "p8", caption: "Living room & dining area", localPath: "/images/listing/photo_08_2483654732.jpg" },
      { id: "p9", caption: "Terrace overview", localPath: "/images/listing/photo_09_2483654737.jpg" },
      { id: "p10", caption: "High ceiling living area", localPath: "/images/listing/photo_10_2483654777.jpg" },
    ],
  },
  {
    room: "Full bathroom",
    sub: "Hairdryer · Hot water · Shampoo · Shower gel",
    photos: [
      { id: "p19", caption: "Full bathroom with shower", localPath: "/images/listing/photo_19_2483656323.jpg" },
    ],
  },
  {
    room: "Gym",
    sub: "Air conditioning · Gym · Exercise equipment · Ceiling fan",
    photos: [
      { id: "p20", caption: "Gym equipment and treadmill", localPath: "/images/listing/photo_20_2483658418.jpg" },
      { id: "p21", caption: "Stationary bike and weights", localPath: "/images/listing/photo_21_2483658480.jpg" },
      { id: "p22", caption: "Weight rack", localPath: "/images/listing/photo_22_2483658491.jpg" },
      { id: "p23", caption: "Gym overview", localPath: "/images/listing/photo_23_2483658583.jpg" },
      { id: "p24", caption: "Workout station", localPath: "/images/listing/photo_24_2483658630.jpg" },
    ],
  },
  {
    room: "Exterior",
    sub: "Gated community · Free parking on premises · Security",
    photos: [
      { id: "p25", caption: "Amor de Goa building exterior", localPath: "/images/listing/photo_25_2483681093.jpg" },
      { id: "p26", caption: "Exterior view", localPath: "/images/listing/photo_26_2483681114.jpg" },
      { id: "p27", caption: "Aerial view", localPath: "/images/listing/photo_27_2483681115.jpg" },
      { id: "p28", caption: "Building facade", localPath: "/images/listing/photo_28_2483681141.jpg" },
      { id: "p29", caption: "Entrance gate", localPath: "/images/listing/photo_29_2483681146.jpg" },
      { id: "p30", caption: "Community view", localPath: "/images/listing/photo_30_2483681191.jpg" },
    ],
  },
  {
    room: "Pool",
    sub: "Pool · Shared outdoor pool",
    photos: [
      { id: "p31", caption: "Central swimming pool", localPath: "/images/listing/photo_31_2481343116.jpg" },
      { id: "p32", caption: "Pool and atrium courtyard", localPath: "/images/listing/photo_32_2483655024.jpg" },
      { id: "p33", caption: "Tranquil shared swimming pool", localPath: "/images/listing/photo_33_2483655054.jpg" },
    ],
  },
  {
    room: "Bedroom",
    sub: "1 double bed · Closet · A/C",
    photos: [
      { id: "p13", caption: "Bedroom with double bed", localPath: "/images/listing/photo_13_2481343166.jpg" },
      { id: "p14", caption: "Plush bedroom for restful sleep", localPath: "/images/listing/photo_14_2483655537.jpg" },
      { id: "p15", caption: "Bedroom window view", localPath: "/images/listing/photo_15_2483655663.jpg" },
      { id: "p16", caption: "Bedroom wardrobes", localPath: "/images/listing/photo_16_2483655705.jpg" },
      { id: "p17", caption: "Warm lighting and decor", localPath: "/images/listing/photo_17_2483655754.jpg" },
      { id: "p18", caption: "Bedroom vanity mirror", localPath: "/images/listing/photo_18_2483655793.jpg" },
    ],
  },
  {
    room: "Kitchen",
    sub: "Cookware · Microwave · Refrigerator · Washing machine",
    photos: [
      { id: "p11", caption: "Kitchen countertop", localPath: "/images/listing/photo_11_2597712394.jpg" },
      { id: "p12", caption: "Kitchen essentials", localPath: "/images/listing/photo_12_2597712388.jpg" },
      { id: "p40", caption: "Washing machine & art", localPath: "/images/listing/photo_40_2483661855.jpg" },
    ],
  },
];

// Thumbnail preview strip — one representative image per room + extras
// Uses existing paths from PHOTO_TOUR_ROOMS above
const THUMBNAIL_ITEMS: { label: string; src: string; room: string }[] = [
  { label: "Living room 1", src: "/images/listing/photo_07_2481343021.jpg",  room: "Living room" },
  { label: "Living room 2", src: "/images/listing/photo_01_2597711731.jpg",  room: "Living room" },
  { label: "Full kitchen",  src: "/images/listing/photo_11_2597712394.jpg",  room: "Kitchen" },
  { label: "Bedroom",       src: "/images/listing/photo_13_2481343166.jpg",  room: "Bedroom" },
  { label: "Full bathroom", src: "/images/listing/photo_19_2483656323.jpg",  room: "Full bathroom" },
  { label: "Gym",           src: "/images/listing/photo_20_2483658418.jpg",  room: "Gym" },
  { label: "Exterior",      src: "/images/listing/photo_25_2483681093.jpg",  room: "Exterior" },
  { label: "Pool",          src: "/images/listing/photo_31_2481343116.jpg",  room: "Pool" },
  { label: "Additional photos", src: "/images/listing/photo_40_2483661855.jpg", room: "Kitchen" },
];

// Heights: header=64px, category-nav=52px → total sticky offset=116px
const STICKY_OFFSET = 116;

interface PhotoModalProps {
  onClose: () => void;
}

export default function PhotoModal({ onClose }: PhotoModalProps) {
  const [activeRoom, setActiveRoom] = useState(PHOTO_TOUR_ROOMS[0].room);
  // Nav is hidden until user scrolls past the thumbnail strip
  const [navVisible, setNavVisible] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const thumbStripRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);
  // Track if we're programmatically scrolling to suppress observer updates
  const isScrollingRef = useRef(false);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Lock body scroll & handle Escape
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

  // Show / hide category nav based on thumbnail strip visibility
  // When the thumb strip is fully scrolled out of .body's viewport → show nav
  useEffect(() => {
    const bodyEl = bodyRef.current;
    const thumbEl = thumbStripRef.current;
    if (!bodyEl || !thumbEl) return;

    const navObserver = new IntersectionObserver(
      ([entry]) => {
        // Strip no longer intersecting = scrolled past it → show nav
        setNavVisible(!entry.isIntersecting);
      },
      {
        root: bodyEl,
        // Trigger as soon as even 1px of the strip leaves view
        threshold: 0,
      }
    );
    navObserver.observe(thumbEl);
    return () => navObserver.disconnect();
  }, []);

  // Set up IntersectionObserver on the internal .body scroll container
  useEffect(() => {
    const bodyEl = bodyRef.current;
    if (!bodyEl) return;

    const entries = new Map<string, IntersectionObserverEntry>();

    observerRef.current = new IntersectionObserver(
      (observed) => {
        // Update our map of entries
        for (const entry of observed) {
          const room = (entry.target as HTMLElement).dataset.room;
          if (room) entries.set(room, entry);
        }

        // If programmatically scrolling, skip updating active state
        if (isScrollingRef.current) return;

        // Find the topmost visible section
        let topmost: { room: string; top: number } | null = null;
        for (const [room, entry] of entries) {
          if (entry.isIntersecting) {
            const top = entry.boundingClientRect.top;
            if (!topmost || top < topmost.top) {
              topmost = { room, top };
            }
          }
        }
        if (topmost) {
          setActiveRoom(topmost.room);
        }
      },
      {
        root: bodyEl, // observe within .body, not viewport
        rootMargin: "-10% 0px -60% 0px",
        threshold: 0,
      }
    );

    // Observe all registered sections
    sectionRefs.current.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, []);

  // Register a section ref and observe it
  const registerSection = useCallback((room: string, el: HTMLDivElement | null) => {
    if (el) {
      sectionRefs.current.set(room, el);
      el.dataset.room = room;
      observerRef.current?.observe(el);
    } else {
      const existing = sectionRefs.current.get(room);
      if (existing) {
        observerRef.current?.unobserve(existing);
        sectionRefs.current.delete(room);
      }
    }
  }, []);

  // Click category: scroll body to that section
  const handleCategoryClick = useCallback((room: string) => {
    const bodyEl = bodyRef.current;
    const sectionEl = sectionRefs.current.get(room);
    if (!bodyEl || !sectionEl) return;

    // Immediately update active
    setActiveRoom(room);

    // Mark programmatic scroll so observer doesn't fight us
    isScrollingRef.current = true;
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);

    // Calculate scroll target: section top relative to body scroll container,
    // minus the sticky offset so heading isn't hidden behind nav
    const bodyRect = bodyEl.getBoundingClientRect();
    const sectionRect = sectionEl.getBoundingClientRect();
    const scrollTarget = bodyEl.scrollTop + (sectionRect.top - bodyRect.top) - STICKY_OFFSET;

    bodyEl.scrollTo({ top: scrollTarget, behavior: "smooth" });

    // Release lock after smooth scroll settles (~700ms)
    scrollTimerRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  }, []);

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Photo tour">
      {/* Sticky 64px header */}
      <header className={styles.header}>
        <button type="button" className={styles.backBtn} onClick={onClose} aria-label="Back">
          <svg viewBox="0 0 18 18" width="16" height="16" fill="currentColor">
            <path d="M13.71 1.71a1 1 0 0 0-1.42 0L5.7 8.3a1 1 0 0 0 0 1.42l6.59 6.59a1 1 0 0 0 1.42-1.42L8.12 9l5.59-5.87a1 1 0 0 0 0-1.42z" />
          </svg>
        </button>

        <h2 className={styles.headerTitle}>Photo tour</h2>

        <div className={styles.headerActions}>
          <button type="button" className={styles.actionBtn} aria-label="Share">
            <ShareIcon size={16} color="#222" />
          </button>
          <button type="button" className={styles.actionBtn} aria-label="Save">
            <HeartIcon size={16} color="#222" />
          </button>
        </div>
      </header>

      {/* Category navigation — hidden at top, slides in once thumbnail strip is scrolled past */}
      <nav
        className={`${styles.categoryNav} ${navVisible ? styles.categoryNavVisible : styles.categoryNavHidden}`}
        aria-label="Photo tour categories"
        aria-hidden={!navVisible}
      >
        <div className={styles.categoryInner}>
          {PHOTO_TOUR_ROOMS.map((section) => (
            <button
              key={section.room}
              type="button"
              className={`${styles.categoryBtn} ${activeRoom === section.room ? styles.categoryBtnActive : ""}`}
              onClick={() => handleCategoryClick(section.room)}
              aria-current={activeRoom === section.room ? "true" : undefined}
            >
              {section.room}
            </button>
          ))}
        </div>
      </nav>

      {/* Scrollable body — the scroll root for IntersectionObserver */}
      <div className={styles.body} ref={bodyRef}>

        {/* Photo thumbnail preview strip — also the sentinel for nav visibility */}
        <div className={styles.thumbStripOuter} ref={thumbStripRef}>
          <div className={styles.thumbStrip}>
            {THUMBNAIL_ITEMS.map((item, i) => (
              <button
                key={i}
                type="button"
                className={styles.thumbItem}
                onClick={() => handleCategoryClick(item.room)}
                aria-label={`Go to ${item.label}`}
              >
                <div className={styles.thumbImgWrap}>
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="140px"
                    className={styles.thumbImg}
                  />
                </div>
                <span className={styles.thumbLabel}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.tourContainer}>
          {PHOTO_TOUR_ROOMS.map((section) => (
            <div
              key={section.room}
              className={styles.roomRow}
              ref={(el) => registerSection(section.room, el)}
            >
              {/* Left Column: sticky room title & subtitle */}
              <div className={styles.roomLeft}>
                <h3 className={styles.roomTitle}>{section.room}</h3>
                {section.sub && <p className={styles.roomSub}>{section.sub}</p>}
              </div>

              {/* Right Column: Photos */}
              <div className={styles.roomRight}>
                {section.photos.map((photo) => (
                  <div key={photo.id} className={styles.photoWrapper}>
                    <Image
                      src={photo.localPath}
                      alt={photo.caption}
                      width={700}
                      height={470}
                      sizes="(max-width: 768px) 100vw, 650px"
                      className={styles.photoImg}
                    />
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
