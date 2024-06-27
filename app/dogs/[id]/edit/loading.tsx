"use client";

import styles from "./page.module.scss";
import useDelay from "./useDelay";

export default function Loading() {
  const delayed = useDelay(5000);

  if (delayed) {
    return (
      <div className={styles.card}>
        <div className={`${styles.cardImg} ${styles.skeleton}`}></div>
        <div className={styles.cardBody}>
          <h2 className={`${styles.cardTitle} ${styles.skeleton}`}></h2>
          <p className={`${styles.cardIntro} ${styles.skeleton}`}></p>
        </div>
      </div>
    );
  }

  // Return null or an empty fragment if you want to hide the loader after 1 second
  return null;
}
