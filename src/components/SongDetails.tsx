import React from 'react';
import { useMusicContext } from '@/contexts/MusicContext';

export const SongDetails = () => {
  const { closeSongDetails, isSongDetailsOpen, selectedSong } =
    useMusicContext();
  if (!selectedSong || !isSongDetailsOpen) {
    return null;
  }

  return (
    <div>
      <h1>Song Details</h1>
      <p>{selectedSong}</p>
      <button onClick={closeSongDetails} />
    </div>
  );
};
