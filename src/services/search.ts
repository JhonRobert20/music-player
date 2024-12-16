import { QueryFunctionContext } from 'react-query';
import { fetchFromApi } from '@/services/fetchFromApi';
import { transformSearchResponse } from '@/dtos/search';

export const fetchSearchResults = async ({
  queryKey,
  signal,
}: QueryFunctionContext<[string, string]>) => {
  const [, searchQuery] = queryKey;
  const endpointSearch = `search?q=${searchQuery}`;
  const apiResponse = await fetchFromApi(endpointSearch, signal);
  return transformSearchResponse(apiResponse);
};
