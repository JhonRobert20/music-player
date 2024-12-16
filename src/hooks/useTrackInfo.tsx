import { useQuery } from 'react-query';
import { fetchTrackInfo } from '@/services/track';

export const useTrackInfo = (trackId: number | null) => {
  return useQuery(['track', trackId], fetchTrackInfo, {
    enabled: !!trackId,
  });
};
