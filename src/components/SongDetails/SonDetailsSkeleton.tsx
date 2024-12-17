import React from 'react';
import * as styles from '@/components/SongDetails/SongDetails.module.css';

export const SkeletonLoader = () => (
  <div className={styles.skeletonContainer}>
    <h1 className={`${styles.skeleton} ${styles.skeletonTitle}`} />
    <p className={`${styles.skeleton} ${styles.skeletonText}`} />
    <div className={styles.skeletonContributors}>
      <div className={`${styles.skeleton} ${styles.skeletonImage}`} />
      <div>
        <p className={`${styles.skeleton} ${styles.skeletonText}`} />
        <p className={`${styles.skeleton} ${styles.skeletonText}`} />
      </div>
    </div>
    <div className={styles.skeletonContributors}>
      <div className={`${styles.skeleton} ${styles.skeletonImage}`} />
      <div>
        <p className={`${styles.skeleton} ${styles.skeletonText}`} />
        <p className={`${styles.skeleton} ${styles.skeletonText}`} />
      </div>
    </div>
  </div>
);
