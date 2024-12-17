import React from 'react';
import * as styles from './NoResults.module.css';

interface NoResultsProps {
  query: string;
}

export const NoResults: React.FC<NoResultsProps> = ({ query }) => (
  <div className={styles.noResults}>
    <h3>No results found for ‘{query}’. Try searching for something else.</h3>
  </div>
);
