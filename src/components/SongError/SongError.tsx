import React from 'react';
import styles from './SongError.module.css';

interface SongErrorProps {
  message: string;
}

export const SongError: React.FC<SongErrorProps> = ({ message }) => (
  <div className={styles.errorMessage}>{message}</div>
);
