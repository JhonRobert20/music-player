import { TrackApiResponse } from '@/types/responses';
import { Track } from '@/types/entities';

export const transformTrack = (apiResponse: TrackApiResponse): Track => ({
  title: apiResponse.title,
  duration: apiResponse.duration,
  track_position: apiResponse.track_position,
  artist: {
    name: apiResponse.artist.name,
    picture: apiResponse.artist.picture,
    picture_small: apiResponse.artist.picture_small,
    picture_medium: apiResponse.artist.picture_medium,
    picture_big: apiResponse.artist.picture_big,
    picture_xl: apiResponse.artist.picture_xl,
  },
  album: {
    title: apiResponse.album.title,
    cover: apiResponse.album.cover_medium,
  },
  preview: apiResponse.preview,
});
