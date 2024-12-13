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
