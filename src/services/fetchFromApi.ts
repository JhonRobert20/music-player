const token: string | undefined = process.env.REACT_APP_DEEZER_TOKEN;

if (!token) {
  console.error(
    'Error: REACT_APP_DEEZER_TOKEN is not defined. Check your .env file.',
  );
  throw new Error('Missing REACT_APP_DEEZER_TOKEN');
}

export const fetchFromApi = async (endpoint: string, signal?: AbortSignal) => {
  const response = await fetch(
    `https://deezerdevs-deezer.p.rapidapi.com/${endpoint}`,
    {
      headers: {
        'x-rapidapi-key': token,
      },
      signal: signal,
    },
  );

  if (!response.ok) {
    throw new Error('Error al obtener los datos');
  }

  return response.json();
};
