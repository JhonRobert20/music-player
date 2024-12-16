import React from 'react';
import { SongDetails } from '@/components/SongDetails';
import { SearchResult } from '@/components/SearchResults/SearchResults';
import * as styles from "./Main.module.css";
import { useMusicContext } from '@/contexts/MusicContext';


export const Main = () => {
  const { isSongDetailsOpen } = useMusicContext();
  const gridClass = isSongDetailsOpen
? styles.gridWithRightSidebar
: styles.gridWithoutRightSidebar;

  return (
    <div className={gridClass}>
      <SearchResult />
      <SongDetails />
    </div>
  )
}
