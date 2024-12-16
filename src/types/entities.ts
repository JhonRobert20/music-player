export type Track = {
  title: string;
  duration: number;
  artist: {
    name: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
  };
  album: {
    title: string;
    cover: string;
    cover_small: string;
  };
  preview: string;
  md5_image: string;
};

export type SearchTrack = {
  id: number;
  title: string;
  title_short: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  preview: string;
  md5_image: string;
  artist: {
    name: string;
    picture: string;
  };
  album: {
    title: string;
    cover: string;
    cover_small: string;
  };
};

export type SearchResults = {
  data: SearchTrack[];
};
