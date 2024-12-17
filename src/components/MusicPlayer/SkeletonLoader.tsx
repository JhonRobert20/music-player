import * as styles from '@/components/MusicPlayer/MusicPlayer.module.css';
import React from 'react';

export const SkeletonLoader = () => (
  <div className={styles.overlay}>
    <div className={styles.modalSkeleton}>
      <div className={styles.modalContent}>
        <div className={`${styles.skeleton} ${styles.skeletonImage}`} />
        <div className={styles.trackInfo}>
          <div className={`${styles.skeleton} ${styles.skeletonTitle}`} />
          <div className={`${styles.skeleton} ${styles.skeletonArtist}`} />
        </div>
        <div className={styles.playerWrapper}>
          <div className={styles.controls}>
            <div
              className={styles.skeleton}
              style={{ width: '50%', height: '30px' }}
            />
            <div
              className={styles.skeleton}
              style={{ width: '30%', height: '30px' }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
