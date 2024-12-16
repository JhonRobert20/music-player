import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { SongDetails } from '@/components/SongDetails';
import { MusicPlayer } from '@/components/MusicPlayer';
import { MusicProvider } from '@/contexts/MusicContext';
import { SelectedSongProvider } from '@/contexts/SelectedSongContext';
import { SearchProvider } from '@/contexts/SearchContext';
import { SearchResult } from '@/components/SearchResults/SearchResults';
import { Navbar } from '@/components/Navbar/Navbar';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <div className="music-app">
          <Navbar />
          <SelectedSongProvider>
            <MusicProvider>
              <div>
                <SearchResult />
                <SongDetails />
              </div>
              <MusicPlayer />
            </MusicProvider>
          </SelectedSongProvider>
        </div>
      </SearchProvider>
    </QueryClientProvider>
  );
}
