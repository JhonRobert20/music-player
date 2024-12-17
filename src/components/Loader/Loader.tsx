import React from 'react';
import * as styles from './Loader.module.css';

interface LoaderProps {
  query: string;
}

export const Loader: React.FC<LoaderProps> = ({ query }) => (
  <div className={styles.loader}>
    <h3>Loading: &lsquo;{query}&rsquo;...</h3>
  </div>
);
