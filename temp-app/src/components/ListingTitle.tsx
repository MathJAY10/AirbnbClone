"use client";
import { useState } from "react";
import { ShareIcon, HeartIcon } from "./Icons";
import { LISTING } from "@/data/listing";
import styles from "./ListingTitle.module.css";

export default function ListingTitle() {
  const [saved, setSaved] = useState(false);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{LISTING.title}</h1>
      <div className={styles.actions}>
        <button type="button" className={styles.actionBtn}>
          <ShareIcon size={16} color="#222" />
          <span>Share</span>
        </button>
        <button
          type="button"
          className={styles.actionBtn}
          onClick={() => setSaved(!saved)}
        >
          <HeartIcon size={16} filled={saved} color={saved ? "#FF385C" : "#222"} />
          <span>Save</span>
        </button>
      </div>
    </div>
  );
}
