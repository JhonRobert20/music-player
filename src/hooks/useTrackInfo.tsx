import { useQuery } from 'react-query';
import { fetchTrackInfo } from '@/services/track';

export const useTrackInfo = (trackId: string) => {
  return useQuery(['track', trackId], fetchTrackInfo, {
    enabled: !!trackId,
  });
};
