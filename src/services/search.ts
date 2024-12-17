import { QueryFunctionContext } from 'react-query';
import { fetchFromApi } from '@/services/fetchFromApi';
import { transformSearchResponse } from '@/dtos/search';

export const fetchSearchResults = async ({
  queryKey,
  signal,
}: QueryFunctionContext<[string, string]>) => {
  const [, searchQuery] = queryKey;
  const endpointSearch = `search?q=${searchQuery}&redirect_uri=http%3A%2F%2Fguardian.mashape.com%2Fcallback&index=0`;
  const apiResponse = await fetchFromApi(endpointSearch, signal);
  return transformSearchResponse(apiResponse);
};
