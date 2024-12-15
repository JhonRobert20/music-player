export type Track = {
  title: string;
  duration: number;
  track_position: number;
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
  };
  preview: string;
};

export type SearchTrack = {
  id: number;
  title: string;
  title_short: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  preview: string;
  artist: {
    name: string;
    picture: string;
  };
  album: {
    title: string;
    cover: string;
  };
};

export type SearchResults = {
  data: SearchTrack[];
};
