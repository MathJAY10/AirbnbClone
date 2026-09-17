"use client";
import { useState } from "react";
import styles from "./BookingCard.module.css";
import { LISTING } from "@/data/listing";

interface BookingCardProps {
  checkIn?: string;
  checkOut?: string;
  nights?: number;
  guestCount?: number;
  onReserveClick?: () => void;
}

export default function BookingCard({
  checkIn = "10/18/2026",
  checkOut = "10/23/2026",
  nights = 5,
  guestCount = 2,
  onReserveClick,
}: BookingCardProps) {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const [guestPickerOpen, setGuestPickerOpen] = useState(false);
  const [claimed, setClaimed] = useState(false);

  const totalGuests = adults + children;
  const { pricing } = LISTING;
  // Reference has ₹28,499 for 5 nights
  const baseTotal = 28499;
  const discount = claimed ? Math.round(baseTotal * 0.1) : 0;
  const finalTotal = baseTotal - discount;

  return (
    <aside className={styles.sidebarWrapper} aria-label="Booking Sidebar">
      {/* 10% Off Promo Card */}
      <div className={styles.promoCard}>
        <div className={styles.promoLeft}>
          <span className={styles.promoIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#43A047">
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
            </svg>
          </span>
          <div className={styles.promoText}>
            <div>Get 10% off your next stay.</div>
            <a href="#terms" className={styles.promoLink}>Terms apply</a>
          </div>
        </div>
        <button
          type="button"
          className={`${styles.claimBtn} ${claimed ? styles.claimed : ""}`}
          onClick={() => setClaimed(!claimed)}
        >
          {claimed ? "Applied" : "Claim"}
        </button>
      </div>

      {/* Booking Card */}
      <div className={styles.card}>
        {/* Price header */}
        <div className={styles.priceRow}>
          <div className={styles.priceContainer}>
            <span className={styles.price}>₹{finalTotal.toLocaleString("en-IN")}</span>
            <span className={styles.priceUnit}> for {nights} nights</span>
          </div>
        </div>

        {/* Date & Guest Picker Box */}
        <div className={styles.inputsBorder}>
          <div className={styles.datesRow}>
            <div className={styles.dateCell}>
              <label className={styles.inputLabel}>CHECK-IN</label>
              <div className={styles.inputValue}>{checkIn}</div>
            </div>
            <div className={styles.dateDivider} />
            <div className={styles.dateCell}>
              <label className={styles.inputLabel}>CHECKOUT</label>
              <div className={styles.inputValue}>{checkOut}</div>
            </div>
          </div>

          <div
            className={styles.guestCell}
            onClick={() => setGuestPickerOpen(!guestPickerOpen)}
            role="button"
            tabIndex={0}
            aria-expanded={guestPickerOpen}
          >
            <div className={styles.guestTextCol}>
              <label className={styles.inputLabel}>GUESTS</label>
              <div className={styles.inputValue}>
                {totalGuests} {totalGuests === 1 ? "guest" : "guests"}
                {infants > 0 ? `, ${infants} infant${infants > 1 ? "s" : ""}` : ""}
                {pets > 0 ? `, ${pets} pet${pets > 1 ? "s" : ""}` : ""}
              </div>
            </div>
            <svg
              className={`${styles.chevron} ${guestPickerOpen ? styles.chevronOpen : ""}`}
              viewBox="0 0 18 18"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M16.29 4.3a1 1 0 0 0-1.41 0L9 10.17 3.12 4.3a1 1 0 1 0-1.41 1.41l6.58 6.59a1 1 0 0 0 1.42 0l6.58-6.59a1 1 0 0 0 0-1.41z" />
            </svg>
          </div>

          {/* Guest dropdown popover */}
          {guestPickerOpen && (
            <div className={styles.guestDropdown}>
              {/* Adults */}
              <div className={styles.guestRow}>
                <div>
                  <div className={styles.guestType}>Adults</div>
                  <div className={styles.guestDesc}>Age 13+</div>
                </div>
                <div className={styles.counter}>
                  <button
                    type="button"
                    disabled={adults <= 1}
                    onClick={() => setAdults(adults - 1)}
                    className={styles.countBtn}
                  >
                    -
                  </button>
                  <span className={styles.countNum}>{adults}</span>
                  <button
                    type="button"
                    disabled={adults + children >= LISTING.specs.guests}
                    onClick={() => setAdults(adults + 1)}
                    className={styles.countBtn}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className={styles.guestRow}>
                <div>
                  <div className={styles.guestType}>Children</div>
                  <div className={styles.guestDesc}>Ages 2–12</div>
                </div>
                <div className={styles.counter}>
                  <button
                    type="button"
                    disabled={children <= 0}
                    onClick={() => setChildren(children - 1)}
                    className={styles.countBtn}
                  >
                    -
                  </button>
                  <span className={styles.countNum}>{children}</span>
                  <button
                    type="button"
                    disabled={adults + children >= LISTING.specs.guests}
                    onClick={() => setChildren(children + 1)}
                    className={styles.countBtn}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Infants */}
              <div className={styles.guestRow}>
                <div>
                  <div className={styles.guestType}>Infants</div>
                  <div className={styles.guestDesc}>Under 2</div>
                </div>
                <div className={styles.counter}>
                  <button
                    type="button"
                    disabled={infants <= 0}
                    onClick={() => setInfants(infants - 1)}
                    className={styles.countBtn}
                  >
                    -
                  </button>
                  <span className={styles.countNum}>{infants}</span>
                  <button
                    type="button"
                    disabled={infants >= 5}
                    onClick={() => setInfants(infants + 1)}
                    className={styles.countBtn}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Pets */}
              <div className={styles.guestRow}>
                <div>
                  <div className={styles.guestType}>Pets</div>
                  <div className={styles.guestDesc}>Bringing a service animal?</div>
                </div>
                <div className={styles.counter}>
                  <button
                    type="button"
                    disabled={pets <= 0}
                    onClick={() => setPets(pets - 1)}
                    className={styles.countBtn}
                  >
                    -
                  </button>
                  <span className={styles.countNum}>{pets}</span>
                  <button
                    type="button"
                    disabled={pets >= 2}
                    onClick={() => setPets(pets + 1)}
                    className={styles.countBtn}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className={styles.closeGuestBtnRow}>
                <button
                  type="button"
                  className={styles.closeGuestBtn}
                  onClick={() => setGuestPickerOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Free cancellation pill */}
        <div className={styles.cancellationPill}>
          Free cancellation before 17 October
        </div>

        {/* Reserve Button */}
        <button
          type="button"
          className={styles.reserveBtn}
          onClick={onReserveClick}
        >
          Reserve
        </button>

        {/* Notice */}
        <div className={styles.notice}>You won&apos;t be charged yet</div>

        {/* Breakdown */}
        <div className={styles.breakdown}>
          <div className={styles.breakdownRow}>
            <span className={styles.breakdownItem}>₹5,700 x 5 nights</span>
            <span>₹28,500</span>
          </div>
          {claimed && (
            <div className={styles.breakdownRowPromo}>
              <span>10% promo discount</span>
              <span className={styles.promoNegative}>-₹{discount.toLocaleString("en-IN")}</span>
            </div>
          )}
          <div className={styles.breakdownRow}>
            <span className={styles.breakdownItem}>Cleaning fee</span>
            <span>₹{pricing.cleaningFee.toLocaleString("en-IN")}</span>
          </div>
          <div className={styles.breakdownRow}>
            <span className={styles.breakdownItem}>Airbnb service fee</span>
            <span>₹{pricing.serviceFee.toLocaleString("en-IN")}</span>
          </div>
          <div className={styles.breakdownDivider} />
          <div className={styles.totalRow}>
            <span>Total before taxes</span>
            <span>₹{(finalTotal + pricing.cleaningFee + pricing.serviceFee).toLocaleString("en-IN")}</span>
          </div>
        </div>
      </div>

      {/* Report listing */}
      <div className={styles.reportWrapper}>
        <button type="button" className={styles.reportBtn}>
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
            <path d="M4 1v14H2.5V1H4zm1 1h8.5l-1.5 4.5 1.5 4.5H5V2z" />
          </svg>
          <span>Report this listing</span>
        </button>
      </div>
    </aside>
  );
}
