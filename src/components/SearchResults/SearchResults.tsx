import React from 'react';
import { useMusicContext } from '@/contexts/MusicContext';
import { TrackCard } from '@/components/TrackCard/TrackCard';
import { mapSearchTrackToTrack } from '@/dtos/fromSearchToTrack';
import * as styles from '@/components/SearchResults/SearchResults.module.css';
import { Loader } from '@/components/Loader/Loader';
import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage';
import { NoResults } from '@/components/NoResults/NoResults';
import { useSearchState } from '@/hooks/useSearchState';

export const SearchResult = () => {
  const {
    query,
    data: searchResults,
    isLoading,
    error,
    hasSearched,
  } = useSearchState();
  const { setSelectedSong, selectedSong, toggleSongDetails, openDetails } =
    useMusicContext();

  const handleCardClick = (id: number) => {
    if (id === selectedSong) {
      toggleSongDetails();
    } else {
      setSelectedSong(id);
      openDetails();
    }
  };

  if (isLoading) return <Loader query={query} />;
  if (error instanceof Error) return <ErrorMessage />;
  if (hasSearched && !searchResults?.data?.length)
    return <NoResults query={query} />;
  if (!hasSearched) {
    return (
      <section className={styles.searchResults__section}>
        <h3 className={styles.searchResults__title}>
          Waiting for your search....
        </h3>
      </section>
    );
  }

  return (
    <section className={styles.searchResults__section}>
      <h3 className={styles.searchResults__title}>
        Search results for:{' '}
        <span className={styles.searchResults__query}>{query}</span>
      </h3>
      <div className={styles.searchResults__grid}>
        {searchResults?.data.map(result => {
          const searchItem = mapSearchTrackToTrack(result);
          return (
            <TrackCard
              key={result.id}
              track={searchItem}
              onClick={() => handleCardClick(result.id)}
            />
          );
        })}
      </div>
    </section>
  );
};
