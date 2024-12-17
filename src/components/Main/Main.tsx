import React from 'react';
import { SongDetails } from '@/components/SongDetails/SongDetails';
import { SearchResult } from '@/components/SearchResults/SearchResults';
import * as styles from './Main.module.css';
import { useMusicContext } from '@/contexts/MusicContext';
import { MusicPlayer } from '@/components/MusicPlayer/MusicPlayer';

export const Main = () => {
  const { isSongDetailsOpen, selectedSong } = useMusicContext();

  const main__grid =
    isSongDetailsOpen && selectedSong
      ? styles.main__grid_left_side
      : styles.main__grid_right_side;

  return (
    <div className={main__grid}>
      <div className={styles.main__grid_search_results}>
        <SearchResult />
      </div>
      {isSongDetailsOpen && (
        <div className={styles.main__grid_song_details}>
          <SongDetails />
        </div>
      )}
      <MusicPlayer />
    </div>
  );
};
