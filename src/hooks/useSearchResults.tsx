import { useQuery } from 'react-query';
import { fetchSearchResults } from '@/services/search';

export const useSearchResults = (query: string) => {
  return useQuery(['search', query], fetchSearchResults, {
    enabled: !!query,
  });
};
