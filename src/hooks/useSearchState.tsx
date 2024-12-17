import { useState, useEffect } from 'react';
import { useSearch } from '@/contexts/SearchContext';
import { useSearchResults } from '@/hooks/useSearchResults';

export const useSearchState = () => {
  const { query } = useSearch();
  const { data, isLoading, error } = useSearchResults(query);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (query !== '') {
      setHasSearched(true);
    }
  }, [query]);

  return { query, data, isLoading, error, hasSearched };
};
