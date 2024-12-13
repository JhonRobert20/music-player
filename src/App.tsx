import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useState } from 'react';
import { SongDetails } from '@/components/SongDetails';
import { MusicPlayer } from '@/components/MusicPlayer';

const queryClient = new QueryClient();

export default function App() {
  const [selectedTrack, setselectedTrack] = useState<string | null>(null);
  const [isSongDetailsOpen, setIsSongDetailsOpen] = useState<boolean>(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState<boolean>(false);

  const closeSongDetails = () => {
    setIsSongDetailsOpen(false);
  };

  const closePlayer = () => {
    setIsSongDetailsOpen(false);
    setIsPlayerOpen(false);
    setselectedTrack(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="music-app">
        <div
          className={`main-content ${selectedTrack && isSongDetailsOpen ? 'with-sidebar' : ''}`}
        ></div>

        {selectedTrack && isSongDetailsOpen && (
          <SongDetails songId={selectedTrack} onClose={closeSongDetails} />
        )}

        {isPlayerOpen && (
          <MusicPlayer trackId={selectedTrack} onClose={closePlayer} />
        )}
      </div>
    </QueryClientProvider>
  );
}
