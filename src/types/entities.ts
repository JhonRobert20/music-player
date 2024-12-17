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
    cover_xl: string;
    cover_small: string;
  };
  preview: string;
  md5_image: string;
  contributors: {
    id: number;
    name: string;
    link: string;
    share: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    radio: boolean;
    tracklist: string;
    type: string;
    role: string;
  }[];
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
    cover_xl: string;
  };
};

export type SearchResults = {
  data: SearchTrack[];
  next: string;
  total: number;
};
