import React from 'react';
import { SongDetails } from '@/components/SongDetails/SongDetails';
import { SearchResult } from '@/components/SearchResults/SearchResults';
import * as styles from './Main.module.css';
import { useMusicContext } from '@/contexts/MusicContext';
import { MusicPlayer } from '@/components/MusicPlayer/MusicPlayer';

export const Main = () => {
  const { isSongDetailsOpen, selectedSong } = useMusicContext();

  const gridClass =
    isSongDetailsOpen && selectedSong
      ? styles.gridWithRightSidebar
      : styles.gridWithoutRightSidebar;

  return (
    <div className={gridClass}>
      <SearchResult />
      {isSongDetailsOpen && <SongDetails />}
      <MusicPlayer />
    </div>
  );
};
