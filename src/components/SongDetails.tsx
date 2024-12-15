import React from 'react';
import { useMusicContext } from '@/contexts/MusicContext';
import { useSelectedSongContext } from '@/contexts/SelectedSongContext';

export const SongDetails = () => {
  const { closeSongDetails, isSongDetailsOpen } = useMusicContext();
  const { selectedSong } = useSelectedSongContext();
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
