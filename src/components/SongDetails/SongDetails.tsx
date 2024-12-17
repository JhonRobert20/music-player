import React from 'react';
import { useMusicContext } from '@/contexts/MusicContext';
import { useTrackInfo } from '@/hooks/useTrackInfo';
import { SongSkeleton } from '@/components/SongDetails/SonDetailsSkeleton';
import { SongError } from '../SongError/SongError';
import * as styles from '@/components/SongDetails/SongDetails.module.css';

interface Contributor {
  id: number;
  name: string;
  link: string;
  role: string;
  picture: string;
}

interface ContributorsListProps {
  contributor: Contributor;
}

export const ContributorsList: React.FC<ContributorsListProps> = ({
  contributor,
}) => {
  return (
    <div className={styles.songDetails__contributors_container}>
      <h3 className={styles.songDetails__contributors_title}>TrackList</h3>
      <div className={styles.songDetails__contributors_list}>
        <div
          key={contributor.id}
          className={styles.songDetails__contributor_card}
        >
          <div className={styles.songDetails__contributor_info}>
            <img src={contributor.picture} />
            <div className={styles.songDetails__contributor_infoRole}>
              <p>{contributor.name}</p>
              <p>Role: {contributor.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SongDetails = () => {
  const { selectedSong } = useMusicContext();
  const { trackInfo, isLoading, error } = useTrackInfo(selectedSong);

  if (isLoading) return <SongSkeleton />;
  if (error)
    return <SongError message="Estamos teniendo problemas, prueba más tarde" />;
  if (!trackInfo)
    return (
      <SongError message="No se pudo obtener la información de la canción." />
    );

  return (
    <div className={styles.songDetails}>
      <h1 className={styles.songDetails__album}>{trackInfo.album.title}</h1>
      <img src={trackInfo.album.cover} />
      <p className={styles.songDetails__title}>{trackInfo.title}</p>
      <p className={styles.songDetails__artist}>{trackInfo.artist.name}</p>
      {trackInfo.contributors.map(contributor => {
        return (
          <ContributorsList key={contributor.id} contributor={contributor} />
        );
      })}
    </div>
  );
};
