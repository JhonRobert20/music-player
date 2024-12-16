import { SearchTrack, Track } from '@/types/entities';

export const mapSearchTrackToTrack = (searchTrack: SearchTrack): Track => {
  return {
    title: searchTrack.title,
    duration: searchTrack.duration,
    artist: {
      name: searchTrack.artist.name,
      picture: searchTrack.artist.picture,
      picture_small: searchTrack.artist.picture,
      picture_medium: searchTrack.artist.picture,
      picture_big: searchTrack.artist.picture,
      picture_xl: searchTrack.artist.picture,
    },
    album: {
      title: searchTrack.album.title,
      cover: searchTrack.album.cover,
      cover_small: searchTrack.album.cover_small,
    },
    preview: searchTrack.preview,
    md5_image: searchTrack.md5_image,
  };
};
