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
    <div className={styles['track-card']} onClick={onClick}>
      <img
        className={styles['track-card__image']}
        src={album.cover_xl}
        alt={`Cover of ${title} by ${artist.name}`}
      />
      <div className={styles['track-card__gradient']} />

      <div className={styles['track-card__info']}>
        <h4 className={styles['track-card__title']}>{title}</h4>
        <p className={styles['track-card__artist']}>{artist.name}</p>
        <p className={styles['track-card__album']}>{album.title}</p>
      </div>
    </div>
  );
};
