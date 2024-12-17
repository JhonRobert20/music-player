import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { MusicProvider } from '@/contexts/MusicContext';
import { SearchProvider } from '@/contexts/SearchContext';
import { Navbar } from '@/components/Navbar/Navbar';
import { Main } from './components/Main/Main';
import '@/styles/globals.css';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <div className="music-app">
          <Navbar />
          <MusicProvider>
            <Main />
          </MusicProvider>
        </div>
      </SearchProvider>
    </QueryClientProvider>
  );
}
