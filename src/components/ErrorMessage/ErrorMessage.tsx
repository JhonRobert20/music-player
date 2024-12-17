import React from 'react';
import * as styles from './ErrorMessage.module.css';

export const ErrorMessage: React.FC = () => (
  <div className={styles.error}>
    <h3>Something went wrong, please try again later.</h3>
  </div>
);
