import React from 'react';
import { useSearch } from '@/contexts/SearchContext';
import { useSelectedSongContext } from '@/contexts/SelectedSongContext';
import { useSearchResults } from '@/hooks/useSearchResults';

export const SearchResult = () => {
  const { query } = useSearch();
  const { data: results, isLoading, error } = useSearchResults(query);

  const { setSelectedSong } = useSelectedSongContext();

  if (isLoading) {
    return 'loading';
  }
  if (error instanceof Error) {
    return 'error';
  }
  if (!results || results == undefined) {
    return 'Error';
  }

  return (
    <div style={{ padding: '1rem', borderTop: '1px solid #ccc' }}>
      <h3>Resultados de búsqueda:</h3>
      <ul>
        {results.length > 0 ? (
          results.map((result, index) => (
            <li key={index}>
              {result.id}{' '}
              <button
                onClick={() => {
                  setSelectedSong(String(result.id));
                }}
              >
                {result.title}
              </button>
            </li>
          ))
        ) : (
          <li>No hay resultados</li>
        )}
      </ul>
    </div>
  );
};
