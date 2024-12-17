import React from 'react';
import * as styles from '@/components/SongDetails/SongDetails.module.css';

export const SongSkeleton: React.FC = () => (
  <div className={styles.songDetails__skeleton_container}>
    <div
      className={`${styles.songDetails__skeleton} ${styles.songDetails__skeleton_title}`}
    ></div>
    <div
      className={`${styles.songDetails__skeleton} ${styles.songDetails__skeleton_text}`}
    ></div>
    <div className={styles.skeletonContributors}>
      <div
        className={`${styles.songDetails__skeleton} ${styles.songDetails__skeleton_image}`}
      ></div>
      <div>
        <div
          className={`${styles.songDetails__skeleton} ${styles.songDetails__skeleton_text}`}
        ></div>
        <div
          className={`${styles.songDetails__skeleton} ${styles.songDetails__skeleton_text}`}
        ></div>
      </div>
    </div>
  </div>
);
