import { QueryFunctionContext } from 'react-query';
import { fetchFromApi } from '@/services/fetchFromApi';
import { transformTrack } from '@/dtos/tracks';
export const fetchTrackInfo = async ({
  queryKey,
  signal
}: QueryFunctionContext<[string, number|null]>) => {
  const [, trackId] = queryKey;
  const endpointTrack = `track/${trackId}`;
  const apiResponse = await fetchFromApi(endpointTrack, signal);
  return transformTrack(apiResponse);
};
