import React from 'react';
import * as styles from './TrackCard.module.css';
import { Track } from '@/types/entities';

interface TrackCardProps {
  track: Track;
  onClick: () => void;
}

export const TrackCard: React.FC<TrackCardProps> = ({ track, onClick }) => {
  const { title, artist, album } = track;

  return (
    <div className={styles.card} onClick={onClick}>
      <img src={album.cover} alt={title} className={styles.image} />
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.artist}>{artist.name}</p>
        <p className={styles.album}>{album.title}</p>
      </div>
    </div>
  );
};
