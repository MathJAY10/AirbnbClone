"use client";
import { useState } from "react";
import styles from "./AvailabilityCalendar.module.css";

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

interface CalendarGridProps {
  year: number;
  month: number;
  checkIn: Date | null;
  checkOut: Date | null;
  onDayClick: (date: Date) => void;
}

function CalendarGrid({ year, month, checkIn, checkOut, onDayClick }: CalendarGridProps) {
  const days = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const cells: (number | null)[] = [...Array(firstDay).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];

  return (
    <div className={styles.calGrid}>
      <div className={styles.calHeader}>
        {MONTHS[month]} {year}
      </div>
      <div className={styles.calDays}>
        {DAYS.map((d) => <span key={d} className={styles.calDayName}>{d}</span>)}
      </div>
      <div className={styles.calCells}>
        {cells.map((day, i) => {
          if (!day) return <div key={`e-${i}`} className={styles.calEmpty} />;
          const date = new Date(year, month, day);
          date.setHours(0, 0, 0, 0);
          const isPast = date < today;
          const isCheckIn = checkIn && date.getTime() === checkIn.getTime();
          const isCheckOut = checkOut && date.getTime() === checkOut.getTime();
          const isInRange = checkIn && checkOut && date > checkIn && date < checkOut;

          return (
            <button
              key={day}
              className={`${styles.calDay} ${isPast ? styles.past : ""} ${isCheckIn ? styles.checkIn : ""} ${isCheckOut ? styles.checkOut : ""} ${isInRange ? styles.inRange : ""}`}
              onClick={() => !isPast && onDayClick(date)}
              disabled={isPast}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function AvailabilityCalendar() {
  const now = new Date();
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const secondMonth = viewMonth === 11 ? 0 : viewMonth + 1;
  const secondYear = viewMonth === 11 ? viewYear + 1 : viewYear;

  const handleDayClick = (date: Date) => {
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(date);
      setCheckOut(null);
    } else {
      if (date <= checkIn) {
        setCheckIn(date);
        setCheckOut(null);
      } else {
        setCheckOut(date);
      }
    }
  };

  const formatDate = (d: Date) => d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <div className={styles.wrapper} id="calendar">
      <div className={styles.topRow}>
        <div>
          <h2 className={styles.title}>
            {checkIn && checkOut
              ? `${Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))} nights in Candolim`
              : "Select check-in date"}
          </h2>
          {checkIn && checkOut ? (
            <p className={styles.subtitle}>{formatDate(checkIn)} – {formatDate(checkOut)}</p>
          ) : (
            <p className={styles.subtitle}>Add your travel dates for exact pricing</p>
          )}
        </div>
        {(checkIn || checkOut) && (
          <button className={styles.clearBtn} onClick={() => { setCheckIn(null); setCheckOut(null); }}>
            Clear dates
          </button>
        )}
      </div>

      <div className={styles.calendarRow}>
        <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={prevMonth} aria-label="Previous month">
          <svg viewBox="0 0 18 18" width="12" height="12" fill="#222">
            <path d="M13.71 1.71a1 1 0 0 0-1.42 0L5.7 8.3a1 1 0 0 0 0 1.42l6.59 6.59a1 1 0 0 0 1.42-1.42L8.12 9l5.59-5.87a1 1 0 0 0 0-1.42z" />
          </svg>
        </button>
        <CalendarGrid year={viewYear} month={viewMonth} checkIn={checkIn} checkOut={checkOut} onDayClick={handleDayClick} />
        <CalendarGrid year={secondYear} month={secondMonth} checkIn={checkIn} checkOut={checkOut} onDayClick={handleDayClick} />
        <button className={`${styles.navBtn} ${styles.navNext}`} onClick={nextMonth} aria-label="Next month">
          <svg viewBox="0 0 18 18" width="12" height="12" fill="#222">
            <path d="M4.29 1.71a1 1 0 0 0 0 1.42L10.17 9l-5.88 5.87a1 1 0 1 0 1.42 1.42l6.59-6.59a1 1 0 0 0 0-1.42L5.71 1.71a1 1 0 0 0-1.42 0z" />
          </svg>
        </button>
      </div>

      <hr className={styles.divider} />
    </div>
  );
}
