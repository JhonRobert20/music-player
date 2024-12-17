import { useQuery } from 'react-query';
import { fetchTrackInfo } from '@/services/track';

export const useTrackInfo = (trackId: number | null) => {
  const { data, isLoading, isError, error } = useQuery(
    ['track', trackId],
    fetchTrackInfo,
    {
      enabled: !!trackId,
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  );

  return {
    trackInfo: data,
    isLoading,
    isError,
    error,
  };
};
