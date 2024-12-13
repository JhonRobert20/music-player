import { QueryFunctionContext } from 'react-query';

export const fetchTrackInfo = async ({
  queryKey,
}: QueryFunctionContext<[string, string, string]>) => {
  const [, trackId, token] = queryKey;
  const response = await fetch(
    `https://deezerdevs-deezer.p.rapidapi.com/track/${trackId}`,
    {
      headers: {
        'x-rapidapi-key': token,
      },
    },
  );

  if (!response.ok) {
    throw new Error('Error al obtener los datos del track');
  }

  return response.json();
};
