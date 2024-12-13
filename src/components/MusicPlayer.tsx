import React from 'react';
import ReactPlayer from 'react-player';
import { useTrackInfo } from '@/hooks/useTrackInfo';
export const MusicPlayer = ({
  trackId,
  onClose,
}: {
  trackId: string;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const { data: trackInfo, isLoading, error } = useTrackInfo(trackId);

  if (isLoading) return <div>Cargando...</div>;
  if (error instanceof Error)
    return <div>Estamos teniendo problemas, prueba más tarde</div>;

  if (!trackInfo)
    return <div>No se pudo obtener la información de la canción.</div>;

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
