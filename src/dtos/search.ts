import { SearchApiResponse } from '@/types/responses';
import { SearchResults } from '@/types/entities';

export const transformSearchResponse = (
  apiResponse: SearchApiResponse,
): SearchResults => {
  return {
    next: apiResponse.next,
    total: apiResponse.total,
    data: apiResponse.data.map(apiTrack => ({
      id: apiTrack.id,
      title: apiTrack.title,
      md5_image: apiTrack.md5_image,
      title_short: apiTrack.title_short,
      duration: apiTrack.duration,
      rank: apiTrack.rank,
      explicit_lyrics: apiTrack.explicit_lyrics,
      preview: apiTrack.preview,
      artist: {
        name: apiTrack.artist.name,
        picture: apiTrack.artist.picture,
      },
      album: {
        title: apiTrack.album.title,
        cover: apiTrack.album.cover,
        cover_small: apiTrack.album.cover_small,
        cover_xl: apiTrack.album.cover_xl,
      },
    })),
  };
};
