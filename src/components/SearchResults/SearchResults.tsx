import React from 'react';
import { useSearch } from '@/contexts/SearchContext';
import { useSelectedSongContext } from '@/contexts/SelectedSongContext';
import { useSearchResults } from '@/hooks/useSearchResults';
import { TrackCard } from '@/components/TrackCard/TrackCard';
import { mapSearchTrackToTrack } from '@/dtos/fromSearchToTrack';
import * as styles from './SearchResults.module.css';

export const SearchResult = () => {
  const { query } = useSearch();
  const { data: results, isLoading, error } = useSearchResults(query);

  const { setSelectedSong, selectedSong } = useSelectedSongContext();

  if (isLoading) {
    return (
      <div style={{ padding: '1rem' }}>
        <h3>Loading: &lsquo;{query}&rsquo;</h3>
      </div>
    );
  }
  if (error instanceof Error) {
    return 'error';
  }
  if (!results || results == undefined) {
    return (
      <div style={{ padding: '1rem' }}>
        <h3>Try Searching: &lsquo;Eminem&rsquo;</h3>
      </div>
    );
  }

  const gridClass = selectedSong
    ? styles.gridWithRightSidebar
    : styles.gridWithoutRightSidebar;

  return (
    <div style={{ padding: '1rem', borderTop: '1px solid #ccc' }}>
      <h3>Search results for: {query}</h3>
      <div className={gridClass}>
        <div className={styles.results}>
          {results.length > 0 ? (
            results.map((result, index) => {
              const track = mapSearchTrackToTrack(result);
              return (
                <TrackCard
                  key={index}
                  track={track}
                  onClick={() => setSelectedSong(result.id)}
                />
              );
            })
          ) : (
            <div>No results</div>
          )}
        </div>
      </div>
    </div>
  );
};
