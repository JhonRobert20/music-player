import { QueryFunctionContext } from 'react-query';
import { fetchFromApi } from '@/services/fetchFromApi';
import { transformTrack } from '@/dtos/tracks';
export const fetchTrackInfo = async ({
  queryKey,
}: QueryFunctionContext<[string, string]>) => {
  const [, trackId] = queryKey;
  const endpointTrack = `track/${trackId}`;
  const apiResponse = await fetchFromApi(endpointTrack);
  return transformTrack(apiResponse);
};
