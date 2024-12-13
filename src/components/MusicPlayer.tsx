import React from 'react';
import { useQuery } from 'react-query';
import ReactPlayer from 'react-player';
import { fetchTrackInfo } from '@/services/tracks';

export const MusicPlayer = ({
  trackId,
  onClose,
}: {
  trackId: string | null;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const {
    data: trackInfo,
    isLoading,
    error,
  } = useQuery(['trackInfo', trackId!, 'magicTokenWip'], fetchTrackInfo, {
    enabled: !!trackId,
  });

  if (isLoading) return <div>Cargando...</div>;
  if (error instanceof Error)
    return <div>Estamos teniendo problemas, prueba más tarde</div>;

  return (
    <div>
      <h2>{trackInfo.title}</h2>
      <p>Artista: {trackInfo.artist.name}</p>
      <p>Álbum: {trackInfo.album.title}</p>
      <ReactPlayer url={trackInfo.preview} controls={true} playing={false} />
      <button onClick={onClose} />
    </div>
  );
};
